import {ColumnSchema, Model, Relation} from '@nozbe/watermelondb';
import {
  field,
  text,
  relation,
  readonly,
  date,
} from '@nozbe/watermelondb/decorators';

import COLLECTIONS from 'database/collections';
import {Category} from 'models';

export default class Budget extends Model {
  static table = COLLECTIONS.BUDGETS;

  @field('value') value!: number;
  @text('description') description!: string;

  @relation(COLLECTIONS.CATEGORIES, 'category_id')
  category!: Relation<Category>;

  @readonly
  @date('created_at')
  createdAt!: Date;
}

export const COLUMNS: ColumnSchema[] = [
  {name: 'description', type: 'string', isOptional: true},
  {name: 'value', type: 'number'},
  {name: 'category_id', type: 'string', isIndexed: true},
  {name: 'created_at', type: 'number'},
];
