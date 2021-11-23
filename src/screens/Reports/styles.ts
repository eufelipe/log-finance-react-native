import styled from 'styled-components/native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import {Text} from 'styles/layout';

export const Container = styled.View`
  flex: 1;
  background: ${({theme}) => theme.colors.grayLight};
`;

export const Header = styled.View`
  width: 100%;
  align-items: center;
  padding: ${({theme}) => theme.spacing.tall + getStatusBarHeight()}px 0px;
  margin-bottom: ${({theme}) => theme.spacing.tall}px;
  background: ${({theme}) => theme.colors.accent};
`;

export const Title = styled(Text)`
  font-size: ${({theme}) => theme.fontSizes.large};
  color: ${({theme}) => theme.colors.white};
`;

export const Balance = styled(Text)`
  font-size: ${({theme}) => theme.fontSizes.large};
  color: ${({theme}) => theme.colors.accent};
`;
