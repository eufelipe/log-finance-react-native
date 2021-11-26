/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/unbound-method */
import React from 'react';

import {render} from 'utils/test-utils';
import ListEmpty from '../ListEmpty';

describe('ListEmpty', () => {
  it('Test match snapshot ListEmpty', () => {
    // given
    const props = {};

    // when
    const {toJSON} = render(<ListEmpty {...props} />);

    // then
    expect(toJSON()).toMatchSnapshot();
  });
});
