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
import {useEntry} from 'hooks/useEntry';
import {Currency} from 'components';

const Header = (): JSX.Element => {
  const navigation = useNavigation<SettingsNavigationProp>();
  const {t} = useTranslation('home');
  const {balance = 0} = useEntry();

  const handleSettings = () =>
    navigation.navigate('SettingsStack', {screen: 'Settings'});

  return (
    <Container>
      <Content>
        <Description>{t('balance')}</Description>

        <Currency value={balance} render={value => <Title>{value}</Title>} />
      </Content>
      <SettingTouchable onPress={handleSettings}>
        <SettingIcon />
      </SettingTouchable>
    </Container>
  );
};

export default Header;
