import React from 'react';
import {useTranslation} from 'react-i18next';
import {CategoryIcon} from 'components';
import {ICategory} from 'interfaces';

import {Container,Title} from './styles';

interface Props {
  category: ICategory;
  onPressCategory: (category: ICategory) => void;
}

const CategoryItem = ({category, onPressCategory}: Props): JSX.Element => {
  const {t} = useTranslation('categories');
  return (
    <Container
      onPress={() => onPressCategory(category)}
      testID="category-item-button"
      accessible={true}
      accessibilityLabel={`${t('accessibility-button-label')} ${
        category.description
      }`}
      accessibilityHint={`${t('accessibility-button-hint')} ${
        category.description
      }`}
    >
      <CategoryIcon name={category.icon} contained />
      <Title>{category.description}</Title>
    </Container>
  );
};

export default CategoryItem;
