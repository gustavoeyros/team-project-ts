import nextIcon from "../../assets/nextIcon.svg";
import styled from "styled-components";

export const ButtonStyled = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  color: #ffffff;
  background: #074ee8;
  font-size: 16px;
  width: 81px;
  height: 40px;
  border-radius: 4px;
  padding-right: 25px;
  background-image: url(${nextIcon});
  background-repeat: no-repeat;
  background-position: 80% center;
  background-size: 9px;
`;
