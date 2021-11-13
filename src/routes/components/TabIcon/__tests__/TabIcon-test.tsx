/* eslint-disable @typescript-eslint/unbound-method */
import React from 'react';

import {render} from 'utils/test-utils';

import TabIcon from '../TabIcon';

jest.mock('react-native-vector-icons/MaterialIcons', () => 'Icon');

describe('TabIcon', () => {
  it('Test match snapshot TabIcon', () => {
    // given
    const props = {
      route: 'Home',
      focused: true,
    };

    // when
    const {toJSON} = render(<TabIcon {...props} />);

    // then
    expect(toJSON()).toMatchSnapshot();
  });
});
