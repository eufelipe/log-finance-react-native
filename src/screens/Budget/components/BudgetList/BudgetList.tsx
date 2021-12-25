import {useCategory} from 'hooks';
import {Budget} from 'models';
import React, {useCallback, useEffect, useState} from 'react';
import BudgetItem from './BudgetItem';

import {List} from './styles';

interface BudgetListProps {}

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    description: 'First Item',
    value: 1000,
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    description: 'Second Item',
    value: 1200,
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    description: 'Third Item',
    value: 500,
  },
];

const BudgetList = ({}: BudgetListProps): JSX.Element => {
  const [budgets, setBudgets] = useState<Budget[]>([]);

  const {categoryDefault} = useCategory();

  const listKeyExtractor = useCallback(item => item.id, []);
  const renderItem = useCallback(({item}) => <BudgetItem item={item} />, []);

  const loadBudget = async () => {
    const items: Budget[] = DATA.map(e => ({
      ...e,
      category: categoryDefault,
    }));

    setBudgets(items);
  };

  useEffect(() => {
    loadBudget();
  }, []);

  return (
    <List
      testID="budget-list"
      data={budgets}
      renderItem={renderItem}
      keyExtractor={listKeyExtractor}
    />
  );
};

export default BudgetList;
