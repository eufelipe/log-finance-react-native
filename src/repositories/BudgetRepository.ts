import {Collection} from '@nozbe/watermelondb';
import {Observable} from 'rxjs';
import {Budget} from 'models';
import {getDatabase} from 'services/database';
import {COLLECTIONS} from 'database';
import {IBudget} from 'interfaces';

const getBudgetCollection = (): Collection<Budget> =>
  getDatabase().collections.get<Budget>(COLLECTIONS.BUDGETS);

export const getBudgetsObserve = (): Observable<Budget[]> =>
  getBudgetCollection().query().observe();

const fill = (record: Budget, data: IBudget) => {
  const {description, value, category} = data;
  if (description) record.description = description;
  record.value = value;
  record.category.set(category);
};

export const addBudget = async (data: IBudget): Promise<Budget> => {
  return getDatabase().write(async () => {
    return getBudgetCollection().create(record => {
      fill(record, data);
    });
  });
};

export const updateBudget = async (
  budget: Budget,
  data: IBudget,
): Promise<Budget> => {
  return getDatabase().write(async () => {
    return budget.update(record => {
      fill(record, data);
    });
  });
};

export const removeBudget = async (budget: Budget): Promise<void> => {
  return getDatabase().write(async () => {
    await budget.destroyPermanently();
  });
};

export default {getBudgetsObserve, addBudget, updateBudget, removeBudget};
