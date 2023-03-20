import React from "react";
import styled from "@emotion/styled";

import { Devices, Colors } from "../../../DesignSystem";

const ListPanelCopy = ({ text }) => {
  const ListPanelCopy = styled.p`
    font-weight: 400;
    font-size: 20px;
    line-height: 130%;

    text-align: left;
    color: ${Colors.primaryText.highEmphasis};

    margin-top: 0px;
    margin-bottom: 0px;

    ${Devices.tabletS} {
      font-size: 20px;
      line-height: 117%;
    }
    ${Devices.tabletM} {
      font-size: 20px;
      line-height: 117%;
    }
    ${Devices.laptopS} {
      font-size: 24px;
      line-height: 117%;
    }
  `;

  return <ListPanelCopy>{text}</ListPanelCopy>;
};

export default ListPanelCopy;
