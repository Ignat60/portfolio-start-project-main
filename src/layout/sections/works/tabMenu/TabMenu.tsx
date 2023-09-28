import React from "react";
import styled from "styled-components";
// import { theme } from "../../../../styles/Theme";
import { Link } from "../../../../assets/components/Link";

type TabMenuPropsType = {
  tabsItems: Array<{
    status: "all" | "landing" | "react" | "spa";
    title: string;
  }>;
  changeFilterStatus: (value: "all" | "landing" | "react" | "spa") => void;
};

export const TabMenu = (props: TabMenuPropsType) => {
  return (
    <StyledTabMenu>
      <ul>
        {props.tabsItems.map((item, index) => {
          return (
            <ListItem key={index}>
              <Link
                as={"button"}
                onClick={() => {
                  props.changeFilterStatus(item.status);
                }}
              >
                {item.title}
              </Link>
            </ListItem>
          );
        })}
      </ul>
    </StyledTabMenu>
  );
};

const StyledTabMenu = styled.nav`
  ul {
    display: flex;
    /* gap: 20px; */
    justify-content: space-between;
    max-width: 352px;
    width: 100%;
    border: 1px solid red;
    margin: 0 auto 40px;
  }
`;

const ListItem = styled.li``;
