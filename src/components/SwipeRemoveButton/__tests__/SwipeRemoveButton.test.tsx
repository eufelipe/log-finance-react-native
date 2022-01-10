/* eslint-disable @typescript-eslint/unbound-method */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import {fireEvent} from '@testing-library/react-native';
import {render} from 'utils/test-utils';
import SwipeRemoveButton from '../SwipeRemoveButton';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: any) => {
      if (key === 'remove-label') {
        return 'Remover';
      }
      return key;
    },
  }),
}));

const onPressRemove = jest.fn();

describe('SwipeRemoveButton', () => {
  it('Test match snapshot SwipeRemoveButton', () => {
    // given
    const props = {
      onPressRemove,
    };

    // when
    const {toJSON} = render(<SwipeRemoveButton {...props} />);

    // then
    expect(toJSON()).toMatchSnapshot();
  });

  it('Test if the description renders correctly', () => {
    // given
    const props = {
      onPressRemove,
    };

    // when
    const {getByText} = render(<SwipeRemoveButton {...props} />);

    // then
    expect(getByText('Remover')).toBeTruthy();
    expect(() => getByText('no exist')).toThrow('Unable to find an element');
  });

  it('Tests if pressing the button is working correctly', () => {
    // given
    const props = {
      onPressRemove,
    };

    // when
    const {getByTestId} = render(<SwipeRemoveButton {...props} />);
    const pressButton = getByTestId('remove-item-button');
    fireEvent.press(pressButton);

    // then
    expect(pressButton).toBeTruthy();
    expect(onPressRemove).toHaveBeenCalled();
    expect(onPressRemove).toHaveBeenCalledTimes(1);
  });
});
