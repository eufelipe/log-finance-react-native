import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Button} from 'react-native';

import {Container, Title} from './styles';
import {HomeScreenNavigationProp} from './Types';
import {useTranslation} from 'react-i18next';

import {Header} from './components';
import CategoryIcon from 'components/CategoryIcon';

const HomeScreen = (): JSX.Element => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const {t} = useTranslation('home');

  return (
    <Container>
      <Header />
      <Title>{t('welcome')}</Title>

      <CategoryIcon name="food" />

      <Button
        title="Abrir modal"
        onPress={() => navigation.navigate('Details')}
      />
    </Container>
  );
};

export default HomeScreen;
