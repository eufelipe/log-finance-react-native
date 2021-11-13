import styled from 'styled-components/native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import {Text, TouchableOpacity} from 'styles/layout';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Colors from 'styles/colors';

export const Container = styled.View`
  background: ${({theme}) => theme.colors.primary};
  padding: 0px ${({theme}) => theme.spacing.great}px;
  padding-top: ${({theme}) => theme.spacing.tall + getStatusBarHeight()}px;
  justify-content: space-between;
  align-items: center;
  height: 150px;
  flex-direction: row;
`;

export const Content = styled.View``;

export const Title = styled(Text)`
  font-size: ${({theme}) => theme.fontSizes.big};
  font-weight: ${({theme}) => theme.fontWeight.bold};
  font-family: ${({theme}) => theme.fontFamily.semiBold};
  color: ${({theme}) => theme.colors.white};
`;

export const Description = styled(Text)`
  font-size: ${({theme}) => theme.fontSizes.small};
  color: ${({theme}) => theme.colors.white};
`;

export const SettingTouchable = styled(TouchableOpacity).attrs({})`
  padding: 10px;
`;

export const SettingIcon = styled(MaterialIcons).attrs({
  size: 28,
  name: 'settings',
  backgroundColor: 'transparent',
  color: Colors.white,
})`
  padding-right: 0px;
`;
