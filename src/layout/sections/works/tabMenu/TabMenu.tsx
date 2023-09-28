import React from "react";
import styled from "styled-components";
// import { theme } from "../../../../styles/Theme";
import { Link } from "../../../../assets/components/Link";

// первый вариант типизации
// type MenuPropsType = {
//   menuItems: Array<string>
// }
// второй вариант задания типов пропс (используетс для одного значения)

export const TabMenu = (props: { tabsItems: Array<string> }) => {
  return (
    <StyledTabMenu>
      <ul>
        {props.tabsItems.map((item: string, index: number) => {
          return (
            <ListItem key={index}>
              <Link href="v#">{item}</Link>
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
