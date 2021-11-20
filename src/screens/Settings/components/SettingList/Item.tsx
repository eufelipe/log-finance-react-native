import React from 'react';

import {Container, Content, Title, SubTitle, BaseIcon} from './styles';

export interface SettingItemProps {
  title: string;
  selected?: string;
  icon?: string;
  onPress: () => void;
}

const Item = ({
  title,
  selected,
  icon,
  onPress,
}: SettingItemProps): JSX.Element => {
  return (
    <Container>
      {icon && <BaseIcon name={icon} />}
      <Content>
        <Title>{title}</Title>
        <SubTitle>{selected}</SubTitle>
      </Content>
    </Container>
  );
};

export default Item;
