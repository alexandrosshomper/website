import styled from "@emotion/styled";
import React from "react";
import { Colors } from "../../DesignSystem";

const CaseCardCopy = ({ text }) => {
  const CaseCardCopy = styled.p`
    color: rgba(0, 0, 0, 0.86);

    direction: ltr;
    display: block;

    font-weight: 400;
    font-size: 16px;
    color: ${Colors.primaryText.mediumEmphasis};

    list-style-image: none;
    list-style-position: outside;
    list-style-type: none;
    line-height: 133%;

    margin: 0px;
    margin-block: 0px;
    margin-inline: 0px;
    margin-bottom: 0px;

    padding: 0px;

    quotes: "“" "”";

    text-align: left;
    text-decoration-thickness: auto;
    text-size-adjust: 100%;

    -webkit-box-direction: normal;
    -webkit-box-orient: vertical;
    -webkit-font-smoothing: antialiased;
    -webkit-line-clamp: 2;
  `;

  return <CaseCardCopy>{text}</CaseCardCopy>;
};

export default CaseCardCopy;
