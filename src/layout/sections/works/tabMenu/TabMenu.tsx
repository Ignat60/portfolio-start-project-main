import React from "react";
import styled from "styled-components";
// import { theme } from "../../../../styles/Theme";
import { Link } from "../../../../assets/components/Link";

// первый вариант типизации
// type MenuPropsType = {
//   menuItems: Array<string>
// }
// второй вариант задания типов пропс (используетс для одного значения)

export const TabMenu = (props: { menuItems: Array<string> }) => {
  return (
    <StyledTabMenu>
      <ul>
        {props.menuItems.map((item: string, index: number) => {
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
  margin-bottom: 40px;
  ul {
    display: flex;
    gap: 20px;
    justify-content: center;
  }
`;

const ListItem = styled.li``;
