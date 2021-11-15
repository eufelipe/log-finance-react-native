import React, {useCallback} from 'react';
import {ICategory} from 'interfaces';

import CategoryItem from '../CategoryItem';
import {FlatList} from './styles';

import CATEGORIES from 'database/categories.json';

const CategoryList = (): JSX.Element => {
  const onPressCategory = useCallback((category: ICategory) => {}, []);

  const ListKeyExtractor = useCallback(item => item.id, []);

  const renderItem = useCallback(
    ({item}) => (
      <CategoryItem category={item} onPressCategory={onPressCategory} />
    ),
    [onPressCategory],
  );

  return (
    <FlatList
      testID="category-list"
      data={CATEGORIES}
      renderItem={renderItem}
      keyExtractor={ListKeyExtractor}
    />
  );
};

export default CategoryList;
