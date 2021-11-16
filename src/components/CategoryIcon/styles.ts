import styled from 'styled-components/native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Colors from 'styles/colors';

const CONTAINED_SIZE = 30;
const EXTRA_SIZE_FOR_LARGE = 20;

export const Contained = styled.View<{color?: string; large?: boolean}>`
  background: ${({color}) => (color ? color : Colors.seconday)};
  width: ${({large = false}) =>
    large ? CONTAINED_SIZE + EXTRA_SIZE_FOR_LARGE : CONTAINED_SIZE}px;
  height: ${({large = false}) =>
    large ? CONTAINED_SIZE + EXTRA_SIZE_FOR_LARGE : CONTAINED_SIZE}px;

  border-radius: ${({large = false}) =>
    (large ? CONTAINED_SIZE + EXTRA_SIZE_FOR_LARGE : CONTAINED_SIZE) / 2}px;
  justify-content: center;
  align-items: center;
`;

export const IconItem = styled(MaterialIcons).attrs(
  ({large, color}: {large: boolean; color: string}) => ({
    size: !large ? 24 : 32,
    color: color ?? Colors.gray,
  }),
)``;
