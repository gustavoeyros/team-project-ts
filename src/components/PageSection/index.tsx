import { WrapperSection, ColorLine } from "./styled";
const PageSection = () => {
  return (
    <WrapperSection>
      <ColorLine colored={true}>
        <span>Basic</span>
      </ColorLine>
      <ColorLine colored={false}>
        <span>Social</span>
      </ColorLine>
      <ColorLine colored={false}>
        <span>Certificates</span>
      </ColorLine>
    </WrapperSection>
  );
};

export default PageSection;
