import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {SettingsNavigationProp} from 'routes/StacksRoute';
import {useTranslation} from 'react-i18next';

import {
  Container,
  Content,
  Title,
  Description,
  SettingTouchable,
  SettingIcon,
} from './styles';

const Header = (): JSX.Element => {
  const navigation = useNavigation<SettingsNavigationProp>();
  const {t} = useTranslation('home');

  const handleSettings = () =>
    navigation.navigate('SettingsStack', {screen: 'Settings'});

  return (
    <Container>
      <Content>
        <Description>{t('balance')}</Description>
        <Title>R$ -109,90</Title>
      </Content>
      <SettingTouchable onPress={handleSettings}>
        <SettingIcon />
      </SettingTouchable>
    </Container>
  );
};

export default Header;
