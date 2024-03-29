import { font } from "./../../styles/Common";
import styled from "styled-components";
import { theme } from "../../styles/Theme";

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
  transition: ${theme.animations.transition};
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
const Footer = styled.footer`
  position: relative;
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
export const S = {
  SocialList,
  SocialItem,
  SocialLink,
  Copyright,
  Footer,
  Name,
};
