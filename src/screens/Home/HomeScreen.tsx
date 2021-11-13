import React from 'react';

import {Container, Content, Salutation} from './styles';
import {useTranslation} from 'react-i18next';

import {Header} from './components';
import {EntriesList} from 'components';

import ENTRIES from '../../../__mocks__/entries.json';

const HomeScreen = (): JSX.Element => {
  const {t} = useTranslation('home');

  return (
    <Container>
      <Header />

      <Content>
        <Salutation>{t('today')}</Salutation>

        <EntriesList entries={ENTRIES} />
      </Content>
    </Container>
  );
};

export default HomeScreen;
