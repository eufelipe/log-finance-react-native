import React from 'react';
import withObservables from '@nozbe/with-observables';

import {Container, Content, Salutation} from './styles';
import {useTranslation} from 'react-i18next';

import {Header, ListEmpty} from './components';
import {EntriesList} from 'components';

import {Entry} from 'models';
import EntryRepository from 'repositories/EntryRepository';

interface HomeScreenProps {
  entries: Entry[];
}

const HomeScreen = ({entries = []}: HomeScreenProps): JSX.Element => {
  const {t} = useTranslation('home');

  return (
    <Container>
      <Header entries={entries} />
      <Content>
        <Salutation>{t('today')}</Salutation>
        {!!entries.length && <EntriesList entries={entries} />}

        {!entries.length && <ListEmpty />}
      </Content>
    </Container>
  );
};

const enhance = withObservables(['entries'], () => ({
  entries: EntryRepository.getTodayEntries(),
}));

export default enhance(HomeScreen);
