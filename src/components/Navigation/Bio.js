import React from "react";
import styled from "@emotion/styled";

import { Devices, Colors } from "../DesignSystem";
const StyledBio = styled.div`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 115%;
  color: ${Colors.primaryText.lowEmphasis};

  font-family: "Roboto", sans-serif;
  font-style: normal;
  text-align: left;
  margin: 0px;
  margin-left: 12px;
  float: left;

  column-count: 1;
  column-gap: 12px;
  column-width: 100px;
  height: 80px;
  width: 130px;

  display: none;
  ${Devices.tabletS} {
    width: 132px;

    font-weight: 500;
    font-size: 12px;
    line-height: 15px;

    display: block;
  }
  ${Devices.tabletL} {
    width: 204px;
    height: 100px;

    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    display: block;
  }
  ${Devices.laptopM} {
    font-weight: normal;
    font-size: 20px;
    line-height: 115%;
    width: 276px;
    height: 120px;

    display: block;
  }
`;


const Bio = (props) => {
return (
    <StyledBio>
      <span style={{ fontWeight: "600" }}>Product & Growth</span>
      <br />
      Experienced in core and growth initiatives from acquisition to retention &
      engagement.
      <br />
      <br />
      Bridging business, design, and tech to create awesome solutions people
      love.
    </StyledBio>
  );
};

export default Bio;
