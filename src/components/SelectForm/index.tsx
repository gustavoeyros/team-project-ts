import { Select } from "./styled";

interface ContentProps {
  content: string[];
}

const SelectForm = ({ content }: ContentProps) => {
  return (
    <Select>
      {content.map((item) => (
        <option>{item}</option>
      ))}
    </Select>
  );
};

export default SelectForm;
