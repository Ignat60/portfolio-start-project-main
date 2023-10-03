import React from "react";
import { Logo } from "../../assets/components/logo/Logo";
import { Container } from "../../assets/components/Container";
import { FlexWrapper } from "../../assets/components/flexWrapper";
import { MobileMenu } from "./headerMenu/MobileMenu copy/MobileMenu";
import { S } from "./Header_Styles";
import { DeskTopMenu } from "./headerMenu/desktopMenu/DesktopMenu";

export const Header: React.FC = () => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 768;

  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <S.Header>
      <Container>
        <FlexWrapper justify={"space-between"} align={"center"}>
          <Logo />

          {width < breakpoint ? <MobileMenu /> : <DeskTopMenu />}
        </FlexWrapper>
      </Container>
    </S.Header>
  );
};
