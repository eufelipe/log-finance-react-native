import RNFS from 'react-native-fs';

import {getDatabase} from 'services/database';

import {getCategoryCollection} from 'repositories/CategoryRepository';
import CATEGORIES from './categories.json';

export const run = async (): Promise<void> => {
  const path = RNFS.DocumentDirectoryPath + '/seed.json';

  const alreadyCreated = await RNFS.exists(path);
  if (alreadyCreated) return;

  await getDatabase().write(() => getDatabase().unsafeResetDatabase());

  await getDatabase().write(async () => {
    const records = CATEGORIES.map(({description, key, color}) => {
      return getCategoryCollection().prepareCreate(record => {
        record.description = description;
        record.key = key;
        record.color = color;
      });
    });

    await getDatabase().batch(...records);

    const datetime = new Date().toISOString();
    await RNFS.writeFile(path, `{"datetime": "${datetime}"}`);
  });
};

export default {run};
