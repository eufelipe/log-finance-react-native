import React from 'react';

interface Props {
  title: string;
  disabled?: boolean;
  inverse?: boolean;
  onPress: () => void;
}

import {Container, Title} from './styles';

const Button = ({
  title,
  onPress,
  disabled = false,
  inverse = false,
}: Props): JSX.Element => {
  return (
    <Container onPress={onPress} disabled={disabled} inverse={inverse}>
      <Title inverse={inverse}>{title}</Title>
    </Container>
  );
};

export default Button;
