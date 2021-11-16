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

  value?: number;
  setValue: (value: number) => void;

  description?: string;
  setDescription: (value: string) => void;

  category?: ICategory;
  setCategory: (value: ICategory) => void;

  date?: Date;
  setDate: (value: Date) => void;

  entryType?: EntryType;
  setEntryType: (value: EntryType) => void;
}

export const EntryContext = createContext<EntryContextData>(
  {} as EntryContextData,
);

export const EntryProvider = ({children}: EntryProviderProps): JSX.Element => {
  const [entries, setEntries] = useState<IEntry[]>([]);

  const [value, setValue] = useState<number>(0);
  const [description, setDescription] = useState<string>();
  const [date, setDate] = useState<Date>();
  const [category, setCategory] = useState<ICategory>();
  const [entryType, setEntryType] = useState<EntryType>('expense');

  const cleanEntry = useCallback(() => {
    setValue(0);
    setDescription(undefined);
    setDate(undefined);
    setEntryType('expense');
  }, []);

  const saveEntry = useCallback(() => {
    const entry: IEntry = {
      id: Math.random(),
      description,
      type: entryType,
      date: new Date(),
      value,
      category: {
        id: 1,
        description: 'Restaurante',
        icon: 'food',
      },
    };

    setEntries([...entries, entry]);

    cleanEntry();
  }, [entries, entryType, description, value, cleanEntry]);

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
      setValue,
      date,
      category,
      setCategory,
      setDate,
      description,
      setDescription,
      entryType,
      setEntryType,
    }),
    [
      entries,
      value,
      description,
      date,
      category,
      entryType,
      saveEntry,
      removeEntry,
    ],
  );

  return (
    <EntryContext.Provider value={values}>{children}</EntryContext.Provider>
  );
};

export const useEntry = (): EntryContextData => useContext(EntryContext);

export default EntryProvider;
