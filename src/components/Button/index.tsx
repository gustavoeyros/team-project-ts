import { useNavigate } from "react-router-dom";
import { ButtonStyled } from "./styled";
const Button: React.FC<{
  children: React.ReactNode;
  width: string;
  path?: string;
}> = (props) => {
  const navigate = useNavigate();
  return (
    <ButtonStyled width={props.width} onClick={() => navigate(`${props.path}`)}>
      {props.children}
    </ButtonStyled>
  );
};

export default Button;
