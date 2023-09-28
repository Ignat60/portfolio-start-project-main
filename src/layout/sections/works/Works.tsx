import React from "react";
import { SectionTitle } from "../../../assets/components/SectionTitle";
import { TabMenu } from "./tabMenu/TabMenu";
import { FlexWrapper } from "../../../assets/components/flexWrapper";
import { Work } from "./work/Work";
import socialImg from "./../../../assets/images/picture_1.png";
import timerImg from "./../../../assets/images/picture_2.png";
import { Container } from "../../../assets/components/Container";
import { S } from "./Works_Styles";

const tabsItems = ["All", "landing page", "React", "spa"];

const workData = [
  {
    title: "Social Network",
    src: socialImg,
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },

  {
    title: "Timer",
    src: timerImg,
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sedLorem ipsum dolor sit amet, consectetur adipisicing elit, sed  do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim",
  },
];

export const Works: React.FC = () => {
  return (
    <S.Works>
      <Container>
        <SectionTitle>My Works</SectionTitle>
        <TabMenu tabsItems={tabsItems} />

        <FlexWrapper justify="space-between" align={"flex-start"} wrap={"wrap"}>
          {workData.map((w, index) => {
            return (
              <Work title={w.title} key={index} src={w.src} text={w.text} />
            );
          })}
        </FlexWrapper>
      </Container>
    </S.Works>
  );
};
