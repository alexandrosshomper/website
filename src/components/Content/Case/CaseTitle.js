import React from "react";
import styled from "@emotion/styled";

import { Devices, Colors } from "../../DesignSystem";
const StyledCaseTitle = styled.h1`
  direction: ltr;
  display: block;

  list-style-image: none;
  list-style-position: outside;
  list-style-type: none;

  padding: 0px;
  margin-block-end: 4px;
  margin-block-start: 0px;
  margin-bottom: 4x;
  margin-inline-end: 0px;
  margin-inline-start: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;

  text-align: left;
  text-decoration-thickness: auto;
  text-size-adjust: 100%;
  -webkit-box-direction: normal;
  -webkit-font-smoothing: antialiased;
  font-weight: 700;
  font-size: 36px;
  line-height: 120%;
  width: 90%;

  color: ${Colors.primaryText};

  margin-top: 0px;

  ${Devices.tabletS} {
    width: 564px;
    font-size: 56px;
    line-height: 120%;
  }
  ${Devices.tabletM} {
    width: 708px;
  }
  ${Devices.laptopS} {
    width: 740px;
  }
`;


const CaseTitle = ({ headline }) => {
return <StyledCaseTitle>{headline}</StyledCaseTitle>;
};

export default CaseTitle;
