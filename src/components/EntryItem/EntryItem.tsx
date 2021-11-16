import React from 'react';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import {CategoryIcon, Currency, SwipeRemoveButton} from 'components';
import {IEntry} from 'interfaces';

import {
  Container,
  Category,
  Description,
  Title,
  SubTitle,
  Value,
} from './styles';
import {useTranslation} from 'react-i18next';

interface Props {
  entry: IEntry;
  onPressEntry: (entry: IEntry) => void;
  onPressRemoveEntry: (entry: IEntry) => void;
}

const EntryItem = ({
  entry,
  onPressEntry,
  onPressRemoveEntry,
}: Props): JSX.Element => {
  const {description, value, category, type} = entry;

  const {t} = useTranslation('entry');

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
        <Category>
          <CategoryIcon name={category.icon} />
        </Category>

        <Description>
          {description && <Title>{description}</Title>}
          <SubTitle>{category.description}</SubTitle>
        </Description>

        <Currency
          value={value}
          render={text => <Value isExpense={type === 'expense'}>{text}</Value>}
        />
      </Container>
    </Swipeable>
  );
};

export default EntryItem;
