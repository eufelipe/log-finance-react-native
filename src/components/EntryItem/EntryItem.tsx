import React from 'react';

import {CategoryIcon, Currency} from 'components';
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
}

const EntryItem = ({entry, onPressEntry}: Props): JSX.Element => {
  const {description, value, category, type} = entry;

  const {t} = useTranslation('entry');

  return (
    <Container
      onPress={() => onPressEntry(entry)}
      testID="entry-item-button"
      accessible={true}
      accessibilityLabel={t('accessibility-button')}
      accessibilityHint={t('accessibility-button-hint')}>
      <Category>
        <CategoryIcon name={category.icon} />
      </Category>

      <Description>
        <Title>{description}</Title>
        <SubTitle>{category.description}</SubTitle>
      </Description>

      <Currency
        value={value}
        render={text => <Value isExpense={type === 'expense'}>{text}</Value>}
      />
    </Container>
  );
};

export default EntryItem;
