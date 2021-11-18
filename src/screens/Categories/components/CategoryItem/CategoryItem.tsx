import React from 'react';
import { useTranslation } from 'react-i18next';
import { CategoryIcon } from 'components';
import { ICategory } from 'interfaces';

import { Container, Title } from './styles';

interface Props {
  category: ICategory;
  onPressCategory: (category: ICategory) => void;
}

const CategoryItem = ({ category, onPressCategory }: Props): JSX.Element => {
  const { t } = useTranslation('categories');

  const categoryKey = category.icon;
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
