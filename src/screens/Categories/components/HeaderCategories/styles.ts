import styled from 'styled-components/native';
import Colors from 'styles/colors';

export const Container = styled.View`
  height: 60px;
  align-items: center;
  padding: 0px ${({theme}) => theme.spacing.tall}px;
  margin-bottom: ${({theme}) => theme.spacing.great}px;
  background: ${({theme}) => theme.colors.accent};
  flex-direction: row;
`;

export const SearchBar = styled.TextInput.attrs({
  placeholderTextColor: `${Colors.white}50`,
})`
  flex: 1;
  background: ${({theme}) => theme.colors.primary}80;
  padding: ${({theme}) => theme.spacing.great}px;
  margin-left: ${({theme}) => theme.spacing.great}px;
  border-radius: ${({theme}) => theme.spacing.great / 2}px;
  color: ${({theme}) => theme.colors.white};
`;
