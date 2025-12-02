import React from "react";
import styled from "@emotion/styled";

import { Devices } from "../DesignSystem";
import Wortmarke from "./WortmarkeLang";

const Identity = (props) => {
  const Identity = styled.div`
    float: left;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    margin-top: 15px;

    gap: 14px;
    ${Devices.tabletS} {
    }
    ${Devices.tabletM} {
    }
    ${Devices.laptopS} {
    }
    ${Devices.laptopM} {
    }
  `;

  return (
    <Identity className="Identity" href="/">
      <Wortmarke />
    </Identity>
  );
};

export default Identity;
