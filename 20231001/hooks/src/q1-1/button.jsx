import { css, styled } from "styled-components";
const JBTN = ({ children, color, size }) => {
  return (
    <Button color={color} size={size}>
      {children}
    </Button>
  );
};
export default JBTN;

const COLORCSS = {
  primary: css`
    background-color: violet;
    color: #fff;
  `,
  secondary: css`
    background-color: gray;
    color: #fff;
  `,
};
const FONTCSS = {
  small: css`
    font-size: 12px;
  `,
  mideum: css`
    font-size: 18px;
  `,
  large: css`
    font-size: 124px;
  `,
};
const Button = styled.button`
  ${({ color }) => COLORCSS[color]}
  ${({ size }) => FONTCSS[size]}
`;
