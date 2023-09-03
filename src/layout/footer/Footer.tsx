import React from "react";
import styled from "styled-components";
import { Icon } from "../../assets/components/icon/Icon";
import { FlexWrapper } from "../../assets/components/flexWrapper";

export const Footer = () => {
  return (
    <StyledFooter>
      <FlexWrapper direction={"column"} align={"center"}>
        <Name>Cvetlana</Name>
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
  background-color: #fbdada;
  min-height: 20vh;
`;

const Name = styled.span``;

const SocialList = styled.ul`
  display: flex;
  gap: 30px;
`;

const SocialItem = styled.li``;

const SocialLink = styled.a``;

const Copyright = styled.small``;
