import styled from 'styled-components/native';
import Colors from 'styles/colors';
import {Text, TouchableOpacity} from 'styles/layout';

const BUTTON_COLOR = Colors.seconday;

interface ButtonProps {
  disabled?: boolean;
  inverse?: boolean;
}

export const Container = styled(TouchableOpacity)<ButtonProps>`
  background: ${({disabled, inverse = false}) =>
    inverse ? 'transparent' : disabled ? BUTTON_COLOR + '40' : BUTTON_COLOR};
  margin: ${({theme}) => theme.spacing.small}px;
  padding: ${({theme}) => theme.spacing.great}px
    ${({theme}) => theme.spacing.tall}px;
  border-radius: ${({theme}) => theme.spacing.tall}px;
  border: 2px solid
    ${({inverse = false}) => (inverse ? BUTTON_COLOR : 'transparent')};
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-width: 120px;
`;

export const Title = styled(Text)<ButtonProps>`
  color: ${({theme, inverse = false}) =>
    inverse ? BUTTON_COLOR : theme.colors.white};
  font-size: ${({theme}) => theme.fontSizes.medium};
  font-weight: ${({theme}) => theme.fontWeight.bold};
  text-align: center;
`;
