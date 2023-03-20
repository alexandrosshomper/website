import React from "react";
import styled from "@emotion/styled";

import { Devices, Colors } from "../../DesignSystem";

const SectionSubline = ({ subline }) => {
  const SectionSubline = styled.p`
    font-family: "Roboto", sans-serif;
    font-weight: bold;
    font-style: normal;

    color: ${Colors.primaryText.mediumEmphasis};
    margin-bottom: 8px;
    margin-top: 0px;

    font-size: 32px;
    line-height: 112%;
    text-align: left;

    ${Devices.tabletS} {
      text-align: center;
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
      width: 996px;

      font-size: 60px;
      line-height: 113%;
    }
  `;

  return <SectionSubline>{subline}</SectionSubline>;
};

export default SectionSubline;
