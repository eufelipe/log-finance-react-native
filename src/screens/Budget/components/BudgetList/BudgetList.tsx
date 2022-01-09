import React, {useCallback} from 'react';
import withObservables from '@nozbe/with-observables';

import {useBudgetContext} from 'contexts/BudgetContext';
import BudgetItem from './BudgetItem';

import {List} from './styles';
import {Budget} from 'models';
import BudgetRepository from 'repositories/BudgetRepository';

interface BudgetListProps {
  budgets: Budget[];
}

const BudgetList = ({budgets}: BudgetListProps): JSX.Element => {
  const {removeBudget} = useBudgetContext();

  const listKeyExtractor = useCallback(item => item.id, []);
  const renderItem = useCallback(
    ({item}) => <BudgetItem removeBudget={removeBudget} item={item} />,
    [removeBudget],
  );

  return (
    <List
      testID="budget-list"
      data={budgets}
      renderItem={renderItem}
      keyExtractor={listKeyExtractor}
    />
  );
};

const enhance = withObservables([], () => ({
  budgets: BudgetRepository.getBudgetsObserve(),
}));

export default enhance(BudgetList);
