import React from 'react';

import {useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import {CategoriesNavigationProp} from 'routes/StacksRoute';

import {CategoryIcon, Row} from 'components';

import {Label, Title, Touchable} from './styles';
import {Category} from 'models';

interface CategoryPickProps {
  category?: Category;
  setCategory: (value: Category) => void;
}

const CategoryPick = ({
  category,
  setCategory,
}: CategoryPickProps): JSX.Element => {
  const navigation = useNavigation<CategoriesNavigationProp>();
  const {t} = useTranslation('categories');

  const handleCategories = () => {
    navigation.navigate('CategoriesStack', {
      screen: 'Categories',
      params: {setCategory},
    });
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

export default CategoryPick;
