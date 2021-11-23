import {Collection, Q} from '@nozbe/watermelondb';
import {Observable} from 'rxjs';

import {COLLECTIONS} from 'database';
import {Entry} from 'models';
import {IEntry} from 'interfaces';
import {getDatabase} from 'services/database';
import {getDateToday} from 'utils/dates';

export const getEntryCollection = (): Collection<Entry> =>
  getDatabase().collections.get<Entry>(COLLECTIONS.ENTRIES);

export const getEntries = (): Observable<Entry[]> =>
  getEntryCollection().query().observe();

export const getBalance = (): Promise<Entry[]> =>
  getEntryCollection().query().fetch();

export const getTodayEntries = (): Observable<Entry[]> => {
  const today = getDateToday();
  return getEntryCollection()
    .query(Q.where('date', Q.oneOf([today])))
    .observe();
};

export const getTodayEntriesFetch = (): Promise<Entry[]> => {
  const today = getDateToday();
  return getEntryCollection()
    .query(Q.where('date', Q.oneOf([today])))
    .fetch();
};

const fill = (record: Entry, data: IEntry) => {
  const {description, type, value, category, date} = data;
  record.description = description;
  record.type = type;
  record.value = value;
  record.category.set(category);
  record.date = date;
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
  getEntries,
  getTodayEntriesFetch,
  getTodayEntries,
  getBalance,
  addEntry,
  editEntry,
  removeEntry,
};
