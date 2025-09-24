import React from "react";
import styled from "@emotion/styled";

import { Devices, Colors } from "../../DesignSystem";

const CaseSubline = ({ subline }) => {
  const CaseSubline = styled.p`
    font-family: "Roboto", sans-serif;
    font-weight: bold;
    font-style: normal;

    color: ${Colors.primaryText.mediumEmphasis};
    margin-bottom: 8px;
    margin-top: 0px;

    font-size: 28px;
    line-height: 112%;
    text-align: left;
    width: 90%;
    ${Devices.tabletS} {
      width: 564px;
      font-size: 36px;
      line-height: 112%;
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

  return <CaseSubline>{subline}</CaseSubline>;
};

export default CaseSubline;
