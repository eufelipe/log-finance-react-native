import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Button} from 'react-native';

import {Container, Title} from './styles';

const AddEntryScreen = (): JSX.Element => {
  const navigation = useNavigation();

  return (
    <Container>
      <Title>AddEntry</Title>
      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </Container>
  );
};

export default AddEntryScreen;
