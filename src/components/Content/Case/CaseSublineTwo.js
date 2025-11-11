import React from "react";
import styled from "@emotion/styled";

import { Devices, Colors } from "../../DesignSystem";

const CaseSublineTwo = ({ subline }) => {
  const CaseSublineTwo = styled.h5`
    position: static;
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 550;
    letter-spacing: 0.04rem;
    margin: 0 0 8px;

    !color: ${Colors.primaryText.mediumEmphasis};

    flex: none;
    order: 0;
    flex-grow: 0;
    font-size: 24px;
    line-height: 142%;
    margin-top: 0 auto;
    width: 90%;

    font-size: 28px;
    line-height: 112%;
    text-align: left;
    width: 90%;

    ${Devices.tabletS} {
      width: 520px;
      font-size: 36px;
      line-height: 112%;
    }

    ${Devices.tabletM} {
      width: 520px;
    }

    ${Devices.laptopS} {
      width: 650px;
    }
  `;

  return <CaseSublineTwo>{subline}</CaseSublineTwo>;
};

export default CaseSublineTwo;
