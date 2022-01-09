import React from 'react';

import {Container, Content, Icon} from './styles';

interface Props {
  icon?: string;
  children?: React.ReactNode;
}
const Row = ({icon, children}: Props): JSX.Element => {
  return (
    <Container>
      {!!icon && <Icon name={icon} />}
      <Content>{children}</Content>
    </Container>
  );
};

export default Row;
