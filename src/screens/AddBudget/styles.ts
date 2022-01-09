import styled from 'styled-components/native';
import Colors from 'styles/colors';
import {Text} from 'styles/layout';

export const Container = styled.View`
  flex: 1;
  background: ${({theme}) => theme.colors.gray};
`;

export const Content = styled.View`
  padding: ${({theme}) => theme.spacing.tall}px 0px;
`;

export const Title = styled.Text`
  font-size: 16px;
`;

export const Label = styled(Text)`
  color: ${({theme}) => theme.colors.white}50;
  font-size: ${({theme}) => theme.fontSizes.small};
`;

export const Input = styled.TextInput.attrs({
  numberOfLines: 1,
  placeholderTextColor: Colors.grayLight,
  blurOnSubmit: true,
})`
  font-family: ${({theme}) => theme.fontFamily.regular};
  font-size: ${({theme}) => theme.fontSizes.small};
  color: ${({theme}) => theme.colors.grayLight};
  font-weight: ${({theme}) => theme.fontWeight.bold};
`;

export const SubmitContainer = styled.View`
  width: 100%;
  padding: ${({theme}) => theme.spacing.tall}px
    ${({theme}) => theme.spacing.venti}px;
`;
