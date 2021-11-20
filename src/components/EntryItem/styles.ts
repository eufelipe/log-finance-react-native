import styled from 'styled-components/native';

import {Text, TouchableOpacity} from 'styles/layout';

export const Container = styled(TouchableOpacity)`
  background: ${({theme}) => theme.colors.white};
  margin: ${({theme}) => theme.spacing.small}px
    ${({theme}) => theme.spacing.tall}px;
  padding: ${({theme}) => theme.spacing.tall}px
    ${({theme}) => theme.spacing.great}px;
  border-radius: ${({theme}) => theme.spacing.great}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const CategoryContainer = styled.View`
  margin-right: ${({theme}) => theme.spacing.great}px;
`;
export const Description = styled.View`
  flex: 1;
  justify-content: center;
`;

export const BaseText = styled(Text)`
  color: ${({theme}) => theme.colors.paragraph};
  font-size: ${({theme}) => theme.fontSizes.small};
`;

export const Title = styled(BaseText)`
  font-size: ${({theme}) => theme.fontSizes.medium};
`;
export const SubTitle = styled(BaseText)``;

export const Value = styled(BaseText)<{isExpense: boolean}>`
  color: ${({theme, isExpense = true}) =>
    isExpense ? theme.colors.danger : theme.colors.success};
  font-weight: ${({theme}) => theme.fontWeight.bold};
`;
