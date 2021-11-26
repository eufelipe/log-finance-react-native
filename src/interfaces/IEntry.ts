import {Category} from 'models';

export type EntryType = 'expense' | 'earning';
export default interface IEntry {
  description?: string;
  type: EntryType;
  value: number;
  dateAt: Date;
  category: Category;
}
