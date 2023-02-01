import Button from "../Button";
import FormStructure from "../FormStructure";
import {
  Form,
  FormController,
  ButtonContainer,
  FinishContainer,
} from "./styled";
import InputForm from "../InputForm";
import moreIcon from "../../assets/moreIcon.svg";
import nextIcon from "../../assets/nextIcon.svg";
import finishIcon from "../../assets/finishIcon.svg";

const CertificatesForm = () => {
  return (
    <FormStructure>
      <Form>
        <FormController>
          <label htmlFor="certificates">Certificates</label>
          <InputForm
            type="string"
            id="certificates"
            placeholder="https://www.linkedin.com/in/foo-bar-3a0560104/"
            width="515"
          />
          <ButtonContainer>
            <Button width="109">
              <img src={moreIcon} />
              More
              <img src={nextIcon} />
            </Button>
          </ButtonContainer>
        </FormController>

        <FormController>
          <label htmlFor="teamname">Team Name *</label>
          <InputForm
            type="string"
            id="teamname"
            placeholder="https://www.linkedin.com/in/foo-bar-3a0560104/"
            width="515"
          />
        </FormController>

        <FormController>
          <label htmlFor="institution">Institution *</label>
          <InputForm
            type="string"
            id="institution"
            placeholder="Universidade Federal da Paraíba"
            width="515"
          />
        </FormController>

        <FormController>
          <label htmlFor="graduation">Graduation *</label>
          <InputForm
            type="string"
            id="graduation"
            placeholder="Ciências da Computação"
            width="515"
          />
        </FormController>

        <FinishContainer>
          <Button width="91">
            <img src={finishIcon} />
            Finish
          </Button>
        </FinishContainer>
      </Form>
    </FormStructure>
  );
};

export default CertificatesForm;
