/* eslint-disable @typescript-eslint/unbound-method */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import {render} from 'utils/test-utils';
import ReportsScreen from '../ReportsScreen';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: any) => key,
    i18n: {
      changeLanguage: () => new Promise(() => {}),
    },
  }),
}));

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useRoute: () => jest.fn(),
  };
});

describe('ReportsScreen', () => {
  it('Test match snapshot ReportsScreen', () => {
    // given
    const props = {};

    // when
    const {toJSON} = render(<ReportsScreen {...props} />);

    // then
    expect(toJSON()).toMatchSnapshot();
  });
});
