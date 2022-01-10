import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  useCallback,
  useEffect,
} from 'react';

import IEntry, {EntryType} from 'interfaces/IEntry';
import {Category, Entry} from 'models';
import {EntryRepository} from 'repositories';

import {useCategory} from 'hooks/useCategory';
interface EntryProviderProps {
  children: React.ReactNode;
}
interface EntryContextData {
  saveEntry: () => void;
  removeEntry: (entry: Entry) => void;
  calculateCurrentBalance: (entries: Entry[]) => number;

  entry?: Entry;
  setEntry: (entry: Entry) => void;

  value?: number;
  setValue: (value: number) => void;

  description?: string;
  setDescription: (value: string) => void;

  category?: Category;
  setCategory: (value: Category) => void;

  dateAt?: Date;
  setDateAt: (value: Date) => void;

  entryType?: EntryType;
  setEntryType: (value: EntryType) => void;

  fillValuesFromEntry: (value: Entry) => void;
  cleanValues: () => void;
}

const entryTypeDefault = 'expense';

export const EntryContext = createContext<EntryContextData>(
  {} as EntryContextData,
);

export const EntryProvider = ({children}: EntryProviderProps): JSX.Element => {
  const [entry, setEntry] = useState<Entry>();
  const [value, setValue] = useState<number>(0);
  const [description, setDescription] = useState<string>();
  const [dateAt, setDateAt] = useState<Date>();
  const [category, setCategory] = useState<Category>();
  const [entryType, setEntryType] = useState<EntryType>(entryTypeDefault);

  const {categoryDefault} = useCategory();

  const cleanValues = useCallback((): void => {
    setValue(0);
    setDescription(undefined);
    setDateAt(undefined);
    setCategory(undefined);
    setEntryType(entryTypeDefault);
  }, []);

  const fillValuesFromEntry = useCallback((entry: Entry): void => {
    setEntry(entry);
    setValue(entry.value);
    setDescription(entry.description);
    setDateAt(entry.dateAt);
    setEntryType(entry.type);
  }, []);

  const saveEntry = useCallback(async () => {
    if (!category) return;
    const data: IEntry = {
      description,
      type: entryType,
      dateAt: dateAt ?? new Date(),
      value,
      category,
    };

    if (entry) {
      await EntryRepository.editEntry(entry, data);
    } else {
      await EntryRepository.addEntry(data);
    }

    cleanValues();
  }, [entry, entryType, category, description, value, dateAt, cleanValues]);

  const removeEntry = useCallback(
    async (entry: Entry) => await EntryRepository.removeEntry(entry),
    [],
  );

  const calculateCurrentBalance = useCallback((entries: Entry[]): number => {
    const sumValues = entries.reduce((previousEntry, currentEntry) => {
      let value = currentEntry.value;
      if (currentEntry.type === 'expense') {
        value = Math.abs(value) * -1;
      }
      return previousEntry + value;
    }, 0);

    return sumValues;
  }, []);

  useEffect(() => {
    if (categoryDefault && !category) {
      setCategory(categoryDefault);
    }
  }, [categoryDefault, category]);

  const values = useMemo(
    () => ({
      saveEntry,
      removeEntry,
      value,
      entry,
      setEntry,
      setValue,
      dateAt,
      category,
      setCategory,
      setDateAt,
      description,
      setDescription,
      entryType,
      setEntryType,
      fillValuesFromEntry,
      cleanValues,
      calculateCurrentBalance,
    }),
    [
      entry,
      value,
      description,
      dateAt,
      category,
      entryType,
      saveEntry,
      removeEntry,
      fillValuesFromEntry,
      cleanValues,
      calculateCurrentBalance,
    ],
  );

  return (
    <EntryContext.Provider value={values}>{children}</EntryContext.Provider>
  );
};

export const useEntry = (): EntryContextData => useContext(EntryContext);

export default EntryProvider;
