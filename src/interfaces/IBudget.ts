import {Category} from 'models';

export default interface IBudget {
  description?: string;
  category: Category;
  value: number;
}
