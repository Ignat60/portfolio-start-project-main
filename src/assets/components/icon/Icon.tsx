import React from "react";
import iconSprite from "../../../assets/images/iconsSprite.svg";
// import { type } from 'os';

type iconIdPropsType = {
  iconId: string;
  width?: string;
  height?: string;
  viewBox?: string;
};

export const Icon: React.FC<iconIdPropsType> = (props: iconIdPropsType) => {
  return (
    <svg
      width={props.width || "50"}
      height={props.height || "50"}
      viewBox={props.viewBox || "0 0 50 50"}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <use xlinkHref={`${iconSprite}#${props.iconId}`} />
    </svg>
  );
};
