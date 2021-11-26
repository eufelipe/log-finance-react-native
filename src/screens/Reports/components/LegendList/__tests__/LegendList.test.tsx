/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/unbound-method */
import React from 'react';

import {render} from 'utils/test-utils';
import LegendList from '../LegendList';

const MOCK = {
  id: '123abc',
  color: 'red',
  text: 'Teste',
  sumed: 100,
  value: 10,
};

describe('LegendList', () => {
  it('Test match snapshot LegendList', () => {
    // given
    const props = {
      items: [MOCK, MOCK],
    };

    // when
    const {toJSON} = render(<LegendList {...props} />);

    // then
    expect(toJSON()).toMatchSnapshot();
  });
});
