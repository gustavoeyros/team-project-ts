import { ButtonStyled } from "./styled";
const Button: React.FC<{ children: React.ReactNode }> = (props) => {
  return <ButtonStyled>{props.children}</ButtonStyled>;
};

export default Button;
