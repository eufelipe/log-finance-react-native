import styled from 'styled-components/native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Colors from 'styles/colors';

const CONTAINED_SIZE = 30;

export const Contained = styled.View<{color?: string}>`
  background: ${({color = '#6F7D9B'}) => color};
  width: ${CONTAINED_SIZE}px;
  height: ${CONTAINED_SIZE}px;
  border-radius: ${CONTAINED_SIZE / 2}px;
  justify-content: center;
  align-items: center;
`;

export const IconItem = styled(MaterialIcons).attrs({
  size: 24,
  color: Colors.gray,
})``;
