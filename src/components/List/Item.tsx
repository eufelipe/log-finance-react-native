import React from 'react';
import {ListItemProps} from './List';

import {
  Container,
  Content,
  Description,
  Title,
  Selected,
  SubTitle,
  BaseIcon,
} from './styles';

const Item = ({
  title,
  subtitle,
  selected,
  icon,
  onPress,
}: ListItemProps): JSX.Element => {
  return (
    <Container onPress={onPress}>
      {icon && <BaseIcon name={icon} />}
      <Content>
        <Description>
          <Title>{title}</Title>
          {subtitle && <SubTitle>{subtitle}</SubTitle>}
        </Description>
        <Selected>{selected}</Selected>
      </Content>
    </Container>
  );
};

export default Item;
