import React from "react";
import { Logo } from "../../assets/components/logo/Logo";
import { Container } from "../../assets/components/Container";
import { FlexWrapper } from "../../assets/components/flexWrapper";
import { DeskTopMenu } from "./desktopMenu/DesktopMenu";
import { MobileMenu } from "./MobileMenu copy/MobileMenu";
import { S } from "./Header_Styles";

const items = ["Home", "Skills", "Works", "Testimony", "Contact"];

export const Header: React.FC = () => {
  return (
    <S.Header>
      <Container>
        <FlexWrapper justify={"space-between"} align={"center"}>
          <Logo />
          <DeskTopMenu menuItems={items} />
          <MobileMenu menuItems={items} />
        </FlexWrapper>
      </Container>
    </S.Header>
  );
};
