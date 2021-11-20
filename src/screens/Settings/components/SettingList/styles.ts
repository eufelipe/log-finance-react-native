import styled from 'styled-components/native';
import {Text, TouchableOpacity, Colors} from 'styles/layout';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export const FlatList = styled.FlatList``;

export const Container = styled(TouchableOpacity)`
  background: ${({theme}) => theme.colors.white};
  padding: ${({theme}) => theme.spacing.tall}px
    ${({theme}) => theme.spacing.great}px;

  border-bottom-width: 1px;
  border-color: ${({theme}) => theme.colors.grayLight};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex: 1;
`;

export const Content = styled.View`
  justify-content: space-between;
  flex-direction: row;
  flex: 1;
  padding-left: ${({theme}) => theme.spacing.small}px;
`;

export const Title = styled(Text)`
  color: ${({theme}) => theme.colors.paragraph};
  font-size: ${({theme}) => theme.fontSizes.small};
`;

export const SubTitle = styled(Text)`
  color: ${({theme}) => theme.colors.paragraph};
  font-size: ${({theme}) => theme.fontSizes.small};
`;

export const BaseIcon = styled(MaterialIcons).attrs(
  ({name}: {name?: string}) => ({
    size: 24,
    color: Colors.paragraph,
    name,
  }),
)<{name?: string}>``;
