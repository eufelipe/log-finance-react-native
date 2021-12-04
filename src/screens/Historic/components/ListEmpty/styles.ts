import styled from 'styled-components/native';
import LottieView from 'lottie-react-native';
import {Text} from 'styles/layout';

export const Container = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

export const EmptyAnimation = styled(LottieView).attrs({
  autoPlay: true,
  loop: true,
})`
  width: 350px;
  height: 153px;
  margin-top: ${({theme}) => theme.spacing.small}px;
`;

export const Title = styled(Text)`
  text-align: center;
  margin: ${({theme}) => theme.spacing.venti}px 0px;
  font-size: ${({theme}) => theme.fontSizes.large};
  font-weight: ${({theme}) => theme.fontWeight.bold};
  color: ${({theme}) => theme.colors.primary};
`;
export const SubTitle = styled(Text)`
  text-align: center;
  color: ${({theme}) => theme.colors.gray};
  font-size: ${({theme}) => theme.fontSizes.small};
`;
