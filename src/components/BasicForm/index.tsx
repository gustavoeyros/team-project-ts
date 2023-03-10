import { useContext } from "react";
import { UserContext } from "../../store/user-context";
import Button from "../Button";
import SelectForm from "../SelectForm";
import InputForm from "../InputForm";
import {
  Form,
  FormController,
  InlineController,
  CheckboxContainer,
  ButtonContainer,
} from "./styled";
import nextIcon from "../../assets/nextIcon.svg";

interface IUser {
  fullName: "";
  nickname: "";
  email: "";
  birthday: "";
  age: "";
  terms: false;
  linkedin: "";
  github: "";
  certificates: "";
  teamName: "";
  institution: "";
  graduation: "";
}

interface IContext {
  userInput: IUser[];
  setUserInput: React.Dispatch<React.SetStateAction<any>>;
}

const BasicForm = () => {
  const { setUserInput, userInput } = useContext(UserContext) as IContext;

  const onChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setUserInput({
      ...userInput,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };
  //days
  const days = [];
  for (let i = 1; i <= 31; i++) {
    i < 10 ? days.push(`0${i}`) : days.push(`${i}`);
  }
  //month
  const month = [];
  for (let i = 1; i <= 12; i++) {
    i < 10 ? month.push(`0${i}`) : month.push(`${i}`);
  }
  //year
  const year = [];
  for (let i = 1; i <= 113; i++) {
    year.push(`${new Date().getFullYear() - i}`);
  }

  return (
    <Form>
      <FormController>
        <label htmlFor="fullname">Full Name *</label>
        <InputForm
          type="text"
          id="fullname"
          placeholder="Foo Bar"
          width="515"
          name="fullName"
          onChange={onChangeHandler}
        />
      </FormController>

      <FormController>
        <label htmlFor="nickname">Nickname</label>
        <InputForm
          type="text"
          id="nickname"
          placeholder="Juanito"
          width="515"
          name="nickname"
          onChange={onChangeHandler}
        />
      </FormController>

      <InlineController>
        <FormController>
          <label htmlFor="email">Email *</label>
          <InputForm
            type="email"
            id="email"
            placeholder="foo@bar.com"
            width="330"
            name="email"
            onChange={onChangeHandler}
          />
        </FormController>

        <FormController>
          <label htmlFor="phone">Phone</label>
          <InputForm
            type="string"
            id="phone"
            placeholder="(83) 00000-0000"
            width="162"
            name="phone"
            onChange={onChangeHandler}
          />
        </FormController>
      </InlineController>

      <FormController>
        <span>Birthday *</span>
        <InlineController>
          <FormController>
            <label htmlFor="">Day</label>
            <SelectForm content={days} />
          </FormController>

          <FormController>
            <label htmlFor="">Month</label>
            <SelectForm content={month} />
          </FormController>

          <FormController>
            <label htmlFor="">Year</label>
            <SelectForm content={year} />
          </FormController>
          <FormController>
            <label htmlFor="">Age</label>
            <InputForm
              type="number"
              id="fullname"
              placeholder="18"
              width="101"
            />
          </FormController>
        </InlineController>
      </FormController>

      <CheckboxContainer>
        <input type="checkbox" id="check" />
        <label htmlFor="check"></label>
        <span>I accept the terms and privacy</span>
      </CheckboxContainer>

      <ButtonContainer>
        <Button width="82" path="/social">
          Next <img src={nextIcon} />
        </Button>
      </ButtonContainer>
    </Form>
  );
};

export default BasicForm;
