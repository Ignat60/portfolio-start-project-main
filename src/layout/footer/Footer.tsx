import React from "react";
import styled from "styled-components";
import { Icon } from "../../assets/components/icon/Icon";
import { FlexWrapper } from "../../assets/components/flexWrapper";
import { theme } from "../../styles/Theme";
import { font } from "../../styles/Common";

export const Footer = () => {
  return (
    <StyledFooter>
      <FlexWrapper direction={"column"} align={"center"}>
        <Name>Svetlana</Name>
        <SocialList>
          <SocialItem>
            <SocialLink>
              <Icon
                height={"21"}
                width={"21"}
                viewBox={"0 0 21px 21px"}
                iconId={"telegram"}
              />
            </SocialLink>
          </SocialItem>
          <SocialItem>
            <SocialLink>
              <Icon
                height={"21"}
                width={"21"}
                viewBox={"0 0 21px 21px"}
                iconId={"vk"}
              />
            </SocialLink>
          </SocialItem>
          <SocialItem>
            <SocialLink>
              <Icon
                height={"21"}
                width={"21"}
                viewBox={"0 0 21px 21px"}
                iconId={"instagram"}
              />
            </SocialLink>
          </SocialItem>
          <SocialItem>
            <SocialLink>
              <Icon
                height={"21"}
                width={"21"}
                viewBox={"0 0 21px 21px"}
                iconId={"linkedIn"}
              />
            </SocialLink>
          </SocialItem>
        </SocialList>
        <Copyright>© 2023 Svetlana Dyablo, All Rights Reserved.</Copyright>
      </FlexWrapper>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  background-color: ${theme.color.primaryBg};
  padding: 40px 0;
`;

const Name = styled.span`
  ${font({
    family: '"Josefin Sans", sans-serif',
    weight: 700,
    Fmax: 22,
    Fmin: 16,
  })};
  letter-spacing: 3px;
`;

const SocialList = styled.ul`
  display: flex;
  gap: 20px;
  margin: 30px 0;
`;

const SocialItem = styled.li``;

const SocialLink = styled.a`
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  width: 35px;
  height: 35px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${theme.color.accent};

  &:hover {
    color: ${theme.color.primaryBg};
    transform: translateY(-4px);
  }
`;

const Copyright = styled.small`
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  opacity: 0.5;
`;
