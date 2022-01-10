import styled from 'styled-components/native';
import {TouchableOpacity, Text} from 'styles/layout';

export const Container = styled.View`
  flex-direction: row;
  padding-top: ${({theme}) => theme.spacing.small}px;
`;

export const Touchable = styled(TouchableOpacity)`
  margin: 0px ${({theme}) => theme.spacing.great}px
    ${({theme}) => theme.spacing.tall}px;
`;

export const LineActive = styled.View<{active: boolean}>`
  height: 3px;
  width: 30px;
  align-self: center;
  border-radius: 2px;
  margin: 8px 0px 10px;
  background: ${({theme, active = false}) =>
    active ? theme.colors.white : 'transparent'};
`;

export const Label = styled(Text)<{active: boolean}>`
  font-family: ${({theme}) => theme.fontFamily.regular};
  font-size: ${({theme}) => theme.fontSizes.medium};
  font-weight: ${({theme}) => theme.fontWeight.bold};
  color: ${({theme, active = false}) =>
    active ? theme.colors.white : theme.colors.gray};
`;
