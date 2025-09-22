import React from "react";
import styled from "@emotion/styled";

import { Devices, Colors } from "../../DesignSystem";
const StyledHeadSubline = styled.p`
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  font-style: normal;

  color: ${Colors.primaryText.mediumEmphasis};
  margin-bottom: 8px;
  margin-top: 0px;

  font-size: 24px;
  line-height: 112%;
  text-align: center;
  width: 100%;

  ${Devices.tabletS} {
    text-align: center;
    width: 576px;
  }
  ${Devices.tabletM} {
    width: 708px;

    font-size: 24px;
    line-height: 111%;
  }
  ${Devices.laptopS} {
    width: 852px;

    font-size: 32px;
    line-height: 100%;
  }
  ${Devices.laptopM} {
    width: 720px;

    font-size: 24px;
    line-height: 124%;
  }
`;


const HeadSubline = ({ subline }) => {
return <StyledHeadSubline>{subline}</StyledHeadSubline>;
};

export default HeadSubline;
