/* eslint-disable @typescript-eslint/unbound-method */
import React from 'react';
import {View, Text} from 'react-native';

import {render} from 'utils/test-utils';
import {EntryType} from 'interfaces/IEntry';

import {EntryProvider, EntryContext} from '../useEntry';

const entryType: EntryType = 'expense';

const MOCK = {
  entries: [],
  saveEntry: jest.fn(),
  value: 0,
  setValue: jest.fn(),
  description: undefined,
  setDescription: jest.fn(),
  category: undefined,
  setCategory: jest.fn(),
  date: new Date(),
  setDate: jest.fn(),
  entryType,
  setEntryType: jest.fn(),
};

describe('EntryProvider', () => {
  it('Test match snapshot useEntry', () => {
    // given
    const props = {};

    // when
    const {toJSON} = render(
      <EntryProvider {...props}>
        <Text>Teste</Text>
      </EntryProvider>,
    );

    // then
    expect(toJSON()).toMatchSnapshot();
  });

  it('Test if values defaults is showing correctly', () => {
    // given
    const props = MOCK;

    // when
    const {getByText} = render(
      <EntryContext.Provider value={props}>
        <EntryContext.Consumer>
          {({description}) => (
            <Text>{description ? 'Exists' : 'Does not exist'}</Text>
          )}
        </EntryContext.Consumer>
      </EntryContext.Provider>,
    );

    // then
    expect(getByText('Does not exist')).toBeTruthy();
    expect(() => getByText('any')).toThrow('Unable to find an element');
  });

  it('Test if entry is showing correctly', () => {
    // given
    const props = {...MOCK, description: 'Salário', value: 99.45};

    // when
    const {getByText} = render(
      <EntryContext.Provider value={props}>
        <EntryContext.Consumer>
          {({description, value}) => (
            <View>
              <Text>{description}</Text>
              <Text>{value}</Text>
            </View>
          )}
        </EntryContext.Consumer>
      </EntryContext.Provider>,
    );

    // then
    expect(getByText('Salário')).toBeTruthy();
    expect(getByText(/99.45/i)).toBeTruthy();
    expect(() => getByText('any')).toThrow('Unable to find an element');
    expect(() => getByText(/20.45/i)).toThrow('Unable to find an element');
  });
});
