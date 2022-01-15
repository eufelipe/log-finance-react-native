import React, {useCallback} from 'react';
import withObservables from '@nozbe/with-observables';

import {useBudgetContext} from 'contexts/BudgetContext';

import {Budget} from 'models';
import {BudgetRepository} from 'repositories';

import BudgetItem from './BudgetItem';
import ListEmpty from '../ListEmpty';
import {Container, List} from './styles';

interface BudgetListProps {
  budgets: Budget[];
}

const BudgetList = ({budgets = []}: BudgetListProps): JSX.Element => {
  const {removeBudget} = useBudgetContext();

  const listKeyExtractor = useCallback(item => item.id, []);
  const renderItem = useCallback(
    ({item}) => <BudgetItem removeBudget={removeBudget} item={item} />,
    [removeBudget],
  );

  return (
    <Container>
      {!budgets.length && <ListEmpty />}

      <List
        testID="budget-list"
        data={budgets}
        renderItem={renderItem}
        keyExtractor={listKeyExtractor}
      />
    </Container>
  );
};

const enhance = withObservables([], () => ({
  budgets: BudgetRepository.getBudgetsObserve(),
}));

export default enhance(BudgetList);
