import {ColumnSchema, Model} from '@nozbe/watermelondb';
import {field, text} from '@nozbe/watermelondb/decorators';

import COLLECTIONS from 'database/collections';

export default class Category extends Model {
  static table = COLLECTIONS.CATEGORIES;

  @text('description') description!: string;
  @field('key') key!: string;

  @field('color') color!: string;
}

export const COLUMNS: ColumnSchema[] = [
  {name: 'description', type: 'string'},
  {name: 'key', type: 'string'},
  {name: 'color', type: 'string'},
];
