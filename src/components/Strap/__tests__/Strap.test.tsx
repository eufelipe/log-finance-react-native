/* eslint-disable @typescript-eslint/unbound-method */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import {render} from 'utils/test-utils';
import Strap from '../Strap';

describe('Strap', () => {
  it('Test match snapshot Strap', () => {
    // given
    const props = {};

    // when
    const {toJSON} = render(<Strap {...props} />);

    // then
    expect(toJSON()).toMatchSnapshot();
  });
});
