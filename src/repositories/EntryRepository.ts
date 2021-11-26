import {Collection, Q} from '@nozbe/watermelondb';
import {Observable} from 'rxjs';

import {COLLECTIONS} from 'database';
import {Entry} from 'models';
import {IEntry} from 'interfaces';
import {getDatabase} from 'services/database';
import {endOfToday, endOfYesterday} from 'date-fns';

export const getEntryCollection = (): Collection<Entry> =>
  getDatabase().collections.get<Entry>(COLLECTIONS.ENTRIES);

export const getEntries = (): Observable<Entry[]> =>
  getEntryCollection().query().observe();

export const getEntriesCount = (): Promise<number> =>
  getEntryCollection().query().fetchCount();

// TODO: implemetar uma melhora na query
export const getBalance = (): Promise<Entry[]> =>
  getEntryCollection().query().fetch();

export const getTodayEntries = (): Observable<Entry[]> => {
  const today = endOfToday();
  const yesterday = endOfYesterday();

  return getEntryCollection()
    .query(Q.where('date_at', Q.between(yesterday.getTime(), today.getTime())))
    .observe();
};

export const getEntriesByPeriod = (
  start: Date,
  end: Date,
): Promise<Entry[]> => {
  return getEntryCollection()
    .query(Q.where('date_at', Q.between(start.getTime(), end.getTime())))
    .fetch();
};

const fill = (record: Entry, data: IEntry) => {
  const {description, type, value, category, dateAt} = data;
  record.description = description;
  record.type = type;
  record.value = value;
  record.category.set(category);
  record.dateAt = dateAt;
};

export const addEntry = async (data: IEntry): Promise<Entry> => {
  return getDatabase().write(async () => {
    return await getEntryCollection().create(record => {
      fill(record, data);
    });
  });
};

export const editEntry = async (entry: Entry, data: IEntry): Promise<Entry> => {
  return getDatabase().write(async () => {
    return entry.update(record => {
      fill(record, data);
    });
  });
};

export const removeEntry = async (entry: Entry): Promise<void> => {
  return getDatabase().write(async () => {
    await entry.markAsDeleted();
    await entry.destroyPermanently();
  });
};

export default {
  getEntryCollection,
  getEntriesCount,
  getEntries,
  getEntriesByPeriod,
  getTodayEntries,
  getBalance,
  addEntry,
  editEntry,
  removeEntry,
};
