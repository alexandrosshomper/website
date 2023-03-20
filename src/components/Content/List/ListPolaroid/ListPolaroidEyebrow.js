import React from "react";
import styled from "@emotion/styled";

import { Devices, Colors } from "../../../DesignSystem";

const ListPanelEyebrow = ({ text, color1, color2 }) => {
  let csscolor = null;
  if (color1 && color2) {
    csscolor = `background-image: linear-gradient(to right, ${color1}, ${color2});`;
  } else {
    csscolor = `background-image: linear-gradient(to right, ${Colors.yellowDark}, ${Colors.yellow});`;
  }
  const ListPanelEyebrow = styled.h3`
    font-weight: 700;
    font-size: 16px;
    line-height: 120%;

    text-align: left;
    color: transparent;
    ${csscolor};
    -webkit-background-clip: text;
    background-clip: text;

    margin-top: 0px;
    margin-bottom: 4px;

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

  return <ListPanelEyebrow>{text}</ListPanelEyebrow>;
};

export default ListPanelEyebrow;
