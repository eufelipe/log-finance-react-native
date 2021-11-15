import styled from 'styled-components/native';
import {Text, TouchableOpacity} from 'styles/layout';

export const Container = styled(TouchableOpacity)`
  background: ${({theme}) => theme.colors.seconday};
  margin: ${({theme}) => theme.spacing.small}px;
  padding: ${({theme}) => theme.spacing.great}px
    ${({theme}) => theme.spacing.tall}px;
  border-radius: ${({theme}) => theme.spacing.tall}px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Title = styled(Text)`
  color: ${({theme}) => theme.colors.white};
  font-size: ${({theme}) => theme.fontSizes.medium};
  font-weight: ${({theme}) => theme.fontWeight.bold};
  text-align: center;
`;
