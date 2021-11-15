import React from 'react';

interface Props {
  title: string;
  disabled?: boolean;
  onPress: () => void;
}

import {Container, Title} from './styles';

const Button = ({title, onPress, disabled = false}: Props): JSX.Element => {
  return (
    <Container onPress={onPress} disabled={disabled}>
      <Title>{title}</Title>
    </Container>
  );
};

export default Button;
