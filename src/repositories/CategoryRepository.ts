import {Collection, Q} from '@nozbe/watermelondb';
import {Observable} from 'rxjs';
import {Category} from 'models';
import {getDatabase} from '../services/database';
import {COLLECTIONS} from 'database';

export const getCategoryCollection = (): Collection<Category> =>
  getDatabase().collections.get<Category>(COLLECTIONS.CATEGORIES);

export const getCategories = (): Observable<Category[]> =>
  getCategoryCollection().query().observe();

export const getDefaultCategory = (): Observable<Category[]> =>
  getCategoryCollection().query(Q.where('key', 'others')).observe();

export default {getCategoryCollection, getCategories, getDefaultCategory};
