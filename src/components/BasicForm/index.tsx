import InputForm from "../InputForm";
import { Form, FormController, InlineController } from "./styled";

const BasicForm = () => {
  return (
    <Form>
      <FormController>
        <label htmlFor="fullname">Full Name *</label>
        <InputForm
          type="text"
          id="fullname"
          placeholder="Foo Bar"
          width="515"
        />
      </FormController>

      <FormController>
        <label htmlFor="nickname">Nickname</label>
        <InputForm
          type="text"
          id="nickname"
          placeholder="Juanito"
          width="515"
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
          />
        </FormController>

        <FormController>
          <label htmlFor="phone">Phone</label>
          <InputForm
            type="string"
            id="phone"
            placeholder="(83) 00000-0000"
            width="162"
          />
        </FormController>
      </InlineController>
    </Form>
  );
};

export default BasicForm;