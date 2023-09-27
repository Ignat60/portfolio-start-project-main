import React from "react";
import { Icon } from "../../assets/components/icon/Icon";
import { FlexWrapper } from "../../assets/components/flexWrapper";
import { S } from "./Footer_Styles";

const socialItemData = [
  {
    iconId: "telegram",
  },
  {
    iconId: "vk",
  },
  {
    iconId: "instagram",
  },
  {
    iconId: "linkedIn",
  },
];

export const Footer: React.FC = () => {
  return (
    <S.Footer>
      <FlexWrapper direction={"column"} align={"center"}>
        <S.Name>Svetlana</S.Name>
        <S.SocialList>
          {socialItemData.map((s, index) => {
            return (
              <S.SocialItem key={index}>
                <S.SocialLink>
                  <Icon
                    height={"21"}
                    width={"21"}
                    viewBox={"0 0 21px 21px"}
                    iconId={s.iconId}
                  />
                </S.SocialLink>
              </S.SocialItem>
            );
          })}
        </S.SocialList>
        <S.Copyright>© 2023 Svetlana Dyablo, All Rights Reserved.</S.Copyright>
      </FlexWrapper>
    </S.Footer>
  );
};
