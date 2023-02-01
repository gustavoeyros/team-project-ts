import { ButtonStyled } from "./styled";
const Button: React.FC<{ children: React.ReactNode; width: string }> = (
  props
) => {
  return <ButtonStyled width={props.width}>{props.children}</ButtonStyled>;
};

export default Button;
