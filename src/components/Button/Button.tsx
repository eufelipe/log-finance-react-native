import React from 'react';

interface Props {
  title: string;
  onPress: () => void;
}

import {Container, Title} from './styles';

const Button = ({title, onPress}: Props): JSX.Element => {
  return (
    <Container onPress={onPress}>
      <Title>{title}</Title>
    </Container>
  );
};

export default Button;
