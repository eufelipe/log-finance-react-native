/* eslint-disable @typescript-eslint/unbound-method */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import {render} from 'utils/test-utils';
import EntryDate from '../EntryDate';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({t: (key: any) => key}),
}));

describe('EntryDate', () => {
  it('Test match snapshot EntryDate', () => {
    // given
    const props = {};

    // when
    const {toJSON} = render(<EntryDate {...props} />);

    // then
    expect(toJSON()).toMatchSnapshot();
  });
});
