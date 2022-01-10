import React from 'react';
import withObservables from '@nozbe/with-observables';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import {Budget, Category} from 'models';
import {CategoryIcon, Currency, SwipeRemoveButton} from 'components';
import {Card, CardBody, CardRow, Title, Value} from './styles';

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
  const {description, value} = item;

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
