import React from "react";
import PageSection from "../PageSection";
import { Wrapper, GlobalWrapper, FormContent, HeaderSection } from "./styled";
const FormStructure: React.FC<{ children: React.ReactNode }> = (props) => {
  return (
    <GlobalWrapper>
      <Wrapper>
        <FormContent>
          <HeaderSection>
            <h1>Team Sign Up</h1>
            <PageSection />
          </HeaderSection>
          {props.children}
        </FormContent>
      </Wrapper>
    </GlobalWrapper>
  );
};

export default FormStructure;
