import styled from 'styled-components/native';
import LottieView from 'lottie-react-native';
import {Text} from 'styles/layout';

export const Container = styled.View`
  justify-content: center;
  align-items: center;
  margin: 30px 20px;
`;

export const EmptyAnimation = styled(LottieView).attrs({
  autoPlay: true,
  loop: true,
})`
  width: 300px;
  height: 300px; 
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
