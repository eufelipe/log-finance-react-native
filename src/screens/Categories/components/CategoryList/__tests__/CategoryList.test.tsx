/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/unbound-method */
import React from 'react';
import {act} from '@testing-library/react-native';
import {render} from 'utils/test-utils';

import CategoryList from '../CategoryList';
import CategoryItem from '../../CategoryItem';

import {FlatList} from '../styles';

import CATEGORIES from 'database/categories.json';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: any) => {
      switch (key) {
        case 'food':
          return 'Restaurante';
        case 'transportation':
          return 'Transporte';
        case 'supermarket':
          return 'Mercado';
        default:
          return key;
      }
    },
  }),
}));

describe('CategoryList', () => {
  it('Test match snapshot CategoryList', () => {
    // given
    const props = {};

    // when
    const {toJSON} = render(<CategoryList {...props} />);

    // then
    expect(toJSON()).toMatchSnapshot();
  });

  it('Tests if items render correctly', async () => {
    // given
    const props = {};

    // when
    const {getByText, findAllByTestId, UNSAFE_getAllByType} = render(
      <CategoryList {...props} />,
    );
    let categories;
    await act(async () => {
      categories = await findAllByTestId(/category-item-button/i);
    });

    // then
    expect(categories).toHaveLength(CATEGORIES.length);
    expect(UNSAFE_getAllByType(FlatList).length).toBe(1);
    expect(UNSAFE_getAllByType(CategoryItem).length).toBe(CATEGORIES.length);

    expect(getByText('Transporte')).toBeTruthy();
    expect(getByText('Restaurante')).toBeTruthy();
    expect(getByText('Mercado')).toBeTruthy();
    expect(() => getByText('no exist')).toThrow('Unable to find an element');
  });
});
