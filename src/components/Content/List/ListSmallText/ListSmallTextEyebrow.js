import React from "react";
import styled from "@emotion/styled";

import { Devices, Colors } from "../../../DesignSystem";

const ListSmallTextEyebrow = ({ text, color1, color2 }) => {
  let csscolor = null;
  if (color1 && color2) {
    csscolor = `background-image: linear-gradient(to right, ${color1}, ${color2});`;
  } else {
    csscolor = `background-image: linear-gradient(to right, ${Colors.red}, ${Colors.redLight});`;
  }
  const ListSmallTextEyebrow = styled.h3`
    font-weight: 700;
    font-size: 16px;
    line-height: 120%;
    margin-right: 24px;
    text-align: left;
    color: transparent;
    ${csscolor};
    -webkit-background-clip: text;
    background-clip: text;

    margin-top: 0px;
    margin-bottom: 4px;

    width: 100%;

    ${Devices.tabletS} {
      font-size: 16px;
    }
    ${Devices.tabletM} {
      font-size: 16px;
    }
    ${Devices.laptopS} {
      font-size: 20px;
    }
  `;

  return <ListSmallTextEyebrow>{text}</ListSmallTextEyebrow>;
};

export default ListSmallTextEyebrow;
