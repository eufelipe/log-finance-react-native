import ICategory from './ICategory';

export type EntryType = 'expense' | 'earning';

export default interface IEntry {
  id: number;
  description: string;
  type: EntryType;
  value: number;
  date: Date;
  category: ICategory;
}
