import styled from 'styled-components/native';

import {Text} from 'styles/layout';

export const Label = styled(Text)`
  color: ${({theme}) => theme.colors.white}50;
  font-size: ${({theme}) => theme.fontSizes.small};
`;

export const Title = styled(Label)`
  color: ${({theme}) => theme.colors.white};
  font-size: ${({theme}) => theme.fontSizes.small};
  font-weight: ${({theme}) => theme.fontWeight.bold};
`;
