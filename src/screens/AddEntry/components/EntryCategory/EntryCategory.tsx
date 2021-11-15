import React from 'react';

import {useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import {CategoriesNavigationProp} from 'routes/StacksRoute';

import {CategoryIcon} from 'components';
import Row from '../Row';

import {Label, Title, Touchable} from './styles';

const EntryCategory = (): JSX.Element => {
  const navigation = useNavigation<CategoriesNavigationProp>();

  const {t} = useTranslation('add');

  const handleCategories = () => {
    navigation.navigate('CategoriesStack');
  };

  return (
    <Row>
      <Label>{t('category')}</Label>
      <Touchable onPress={handleCategories}>
        <CategoryIcon contained />
        <Title>{t('category-default')}</Title>
      </Touchable>
    </Row>
  );
};

export default EntryCategory;
