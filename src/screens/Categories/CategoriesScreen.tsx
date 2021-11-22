import React from 'react';

import {Container} from './styles';
import {CategoryList} from './components';
import {Category} from 'models';

interface CategoriesScreenProps {
  categories?: Category[];
}

const CategoriesScreen = ({categories}: CategoriesScreenProps): JSX.Element => {
  return (
    <Container>
      <CategoryList categories={categories} />
    </Container>
  );
};

export default CategoriesScreen;
