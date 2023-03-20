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
      text-align: center;
      width: 564px;
    }
    ${Devices.tabletS} {
      width: 708px;

      font-size: 20px;
      line-height: 120%;
    }
    ${Devices.tabletS} {
      font-size: 24px;
      line-height: 133%;
    }
    ${Devices.tabletS} {
      font-size: 24px;
      line-height: 133%;
    }
  `;

  return <SectionCopy>{copy}</SectionCopy>;
};

export default SectionCopy;
