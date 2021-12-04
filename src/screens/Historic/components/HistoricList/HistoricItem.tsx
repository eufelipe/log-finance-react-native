import React from 'react';
import withObservables from '@nozbe/with-observables';
import {CategoryIcon, Currency} from 'components';
import {Category, Entry} from 'models';

import {getTimeFriendly} from 'utils/dates';
import {
  Container,
  Content,
  CategoryContainer,
  ValueContainer,
  Value,
  Title,
  Time,
  Line,
} from './styles';

interface HistoricItemProps {
  entry: Entry;
  category?: Category;
}

const HistoricItem = ({entry, category}: HistoricItemProps): JSX.Element => {
  const {description, value, type} = entry;
  const isExpense = type === 'expense';

  return (
    <Container>
      {category && (
        <>
          <CategoryContainer>
            <Line />
            <CategoryIcon name={category.key} contained />
          </CategoryContainer>
        </>
      )}

      <Content>
        {description && <Title>{description}</Title>}
        <Title>{category?.description}</Title>
        <Time>{getTimeFriendly(entry?.dateAt)}</Time>
      </Content>

      <ValueContainer>
        <Currency
          value={value}
          render={text => <Value isExpense={isExpense}>{text}</Value>}
        />
      </ValueContainer>
    </Container>
  );
};

const enhance = withObservables<HistoricItemProps, unknown>(
  ['entry'],
  ({entry}: HistoricItemProps) => ({
    category: entry.category.observe(),
  }),
);

export default enhance(HistoricItem);
