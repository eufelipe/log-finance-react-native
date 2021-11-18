/* eslint-disable @typescript-eslint/unbound-method */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import {render} from 'utils/test-utils';
import Dismiss from '../Dismiss';

describe('Dismiss', () => {
  it('Test match snapshot Dismiss', () => {
    // given
    const props = {};

    // when
    const {toJSON} = render(<Dismiss {...props} />);

    // then
    expect(toJSON()).toMatchSnapshot();
  });
});
