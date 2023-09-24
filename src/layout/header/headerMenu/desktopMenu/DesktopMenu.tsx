import React from "react";
import { Menu } from "../menu/Menu";
import { S } from "../HeaderMenu_Styles";

export const DeskTopMenu: React.FC<{ menuItems: Array<string> }> = (props: {
  menuItems: Array<string>;
}) => {
  return (
    <S.DeskTopMenu>
      <Menu menuItems={props.menuItems} />
    </S.DeskTopMenu>
  );
};
