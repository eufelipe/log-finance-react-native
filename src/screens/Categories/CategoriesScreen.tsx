import React from 'react';
import {RouteProp, useRoute} from '@react-navigation/native';
import {Container, Loader} from './styles';
import {CategoryList} from './components';
import {Category} from 'models';

import {StackParamList} from 'routes/StacksRoute';

interface CategoriesScreenProps {
  categories?: Category[];
}

const CategoriesScreen = ({categories}: CategoriesScreenProps): JSX.Element => {
  const route = useRoute<RouteProp<StackParamList, 'CategoriesStack'>>();

  if (!route.params?.setCategory) {
    return <Loader />;
  }

  return (
    <Container>
      <CategoryList
        categories={categories}
        setCategory={route.params.setCategory}
      />
    </Container>
  );
};

export default CategoriesScreen;
