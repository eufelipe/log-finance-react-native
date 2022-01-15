/* eslint-disable @typescript-eslint/unbound-method */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import {render} from 'utils/test-utils';
import ListEmpty from '../ListEmpty';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({t: (key: any) => key}),
}));

describe('ListEmpty', () => {
  it('Test match snapshot ListEmpty', () => {
    // given
    const props = {};

    // when
    const {toJSON} = render(<ListEmpty {...props} />);

    // then
    expect(toJSON()).toMatchSnapshot();
  });
});
