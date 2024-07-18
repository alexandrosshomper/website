import React from "react";
import styled from "@emotion/styled";

import { Devices } from "../../DesignSystem";

import Copy from "../List/ListSmallText/ListSmallTextCopy";

const CaseSectionSummary = ({ copy }) => {
  const CaseSectionSummary = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    text-align: left;

    margin: 0px 24px 60px 24px;
    &:last-child {
      margin-bottom: 0px;
    }

    //padding-right: 12px;

    ${Devices.tabletS} {
      width: 100%;
      margin: 0px 0px 60px 0px;
    }
    ${Devices.tabletM} {
      width: 90%;
    }
    ${Devices.laptop} {
      width: 80%;
    }
  `;

  return (
    <CaseSectionSummary>{copy && <Copy text={copy} />}</CaseSectionSummary>
  );
};

export default CaseSectionSummary;
