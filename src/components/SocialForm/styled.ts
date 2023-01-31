import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 33px;
`;

export const FormController = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  color: #767676;
  font-size: 14px;

  & span {
    font-size: 18px;
    margin-bottom: 14px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 279px;
`;
