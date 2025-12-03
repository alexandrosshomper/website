import React from "react";
import styled from "@emotion/styled";

import { Devices, Colors } from "../../DesignSystem";

const SectionDivider = ({ text }) => {
  const SectionDivider = styled.p`
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-style: normal;

    color: ${Colors.primaryText.lowEmphasis};
    margin: 0px 0px 8px 0px;

    font-size: 20px;
    line-height: 112%;
    text-align: left;

    ${Devices.tabletS} {
      text-align: left;
      width: 576px;
      margin-left: 0px;
      margin-right: 0px;
    }
    ${Devices.tabletM} {
      width: 720px;

      font-size: 20px;
      line-height: 111%;
    }
    ${Devices.laptopS} {
      width: 864px;

      font-size: 24px;
      line-height: 100%;
    }
    ${Devices.laptopM} {
      width: 1152px;

      font-size: 24px;
      line-height: 113%;
    }
  `;

  return <SectionDivider>{text}</SectionDivider>;
};

export default SectionDivider;
