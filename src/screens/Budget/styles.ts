import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';
import {Text, TouchableOpacity} from 'styles/layout';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from 'styles/colors';

export const Container = styled.View`
  flex: 1;
`;

export const Title = styled(Text)`
  font-size: ${({theme}) => theme.fontSizes.large};
  color: ${({theme}) => theme.colors.white};
`;

export const Header = styled.View`
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  background: ${({theme}) => theme.colors.accent};
  padding: 0px ${({theme}) => theme.spacing.tall}px;
  padding-top: ${({theme}) => theme.spacing.tall + getStatusBarHeight()}px;
  padding-bottom: ${({theme}) => theme.spacing.great}px;
`;

export const Touchable = styled(TouchableOpacity)``;

export const AddIcon = styled(Icon).attrs({
  name: 'plus',
  color: `${Colors.white}`,
  size: 32,
})``;
