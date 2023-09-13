import React from "react";
import styled from "styled-components";
import photo from "./../../../assets/images/photo.jpg";
import { FlexWrapper } from "../../../assets/components/flexWrapper";
import { Container } from "../../../assets/components/Container";
import { theme } from "../../../styles/Theme";

export const Main = () => {
  return (
    <StyledMain>
      <Container>
        <FlexWrapper align={"center"} justify={"space-between"}>
          <div>
            <SmallText>Hi There</SmallText>
            <Name>
              I am <span>Svetlana Dyablo</span>
            </Name>
            <MainTitle>A Web Developer. </MainTitle>
          </div>
          <PhotoWrapper>
            <Photo src={photo} alt="" />
          </PhotoWrapper>
        </FlexWrapper>
      </Container>
    </StyledMain>
  );
};

const StyledMain = styled.section`
  display: flex;
  min-height: 100vh;
  background-color: #fff5e7;
`;

const PhotoWrapper = styled.div`
  position: relative;
  z-index: 2;

  &::before {
    content: "";
    width: 360px;
    height: 470px;
    border: solid 5px ${theme.color.accent};
    z-index: -1;

    position: absolute;
    top: -24px;
    left: 24px;
  }
`;

const Photo = styled.img`
  width: 350px;
  height: 420px;
  object-fit: cover;
`;

const MainTitle = styled.h1`
  font-size: 27px;
  font-weight: 400;
`;

const Name = styled.h2`
  font-family: Josefin Sans, sans-serif;
  font-size: 50px;
  font-weight: 700;
  letter-spacing: 0.05em;
  margin: 10px 0;

  span {
    position: relative;
    z-index: 1;

    &::before {
      content: "";
      display: inline-block;
      width: 100%;
      height: 15px;
      background-color: ${theme.color.accent};
      position: absolute;
      bottom: 3px;
      z-index: -1;
    }
  }
`;

const SmallText = styled.h2`
  font-size: 14px;
  font-weight: 400;
`;
