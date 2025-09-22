import React from "react";
import styled from "@emotion/styled";

import { Devices, Colors } from "../../DesignSystem";
const StyledHeadHeadline = styled.h1`
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  font-style: normal;

  color: ${Colors.primaryText.highEmphasis};
  margin-bottom: 8px;
  margin-top: 0px;

  font-size: 44px;
  line-height: 109%;
  text-align: center;
  ${Devices.tabletS} {
    text-align: center;
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
    width: 920px;

    font-size: 80px;
    line-height: 114%;
  }
`;


const HeadHeadline = ({ headline }) => {
return <StyledHeadHeadline>{headline}</StyledHeadHeadline>;
};

export default HeadHeadline;
