import {EntryRepository} from 'repositories';
import {groupBy, map, sumBy} from 'lodash';
import {EntryType} from 'interfaces/IEntry';

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

export interface GetValuesByPeriod {
  entryType: EntryType;
  start: Date;
  end: Date;
}

const formatValuesForChart = (values: RawItem[]) => {
  const items = map(groupBy(values, 'category'), (item, idx) => {
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
  return items;
};

export const getTotalEntries = (): Promise<number> => {
  return EntryRepository.getEntriesCount();
};

export const getValuesByPeriod = async ({
  entryType = 'expense',
  start,
  end,
}: GetValuesByPeriod): Promise<ReportItem[]> => {
  const entries = await EntryRepository.getEntriesByPeriod(start, end);

  const expenseItems = entries.filter(({type}) => type === entryType);

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

  const values = formatValuesForChart(rawValues);

  return values;
};

export default {
  getTotalEntries,
  getValuesByPeriod,
};
