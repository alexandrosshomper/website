import React from "react";
import styled from "@emotion/styled";

import { Devices, Colors } from "../../DesignSystem";

const CaseSectionTitle = ({ text }) => {
  const CaseSectionTitle = styled.h3`
    font-family: "Roboto", sans-serif;
    font-weight: bold;
    font-style: normal;

    color: ${Colors.primaryText.highEmphasis};
    margin-bottom: 8px;
    margin-top: 0px;

    width: 70%;

    font-size: 28px;
    line-height: 109%;
    text-align: left;
    ${Devices.tabletS} {
      width: 520px;
      font-size: 36px;
      line-height: 109%;
    }
    ${Devices.tabletM} {
      width: 520px;
    }
    ${Devices.laptopS} {
      width: 650px;
    }
    ${Devices.laptopM} {
    }
  `;

  return <CaseSectionTitle>{text}</CaseSectionTitle>;
};

export default CaseSectionTitle;
