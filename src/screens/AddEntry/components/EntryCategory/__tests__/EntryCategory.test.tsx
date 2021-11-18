/* eslint-disable @typescript-eslint/unbound-method */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import {render} from 'utils/test-utils';
import EntryCategory from '../EntryCategory';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({t: (key: any) => key}),
}));

describe('EntryCategory', () => {
  it('Test match snapshot EntryCategory', () => {
    // given
    const props = {};

    // when
    const {toJSON} = render(<EntryCategory {...props} />);

    // then
    expect(toJSON()).toMatchSnapshot();
  });
});
