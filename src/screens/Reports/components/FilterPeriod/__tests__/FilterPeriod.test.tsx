/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/unbound-method */
import React from 'react';

import {render} from 'utils/test-utils';
import FilterPeriod from '../FilterPeriod';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({t: (key: any) => key}),
}));

const onChangeFilter = jest.fn();

describe('FilterPeriod', () => {
  it('Test match snapshot FilterPeriod', () => {
    // given
    const props = {
      onChangeFilter,
    };

    // when
    const {toJSON} = render(<FilterPeriod {...props} />);

    // then
    expect(toJSON()).toMatchSnapshot();
  });
});
