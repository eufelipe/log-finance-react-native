import styled from 'styled-components/native';

export const Screen = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
})`
  flex: 1;
  background: ${({theme}) => theme.colors.accent};
`;

export const Container = styled.View`
  flex: 1;
  align-items: center;
`;

export const Content = styled.View`
  flex: 1;
  width: 100%;
  margin-top: ${({theme}) => theme.spacing.great}px;
  padding-top: ${({theme}) => theme.spacing.great}px;
  background: ${({theme}) => theme.colors.gray};
  border-top-right-radius: ${({theme}) => theme.spacing.great}px;
  border-top-left-radius: ${({theme}) => theme.spacing.great}px;
`;

export const SubmitContainer = styled.View`
  width: 100%;
  padding: ${({theme}) => theme.spacing.tall}px
    ${({theme}) => theme.spacing.venti}px;
`;
