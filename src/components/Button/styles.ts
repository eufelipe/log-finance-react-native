import styled from 'styled-components/native';
import Colors from 'styles/colors';
import {Text, TouchableOpacity} from 'styles/layout';
import {ButtonType} from './Button';

interface ButtonProps {
  disabled?: boolean;
  inverse?: boolean;
  type?: ButtonType;
}

export const BaseButton = styled(TouchableOpacity)<ButtonProps>`
  margin: ${({theme}) => theme.spacing.small}px;
  padding: ${({theme}) => theme.spacing.great}px
    ${({theme}) => theme.spacing.tall}px;
  border-radius: ${({theme}) => theme.spacing.tall}px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-width: 120px;
  border: 2px solid transparent;
`;

export const PrimaryButton = styled(BaseButton)<ButtonProps>`
  background: ${({disabled}) =>
    disabled ? `${Colors.seconday}40` : Colors.seconday};
`;

export const InverseButton = styled(BaseButton)<ButtonProps>`
  background: transparent;
  border: 2px solid ${Colors.seconday};
`;

export const DangerButton = styled(BaseButton)<ButtonProps>`
  background: ${({disabled}) =>
    disabled ? `${Colors.danger}40` : Colors.danger};
`;

export const Title = styled(Text)<ButtonProps>`
  color: ${({theme, inverse = false}) =>
    inverse ? theme.colors.seconday : theme.colors.white};
  font-size: ${({theme}) => theme.fontSizes.medium};
  font-weight: ${({theme}) => theme.fontWeight.bold};
  text-align: center;
`;
