import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: ${({theme}) => theme.colors.primary};
`;

export const Loader = styled.ActivityIndicator`
  margin-top: 20px;
`;
