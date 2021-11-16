/* eslint-disable @typescript-eslint/unbound-method */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import {fireEvent} from '@testing-library/react-native';

import {render} from 'utils/test-utils';
import {ICategory} from 'interfaces';
import CategoryItem from '../CategoryItem';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: any) => {
      if (key === 'money') {
        return 'Restaurante';
      }
      return key;
    },
  }),
}));

const MOCK: ICategory = {
  id: 1,
  description: 'Restaurante',
  icon: 'money',
};

const onPressCategory = jest.fn();

describe('CategoryItem', () => {
  it('Test match snapshot CategoryItem', () => {
    // given
    const props = {
      category: MOCK,
      onPressCategory,
    };

    // when
    const {toJSON} = render(<CategoryItem {...props} />);

    // then
    expect(toJSON()).toMatchSnapshot();
  });

  it('Test if the description renders correctly', () => {
    // given
    const props = {
      category: MOCK,
      onPressCategory,
    };

    // when
    const {getByText} = render(<CategoryItem {...props} />);

    // then
    expect(getByText('Restaurante')).toBeTruthy();
    expect(() => getByText('no exist')).toThrow('Unable to find an element');
  });

  it('Tests if pressing the button is working correctly', () => {
    // given
    const props = {
      category: MOCK,
      onPressCategory,
    };

    // when
    const {getByTestId} = render(<CategoryItem {...props} />);
    const pressButton = getByTestId('category-item-button');
    fireEvent.press(pressButton);
    fireEvent.press(pressButton);

    // then
    expect(pressButton).toBeTruthy();
    expect(onPressCategory).toHaveBeenCalled();
    expect(onPressCategory).toHaveBeenCalledTimes(2);
  });
});
