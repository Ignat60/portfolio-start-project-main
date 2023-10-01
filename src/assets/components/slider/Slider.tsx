// finale code

import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./../../../styles/slider.css";
import { S } from "./Slider_Styles";
import { Icon } from "../icon/Icon";

type SlidePropsType = {
  text: string;
  userName: string;
};

const Slide = (props: SlidePropsType) => {
  return (
    <S.Slide>
      <S.Text>{props.text}</S.Text>
      <S.Name>@{props.userName}</S.Name>
    </S.Slide>
  );
};

const items = [
  <Slide
    userName={"ivan ivanow"}
    text={
      "lorem5 Lorem ipsum dolor sit lorem5 Lorem ipsum dolor sit lorem5 Lorem ipsum dolor sit lorem5 Lorem ipsum dolor sit ipsum dolor sit lorem5 Lorem ipsum dolor sit lorem5 Lorem ipsum dolor sit lorem5 Lorem it"
    }
  />,
  <Slide
    userName={"piotr petrov"}
    text={
      "Lorem lorem5 Lorem ipsum dolor sit lorem5 Lorem ipsum dolor sit lorem5 Lorem ipsum dolor sit lorem5 Lorem ipsum dolor sit ipsum dolor sit lorem5 Lorem ipsum dolor sit  "
    }
  />,
  <Slide
    userName={"igor igorev"}
    text={
      "lorem5 Lorem ipsum dolor sit lorem5 Lorem ipsum dolor sit lorem5 Lorem ipsum dolor sit lorem5 Lorem ipsum dolor sit ipsum dolor sit lorem5 Lorem ipsum   "
    }
  />,
];

export const Slider = () => (
  <S.Slider>
    <AliceCarousel
      mouseTracking
      items={items}

                    {/* пример добавления иконки вместо стрелки из библиотеки
добавляем OPTIONS из библиотеки  ( почему-то не работает)*/}

      renderPrevButton={() => {
        return <Icon iconId={"code"} />;
      }}
    />
  </S.Slider>
);

// my code

// import React from "react";
// import { FlexWrapper } from "../flexWrapper";
// import { S } from "./Slider_Styles";

// export const Slider: React.FC = () => {
//   return (
//     <S.Slider>
//       <FlexWrapper>
//         <S.Slide>
//           <S.Text>
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
//             eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim.
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//           </S.Text>
//           <S.Name>@ivan ivanow</S.Name>
//         </S.Slide>
//       </FlexWrapper>
//       <S.Pagination>
//         <span> </span>
//         <span className={"active"}> </span>
//         <span> </span>
//       </S.Pagination>
//     </S.Slider>
//   );
// };

// code from library

// import React from 'react';
// import AliceCarousel from 'react-alice-carousel';
// import 'react-alice-carousel/lib/alice-carousel.css';

// const responsive = {
//     0: { items: 1 },
//     568: { items: 2 },
//     1024: { items: 3 },
// };

// const items = [
//     <div className="item" data-value="1">1</div>,
//     <div className="item" data-value="2">2</div>,
//     <div className="item" data-value="3">3</div>,
//     <div className="item" data-value="4">4</div>,
//     <div className="item" data-value="5">5</div>,
// ];

// const Carousel = () => (
//     <AliceCarousel
//         mouseTracking
//         items={items}
//         responsive={responsive}
//         controlsStrategy="alternate"
//     />
// );
