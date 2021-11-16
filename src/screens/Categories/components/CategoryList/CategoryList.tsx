import React, {useCallback, useEffect, useState} from 'react';

import {filter} from 'lodash';
import {ICategory} from 'interfaces';

import CategoryItem from '../CategoryItem';
import {FlatList} from './styles';

import CATEGORIES from 'database/categories.json';
import HeaderCategories from '../HeaderCategories/HeaderCategories';
import {sanitizeString} from 'utils/strings';
import {useEntry} from 'hooks/useEntry';
import {useNavigation} from '@react-navigation/native';

const CategoryList = (): JSX.Element => {
  const navigation = useNavigation();
  const {setCategory} = useEntry();

  const [query, setQuery] = useState('');
  const [categories, setCategories] = useState<ICategory[]>(CATEGORIES ?? []);

  const handleSearch = (term: string) => {
    const formattedQuery = sanitizeString(term);
    const filteredCategories = filter(CATEGORIES, category => {
      return sanitizeString(category.description).includes(formattedQuery);
    });
    setCategories(filteredCategories);
    setQuery(term);
  };

  const onPressCategory = useCallback(
    (category: ICategory) => {
      setCategory(category);
      navigation.goBack();
    },
    [setCategory, navigation],
  );

  const ListKeyExtractor = useCallback(item => item.id, []);

  const renderItem = useCallback(
    ({item}) => (
      <CategoryItem category={item} onPressCategory={onPressCategory} />
    ),
    [onPressCategory],
  );

  useEffect(() => {
    if (!query) {
      setCategories(CATEGORIES);
    }
  }, [query]);

  return (
    <FlatList
      ListHeaderComponent={
        <HeaderCategories onChangeText={handleSearch} query={query} />
      }
      testID="category-list"
      data={categories}
      renderItem={renderItem}
      keyExtractor={ListKeyExtractor}
    />
  );
};

export default CategoryList;
