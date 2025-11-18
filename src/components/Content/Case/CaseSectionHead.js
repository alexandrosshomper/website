import React from "react";
import styled from "@emotion/styled";

import { Devices } from "../../DesignSystem";

import CaseSectionOverline from "./CaseSectionOverline";
import CaseSectionTitle from "./CaseSectionTitle";
import CaseSectionSubline from "./CaseSectionSubline";

const CaseSectionHead = ({ headline, subline, overline }) => {
  const CaseSectionHead = styled.header`
    /* Auto Layout */
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;

    margin: 0px auto 0px auto;

    position: static;

    left: 0px;
    top: 0px;

    /* Inside Auto Layout */
    flex: none;
    order: 0;
    flex-grow: 0;
    width: 100%;

    padding-bottom: 60px;

    ${Devices.tabletS} {
      width: 520px;
    }
    ${Devices.tabletM} {
      width: 520px;
    }
    ${Devices.laptopS} {
      width: 650px;
    }
    ${Devices.laptopM} {
    }
  `;
  return (
    <CaseSectionHead>
      {overline && <CaseSectionOverline text={overline} />}
      {headline && <CaseSectionTitle text={headline} />}
      {subline && <CaseSectionSubline text={subline} />}
    </CaseSectionHead>
  );
};

export default CaseSectionHead;
