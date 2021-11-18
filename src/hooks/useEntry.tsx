import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  useCallback,
} from 'react';

import IEntry, {EntryType} from 'interfaces/IEntry';
import {ICategory} from 'interfaces';

interface EntryProviderProps {
  children: React.ReactNode;
}

interface EntryContextData {
  entries?: IEntry[];
  saveEntry: () => void;
  removeEntry: (entry: IEntry) => void;

  entry?: IEntry;
  setEntry: (entry: IEntry) => void;

  value?: number;
  setValue: (value: number) => number;

  description?: string;
  setDescription: (value: string) => string;

  category?: ICategory;
  setCategory: (value: ICategory) => ICategory;

  date?: Date;
  setDate: (value: Date) => Date;

  entryType?: EntryType;
  setEntryType: (value: EntryType) => EntryType;

  fillValuesFromEntry: (value: IEntry) => void;
  cleanValues: () => void;
}

const entryTypeDefault = 'expense';

const categoryDefault: ICategory = {
  id: 12,
  description: 'Outros',
  icon: 'others',
};

export const EntryContext = createContext<EntryContextData>(
  {} as EntryContextData,
);

export const EntryProvider = ({children}: EntryProviderProps): JSX.Element => {
  const [entries, setEntries] = useState<IEntry[]>([]);
  const [entry, setEntry] = useState<IEntry>();

  const [value, setValue] = useState<number>(0);
  const [description, setDescription] = useState<string>();
  const [date, setDate] = useState<Date>();
  const [category, setCategory] = useState<ICategory>(categoryDefault);
  const [entryType, setEntryType] = useState<EntryType>(entryTypeDefault);

  const cleanValues = useCallback((): void => {
    setValue(0);
    setDescription(undefined);
    setDate(undefined);
    setCategory(categoryDefault);
    setEntryType(entryTypeDefault);
  }, []);

  const fillValuesFromEntry = useCallback((entry: IEntry): void => {
    setEntry(entry);
    setValue(entry.value);
    setDescription(entry.description);
    setDate(entry.date);
    setEntryType(entry.type);
  }, []);

  const saveEntry = useCallback(() => {
    const entry: IEntry = {
      id: Math.random(),
      description,
      type: entryType,
      date: new Date(),
      value,
      category,
    };

    setEntries([...entries, entry]);

    cleanValues();
  }, [entries, entryType, category, description, value, cleanValues]);

  const removeEntry = useCallback(
    (entry: IEntry) => {
      setEntries(entries.filter(item => item.id !== entry.id));
    },
    [entries],
  );

  const values = useMemo(
    () => ({
      entries,
      saveEntry,
      removeEntry,
      value,
      entry,
      setEntry,
      setValue,
      date,
      category,
      setCategory,
      setDate,
      description,
      setDescription,
      entryType,
      setEntryType,
      fillValuesFromEntry,
      cleanValues,
    }),
    [
      entries,
      entry,
      value,
      description,
      date,
      category,
      entryType,
      saveEntry,
      removeEntry,
      fillValuesFromEntry,
      cleanValues,
    ],
  );

  return (
    <EntryContext.Provider value={values}>{children}</EntryContext.Provider>
  );
};

export const useEntry = (): EntryContextData => useContext(EntryContext);

export default EntryProvider;
