import React from "react";
import styled from "styled-components";
import { theme } from "../../../styles/Theme";
import { Menu } from "../menu/Menu";

export const DeskTopMenu: React.FC<{ menuItems: Array<string> }> = (props: {
  menuItems: Array<string>;
}) => {
  return (
    <StyledDeskTopMenu>
      <Menu menuItems={props.menuItems} />
    </StyledDeskTopMenu>
  );
};

const StyledDeskTopMenu = styled.nav`
  ul {
    display: flex;
    gap: 30px;
    justify-content: center;
  }
  @media ${theme.media.tablet} {
    display: none;
  }
`;
