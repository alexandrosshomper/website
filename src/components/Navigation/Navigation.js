import React from "react";
import styled from "@emotion/styled";

import { Devices, Colors } from "../DesignSystem";
import Menu from "./Menu";
import Identity from "../Identity/Identity";
import Bio from "./Bio";

const Navigation = (props) => {
  const Navigation = styled.header`
    padding-top: 16px;
    height: 132px;
    padding-bottom: 72px;
    border-bottom: 1px solid;
    border-color: ${Colors.primaryText.highEmphasis};
    margin-right: 24px;
    margin-left: 24px;
    ${Devices.tabletS} {
      margin: 0 auto;
      width: 564px;
    }
    ${Devices.tabletM} {
      width: 708px;
    }
    ${Devices.laptopS} {
      width: 852px;
    }
    ${Devices.laptopM} {
      width: 1140px;
    }
  `;

  return (
    <Navigation>
      <Menu />
      <Identity />
      <Bio />
    </Navigation>
  );
};

export default Navigation;
