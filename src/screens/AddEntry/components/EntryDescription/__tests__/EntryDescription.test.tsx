/* eslint-disable @typescript-eslint/unbound-method */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import {render} from 'utils/test-utils';
import EntryDescription from '../EntryDescription';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({t: (key: any) => key}),
}));

describe('EntryDescription', () => {
  it('Test match snapshot EntryDescription', () => {
    // given
    const props = {};

    // when
    const {toJSON} = render(<EntryDescription {...props} />);

    // then
    expect(toJSON()).toMatchSnapshot();
  });
});
