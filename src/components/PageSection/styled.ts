import styled from "styled-components";

interface ColoredProps {
  readonly colored: boolean;
}

export const WrapperSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 33px;
`;

export const ColorLine = styled.div`
  width: 171px;
  height: 44px;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props: ColoredProps) => (props.colored ? "#074EE8" : "")};
  border-bottom: 3px solid
    ${(props: ColoredProps) => (props.colored ? "#074EE8" : "#aaaaaa")};
`;
