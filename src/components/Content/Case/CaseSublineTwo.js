import React from "react";
import styled from "@emotion/styled";

import { Devices, Colors } from "../../DesignSystem";

const CaseSublineTwo = ({ subline }) => {
  const CaseSublineTwo = styled.span`
    position: static;
    font-family: "Roboto", sans-serif;
    font-weight: bold;
    font-style: normal;
    font-weight: 400;

    color: ${Colors.primaryText.mediumEmphasis};

    flex: none;
    order: 0;
    flex-grow: 0;
    font-size: 24px;
    line-height: 142%;
    margin-top: 0 auto;
    width: 90%;

    ${Devices.tabletS} {
      width: 564px;
    }
    ${Devices.tabletM} {
      width: 708px;
    }
    ${Devices.laptopS} {
      width: 740px;
    }
  `;

  return <CaseSublineTwo>{subline}</CaseSublineTwo>;
};

export default CaseSublineTwo;
