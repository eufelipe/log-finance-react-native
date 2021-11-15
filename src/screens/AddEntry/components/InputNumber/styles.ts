import styled from 'styled-components/native';
import MaskInput from 'react-native-mask-input';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {TouchableOpacity} from 'styles/layout';
import Colors from 'styles/colors';

export const Container = styled.View`
  align-self: flex-end;
  flex-direction: row;
  margin-right: ${({theme}) => theme.spacing.great}px;
`;

export const Input = styled(MaskInput).attrs({
  selectionColor: Colors.gray,
  keyboardType: 'number-pad',
  autoFocus: true,
})`
  font-family: ${({theme}) => theme.fontFamily.regular};
  font-size: ${({theme}) => theme.fontSizes.extraBig};
  font-weight: ${({theme}) => theme.fontWeight.regular};
  color: ${({theme}) => theme.colors.white};
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
