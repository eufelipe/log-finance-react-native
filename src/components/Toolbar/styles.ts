import styled from 'styled-components/native';
import {Text, Colors, TouchableOpacity} from 'styles/layout';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export const Container = styled.View`
  height: 60px;
  align-items: center;
  padding: 0px ${({theme}) => theme.spacing.tall}px;
  background: ${({theme}) => theme.colors.accent};
  flex-direction: row;
  justify-content: space-between;
`;

export const Touchable = styled(TouchableOpacity)``;

export const Title = styled(Text)`
  flex: 1;
  color: ${({theme}) => theme.colors.white};
  padding-left: ${({theme}) => theme.spacing.great}px;
`;

export const Search = styled.TextInput.attrs({
  placeholderTextColor: `${Colors.white}50`,
})`
  flex: 1;
  background: ${({theme}) => theme.colors.primary}80;
  padding: ${({theme}) => theme.spacing.great}px;
  margin-left: ${({theme}) => theme.spacing.great}px;
  border-radius: ${({theme}) => theme.spacing.great / 2}px;
  color: ${({theme}) => theme.colors.white};
`;

export const SearchIcon = styled(MaterialIcons).attrs(
  ({name}: {name: string}) => ({
    size: 24,
    color: Colors.paragraph,
    name: name ? name : 'search',
  }),
)``;
