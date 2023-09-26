import React from "react";
import { SectionTitle } from "../../../assets/components/SectionTitle";
import { FlexWrapper } from "../../../assets/components/flexWrapper";
import { Skill } from "./skill/skill";
import { Container } from "../../../assets/components/Container";
import { S } from "./Skills_Styles";

const skillData = [
  {
    iconId: "code",
    title: "html5",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
  },

  {
    iconId: "css",
    title: "css3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
  },
  {
    iconId: "figmaSvg",
    title: "WEB DESIgN",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
  },
  {
    iconId: "reactSvg",
    title: "React",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
  },
  {
    iconId: "styledComponentsIcon",
    title: "styled components",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
  },
  {
    iconId: "typescriptSvg",
    title: "typeScript",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
  },
];

export const Skills = () => {
  return (
    <S.Skills>
      <Container>
        <SectionTitle>My Skills</SectionTitle>
        <FlexWrapper wrap="wrap" justify="space-between">
          {skillData.map((s, index) => {
            return (
              <Skill
                iconId={s.iconId}
                key={index}
                title={s.title}
                description={s.description}
              />
            );
          })}
        </FlexWrapper>
      </Container>
    </S.Skills>
  );
};
