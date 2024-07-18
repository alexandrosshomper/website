import React from "react";
import styled from "@emotion/styled";

import { Devices, Colors } from "../../DesignSystem";

const SectionOverline = ({ subline }) => {
  const SectionOverline = styled.p`
    font-family: "Roboto", sans-serif;
    font-weight: bold;
    font-style: normal;

    color: ${Colors.primaryText.highEmphasis};
    max-width: 680px;
    margin: 0px 24px 8px 24px;

    font-size: 32px;
    line-height: 112%;
    text-align: left;
    padding-bottom: 24px;
    ${Devices.tabletS} {
      text-align: left;
      width: 576px;
    }
    ${Devices.tabletM} {
      min-width: 720px;
      margin-left: 0px;
      margin-right: 0px;

      font-size: 36px;
      line-height: 111%;
    }
    ${Devices.laptopS} {
      min-width: 864px;

      font-size: 48px;
      line-height: 100%;
    }
    ${Devices.laptopM} {
      width: 1152px;

      font-size: 60px;
      line-height: 113%;
    }
  `;

  return <SectionOverline>{subline}</SectionOverline>;
};

export default SectionOverline;
