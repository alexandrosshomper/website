import React from "react";
import styled from "@emotion/styled";

import { Devices, Colors } from "../../DesignSystem";
const StyledReportSubline = styled.p`
  font-family: "Roboto", sans-serif;
  font-weight: 550;
  font-style: normal;
  letter-spacing: 0.04rem;

  color: ${Colors.primaryText.mediumEmphasis};
  margin-bottom: 8px;
  margin-top: 0px;

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
  ${Devices.laptopM} {
  }
`;


const ReportSubline = ({ subline }) => {
return <StyledReportSubline>{subline}</StyledReportSubline>;
};

export default ReportSubline;
