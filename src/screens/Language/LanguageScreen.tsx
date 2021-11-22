import React, {useCallback, useMemo} from 'react';
import {useNavigation} from '@react-navigation/native';

import {Container} from './styles';
import {useTranslation} from 'react-i18next';

import List, {ListItemProps} from 'components/List';
import {Toolbar} from 'components';

import {LANG_EN_US, LANG_PT_BR} from 'services/language';
import {sortBy} from 'lodash';

const LanguageScreen = (): JSX.Element => {
  const navigation = useNavigation();

  const {t, i18n} = useTranslation('settings');

  const changeLanguage = useCallback(
    (language: string) => {
      i18n.changeLanguage(language);
      navigation.goBack();
    },
    [i18n, navigation],
  );

  const items: ListItemProps[] = useMemo(() => {
    return [
      {
        id: 1,
        title: t(LANG_PT_BR),
        selected: LANG_PT_BR === i18n.language ? t('active') : undefined,
        icon: 'chevron-right',
        onPress: () => changeLanguage(LANG_PT_BR),
      },
      {
        id: 2,
        title: t(LANG_EN_US),
        selected: LANG_EN_US === i18n.language ? t('active') : undefined,
        icon: 'chevron-right',
        onPress: () => changeLanguage(LANG_EN_US),
      },
    ];
  }, [i18n.language, changeLanguage, t]);

  const menuItems = sortBy(items, 'selected');

  return (
    <Container>
      <Toolbar title={t('language')} hideSearch />
      <List items={menuItems} />
    </Container>
  );
};

export default LanguageScreen;
