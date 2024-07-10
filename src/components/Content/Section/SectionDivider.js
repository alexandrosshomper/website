import React from "react";
import styled from "@emotion/styled";

import { Devices, Colors } from "../../DesignSystem";

const SectionDivider = ({ text }) => {
  const SectionDivider = styled.p`
    font-family: "Roboto", sans-serif;
    font-weight: bold;
    font-style: normal;

    color: ${Colors.primaryText.lowEmphasis};
    margin-bottom: 8px;
    margin-top: 0px;

    font-size: 20px;
    line-height: 112%;
    text-align: left;
    width: 100%;

    ${Devices.tabletS} {
      text-align: left;
      width: 564px;
    }
    ${Devices.tabletM} {
      width: 708px;

      font-size: 20px;
      line-height: 111%;
    }
    ${Devices.laptopS} {
      width: 852px;

      font-size: 24px;
      line-height: 100%;
    }
    ${Devices.laptopM} {
      width: 1141px;

      font-size: 24px;
      line-height: 113%;
    }
  `;

  return <SectionDivider>{text}</SectionDivider>;
};

export default SectionDivider;
