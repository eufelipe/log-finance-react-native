import styled from 'styled-components/native';
import {TouchableOpacity, Text} from 'styles/layout';

export const Container = styled(TouchableOpacity)`
  margin: ${({theme}) => theme.spacing.great}px
    ${({theme}) => theme.spacing.small}px;
  align-items: center;
  flex-grow: 1;
  flex-basis: 0;
`;

export const Title = styled(Text)`
  font-size: ${({theme}) => theme.fontSizes.small};
  color: ${({theme}) => theme.colors.white};
  padding-top: ${({theme}) => theme.spacing.small}px;
`;
