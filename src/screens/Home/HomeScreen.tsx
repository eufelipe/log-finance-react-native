import React from 'react';

import {Container, Content, Salutation} from './styles';
import {useTranslation} from 'react-i18next';

import {Header} from './components';
import {EntriesList} from 'components';

import {useEntry} from 'hooks/useEntry';

const HomeScreen = (): JSX.Element => {
  const {entries = []} = useEntry();
  const {t} = useTranslation('home');

  return (
    <Container>
      <Header />

      <Content>
        <Salutation>{t('today')}</Salutation>

        <EntriesList entries={entries} />
      </Content>
    </Container>
  );
};

export default HomeScreen;
