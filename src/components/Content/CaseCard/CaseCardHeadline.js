import React from "react";
import styled from "@emotion/styled";

import { Devices, Colors } from "../../DesignSystem";

const CaseCardHeadline = ({ text }) => {
  const CaseCardHeadline = styled.h3`
    direction: ltr;
    display: block;

    list-style-image: none;
    list-style-position: outside;
    list-style-type: none;

    padding: 0px;
    margin-block-end: 4px;
    margin-block-start: 0px;
    margin-bottom: 24px;
    margin-inline-end: 0px;
    margin-inline-start: 0px;
    margin-left: 0px;
    margin-right: 0px;
    margin-top: 0px;

    text-align: left;
    text-decoration-thickness: auto;
    text-size-adjust: 100%;
    -webkit-box-direction: normal;
    -webkit-font-smoothing: antialiased;
    font-weight: 700;
    font-size: 16px;
    line-height: 120%;

    color: ${Colors.primaryText.highEmphasis};

    &:hover {
      color: ${Colors.primaryText.mediumEmphasis};
    }
    &:visited {
      color: ${Colors.primaryText.highEmphasis};
      text-decoration: none;
    }

    margin-top: 0px;

    ${Devices.tabletS} {
      font-size: 16px;
    }
    ${Devices.tabletM} {
      font-size: 16px;
    }
    ${Devices.laptopS} {
      font-size: 21px;
    }
  `;

  return <CaseCardHeadline>{text}</CaseCardHeadline>;
};

export default CaseCardHeadline;
