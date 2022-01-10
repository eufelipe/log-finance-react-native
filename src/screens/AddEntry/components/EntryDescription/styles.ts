import styled from 'styled-components/native';

import Colors from 'styles/colors';
import {Text} from 'styles/layout';

export const Label = styled(Text)`
  color: ${({theme}) => theme.colors.white}50;
  font-size: ${({theme}) => theme.fontSizes.small};
`;

export const Input = styled.TextInput.attrs({
  numberOfLines: 1,
  placeholderTextColor: Colors.grayLight,
  blurOnSubmit: true,
})`
  font-family: ${({theme}) => theme.fontFamily.regular};
  font-size: ${({theme}) => theme.fontSizes.small};
  color: ${({theme}) => theme.colors.grayLight};
  font-weight: ${({theme}) => theme.fontWeight.bold};
`;
