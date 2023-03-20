import React from "react";
import styled from "@emotion/styled";

import Quote from "./BlackQuoteText";
import Quotee from "./BlackQuoteQuotee";

import { Colors } from "../../DesignSystem";

const BlackQuote = ({ quote, quotee }) => {
  const BlackQuote = styled.div`
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
    padding-top: 120px;
    padding-bottom: 120px;
    margin-top: 0px;

    background-color: ${Colors.black};
    width: 100%;
  `;

  return (
    <BlackQuote>
      <Quote quote={quote} />
      <Quotee quotee={quotee} />
    </BlackQuote>
  );
};

export default BlackQuote;
