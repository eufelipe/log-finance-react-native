import styled from 'styled-components/native';
import {getBottomSpace} from 'react-native-iphone-x-helper';

import {Text, TouchableOpacity} from 'styles/layout';
import shadow from 'styles/shadow';
import {isIos, width} from 'styles/mixins';

const TAB_BAR_HEIGHT_WITH_TITLE = (isIos ? 40 : 80) + getBottomSpace();
const TAB_BAR_HEIGHT_WITHOUT_TITLE = (isIos ? 60 : 100) + getBottomSpace();

export const Button = styled(TouchableOpacity).attrs(
  ({disableActiveOpacity = false}: {disableActiveOpacity: boolean}) => ({
    activeOpacity: disableActiveOpacity ? 1 : 0.8,
  }),
)<{disableActiveOpacity: boolean}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${width * 0.2}px;
`;

export const Label = styled(Text)<{isFocused: boolean}>`
  color: ${({theme, isFocused = false}) =>
    isFocused ? theme.colors.white : theme.colors.paragraph};
  font-size: ${({theme}) => theme.fontSizes.small};
`;

export const Container = styled.View<{showTitle: boolean}>`
  background-color: ${({theme}) => theme.colors.primary};
  height: ${({showTitle = false}) =>
    showTitle ? TAB_BAR_HEIGHT_WITH_TITLE : TAB_BAR_HEIGHT_WITHOUT_TITLE}px;
  flex-direction: row;
  padding-bottom: ${({theme}) => theme.spacing.tall}px;
  justify-content: space-around;
  align-items: center;
  padding-vertical: 10px;
  border-top-left-radius: ${({theme}) => theme.spacing.tall}px;
  border-top-right-radius: ${({theme}) => theme.spacing.tall}px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  ${shadow}
`;
