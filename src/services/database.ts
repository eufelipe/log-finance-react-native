import {Database} from '@nozbe/watermelondb';
import SQLiteAdapter, {
  SQLiteAdapterOptions,
} from '@nozbe/watermelondb/adapters/sqlite';

import {schema, migrations, modelClasses, seeds} from 'database';
import {DATABASE_NAME} from 'database/schema';
import {isIos} from 'styles/mixins';

let database: Database;

export function getDatabase(): Database {
  if (!database) {
    const adapterConfig: SQLiteAdapterOptions = {
      dbName: DATABASE_NAME,
      schema,
      migrations,
      jsi: isIos,
    };

    const adapter = new SQLiteAdapter(adapterConfig);

    database = new Database({
      adapter,
      modelClasses,
    });
  }
  return database;
}

export function runSeeds(): void {
  seeds.run();
}

export default getDatabase;
