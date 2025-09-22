import React from "react";
import styled from "@emotion/styled";

import { Devices } from "../../DesignSystem";

import SectionHeadline from "./SectionHeadline";
import SectionSubline from "./SectionSubline";
import SectionCopy from "./SectionCopy";
import SectionDivider from "./SectionDivider";
const StyledSectionHead = styled.div`
  /* Auto Layout */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-content: flex-start;
  padding: 0px;

  position: static;

  left: 0px;
  top: 0px;

  /* Inside Auto Layout */
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 24px 40px 24px;

  ${Devices.tabletS} {
    margin: 0px 0px 60px 0px;
    width: 576px;
    align-items: flex-start;
    align-content: flex-start;
  }
  ${Devices.tabletM} {
    width: 720px;
    margin: 0px 0px 60px 0px;
  }
  ${Devices.laptopS} {
    width: 864px;
    margin: 0px 0px 60px 0px;
  }
  ${Devices.laptopM} {
    width: 1152px;
    margin: 0px 0px 60px 0px;
  }
`;


const SectionHead = ({ divider, headline, subline, copy }) => {
return (
    <StyledSectionHead>
      {divider && <SectionDivider text={divider} />}
      {headline && <SectionHeadline headline={headline} />}
      {subline && <SectionSubline subline={subline} />}
      {copy && <SectionCopy copy={copy} />}
    </StyledSectionHead>
  );
};

export default SectionHead;
