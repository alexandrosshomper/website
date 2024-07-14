import React from "react";
import styled from "@emotion/styled";

import { Devices, Colors } from "../../../DesignSystem";

const ListSmallTextCopy = ({ text }) => {
  const ListSmallTextCopy = styled.p`
    font-weight: 400;
    font-size: 20px;
    line-height: 142%;

    margin-right: 24px;
    text-align: left;
    color: ${Colors.primaryText.highEmphasis};

    margin-top: 0px;
    margin-bottom: 0px;

    width: 100%;

    ${Devices.laptopS} {
      font-size: 24px;
      line-height: 117%;
    }
    ${Devices.laptopM} {
      font-size: 24px;
      line-height: 117%;
    }
  `;

  return <ListSmallTextCopy>{text}</ListSmallTextCopy>;
};

export default ListSmallTextCopy;
