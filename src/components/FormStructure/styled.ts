import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 617px;
  height: 763px;
  background: white;
  border-radius: 20px;
`;

export const GlobalWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #eceef2;
  height: 100vh;
`;

export const HeaderSection = styled.header`
  display: flex;
  flex-direction: column;
  margin-top: 56px;
  & h1 {
    font-size: 18px;
  }
`;

export const FormContent = styled.div`
  width: 100%;
  margin-left: 47px;
  margin-right: 57px;
`;
