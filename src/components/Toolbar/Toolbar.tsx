import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';

import {Dismiss} from 'components';
import {Container, Search, Title, Touchable, SearchIcon} from './styles';

interface Props {
  query?: string;
  hideSearch?: boolean;
  title?: string;
  onChangeText?: (query: string) => void;
}

const Toolbar = ({
  title,
  hideSearch = false,
  query,
  onChangeText,
}: Props): JSX.Element => {
  const {t} = useTranslation('global');
  const [showSearch, setShowSearch] = useState(false);

  return (
    <Container>
      <Dismiss />

      {title && !showSearch && <Title>{title}</Title>}

      {!hideSearch && onChangeText && (
        <>
          {(!title || showSearch) && (
            <Search
              autoCapitalize="none"
              autoCorrect={false}
              clearButtonMode="always"
              placeholder={t('searchbar-placeholder')}
              value={query}
              onChangeText={term => onChangeText(term)}
            />
          )}

          {(title || showSearch) && (
            <Touchable onPress={() => setShowSearch(prev => !prev)}>
              <SearchIcon name={showSearch ? 'clear' : 'search'} />
            </Touchable>
          )}
        </>
      )}
    </Container>
  );
};

export default Toolbar;
