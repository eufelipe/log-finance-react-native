import React, {createContext, useContext, useState, useMemo} from 'react';

import {EntryType} from 'interfaces/IEntry';

type EntryProviderProps = {
  children: React.ReactNode;
};

type EntryContextData = {
  value?: number;
  setValue: (value: number) => void;

  description?: string;
  setDescription: (value: string) => void;

  date?: Date;
  setDate: (value: Date) => void;

  entryType?: EntryType;
  setEntryType: (value: EntryType) => void;
};

export const EntryContext = createContext({} as EntryContextData);

export const EntryProvider = ({children}: EntryProviderProps) => {
  const [value, setValue] = useState<number>(0);
  const [description, setDescription] = useState<string>();
  const [date, setDate] = useState<Date>();
  const [entryType, setEntryType] = useState<EntryType>('expense');

  const values = useMemo(
    () => ({
      value,
      setValue,
      date,
      setDate,
      description,
      setDescription,
      entryType,
      setEntryType,
    }),
    [value, description, date, entryType],
  );

  return (
    <EntryContext.Provider value={values}>{children}</EntryContext.Provider>
  );
};

export const useEntry = (): EntryContextData => useContext(EntryContext);

export default EntryProvider;
