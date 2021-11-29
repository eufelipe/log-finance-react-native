import styled from 'styled-components/native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Text, TouchableOpacity, Colors} from 'styles/layout';

export const Container = styled.View`
  flex: 1;
  background: ${({theme}) => theme.colors.grayLight};
`;

export const Loader = styled.ActivityIndicator`
  margin-top: 20px;
`;

export const Header = styled.View`
  width: 100%;
  height: 150px;
  align-items: center;
  padding-top: ${({theme}) => theme.spacing.tall + getStatusBarHeight()}px;
  background: ${({theme}) => theme.colors.accent};
`;

export const PeriodNavigation = styled.View`
  flex-direction: row;
`;

export const Title = styled(Text)`
  font-size: ${({theme}) => theme.fontSizes.large};
  color: ${({theme}) => theme.colors.white};
  margin-bottom: ${({theme}) => theme.spacing.tall}px;
`;

export const Touchable = styled(TouchableOpacity)`
  margin: 0px ${({theme}) => theme.spacing.great}px
    ${({theme}) => theme.spacing.tall}px;
`;

export const Label = styled(Text)`
  font-family: ${({theme}) => theme.fontFamily.regular};
  font-size: ${({theme}) => theme.fontSizes.medium};
  font-weight: ${({theme}) => theme.fontWeight.regular};
  color: ${({theme}) => theme.colors.grayLight};
`;

export const BaseIcon = styled(MaterialIcons).attrs({
  size: 24,
  color: Colors.grayLight,
})``;

export const LeftIcon = styled(BaseIcon).attrs({
  name: 'keyboard-arrow-left',
})``;

export const RightIcon = styled(BaseIcon).attrs({
  name: 'keyboard-arrow-right',
})``;
