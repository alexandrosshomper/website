import React from "react";
import styled from "@emotion/styled";

import { Devices, Colors } from "../../DesignSystem";

const CaseHeadline = ({ headline }) => {
  const CaseHeadline = styled.h2`
    font-family: "Roboto", sans-serif;
    font-weight: bold;
    font-style: normal;

    color: ${Colors.primaryText.highEmphasis};
    margin-bottom: 8px;
    margin-top: 0px;

    width: 100%;

    font-size: 56px;
    line-height: 109%;
    text-align: left;
    ${Devices.tabletS} {
      text-align: left;
      width: 350px;
    }
    ${Devices.tabletM} {
      width: 480px;

      font-size: 44px;
      line-height: 114%;
    }
    ${Devices.laptopS} {
      width: 567px;

      font-size: 80px;
      line-height: 114%;
    }
    ${Devices.laptopM} {
      width: 567px;
    }
  `;

  return <CaseHeadline>{headline}</CaseHeadline>;
};

export default CaseHeadline;
