import React from 'react';

import {useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import {CategoriesNavigationProp} from 'routes/StacksRoute';
import {useEntry} from 'hooks/useEntry';

import {CategoryIcon} from 'components';
import Row from '../Row';

import {Label, Title, Touchable} from './styles';

const EntryCategory = (): JSX.Element => {
  const navigation = useNavigation<CategoriesNavigationProp>();
  const {t} = useTranslation('categories');
  const {category} = useEntry();

  const handleCategories = () => {
    navigation.navigate('CategoriesStack');
  };

  return (
    <Row>
      <Label>{t('category')}</Label>
      <Touchable onPress={handleCategories}>
        <CategoryIcon contained name={category?.key} />
        <Title>{category?.key ? t(category.key) : t('category-default')}</Title>
      </Touchable>
    </Row>
  );
};

export default EntryCategory;
