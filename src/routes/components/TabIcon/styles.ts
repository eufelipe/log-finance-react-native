import styled from 'styled-components/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import shadow from 'styles/shadow';

export const Icon = styled(MaterialIcons).attrs({
  size: 32,
})``;

export const AddButtonContainer = styled.View`
  background-color: ${({theme}) => theme.colors.seconday};
  padding: ${({theme}) => theme.spacing.tall}px;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -60px;
  align-self: center;
  z-index: 100;
  border-radius: 50px;
  elevation: 20;
  ${shadow}
`;
