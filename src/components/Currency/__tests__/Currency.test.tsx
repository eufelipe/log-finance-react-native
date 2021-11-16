/* eslint-disable @typescript-eslint/unbound-method */
import React from 'react';
import {Text} from 'react-native';
import {render} from 'utils/test-utils';

import Currency from '../Currency';

describe('Currency', () => {
  it('Test match snapshot Currency', () => {
    // given
    const props = {
      value: 100.28,
      render: (text: string) => <Text>{text}</Text>,
    };

    // when
    const {toJSON} = render(<Currency {...props} />);

    // then
    expect(toJSON()).toMatchSnapshot();
  });

  it('Test if the value renders correctly', () => {
    // given
    const props = {
      value: 99.45,
      render: (text: string) => <Text>{text}</Text>,
    };

    // when
    const {getByText} = render(<Currency {...props} />);

    // then
    expect(getByText('R$ 99,45')).toBeTruthy();
    expect(() => getByText(/20,45/i)).toThrow('Unable to find an element');
  });
});
