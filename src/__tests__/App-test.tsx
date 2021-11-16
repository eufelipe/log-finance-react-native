/* eslint-disable @typescript-eslint/unbound-method */
import React from 'react';
import {render} from '@testing-library/react-native';
import App from '../App';

describe('App', () => {
  it('Test match snapshot App', () => {
    // given
    const props = {};

    // when
    const {toJSON} = render(<App {...props} />);

    // then
    expect(toJSON()).toMatchSnapshot();
  });
});
