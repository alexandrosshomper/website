import React from "react";
import styled from "@emotion/styled";

import { Devices } from "../../DesignSystem";

import CaseHeadlineTwo from "./CaseHeadlineTwo";
import CaseSubline from "./CaseSubline";
//import SectionCopy from "./SectionCopy";

const CaseSectionHead = ({ headline, subline, copy }) => {
  const CaseSectionHead = styled.div`
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
    width: 70%;

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
      width: 567px;
    }
  `;
  return (
    <CaseSectionHead>
      {headline && <CaseHeadlineTwo headline={headline} />}
      {subline && <CaseSubline subline={subline} />}
      {/*{copy && <SectionCopy copy={copy} />}*/}
    </CaseSectionHead>
  );
};

export default CaseSectionHead;
