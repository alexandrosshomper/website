import React from "react";
import styled from "@emotion/styled";

import { Devices, Colors } from "../../DesignSystem";

const HeadCopy = ({ copy }) => {
  const HeadCopy = styled.p`
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: normal;
    color: ${Colors.primaryText.highEmphasis};
    margin: 0px 24px 24px 24px;

    font-size: 20px;
    line-height: 120%;
    text-align: center;

    ${Devices.tabletS} {
      text-align: center;
      width: 576px;
    }
    ${Devices.tabletM} {
      width: 720px;

      font-size: 36px;
      line-height: 111%;
      margin-bottom: 32px;
      margin-left: 0px;
      margin-right: 0px;
    }
    ${Devices.laptopS} {
      width: 864px;

      font-size: 36px;
      line-height: 100%;
      margin-bottom: 38px;
    }
    ${Devices.laptopM} {
      width: 1152px;

      font-size: 42px;
      line-height: 113%;
      margin-bottom: 46px;
    }
  `;

  return <HeadCopy>{copy}</HeadCopy>;
};

export default HeadCopy;
