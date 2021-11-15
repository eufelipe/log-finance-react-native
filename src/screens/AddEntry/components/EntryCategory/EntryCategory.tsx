import {CategoryIcon} from 'components';
import React from 'react';
import {useTranslation} from 'react-i18next';

import Row from '../Row';

import {Label, Title, Touchable} from './styles';

const EntryCategory = (): JSX.Element => {
  const {t} = useTranslation('add');

  return (
    <Row>
      <Label>{t('category')}</Label>
      <Touchable>
        <CategoryIcon contained />
        <Title>{t('category-default')}</Title>
      </Touchable>
    </Row>
  );
};

export default EntryCategory;
