import styled from 'styled-components/native';
import LottieView from 'lottie-react-native';
import {Text} from 'styles/layout';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: ${({theme}) => theme.colors.tertiary};
`;

export const EmptyAnimation = styled(LottieView).attrs({
  autoPlay: true,
  loop: true,
})`
  width: 366px;
  height: 366px;
  margin-top: ${({theme}) => theme.spacing.small}px;
`;

export const Title = styled(Text)`
  text-align: center;
  margin: ${({theme}) => theme.spacing.tall}px 0px;
  font-size: ${({theme}) => theme.fontSizes.large};
  font-weight: ${({theme}) => theme.fontWeight.bold};
  color: ${({theme}) => theme.colors.white};
`;
export const SubTitle = styled(Text)`
  text-align: center;
  color: ${({theme}) => theme.colors.white};
  font-size: ${({theme}) => theme.fontSizes.small};
`;
