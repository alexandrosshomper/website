import React from "react";
import styled from "@emotion/styled";

import { Devices } from "../../DesignSystem";

const BlackQuoteText = ({ quote }) => {
  const BlackQuoteText = styled.h2`
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: bold;
    text-align: center;
    color: rgba(242, 242, 242, 1);
    margin: 0 24px 16px 24px;

    color: transparent;
    background-image: url("./img/BlackQuoteTextBackgroundImage/GradBGTiny.jpg")
      1x;
    background-image: image-set(
      url("./img/BlackQuoteTextBackgroundImage/GradBGTiny.png") 1x
    );
    background-image: -webkit-image-set(
      url("./img/BlackQuoteTextBackgroundImage/GradBGTiny.webp") 1x
    );

    //Image Set scheint noch nicht mit verschiedenen types zu finktionieren
    /*background-image: -webkit-image-set(
      url("./img/GradBGTiny.webp") type("image/webp"),
      url("./img/GradBGTiny.jp2") type("image/jp2"),
      url("./img/GradBGTiny.jxr") type("image/vnd.ms-photo"),
      url("./img/GradBGTiny.png") type("image/png"),
      url("./img/GradBGTiny.jpg") type("image/jpg")
    );

    background-image: image-set(
      url("./img/GradBGTiny.webp") type("image/webp") 1x,
      url("./img/GradBGTiny.jp2") type("image/jp2") 1x,
      url("./img/GradBGTiny.jxr") type("image/vnd.ms-photo") 1x,
      url("./img/GradBGTiny.png") type("image/png") 1x,
      url("./img/GradBGTiny.jpg") type("image/jpg") 1x
    );*/

    background-size: cover;
    -webkit-background-clip: text;
    background-clip: text;

    font-size: 24px;
    line-height: 120%;
    ${Devices.tabletS} {
      margin-bottom: 8px;
      width: 420px;
    }
    ${Devices.tabletM} {
      width: 564px;
      font-size: 44px;
      line-height: 103%;
    }
    ${Devices.laptopS} {
      width: 708px;
      font-size: 64px;
      line-height: 131%;
    }
    ${Devices.laptopM} {
      width: 996px;

      font-size: 80px;
      line-height: 105%;
    }
  `;

  return <BlackQuoteText>{quote}</BlackQuoteText>;
};

export default BlackQuoteText;
