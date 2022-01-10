/* eslint-disable @typescript-eslint/unbound-method */
import React from 'react';
import {render} from 'utils/test-utils';
import CategoryIcon from '../CategoryIcon';

describe('CategoryIcon', () => {
  it('Test match snapshot CategoryIcon', () => {
    // given
    const props = {
      name: 'food',
    };

    // when
    const {toJSON} = render(<CategoryIcon {...props} />);

    // then
    expect(toJSON()).toMatchSnapshot();
  });

  it('Test match snapshot CategoryIcon default value', () => {
    // given
    const props = {};

    // when
    const {toJSON} = render(<CategoryIcon {...props} />);

    // then
    expect(toJSON()).toMatchSnapshot();
  });
});
