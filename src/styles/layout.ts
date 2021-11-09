import styled from 'styled-components/native';

export const TouchableOpacity = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})``;

export const Text = styled.Text`
  font-family: ${({theme}) => theme.fontFamily.regular};
  font-size: ${({theme}) => theme.fontSizes.medium};
  font-weight: ${({theme}) => theme.fontWeight.regular};
  color: ${({theme}) => theme.colors.black};
`;
