import React from 'react';
import {ListItemProps} from './List';

import {Container, Content, Title, SubTitle, BaseIcon} from './styles';

const Item = ({title, selected, icon, onPress}: ListItemProps): JSX.Element => {
  return (
    <Container onPress={onPress}>
      {icon && <BaseIcon name={icon} />}
      <Content>
        <Title>{title}</Title>
        <SubTitle>{selected}</SubTitle>
      </Content>
    </Container>
  );
};

export default Item;
