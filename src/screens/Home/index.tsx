import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Button} from 'react-native';

import {Container, Title} from './styles';
import {HomeScreenNavigationProp} from './Types';

const HomeScreen = (): JSX.Element => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <Container>
      <Title>Home</Title>
      <Button
        title="Abrir modal"
        onPress={() => navigation.navigate('Details')}
      />
    </Container>
  );
};

export default HomeScreen;
