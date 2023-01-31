import selectArrow from "../../assets/selectArrow.svg";
import styled from "styled-components";

export const Select = styled.select`
  color: #767676;
  width: 115px;
  height: 40px;
  border: 2px solid #aaaaaa;
  border-radius: 4px;
  font-size: 16px;
  padding: 10px;
  outline: none;
  background-image: url(${selectArrow});
  background-repeat: no-repeat;
  background-position: 90% center;
  //remove arrow
  -webkit-appearance: none;
  -moz-appearance: none;
`;
