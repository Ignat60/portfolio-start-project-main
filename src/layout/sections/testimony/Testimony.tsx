import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../assets/components/SectionTitle";
import { Icon } from "../../../assets/components/icon/Icon";
import { Slider } from "../../../assets/components/slider/Slider";
import { FlexWrapper } from "../../../assets/components/flexWrapper";
import { S } from "./../skills/Skills_Styles";
import { Container } from "../../../assets/components/Container";

export const Testimony: React.FC = () => {
  return (
    <StyledTestimony>
      <Container>
        <SectionTitle>Testimony</SectionTitle>
        <FlexWrapper direction={"column"} align={"center"}>
          <S.IconWrapper>
            <Icon iconId={"quoteAlt"} />
          </S.IconWrapper>
          <Slider />
        </FlexWrapper>
      </Container>
    </StyledTestimony>
  );
};

const StyledTestimony = styled.section`
  background-color: #e7eeff;
  min-height: 50vh;
  position: relative;

  ${S.IconWrapper} {
    margin: 32px 0 69px;
    /* margin: 52px 0 72px; */
  }
`;
