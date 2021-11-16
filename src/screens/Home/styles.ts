import styled from 'styled-components/native';
import {Text} from 'styles/layout';

export const Container = styled.View`
  background: ${({theme}) => theme.colors.primary};
  flex: 1;
`;

export const Content = styled.View`
  background: ${({theme}) => theme.colors.grayLight};
  border-top-right-radius: ${({theme}) => theme.spacing.tall}px;
  border-top-left-radius: ${({theme}) => theme.spacing.tall}px;
  flex: 1;
`;

export const Salutation = styled(Text)`
  color: ${({theme}) => theme.colors.paragraph};
  font-size: ${({theme}) => theme.fontSizes.small};

  margin: ${({theme}) => theme.spacing.tall}px
    ${({theme}) => theme.spacing.tall}px ${({theme}) => theme.spacing.small}px;
`;
