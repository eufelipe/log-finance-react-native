/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/unbound-method */
import React from 'react';
import {render} from 'utils/test-utils';

import CategoriesScreen from '../CategoriesScreen';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({t: (key: any) => key}),
}));

describe('CategoriesScreen', () => {
  it('Test match snapshot CategoriesScreen', () => {
    // given
    const props = {};

    // when
    const {toJSON} = render(<CategoriesScreen {...props} />);

    // then
    expect(toJSON()).toMatchSnapshot();
  });
});
