import React from "react";
import styled from "@emotion/styled";

import { Devices, Colors } from "../../DesignSystem";

const CaseHeadlineThree = ({ headline }) => {
  const CaseHeadlineThree = styled.h3`
    position: static;
    font-family: "Roboto", sans-serif;
    font-weight: bold;
    font-style: normal;
    font-weight: bold;

    color: rgba(0, 169, 157, 1);

    flex: none;
    order: 0;
    flex-grow: 0;
    font-size: 24px;
    line-height: 115%;

    margin: 0px;
    margin-bottom: 8px;

    color: transparent;
    background-image: linear-gradient(
      to right,
      ${Colors.blue},
      ${Colors.blueLight}
    );
    -webkit-background-clip: text;
    background-clip: text;
    width: 100%;

    ${Devices.tabletS} {
      width: 350px;
    }
    ${Devices.tabletM} {
      width: 480px;
    }
    ${Devices.laptopS} {
      width: 567px;
    }
    ${Devices.laptopM} {
      width: 567px;
    }
  `;

  return <CaseHeadlineThree>{headline}</CaseHeadlineThree>;
};

export default CaseHeadlineThree;
