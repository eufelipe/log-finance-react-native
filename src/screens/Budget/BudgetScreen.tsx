import React from 'react';
import {useTranslation} from 'react-i18next';
import BudgetList from './components/BudgetList/BudgetList';

import {Container, Header, Title, Touchable, AddIcon} from './styles';

const BudgetScreen = (): JSX.Element => {
  const {t} = useTranslation('budget');

  return (
    <Container>
      <Header>
        <Title>{t('title')}</Title>
        <Touchable>
          <AddIcon />
        </Touchable>
      </Header>
      <BudgetList />
    </Container>
  );
};

export default BudgetScreen;
