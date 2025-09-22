import React from "react";
import styled from "@emotion/styled";

import { Devices } from "../../DesignSystem";

import CaseHeadlineTwo from "./CaseHeadlineTwo";
import CaseSubline from "./CaseSubline";
const StyledCaseSectionHead = styled.div`
  /* Auto Layout */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;

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
    width: 564px;
  }
  ${Devices.tabletM} {
    width: 708px;
  }
  ${Devices.laptopS} {
    width: 740px;
  }
  ${Devices.laptopM} {
  }
`;

//import SectionCopy from "./SectionCopy";

const CaseSectionHead = ({ headline, subline, copy }) => {
return (
    <StyledCaseSectionHead>
      {headline && <CaseHeadlineTwo headline={headline} />}
      {subline && <CaseSubline subline={subline} />}
      {/*{copy && <SectionCopy copy={copy} />}*/}
    </StyledCaseSectionHead>
  );
};

export default CaseSectionHead;
