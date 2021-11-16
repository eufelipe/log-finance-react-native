/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/unbound-method */
import React from 'react';
import {render} from 'utils/test-utils';

import HomeScreen from '../HomeScreen';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({t: (key: any) => key}),
}));

describe('HomeScreen', () => {
  it('Test match snapshot HomeScreen', () => {
    // given
    const props = {};

    // when
    const {toJSON} = render(<HomeScreen {...props} />);

    // then
    expect(toJSON()).toMatchSnapshot();
  });
});
