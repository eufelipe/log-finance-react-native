import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {useTranslation} from 'react-i18next';
import BudgetList from './components/BudgetList/BudgetList';

import {AddBudgetNavigationProp} from 'routes/StacksRoute';
import {Container, Header, Title, Touchable, AddIcon} from './styles';

const BudgetScreen = (): JSX.Element => {
  const navigation = useNavigation<AddBudgetNavigationProp>();
  const {t} = useTranslation('budget');

  const addBudget = () => {
    navigation.navigate('AddBudgetStack', {
      screen: 'AddBudget',
    });
  };

  return (
    <Container>
      <Header>
        <Title>{t('title')}</Title>
        <Touchable onPress={addBudget}>
          <AddIcon />
        </Touchable>
      </Header>
      <BudgetList />
    </Container>
  );
};

export default BudgetScreen;
