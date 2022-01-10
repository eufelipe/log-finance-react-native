import styled from 'styled-components/native';
import {Text, TouchableOpacity} from 'styles/layout';

export const Container = styled.View`
  flex-direction: row;
`;

export const FlatList = styled.FlatList`
  padding-top: ${({theme}) => theme.spacing.great}px;
`;

export const Touchable = styled(TouchableOpacity)`
  margin: 0px ${({theme}) => theme.spacing.great}px
    ${({theme}) => theme.spacing.tall}px;
`;

export const Label = styled(Text)<{active: boolean}>`
  font-family: ${({theme}) => theme.fontFamily.regular};
  font-size: ${({theme}) => theme.fontSizes.small};
  font-weight: ${({theme}) => theme.fontWeight.bold};
  color: ${({theme, active = false}) =>
    active ? theme.colors.white : theme.colors.gray};
`;
