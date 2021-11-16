import React from 'react';
import {useTranslation} from 'react-i18next';

import {Dismiss} from 'components';
import {Container, SearchBar} from './styles';

interface Props {
  query?: string;
  onChangeText: (query: string) => void;
}

const HeaderCategories = ({query, onChangeText}: Props): JSX.Element => {
  const {t} = useTranslation('categories');

  return (
    <Container>
      <Dismiss />

      <SearchBar
        autoCapitalize="none"
        autoCorrect={false}
        clearButtonMode="always"
        placeholder={t('searchbar-placeholder')}
        value={query}
        onChangeText={term => onChangeText(term)}
      />
    </Container>
  );
};

export default HeaderCategories;
