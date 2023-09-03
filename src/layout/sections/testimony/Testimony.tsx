import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../assets/components/SectionTitle";
import { Icon } from "../../../assets/components/icon/Icon";
import { Slider } from "../../../assets/components/slider/Slider";
import { FlexWrapper } from "../../../assets/components/flexWrapper";

export const Testimony = () => {
  return (
    <StyledTestimony>
      <SectionTitle>Testimony</SectionTitle>
      <FlexWrapper direction={"column"} align={"center"}>
        <Icon iconId={"quoteAlt"} />
        <Slider />
      </FlexWrapper>
    </StyledTestimony>
  );
};

const StyledTestimony = styled.section`
  background-color: #dfe8ff;
  min-height: 50vh;
`;
