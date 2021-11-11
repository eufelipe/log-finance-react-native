import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Button} from 'react-native';

import {Container, Content, Salutation} from './styles';
import {HomeScreenNavigationProp} from './Types';
import {useTranslation} from 'react-i18next';

import {Header} from './components';
import {EntriesList} from 'components';

import ENTRIES from '../../../__mocks__/entries.json';

const HomeScreen = (): JSX.Element => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const {t} = useTranslation('home');

  return (
    <Container>
      <Header />

      <Content>
        <Salutation>{t('today')}</Salutation>

        <EntriesList entries={ENTRIES} />

        <Button
          title="Abrir modal"
          onPress={() => navigation.navigate('Details')}
        />
      </Content>
    </Container>
  );
};

export default HomeScreen;
