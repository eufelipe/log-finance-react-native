import {ColumnSchema, Model} from '@nozbe/watermelondb';
import {field, text, date, relation} from '@nozbe/watermelondb/decorators';

import COLLECTIONS from 'database/collections';
import {EntryType} from 'interfaces/IEntry';
import Category from './Category';

export default class Entry extends Model {
  static table = COLLECTIONS.ENTRIES;

  @text('description') description?: string;
  @field('type') type!: EntryType;
  @field('value') value!: number;
  @date('date_at') dateAt!: Date;

  @relation(COLLECTIONS.CATEGORIES, 'category_id') category!: Category;
}

export const COLUMNS: ColumnSchema[] = [
  {name: 'description', type: 'string', isOptional: true},
  {name: 'type', type: 'string'},
  {name: 'value', type: 'number'},
  {name: 'date_at', type: 'number'},
  {name: 'category_id', type: 'string', isIndexed: true},
];
