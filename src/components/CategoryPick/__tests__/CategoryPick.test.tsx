/* eslint-disable @typescript-eslint/unbound-method */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import {render} from 'utils/test-utils';
import CategoryPick from '../CategoryPick';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({t: (key: any) => key}),
}));

describe('CategoryPick', () => {
  it('Test match snapshot CategoryPick', () => {
    // given
    const props = {};

    // when
    const {toJSON} = render(<CategoryPick {...props} />);

    // then
    expect(toJSON()).toMatchSnapshot();
  });
});
