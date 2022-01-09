/* eslint-disable @typescript-eslint/unbound-method */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import {render} from 'utils/test-utils';
import InputNumber from '../InputNumber';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({t: (key: any) => key}),
}));

describe('InputNumber', () => {
  it('Test match snapshot InputNumber', () => {
    // given
    const props = {
      setShowKeyboard: jest.fn(),
    };

    // when
    const {toJSON} = render(<InputNumber {...props} />);

    // then
    expect(toJSON()).toMatchSnapshot();
  });
});
