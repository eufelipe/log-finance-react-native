import styled from 'styled-components/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Colors from 'styles/colors';

export const Container = styled.View`
  margin: ${({theme}) => theme.spacing.great}px
    ${({theme}) => theme.spacing.tall}px 0px
    ${({theme}) => theme.spacing.tall}px;
  flex-direction: row;
  align-items: center;

  padding-bottom: ${({theme}) => theme.spacing.tall}px;
  border-bottom-width: 1px;
  border-bottom-color: ${({theme}) => theme.colors.grayLight}10;
`;

export const Content = styled.View`
  justify-content: center;
`;

export const Icon = styled(MaterialIcons).attrs(({name}: {name: string}) => ({
  name,
  size: 24,
  color: Colors.white,
}))`
  margin-right: ${({theme}) => theme.spacing.great}px;
`;
