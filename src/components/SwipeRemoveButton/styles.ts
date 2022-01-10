import styled from 'styled-components/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {Text, TouchableOpacity} from 'styles/layout';
import Colors from 'styles/colors';

export const Container = styled(TouchableOpacity)`
  margin: ${({theme}) => theme.spacing.small}px
    ${({theme}) => theme.spacing.great}px ${({theme}) => theme.spacing.small}px
    0px;
  padding: 0px ${({theme}) => theme.spacing.tall}px;
  background: ${({theme}) => theme.colors.danger};
  border-radius: ${({theme}) => theme.spacing.great}px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;
export const Label = styled(Text)`
  color: ${({theme}) => theme.colors.white};
  font-size: ${({theme}) => theme.fontSizes.small};
`;

export const RemoveIcon = styled(MaterialIcons).attrs({
  size: 24,
  color: Colors.white,
  name: 'delete',
})``;
