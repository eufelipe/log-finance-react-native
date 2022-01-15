import styled from 'styled-components/native';

const patternHexColor = /^#([0-9a-f]{3}){1,2}$/i;

export const Container = styled.View`
  background: ${({theme}) => theme.colors.accent};
  border-radius: ${({theme}) => theme.spacing.small}px;
`;

export const Progress = styled.View<{percent?: number; color?: string}>`
  background: ${({theme, color}) =>
    color && patternHexColor.test(color) ? color : theme.colors.seconday}50;
  border-radius: ${({theme}) => theme.spacing.small}px;
  width: ${({percent = 0}) => (percent > 100 ? 100 : percent)}%;
  height: 10px;
`;
export const Title = styled.Text`
  font-size: 16px;
`;
