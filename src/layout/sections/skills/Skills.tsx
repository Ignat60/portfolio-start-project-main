import React from "react";
// import { Icon } from "../../../assets/components/icon/Icon";
import { SectionTitle } from "../../../assets/components/SectionTitle";
import { FlexWrapper } from "../../../assets/components/flexWrapper";
import { Skill } from "./skill/skill";
import styled from "styled-components";

export const Skills = () => {
  return (
    <StyledSkills>
      <SectionTitle>My Skills</SectionTitle>
      <FlexWrapper wrap="wrap" justify="space-between">
        <Skill
          iconId={"codeSvg"}
          title={"html5"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
          }
        />

        <Skill
          iconId={"css"}
          title={"css3"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
          }
        />

        <Skill
          iconId={"figmaSvg"}
          title={"React"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
          }
        />

        <Skill
          iconId={"reactSvg"}
          title={"typescript"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
          }
        />

        <Skill
          iconId={"styledComponentsIcon"}
          title={"styled components"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
          }
        />
        <Skill
          iconId={"typescriptSvg"}
          title={"WEB DESIgN"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
          }
        />
      </FlexWrapper>
    </StyledSkills>
  );
};

const StyledSkills = styled.section`
  background-color: #fcf1ea;
  min-height: 100vh;
`;
