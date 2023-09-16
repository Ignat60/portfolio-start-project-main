import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../assets/components/SectionTitle";
import { Button } from "../../../assets/components/Button";
import { Container } from "../../../assets/components/Container";
import { FlexWrapper } from "../../../assets/components/flexWrapper";

export const Slogan = () => {
  return (
    <StyledSlogan>
      <Container>
        <FlexWrapper direction={"column"} align={"center"}>
          <SectionTitle>I Am Available For Freelance</SectionTitle>
          <Button>Hire me</Button>
        </FlexWrapper>
      </Container>
    </StyledSlogan>
  );
};

const StyledSlogan = styled.section``;
