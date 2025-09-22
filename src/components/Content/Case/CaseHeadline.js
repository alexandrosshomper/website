import React from "react";
import styled from "@emotion/styled";

import { Devices, Colors } from "../../DesignSystem";
const StyledCaseHeadline = styled.h2`
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  font-style: normal;

  color: ${Colors.primaryText.highEmphasis};
  margin-bottom: 8px;
  margin-top: 0px;

  width: 90%;

  font-size: 56px;
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
    width: 740px;

    font-size: 80px;
    line-height: 114%;
  }
  ${Devices.laptopM} {
  }
`;


const CaseHeadline = ({ headline }) => {
return <StyledCaseHeadline>{headline}</StyledCaseHeadline>;
};

export default CaseHeadline;
