import React from 'react';

import {Container, Content, Title, Description, SettingIcon} from './styles';

const Header = (): JSX.Element => {
  return (
    <Container>
      <Content>
        <Title>R$ -109,90</Title>
        <Description>Balanço</Description>
      </Content>

      <SettingIcon />
    </Container>
  );
};

export default Header;
