import styled from "styled-components";
import checkIcon from "../../assets/checkIcon.svg";

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

export const InlineController = styled.div`
  display: flex;
  gap: 24px;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 12px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  & input {
    display: none;
  }
  & input + label:before {
    content: "";
    width: 20px;
    height: 20px;
    border-radius: 2px;
    background-color: white;
    border: 1px solid #aaaaaa;
    display: inline-block;
    vertical-align: middle;
  }
  & input:checked + label:before {
    display: flex;
    justify-content: center;
    align-items: center;
    content: url(${checkIcon});
    background-position: center;
    background-color: #074ee8;
    border: 1.5px solid #074ee8;
  }
`;
