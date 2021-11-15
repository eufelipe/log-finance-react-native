import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Button} from 'react-native';

import {Container, Title} from './styles';
import {CategoryList} from './components';

const CategoriesScreen = (): JSX.Element => {
  const navigation = useNavigation();

  return (
    <Container>
      <Title>Categories</Title>
      <Button title="Voltar" onPress={() => navigation.goBack()} />

      <CategoryList />
    </Container>
  );
};

export default CategoriesScreen;
