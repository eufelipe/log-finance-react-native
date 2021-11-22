import AsyncStorage from '@react-native-async-storage/async-storage';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-explicit-any
const setItem = async (key: string, value: any): Promise<void> => {
  if (!value) {
    return undefined;
  }

  return AsyncStorage.setItem(key, value);
};

const getItem = async (key: string): Promise<string | null> => {
  return AsyncStorage.getItem(key) ?? undefined;
};

const removeItem = (key: string): Promise<void> => {
  return AsyncStorage.removeItem(key);
};

const reset = async (): Promise<void> => {
  (await AsyncStorage.getAllKeys()).forEach(async key => {
    await AsyncStorage.removeItem(key);
  });
};

export default {
  setItem,
  getItem,
  removeItem,
  reset,
};
