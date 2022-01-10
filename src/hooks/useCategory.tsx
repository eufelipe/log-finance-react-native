import {useState, useCallback, useEffect} from 'react';

import {Category} from 'models';
import {CategoryRepository} from 'repositories';
import {Subscription} from 'rxjs';

let categoryDefaultSubscription = new Subscription();

interface UseCategoryProps {
  categoryDefault?: Category;
  setCategoryDefault: (value: Category) => void;
}

export const useCategory = (): UseCategoryProps => {
  const [categoryDefault, setCategoryDefault] = useState<Category>();

  const loadCategoryDefault = useCallback(() => {
    categoryDefaultSubscription =
      CategoryRepository.getDefaultCategory().subscribe(categories => {
        if (!categories.length) return;

        const [firstCategory] = categories;
        setCategoryDefault(firstCategory);
      });
  }, []);

  useEffect(() => {
    loadCategoryDefault();
    return categoryDefaultSubscription.unsubscribe();
  }, [loadCategoryDefault]);

  return {
    categoryDefault,
    setCategoryDefault,
  };
};

export default useCategory;
