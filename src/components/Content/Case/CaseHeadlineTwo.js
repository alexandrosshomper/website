import React from "react";
import styled from "@emotion/styled";

import { Devices, Colors } from "../../DesignSystem";

const CaseHeadlineTwo = ({ headline }) => {
  const CaseHeadlineTwo = styled.h2`
    font-family: "Roboto", sans-serif;
    font-weight: bold;
    font-style: normal;

    color: ${Colors.primaryText.highEmphasis};
    margin-bottom: 8px;
    margin-top: 0px;

    width: 90%;

    font-size: 28px;
    line-height: 109%;
    text-align: left;
    ${Devices.tabletS} {
      width: 564px;
      font-size: 36px;
      line-height: 109%;
    }
    ${Devices.tabletM} {
      width: 708px;
    }
    ${Devices.laptopS} {
      width: 740px;
    }
    ${Devices.laptopM} {
    }
  `;

  return <CaseHeadlineTwo>{headline}</CaseHeadlineTwo>;
};

export default CaseHeadlineTwo;
