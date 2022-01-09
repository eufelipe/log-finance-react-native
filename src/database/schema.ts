import {appSchema, tableSchema} from '@nozbe/watermelondb';

import COLLECTIONS from './collections';
import {VERSION_MIGRATION} from './migrations';

import {COLUMNS as EntryColumns} from 'models/Entry';
import {COLUMNS as CategoryColumns} from 'models/Category';
import {COLUMNS as BudgetColumns} from 'models/Budget';

export const DATABASE_NAME = 'LogFinanceDb';

export const dbScheme = appSchema({
  version: VERSION_MIGRATION,
  tables: [
    tableSchema({
      name: COLLECTIONS.ENTRIES,
      columns: EntryColumns,
    }),
    tableSchema({
      name: COLLECTIONS.CATEGORIES,
      columns: CategoryColumns,
    }),
    tableSchema({
      name: COLLECTIONS.BUDGETS,
      columns: BudgetColumns,
    }),
  ],
});

export default dbScheme;
