import React from "react";
import styled from "styled-components";

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
  ul {
    display: flex;
    gap: 30px;
    justify-content: center;
  }
`;

const ListItem = styled.li``;

const Link = styled.a`
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 10px;
`;
