import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  useCallback,
} from 'react';

import {Budget, Category} from 'models';

import BudgetRepository from 'repositories/BudgetRepository';
import {IBudget} from 'interfaces';

interface BudgetProviderProps {
  children: React.ReactNode;
}

interface SaveBudgetProps {
  value: number;
  category: Category;
  description?: string;
}

interface BudgetContextData {
  error?: string;
  loading: boolean;
  saveBudget: ({value, category, description}: SaveBudgetProps) => void;
  removeBudget: (budget: Budget) => Promise<void>;
}

export const BudgetContext = createContext<BudgetContextData>(
  {} as BudgetContextData,
);

export const BudgetProvider = ({
  children,
}: BudgetProviderProps): JSX.Element => {
  const [error, setError] = useState<string>();
  const [loading, setLoader] = useState(false);

  const clearState = () => {
    setError(undefined);
    setLoader(false);
  };

  const saveBudget = useCallback(
    async ({value, category, description}: SaveBudgetProps) => {
      clearState();

      const data: IBudget = {
        description,
        value,
        category,
      };

      try {
        const budget = await BudgetRepository.addBudget(data);
        return budget;
      } catch (error) {
        setError('error');
      } finally {
        setLoader(false);
      }
    },
    [],
  );

  const removeBudget = useCallback(async (budget: Budget) => {
    await BudgetRepository.removeBudget(budget);
  }, []);

  const value = useMemo(
    () => ({
      error,
      loading,
      saveBudget,
      removeBudget,
    }),
    [error, loading, removeBudget, saveBudget],
  );

  return (
    <BudgetContext.Provider value={value}>{children}</BudgetContext.Provider>
  );
};

export const useBudgetContext = (): BudgetContextData =>
  useContext(BudgetContext);

export default BudgetProvider;
