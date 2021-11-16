import React from 'react';

import {Container} from './styles';
import {CategoryList} from './components';

const CategoriesScreen = (): JSX.Element => {
  return (
    <Container>
      <CategoryList />
    </Container>
  );
};

export default CategoriesScreen;
