import React from 'react';
import {useNavigation} from '@react-navigation/core';

import {Container, DismissIcon} from './styles';

const Dismiss = (): JSX.Element => {
  const {goBack} = useNavigation();
  return (
    <Container onPress={goBack}>
      <DismissIcon />
    </Container>
  );
};

export default Dismiss;
