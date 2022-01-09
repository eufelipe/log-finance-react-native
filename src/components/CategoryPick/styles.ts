import styled from 'styled-components/native';

import {Text, TouchableOpacity} from 'styles/layout';

export const Label = styled(Text)`
  color: ${({theme}) => theme.colors.white}50;
  font-size: ${({theme}) => theme.fontSizes.small};
`;

export const Title = styled(Label)`
  color: ${({theme}) => theme.colors.white};
  font-size: ${({theme}) => theme.fontSizes.small};
  padding-left: ${({theme}) => theme.spacing.great}px;
  font-weight: ${({theme}) => theme.fontWeight.bold};
`;

export const Touchable = styled(TouchableOpacity)`
  margin-top: 5px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
