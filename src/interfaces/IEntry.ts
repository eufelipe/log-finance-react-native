import ICategory from './ICategory';

type EntryType = 'expense' | 'earning';

export default interface IEntry {
  id: number;
  description: string;
  type: EntryType;
  value: number;
  category: ICategory;
}
