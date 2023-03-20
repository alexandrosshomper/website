import React from "react";
import styled from "@emotion/styled";

import { Devices, Colors } from "../DesignSystem";

const Bio = (props) => {
  const Bio = styled.div`
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
    height: 140px;
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
      display: block;
    }
  `;

  return (
    <Bio>
      <span style={{ fontWeight: "600" }}>Digital Anthropologist </span>{" "}
      Experienced Product-, Service & Business Designer with demonstrated track
      record of successfully developing meaningful experiences that people love
      by using emerging technology, solid company purpose, and a strong brand to
      elevate human experiences and interactions.
    </Bio>
  );
};

export default Bio;
