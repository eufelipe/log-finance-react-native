import React from 'react';
import {useTranslation} from 'react-i18next';
import {CategoryIcon} from 'components';
import {ICategory} from 'interfaces';

import {Container, Title} from './styles';

interface Props {
  category: ICategory;
  onPressCategory: (category: ICategory) => void;
}

const CategoryItem = ({category, onPressCategory}: Props): JSX.Element => {
  const {t} = useTranslation('categories');

  const caategoryKey = category.icon;
  return (
    <Container
      onPress={() => onPressCategory(category)}
      testID="category-item-button"
      accessible={true}
      accessibilityLabel={`${t('accessibility-button-label')} ${t(
        caategoryKey,
      )}`}
      accessibilityHint={`${t('accessibility-button-hint')} ${t(caategoryKey)}`}
    >
      <CategoryIcon name={caategoryKey} contained />
      <Title>{t(caategoryKey)}</Title>
    </Container>
  );
};

export default CategoryItem;
