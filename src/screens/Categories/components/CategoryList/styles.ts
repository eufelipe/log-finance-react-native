import styled from 'styled-components/native';

export const FlatList = styled.FlatList.attrs({
  numColumns: 3,
  columnWrapperStyle: {
    flex: 1,
    justifyContent: 'space-between',
  },
})``;
