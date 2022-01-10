import styled from 'styled-components/native';

export const Container = styled.View`
  height: 5px;
  width: 100px;
  border-radius: 2.5px;
  margin: 10px 0px;
  background: ${({theme}) => theme.colors.gray}10;
`;
