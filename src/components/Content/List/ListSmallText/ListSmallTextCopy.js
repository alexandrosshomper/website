import React from "react";
import styled from "@emotion/styled";

import { Devices, Colors } from "../../../DesignSystem";

const ListSmallTextCopy = ({ text }) => {
  const ListSmallTextCopy = styled.p`
    font-weight: 400;
    font-size: 20px;
    line-height: 142%;

    text-align: left;
    color: ${Colors.primaryText.highEmphasis};

    margin-top: 0px;
    margin-bottom: 0px;

    ${Devices.tabletS} {
      width: 420px;
    }
    ${Devices.tabletM} {
      width: 348px;
    }
    ${Devices.laptopS} {
      width: 420px;
      font-size: 24px;
      line-height: 117%;
    }
    ${Devices.laptopM} {
      width: 100%;
      font-size: 24px;
      line-height: 117%;
    }
  `;

  return <ListSmallTextCopy>{text}</ListSmallTextCopy>;
};

export default ListSmallTextCopy;
