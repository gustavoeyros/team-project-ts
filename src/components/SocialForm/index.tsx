import Button from "../Button";
import { Form, FormController, ButtonContainer } from "./styled";
import InputForm from "../InputForm";
const SocialForm = () => {
  return (
    <Form>
      <FormController>
        <label htmlFor="linkedin">LinkedIn</label>
        <InputForm
          type="text"
          id="linkedin"
          placeholder="https://www.linkedin.com/in/foo-bar-3a0560104/"
          width="503"
        />
      </FormController>

      <FormController>
        <label htmlFor="github">Github *</label>
        <InputForm
          type="text"
          id="github"
          placeholder="https://github.com/foobar"
          width="503"
        />
      </FormController>

      <ButtonContainer>
        <Button>Next</Button>
      </ButtonContainer>
    </Form>
  );
};

export default SocialForm;
