import styled from 'styled-components/native';
import {Text} from 'styles/layout';

export const SectionList = styled.SectionList``;

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 0px 20px;
  min-height: 70px;
  justify-content: space-between;
  background: ${({theme}) => theme.colors.white};
`;

export const Line = styled.View`
  height: 100%;
  width: 1px;
  left: 50%;
  background: ${({theme}) => theme.colors.tertiary}50;
  position: absolute;
`;

export const Content = styled.View`
  justify-content: flex-start;
  flex: 1;
`;

export const CategoryContainer = styled.View`
  align-items: center;
  justify-content: center;
  margin-right: ${({theme}) => theme.spacing.tall}px;
`;

export const Headering = styled(Text)`
  color: ${({theme}) => theme.colors.paragraph};
  font-size: ${({theme}) => theme.fontSizes.small};
  font-weight: ${({theme}) => theme.fontWeight.bold};
  padding: ${({theme}) => theme.spacing.small}px;
  margin-top: ${({theme}) => theme.spacing.tall}px;
  background: ${({theme}) => theme.colors.grayLight};
`;

export const Title = styled(Text)`
  color: ${({theme}) => theme.colors.paragraph};
  font-size: ${({theme}) => theme.fontSizes.small};
  font-weight: ${({theme}) => theme.fontWeight.bold};
  margin-right: 5px;
`;
export const Time = styled(Text)`
  color: ${({theme}) => theme.colors.paragraph};
  font-size: ${({theme}) => theme.fontSizes.tiny};
`;

export const ValueContainer = styled.View``;

export const Value = styled(Text)<{isExpense: boolean}>`
  font-size: ${({theme}) => theme.fontSizes.small};
  color: ${({theme, isExpense = true}) =>
    isExpense ? theme.colors.danger : theme.colors.success};
  font-weight: ${({theme}) => theme.fontWeight.bold};
`;
