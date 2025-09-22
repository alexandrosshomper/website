import React from "react";
import styled from "@emotion/styled";

import { Devices, Colors } from "../../DesignSystem";
const StyledSectionHeadline = styled.h2`
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  font-style: normal;

  color: ${Colors.primaryText.highEmphasis};
  margin-bottom: 8px;
  margin-top: 0px;

  font-size: 44px;
  line-height: 109%;
  text-align: left;
  ${Devices.tabletS} {
    text-align: left;
    width: 564px;
  }
  ${Devices.tabletM} {
    width: 708px;

    font-size: 44px;
    line-height: 114%;
  }
  ${Devices.laptopS} {
    width: 852px;

    font-size: 64px;
    line-height: 131%;
  }
  ${Devices.laptopM} {
    width: 996px;

    font-size: 80px;
    line-height: 114%;
  }
`;


const SectionHeadline = ({ headline }) => {
return <StyledSectionHeadline>{headline}</StyledSectionHeadline>;
};

export default SectionHeadline;
