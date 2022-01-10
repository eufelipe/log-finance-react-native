import styled from 'styled-components/native';
import {Text} from 'styles/layout';

const SIZE_CIRCLE = 16;

export const FlatList = styled.FlatList`
  margin: 0px 20px;
`;

export const Container = styled.View`
  flex-direction: row;
  width: 50%;
  align-items: center;
  padding: 5px 2px;
`;

export const Content = styled.View``;

export const Title = styled(Text)`
  color: ${({theme}) => theme.colors.paragraph};
  font-size: ${({theme}) => theme.fontSizes.tiny};
  font-weight: ${({theme}) => theme.fontWeight.bold};
  margin-right: 5px;
`;

export const SubTitle = styled(Title)`
  font-weight: ${({theme}) => theme.fontWeight.regular};
`;

export const Circle = styled.View<{color?: string}>`
  background: ${({theme, color = undefined}) => color ?? theme.colors.gray};
  width: ${SIZE_CIRCLE}px;
  height: ${SIZE_CIRCLE}px;
  margin-right: 5px;
  border-radius: ${SIZE_CIRCLE / 2}px;
`;
