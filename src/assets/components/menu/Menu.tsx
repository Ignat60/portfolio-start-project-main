import React from "react";
import styled from "styled-components";

export const Menu = () => {
  return (
    <StyledMenu>
      <ul>
        <li>
          <a href="v#">Home</a>
        </li>
        <li>
          <a href="v#">Skills</a>
        </li>
        <li>
          <a href="v#">Works</a>
        </li>
        <li>
          <a href="v#">Testimony</a>
        </li>
        <li>
          <a href="v#">Contact</a>
        </li>
      </ul>
    </StyledMenu>
  );
};

const StyledMenu = styled.nav`
  ul {
    display: flex;
    gap: 30px;
  }
`;
