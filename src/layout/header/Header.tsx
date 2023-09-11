import React from "react";
import styled from "styled-components";
import { Logo } from "../../assets/components/logo/Logo";
import { Menu } from "../../assets/components/menu/Menu";
import { Container } from "../../assets/components/Container";
import { FlexWrapper } from "../../assets/components/flexWrapper";

const items = ["Home", "Skills", "Works", "Testimony", "Contact"];

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <FlexWrapper justify={"space-between"} align={"center"}>
          <Logo />
          <Menu menuItems={items} />
        </FlexWrapper>
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background-color: #b2f2c7;
`;
