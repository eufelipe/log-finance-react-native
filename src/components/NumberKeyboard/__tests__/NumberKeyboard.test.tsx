/* eslint-disable @typescript-eslint/unbound-method */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import {render} from 'utils/test-utils';
import NumberKeyboard from '../NumberKeyboard';

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
jest.mock('react-native-vector-icons/MaterialIcons', () => 'Icon');

jest.mock('react-i18next', () => ({
  useTranslation: () => ({t: (key: any) => key}),
}));

const MOCK = {
  valueDefault: 0,
  onDismiss: jest.fn(),
  onDone: jest.fn(),
};

describe('NumberKeyboard', () => {
  it('Test match snapshot NumberKeyboard', () => {
    // given
    const props = MOCK;

    // when
    const {toJSON} = render(<NumberKeyboard {...props} />);

    // then
    expect(toJSON()).toMatchSnapshot();
  });
});
