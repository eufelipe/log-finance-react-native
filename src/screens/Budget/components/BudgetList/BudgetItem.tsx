import React, {useCallback, useEffect, useState} from 'react';
import withObservables from '@nozbe/with-observables';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {useFocusEffect} from '@react-navigation/native';

import {Budget, Category} from 'models';
import {
  CategoryIcon,
  Currency,
  ProgressBar,
  SwipeRemoveButton,
} from 'components';
import {Card, CardBody, CardRow, Title, Value} from './styles';
import {EntryRepository} from 'repositories';

interface BudgetItemProps {
  item: Budget;
  category?: Category;
  removeBudget: (budget: Budget) => Promise<void>;
}

const BudgetItem = ({
  item,
  category,
  removeBudget,
}: BudgetItemProps): JSX.Element => {
  const [totalEntries, setTotalEntries] = useState(0);

  const {description, value} = item;

  const loadPercentBudget = useCallback(async () => {
    if (!category?.id) return;

    const entries = await EntryRepository.getEntriesByPeriodAndCategory(
      category.id,
    );

    const obtained = entries.reduce(
      (previousValue, currentValue) =>
        (previousValue = previousValue + currentValue.value),
      0,
    );

    const total = item.value;

    const percent = (obtained * 100) / total;
 

    setTotalEntries(percent);
  }, []);

  useFocusEffect(
    useCallback(() => {
      loadPercentBudget();
    }, [loadPercentBudget]),
  );

  return (
    <Swipeable
      renderRightActions={() => (
        <SwipeRemoveButton onPressRemove={() => removeBudget(item)} />
      )}
    >
      <Card color={category?.color}>
        <CardBody>
          <CardRow>
            <CategoryIcon contained name={category?.key} />
          </CardRow>

          <CardRow>
            <Title>{description}</Title>
            <Currency value={value} render={text => <Value>{text}</Value>} />
          </CardRow>
        </CardBody>
        <ProgressBar percent={totalEntries} color={category?.color} />
      </Card>
    </Swipeable>
  );
};

const enhance = withObservables<BudgetItemProps, unknown>(
  ['item'],
  ({item}: BudgetItemProps) => ({
    category: item.category.observe(),
  }),
);

export default enhance(BudgetItem);
