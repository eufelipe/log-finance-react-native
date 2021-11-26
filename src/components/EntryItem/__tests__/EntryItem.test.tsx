/* eslint-disable @typescript-eslint/unbound-method */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import {fireEvent} from '@testing-library/react-native';

import {render} from 'utils/test-utils';
import {IEntry} from 'interfaces';
import EntryItem from '../EntryItem';

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
jest.mock('react-native-vector-icons/MaterialIcons', () => 'Icon');

jest.mock('react-i18next', () => ({
  useTranslation: () => ({t: (key: any) => key}),
}));

const MOCK: IEntry = {
  id: 1,
  description: 'Salário',
  type: 'earning',
  value: 99.45,
  dateAt: new Date(),
  category: {
    id: '1',
    description: 'Restaurante',
    key: 'money',
    color: 'red',
  },
};

const onPressEntry = jest.fn();

describe('EntryItem', () => {
  it('Test match snapshot EntryItem', () => {
    // given
    const props = {
      entry: MOCK,
      onPressEntry,
    };

    // when
    const {toJSON} = render(<EntryItem {...props} />);

    // then
    expect(toJSON()).toMatchSnapshot();
  });

  it('Test if the description renders correctly', () => {
    // given
    const props = {
      entry: MOCK,
      onPressEntry,
    };

    // when
    const {getByText} = render(<EntryItem {...props} />);

    // then
    expect(getByText('Salário')).toBeTruthy();
    expect(getByText('Restaurante')).toBeTruthy();
    expect(getByText(/99,45/i)).toBeTruthy();
    expect(() => getByText('no exist')).toThrow('Unable to find an element');
    expect(() => getByText(/20,45/i)).toThrow('Unable to find an element');
  });

  it('Tests if pressing the button is working correctly', () => {
    // given
    const props = {
      entry: MOCK,
      onPressEntry,
    };

    // when
    const {getByTestId} = render(<EntryItem {...props} />);
    const pressButton = getByTestId('entry-item-button');
    fireEvent.press(pressButton);
    fireEvent.press(pressButton);

    // then
    expect(pressButton).toBeTruthy();
    expect(onPressEntry).toHaveBeenCalled();
    expect(onPressEntry).toHaveBeenCalledTimes(2);
  });
});
