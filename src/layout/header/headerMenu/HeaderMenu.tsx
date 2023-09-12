import React from "react";
import styled from "styled-components";
import { theme } from "../../../styles/Theme";

// первый вариант типизации
// type MenuPropsType = {
//   menuItems: Array<string>
// }
// второй вариант задания типов пропс (используетс для одного значения)

export const HeaderMenu = (props: { menuItems: Array<string> }) => {
  return (
    <StyledMenu>
      <ul>
        {props.menuItems.map((item: string, index: number) => {
          return (
            <ListItem key={index}>
              <Link href="v#">
                {item}
                <Mask>
                  <span>{item}</span>
                </Mask>
                <Mask>
                  <span>{item}</span>
                </Mask>
              </Link>
            </ListItem>
          );
        })}
      </ul>
    </StyledMenu>
  );
};

const StyledMenu = styled.nav`
  ul {
    display: flex;
    gap: 30px;
    justify-content: center;
  }
`;

const Link = styled.a`
  text-align: center;
  font-family: Josefin Sans, sans-serif;
  font-size: 30px;
  font-weight: 400;
  color: transparent;
`;

const Mask = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  height: 50%;
  overflow-y: hidden;
  /* outline: 1px solid red; */
  color: ${theme.color.accent};

  & + & {
    top: 50%;
    span {
      display: inline-block;
      transform: translateY(-50%);
    }
  }
`;
const ListItem = styled.li`
  position: relative;

  &::before {
    content: "";
    display: inline-block;
    height: 2px;
    background-color: ${theme.color.accent};

    position: absolute;
    top: 50%;
    left: -10px;
    right: -10px;
    z-index: 1;

    transform: scale(0);
  }

  &:hover {
    &::before {
      transform: scale(1);
    }

    ${Mask} {
      transform: skewX(10deg) translateX(3px);
      color: ${theme.color.font};

      & + ${Mask} {
        transform: skewX(10deg) translateX(-3px);
      }
    }
  }
`;
