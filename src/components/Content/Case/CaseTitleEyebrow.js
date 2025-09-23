import React from "react";
import styled from "@emotion/styled";
import { Devices } from "../../DesignSystem";

const CaseTitleEyebrow = ({ text, color1, color2 }) => {
  let csscolor = null;
  if (color1 && color2) {
    csscolor = `background-image: linear-gradient(to right, ${color1}, ${color2});`;
  } else {
    csscolor = `background-image: linear-gradient(to right, #ff1744, #ff616f);`;
  }
  const CaseTitleEyebrow = styled.p`
    direction: ltr;
    display: block;

    list-style-image: none;
    list-style-position: outside;
    list-style-type: none;

    padding: 0px;
    margin-block-end: 4px;
    margin-block-start: 0px;
    margin-bottom: 4x;
    margin-inline-end: 0px;
    margin-inline-start: 0px;
    margin-left: 0px;
    margin-right: 0px;
    margin-top: 0px;

    text-align: left;
    text-decoration-thickness: auto;
    text-size-adjust: 100%;
    -webkit-box-direction: normal;
    -webkit-font-smoothing: antialiased;

    font-weight: 500;
    font-size: 16px;
    line-height: 120%;
    width: 100%;

    color: transparent;
    ${csscolor};
    -webkit-background-clip: text;
    background-clip: text;

    ${Devices.tabletS} {
      width: 520px;
    }
    ${Devices.tabletM} {
      width: 520px;
    }
    ${Devices.laptopS} {
      width: 650px;
    }
  `;

  return <CaseTitleEyebrow>{text}</CaseTitleEyebrow>;
};

export default CaseTitleEyebrow;
