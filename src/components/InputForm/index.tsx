import { InputStyle } from "./styled";
const InputForm: React.FC<{
  type: string;
  placeholder: string;
  id: string;
  width: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  name?: string;
}> = (props) => {
  return (
    <InputStyle
      type={props.type}
      placeholder={props.placeholder}
      id={props.id}
      width={props.width}
      onChange={props.onChange}
      name={props.name}
    />
  );
};

export default InputForm;
