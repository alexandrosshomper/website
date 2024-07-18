import React from "react";
import styled from "@emotion/styled";

import { Devices, Colors } from "../../DesignSystem";

const SectionCopy = ({ copy }) => {
  const SectionCopy = styled.p`
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: normal;
    color: ${Colors.primaryText.highEmphasis};
    margin-bottom: 8px;
    margin-top: 0px;

    font-size: 20px;
    line-height: 120%;
    text-align: left;

    ${Devices.tabletS} {
      text-align: left;
      width: 564px;
    }
    ${Devices.tabletM} {
      width: 708px;

      font-size: 36px;
      line-height: 111%;
    }
    ${Devices.laptopS} {
      width: 852px;

      font-size: 48px;
      line-height: 100%;
    }
    ${Devices.laptopM} {
      width: 1141px;

      font-size: 60px;
      line-height: 113%;
    }
  `;

  return <SectionCopy>{copy}</SectionCopy>;
};

export default SectionCopy;
