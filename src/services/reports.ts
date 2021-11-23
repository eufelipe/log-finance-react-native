import {EntryRepository} from 'repositories';
import {groupBy, map, sumBy} from 'lodash';

export interface ReportItem {
  id: string;
  color?: string;
  text?: string;
  sumed?: number;
  value: number;
}

export interface RawItem {
  color?: string;
  category?: string;
  value: number;
}

export const getValues = async (): Promise<ReportItem[]> => {
  const entries = await EntryRepository.getTodayEntriesFetch();

  const expenseItems = entries.filter(({type}) => type === 'expense');

  const rawValues: RawItem[] = [];

  for (const key in expenseItems) {
    if (Object.prototype.hasOwnProperty.call(expenseItems, key)) {
      const entry = expenseItems[key];

      const category = await entry.category.fetch();

      const item = {
        value: entry.value,
        color: category?.color,
        category: category?.description,
      };

      rawValues.push(item);
    }
  }

  const values = map(groupBy(rawValues, 'category'), (item, idx) => {
    const [value] = item;
    const output: ReportItem = {
      id: idx,
      color: value?.color,
      text: `${value.category}`,
      sumed: item.length,
      value: sumBy(item, 'value'),
    };
    return output;
  });

  return values;
};

export default {
  getValues,
};
