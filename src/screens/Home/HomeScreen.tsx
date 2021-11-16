import React from 'react';

import {Container, Content, Salutation} from './styles';
import {useTranslation} from 'react-i18next';

import {Header, ListEmpty} from './components';
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
        {!!entries.length && <EntriesList entries={entries} />}

        {!entries.length && <ListEmpty />}
      </Content>
    </Container>
  );
};

export default HomeScreen;
