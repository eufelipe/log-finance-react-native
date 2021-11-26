/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/unbound-method */
import React from 'react';

import {render} from 'utils/test-utils';
import LegendItem from '../LegendItem';

const MOCK = {
  id: '123abc',
  color: 'red',
  text: 'Teste',
  sumed: 100,
  value: 10,
};

describe('LegendItem', () => {
  it('Test match snapshot LegendItem', () => {
    // given
    const props = {
      ...MOCK,
    };

    // when
    const {toJSON} = render(<LegendItem {...props} />);

    // then
    expect(toJSON()).toMatchSnapshot();
  });
});
