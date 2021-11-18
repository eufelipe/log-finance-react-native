import styled, {css} from 'styled-components/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {getBottomSpace} from 'react-native-iphone-x-helper';
import {TouchableOpacity, Text, Colors} from 'styles/layout';
import shadow from 'styles/shadow';
import {width} from 'styles/mixins';

const KEY_SIZE = 60;

const absolute = css`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
`;

const centered = css`
  justify-content: center;
  align-items: center;
`;

const ContainerKey = css`
  width: ${KEY_SIZE}px;
  height: ${KEY_SIZE}px;
  border-radius: ${KEY_SIZE / 2}px;
`;

export const Container = styled.View`
  padding: 5px 0px ${({theme}) => theme.spacing.venti}px;
  background: ${({theme}) => theme.colors.accent};
  border-top-right-radius: ${({theme}) => theme.spacing.great}px;
  border-top-left-radius: ${({theme}) => theme.spacing.great}px;
  ${centered}
  ${absolute}
  ${shadow}
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
  margin-top: ${({theme}) => theme.spacing.venti}px;
  margin-bottom: ${getBottomSpace()}px;
  ${centered}
`;

export const DismissArea = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  flex: 1;
  top: 0;
  blur-radius: 90px;
  ${absolute}
`;

export const Grid = styled.View`
  flex: 1;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
`;

export const Key = styled(TouchableOpacity)`
  background: ${({theme}) => theme.colors.primary};
  margin: ${({theme}) => theme.spacing.small}px;
  ${centered}
  ${ContainerKey}
`;
export const EmptyKey = styled.View`
  background: transparent;
  margin: ${({theme}) => theme.spacing.small}px;
  ${centered}
  ${ContainerKey}
`;

export const KeyLabel = styled(Text)`
  color: ${({theme}) => theme.colors.white};
`;

export const Value = styled(Text).attrs({
  lines: 1,
})`
  color: ${({theme}) => theme.colors.white};
  font-size: ${({theme}) => theme.fontSizes.big};
`;

export const ContainnerValue = styled.View`
  flex-direction: row;
  justify-content: space-between;
  flex: 1
  width: ${width - 40}px;
  padding: ${({theme}) => theme.spacing.small}px 0px;
  border-bottom: 1px solid red;
`;

export const Touchable = styled(TouchableOpacity)`
  justify-content: center;
`;

export const Label = styled(Text)`
  color: ${({theme}) => theme.colors.white};
  font-size: ${({theme}) => theme.fontSizes.small};
`;

export const BackspaceIcon = styled(MaterialIcons).attrs({
  name: 'backspace',
  size: 24,
  color: Colors.white,
})`
  margin-left: ${({theme}) => theme.spacing.great}px;
`;
