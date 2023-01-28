import { InputStyle } from "./styled";
const InputForm: React.FC<{
  type: string;
  placeholder: string;
  id: string;
  width: string;
}> = (props) => {
  return (
    <InputStyle
      type={props.type}
      placeholder={props.placeholder}
      id={props.id}
      width={props.width}
    />
  );
};

export default InputForm;
