/* eslint-disable @typescript-eslint/unbound-method */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import {render} from 'utils/test-utils';
import AddEntryScreen from '../AddEntryScreen';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({t: (key: any) => key}),
}));

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useRoute: () => jest.fn(),
  };
});

describe('AddEntryScreen', () => {
  it('Test match snapshot AddEntryScreen', () => {
    // given
    const props = {};

    // when
    const {toJSON} = render(<AddEntryScreen {...props} />);

    // then
    expect(toJSON()).toMatchSnapshot();
  });
});
