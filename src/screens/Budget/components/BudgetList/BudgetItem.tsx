import React from 'react';
import withObservables from '@nozbe/with-observables';

import {CategoryIcon, Currency} from 'components';
import {Budget, Category} from 'models';
import {Card, CardBody, CardRow, Title, Value} from './styles';

interface BudgetItemProps {
  item: Budget;
  category?: Category;
}

const BudgetItem = ({item, category}: BudgetItemProps): JSX.Element => {
  const {description, value} = item;

  return (
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
  );
};

const enhance = withObservables<BudgetItemProps, unknown>(
  ['item'],
  ({item}: BudgetItemProps) => ({
    category: item.category.observe(),
  }),
);

export default enhance(BudgetItem);
