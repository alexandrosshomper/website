import React from "react";
import styled from "@emotion/styled";

import { Devices } from "../DesignSystem";
import Wortmarke from "./Wortmarke";

const IdentityLink = styled.a`
  float: left;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  margin-top: 11px;

  width: 140px;
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

const Logo = styled.div`
  width: 32px;
  height: 32px;
  background-image: url("/img/Identity/Logo/alexandros shomper logo@2x.png");
  background-size: contain;
  border-radius: 30px;
`;

const Identity = (props) => {
  return (
    <IdentityLink className="Identity" href="/">
      <Logo />
      <Wortmarke />
    </IdentityLink>
  );
};

export default Identity;
