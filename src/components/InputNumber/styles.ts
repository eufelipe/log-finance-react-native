import styled from 'styled-components/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {TouchableOpacity, Colors, Text} from 'styles/layout';
import {width} from 'styles/mixins';

export const Container = styled.View`
  align-self: flex-end;
  flex-direction: row;
  margin-right: ${({theme}) => theme.spacing.great}px;
`;

export const Input = styled(Text)`
  font-family: ${({theme}) => theme.fontFamily.regular};
  font-size: ${({theme}) => theme.fontSizes.extraBig};
  font-weight: ${({theme}) => theme.fontWeight.regular};
  color: ${({theme}) => theme.colors.white};
`;

export const InputValue = styled.TouchableOpacity.attrs({})<{
  addSpaceRight: boolean;
}>`
  background: transparent;
  width: ${({addSpaceRight = false}) => (addSpaceRight ? width - 40 : width)}px;
  height: 60px;
  position: absolute;
  left: 0px;
  right: 60px;
  top: 100px;
  bottom: 0px;
`;

export const Touchable = styled(TouchableOpacity)`
  justify-content: center;
`;
export const BackspaceIcon = styled(MaterialIcons).attrs({
  name: 'backspace',
  size: 24,
  color: Colors.white,
})`
  margin-left: ${({theme}) => theme.spacing.great}px;
`;
