import React from 'react';
import {useTranslation} from 'react-i18next';
import {CategoryIcon} from 'components';

import {Container, Title} from './styles';
import {Category} from 'models';

interface Props {
  category: Category;
  onPressCategory: (category: Category) => void;
}

const CategoryItem = ({category, onPressCategory}: Props): JSX.Element => {
  const {t} = useTranslation('categories');

  const categoryKey = category.key;
  return (
    <Container
      onPress={() => onPressCategory(category)}
      testID="category-item-button"
      accessible={true}
      accessibilityLabel={`${t('accessibility-button-label')} ${t(
        categoryKey,
      )}`}
      accessibilityHint={`${t('accessibility-button-hint')} ${t(categoryKey)}`}
    >
      <CategoryIcon name={categoryKey} contained />
      <Title>{t(categoryKey)}</Title>
    </Container>
  );
};

export default CategoryItem;
