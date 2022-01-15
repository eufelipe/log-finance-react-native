import styled from 'styled-components/native';
import {Text} from 'styles/layout';

export const Container = styled.View`
  flex: 1;
`;

export const List = styled.FlatList`
  margin-top: ${({theme}) => theme.spacing.tall}px;
`;

export const Title = styled(Text)`
  font-family: ${({theme}) => theme.fontFamily.regular};
  font-size: ${({theme}) => theme.fontSizes.medium};
  font-weight: ${({theme}) => theme.fontWeight.regular};
  color: ${({theme}) => theme.colors.white};
`;

export const Value = styled(Title)`
  font-size: ${({theme}) => theme.fontSizes.medium};
  font-weight: ${({theme}) => theme.fontWeight.bold};
`;

export const Card = styled.View<{color?: string}>`
  background: ${({theme}) => theme.colors.primary};
  margin: ${({theme}) => theme.spacing.small}px
    ${({theme}) => theme.spacing.tall}px;
  padding: ${({theme}) => theme.spacing.great}px;
  height: 110px;
  border-radius: ${({theme}) => theme.spacing.great}px;
  justify-content: center;
`;

export const CardBody = styled.View`
  flex-direction: row;
`;
export const CardRow = styled.View`
  padding: 10px;
`;
