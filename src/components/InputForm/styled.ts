import styled from "styled-components";

interface inputWidth {
  readonly width: string;
}

export const InputStyle = styled.input`
  border: 2px solid #aaaaaa;
  border-radius: 4px;
  height: 40px;
  padding: 12px;
  font-size: 16px;
  width: ${(props: inputWidth) => props.width}px;
  outline: none;
`;
