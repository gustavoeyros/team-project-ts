import PageSection from "../PageSection";
import { Wrapper, GlobalWrapper, FormContent, HeaderSection } from "./styled";
const FormStructure = () => {
  return (
    <GlobalWrapper>
      <Wrapper>
        <FormContent>
          <HeaderSection>
            <h1>Team Sign Up</h1>
            <PageSection />
          </HeaderSection>
        </FormContent>
      </Wrapper>
    </GlobalWrapper>
  );
};

export default FormStructure;
