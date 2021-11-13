import {css} from 'styled-components/native';

const shadow = css`
  shadow-color: ${({theme}) => theme.colors.black};
  shadow-offset: 1px 3px;
  shadow-opacity: 0.22;
  shadow-radius: 10px;
  elevation: 10;
`;

export default shadow;
