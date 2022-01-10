/* eslint-disable @typescript-eslint/unbound-method */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import {render} from 'utils/test-utils';
import MenuEntryType from '../MenuEntryType';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({t: (key: any) => key}),
}));

describe('MenuEntryType', () => {
  it('Test match snapshot MenuEntryType', () => {
    // given
    const props = {};

    // when
    const {toJSON} = render(<MenuEntryType {...props} />);

    // then
    expect(toJSON()).toMatchSnapshot();
  });
});
