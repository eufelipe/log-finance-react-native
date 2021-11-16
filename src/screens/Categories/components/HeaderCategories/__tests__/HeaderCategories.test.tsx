/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/unbound-method */
import React from 'react';
import {render} from 'utils/test-utils';

import HeaderCategories from '../HeaderCategories';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({t: (key: any) => key}),
}));

const onChangeText = jest.fn();

describe('HeaderCategories', () => {
  it('Test match snapshot HeaderCategories', () => {
    // given
    const props = {
      query: undefined,
      onChangeText,
    };

    // when
    const {toJSON} = render(<HeaderCategories {...props} />);

    // then
    expect(toJSON()).toMatchSnapshot();
  });
});
