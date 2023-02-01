import { WrapperSection, ColorLine } from "./styled";
const PageSection = () => {
  let pathname: string = window.location.pathname;
  return (
    <WrapperSection>
      <ColorLine colored={pathname === "/" ? true : false}>
        <span>Basic</span>
      </ColorLine>
      <ColorLine colored={pathname === "/social" ? true : false}>
        <span>Social</span>
      </ColorLine>
      <ColorLine colored={pathname === "/certificates" ? true : false}>
        <span>Certificates</span>
      </ColorLine>
    </WrapperSection>
  );
};

export default PageSection;
