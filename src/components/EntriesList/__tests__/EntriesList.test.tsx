/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/unbound-method */
import React from 'react';
import {act} from '@testing-library/react-native';

import {render} from 'utils/test-utils';
import {ICategory, IEntry} from 'interfaces';
import EntriesList from '../EntriesList';
import {FlatList} from 'react-native';
import EntryItem from 'components/EntryItem';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({t: (key: any) => key}),
}));

const CATEGORY_MOCK: ICategory = {
  id: 1,
  description: 'Restaurante',
  key: 'money',
  color: 'red',
};

const MOCK_ENTRY: IEntry = {
  id: 1,
  description: 'Salário',
  type: 'earning',
  value: 99.45,
  dateAt: new Date(),
  category: CATEGORY_MOCK,
};

const ENTRIES_MOCK = [
  {
    ...MOCK_ENTRY,
  },
  {
    ...MOCK_ENTRY,
    id: 2,
    description: 'Pizza',
  },
  {
    ...MOCK_ENTRY,
    id: 3,
    description: 'Hamburguer',
  },
];

const onPressEntry = jest.fn();

describe('EntriesList', () => {
  it('Test match snapshot EntriesList', () => {
    // given
    const props = {
      entries: ENTRIES_MOCK,
      onPressEntry,
    };

    // when
    const {toJSON} = render(<EntriesList {...props} />);

    // then
    expect(toJSON()).toMatchSnapshot();
  });

  it('Tests if items render correctly', async () => {
    // given
    const props = {
      entries: ENTRIES_MOCK,
      onPressEntry,
    };

    // when
    const {getByText, findAllByTestId, UNSAFE_getAllByType} = render(
      <EntriesList {...props} />,
    );
    let entries;
    await act(async () => {
      entries = await findAllByTestId(/entry-item-button/i);
    });

    // then
    expect(entries).toHaveLength(props.entries.length);
    expect(UNSAFE_getAllByType(FlatList).length).toBe(1);
    expect(UNSAFE_getAllByType(EntryItem).length).toBe(props.entries.length);

    expect(getByText('Salário')).toBeTruthy();
    expect(getByText('Pizza')).toBeTruthy();
    expect(getByText('Hamburguer')).toBeTruthy();
    expect(() => getByText('no exist')).toThrow('Unable to find an element');
  });
});
