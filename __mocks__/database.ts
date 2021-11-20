import { Database } from '@nozbe/watermelondb';
import LokiJSAdapter, { LokiAdapterOptions } from '@nozbe/watermelondb/adapters/lokijs'

import { schema, migrations, modelClasses } from 'database';

let database: Database;

export function getDatabase(): Database {
    if (!database) {
        const adapterConfig: LokiAdapterOptions = {
            schema,
            migrations,
            useWebWorker: false,
            useIncrementalIndexedDB: true,
            extraLokiOptions: {
                autosave: false
            }
        };

        const adapter = new LokiJSAdapter(adapterConfig);

        database = new Database({
            adapter,
            modelClasses,
        });
    }
    return database;
}

export function runSeeds(): void {
    jest.fn();
}

export default getDatabase;
