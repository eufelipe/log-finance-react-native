import React from 'react';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import {CategoryIcon, Currency, SwipeRemoveButton} from 'components';
import {Category, Entry} from 'models';

import {
  Container,
  CategoryContainer,
  Description,
  Title,
  SubTitle,
  Value,
} from './styles';
import {useTranslation} from 'react-i18next';
import withObservables from '@nozbe/with-observables';

interface EntryItemProps {
  category?: Category;
  entry: Entry;
  onPressEntry: (entry: Entry) => void;
  onPressRemoveEntry: (entry: Entry) => void;
}

const EntryItem = ({
  category,
  entry,
  onPressEntry,
  onPressRemoveEntry,
}: EntryItemProps): JSX.Element => {
  const {t} = useTranslation('entry');

  const {description, value, type} = entry;

  const isExpense = type === 'expense';

  return (
    <Swipeable
      renderRightActions={() => (
        <SwipeRemoveButton onPressRemove={() => onPressRemoveEntry(entry)} />
      )}
    >
      <Container
        onPress={() => onPressEntry(entry)}
        testID="entry-item-button"
        accessible={true}
        accessibilityLabel={t('accessibility-button')}
        accessibilityHint={t('accessibility-button-hint')}
      >
        <CategoryContainer>
          <CategoryIcon name={category?.key} />
        </CategoryContainer>

        <Description>
          {description && <Title>{description}</Title>}
          {category?.description && <SubTitle>{category.description}</SubTitle>}
        </Description>

        <Currency
          value={value}
          render={text => <Value isExpense={isExpense}>{text}</Value>}
        />
      </Container>
    </Swipeable>
  );
};

const enhance = withObservables<EntryItemProps, unknown>(
  ['entry'],
  ({entry}: EntryItemProps) => ({
    category: entry.category.observe(),
  }),
);

export default enhance(EntryItem);
