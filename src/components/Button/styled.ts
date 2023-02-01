import styled from "styled-components";

interface buttonWidth {
  readonly width: string;
}

export const ButtonStyled = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  color: #ffffff;
  background: #074ee8;
  font-size: 16px;
  gap: 12px;
  width: ${(props: buttonWidth) => props.width}px;
  height: 40px;
  border-radius: 4px;
`;
