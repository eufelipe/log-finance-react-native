/* eslint-disable @typescript-eslint/unbound-method */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import {render} from 'utils/test-utils';
import ProgressBar from '../ProgressBar';

describe('ProgressBar', () => {
  it('Test match snapshot ProgressBar', () => {
    // given
    const props = {
      percent: 10,
    };

    // when
    const {toJSON} = render(<ProgressBar {...props} />);

    // then
    expect(toJSON()).toMatchSnapshot();
  });

  it('Test match snapshot ProgressBar with color', () => {
    // given
    const props = {
      percent: 45,
      color: "#0000000"
    };

    // when
    const {toJSON} = render(<ProgressBar {...props} />);

    // then
    expect(toJSON()).toMatchSnapshot();
  });
});
