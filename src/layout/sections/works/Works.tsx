import React, { useState } from "react";
import { SectionTitle } from "../../../assets/components/SectionTitle";
import { TabMenu } from "./tabMenu/TabMenu";
import { FlexWrapper } from "../../../assets/components/flexWrapper";
import { Work } from "./work/Work";
import socialImg from "./../../../assets/images/picture_1.png";
import timerImg from "./../../../assets/images/picture_2.png";
import { Container } from "../../../assets/components/Container";
import { S } from "./Works_Styles";

// const tabsItems = ["All", "landing page", "React", "spa"];

const tabsItems: Array<{
  status: "all" | "landing" | "react" | "spa";
  title: string;
}> = [
  {
    title: "All",
    status: "all",
  },
  {
    title: "landing page",
    status: "landing",
  },
  {
    title: "React",
    status: "react",
  },
  {
    title: "spa",
    status: "spa",
  },
];

const worksData = [
  {
    title: "Social Network",
    src: socialImg,
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    type: "spa",
  },

  {
    title: "Timer",
    src: timerImg,
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sedLorem ipsum dolor sit amet, consectetur adipisicing elit, sed  do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim",
    type: "react",
  },
];

export const Works: React.FC = () => {
  const [currentFilterStatus, setCurrentFilterStatus] = useState("all");
  let filteredWorks = worksData;

  if (currentFilterStatus === "landing") {
    filteredWorks = worksData.filter((work) => work.type === "landing");
  }
  if (currentFilterStatus === "react") {
    filteredWorks = worksData.filter((work) => work.type === "react");
  }
  if (currentFilterStatus === "spa") {
    filteredWorks = worksData.filter((work) => work.type === "spa");
  }

  function changeFilterStatus(value: "all" | "landing" | "react" | "spa") {
    setCurrentFilterStatus(value);
  }

  return (
    <S.Works>
      <Container>
        <SectionTitle>My Works</SectionTitle>
        <TabMenu
          tabsItems={tabsItems}
          changeFilterStatus={changeFilterStatus}
        />

        <FlexWrapper justify="space-between" align={"flex-start"} wrap={"wrap"}>
          {filteredWorks.map((w, index) => {
            return (
              <Work title={w.title} key={index} src={w.src} text={w.text} />
            );
          })}
        </FlexWrapper>
      </Container>
    </S.Works>
  );
};
