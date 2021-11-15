import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {
  Container,
  Content,
  Title,
  Description,
  SettingTouchable,
  SettingIcon,
} from './styles';

import {StackNavigationProp} from '@react-navigation/stack';
import {CompositeNavigationProp} from '@react-navigation/core';

import {RootStackParamList} from 'routes';

export type HeaderNavigationProp = CompositeNavigationProp<
  StackNavigationProp<RootStackParamList, 'SettingsStack'>,
  StackNavigationProp<RootStackParamList>
>;

const Header = (): JSX.Element => {
  const navigation = useNavigation<HeaderNavigationProp>();

  const handleSettings = () =>
    navigation.navigate('SettingsStack', {screen: 'Settings'});

  return (
    <Container>
      <Content>
        <Description>Balanço</Description>
        <Title>R$ -109,90</Title>
      </Content>
      <SettingTouchable onPress={handleSettings}>
        <SettingIcon />
      </SettingTouchable>
    </Container>
  );
};

export default Header;
