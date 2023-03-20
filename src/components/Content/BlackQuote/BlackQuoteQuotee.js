import React from "react";
import styled from "@emotion/styled";

import { Devices, Colors } from "../../DesignSystem";

const BlackQuoteQuotee = ({ quotee }) => {
  const BlackQuoteQuotee = styled.p`
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 113%;
    text-align: center;
    color: ${Colors.textWhite.lowEmphasis};
    margin-bottom: 8px;
    margin-top: 0px;
    width: 100%;

    ${Devices.tabletS} {
      font-size: 24px;
    }
  `;

  return <BlackQuoteQuotee>{quotee}</BlackQuoteQuotee>;
};

export default BlackQuoteQuotee;
