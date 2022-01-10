import React, {useCallback, useEffect, useState} from 'react';
import withObservables from '@nozbe/with-observables';
import {useNavigation} from '@react-navigation/native';
import {filter} from 'lodash';

import CategoryItem from '../CategoryItem';

import {Category} from 'models';
import {getCategories} from 'repositories/CategoryRepository';

import {sanitizeString} from 'utils/strings';
import {FlatList} from './styles';
import {Toolbar} from 'components';

interface CategoryListProps {
  categories: Category[];
  setCategory: (value: Category) => void;
}

const CategoryList = ({
  categories,
  setCategory,
}: CategoryListProps): JSX.Element => {
  const navigation = useNavigation();

  const [query, setQuery] = useState('');
  const [filteredCategories, setFilteredCategories] = useState<Category[]>(
    categories ?? [],
  );

  const handleSearch = (term: string) => {
    const formattedQuery = sanitizeString(term);
    const filtered = filter(categories, ({description}) => {
      return sanitizeString(description).includes(formattedQuery);
    });
    setFilteredCategories(filtered);
    setQuery(term);
  };

  const onPressCategory = useCallback(
    (category: Category) => {
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
      setFilteredCategories(categories);
    }
  }, [query, categories]);

  return (
    <>
      <FlatList
        ListHeaderComponent={
          <Toolbar onChangeText={handleSearch} query={query} />
        }
        testID="category-list"
        data={filteredCategories}
        renderItem={renderItem}
        keyExtractor={ListKeyExtractor}
      />
    </>
  );
};

const enhance = withObservables(['categories'], () => ({
  categories: getCategories(),
}));

export default enhance(CategoryList);
