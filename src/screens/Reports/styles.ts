import styled from 'styled-components/native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import {Text, TouchableOpacity} from 'styles/layout';

export const Container = styled.View`
  flex: 1;
  background: ${({theme}) => theme.colors.grayLight};
`;

export const Header = styled.View`
  width: 100%;
  height: 500px;
  align-items: center;
  padding: ${({theme}) => theme.spacing.tall + getStatusBarHeight()}px 0px;
  margin-bottom: ${({theme}) => theme.spacing.tall}px;
  background: ${({theme}) => theme.colors.accent};
`;

export const Title = styled(Text)`
  font-size: ${({theme}) => theme.fontSizes.large};
  color: ${({theme}) => theme.colors.white};
`;

export const Balance = styled(Title)`
  color: ${({theme}) => theme.colors.accent};
`;

export const ContainerButtons = styled.View`
  flex-direction: row;
`;

export const Touchable = styled(TouchableOpacity)`
  margin: 0px ${({theme}) => theme.spacing.great}px
    ${({theme}) => theme.spacing.tall}px;
`;

export const Label = styled(Text)<{active: boolean}>`
  font-family: ${({theme}) => theme.fontFamily.regular};
  font-size: ${({theme}) => theme.fontSizes.medium};
  font-weight: ${({theme}) => theme.fontWeight.bold};
  color: ${({theme, active = false}) =>
    active ? theme.colors.white : theme.colors.gray};
`;
