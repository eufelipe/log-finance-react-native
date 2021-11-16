/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/unbound-method */
import React from 'react';
import {render} from 'utils/test-utils';

import Header from '../Header';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({t: (key: any) => key}),
}));

describe('Header', () => {
  it('Test match snapshot Header', () => {
    // given
    const props = {};

    // when
    const {toJSON} = render(<Header {...props} />);

    // then
    expect(toJSON()).toMatchSnapshot();
  });
});
