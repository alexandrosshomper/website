import React from "react";
import styled from "@emotion/styled";

import { Devices } from "../DesignSystem";
import Wortmarke from "./Wortmarke";
import Logo from "./Logo";

const Identity = (props) => {
  const Identity = styled.div`
    height: 134px;
    float: left;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: left;
    margin-left: 12px;
    margin-top: 15px;

    width: 60px;
    ${Devices.tabletS} {
      float: left;
      width: 132px;
      align-items: left;
    }
    ${Devices.tabletM} {
      float: left;
      width: 204px;
      align-items: left;
    }
    ${Devices.laptopS} {
      float: left;
      width: 204px;
      align-items: left;
    }
    ${Devices.laptopM} {
      float: left;
      width: 276px;
      align-items: left;
    }
  `;

  return (
    <Identity className="Identity">
      <Wortmarke />
      <Logo />
    </Identity>
  );
};

export default Identity;
