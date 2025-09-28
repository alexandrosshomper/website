import React from "react";
import styled from "@emotion/styled";

import { Colors, Devices } from "../../DesignSystem";

const StyledCaseContent = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > * {
    width: 70%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 140px;
    margin-top: 40px;
  }

  & > *:last-child {
    margin-bottom: 0;
  }

  ${Devices.tabletS} {
    & > * {
      width: 520px;
    }
  }

  ${Devices.tabletM} {
    & > * {
      width: 520px;
    }
  }

  ${Devices.laptopS} {
    & > * {
      width: 650px;
    }
  }

  & > [data-case-content="wide"] {
    width: 100%;
  }

  & > [data-case-content="full"] {
    width: 100%;
    margin-left: 0;
    margin-right: 0;
  }

  :where(h1,
      h2,
      h3,
      h4,
      h5,
      h6):not([class]) {
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 550;
    color: ${Colors.primaryText.highEmphasis};
    text-align: left;
    margin-top: 0;
    margin-bottom: 16px;
    width: 100%;
  }

  :where(h2):not([class]) {
    font-size: 28px;
    font-weight: 500;
    line-height: 109%;

    ${Devices.tabletS} {
      font-size: 36px;
    }
  }

  :where(h3):not([class]) {
    font-size: 30px;
    font-weight: 500;
    line-height: 115%;
    letter-spacing: 0.01em;
    line-height: 40px;
    margin-bottom: 8px;
    -webkit-background-clip: text;
    background-clip: text;
  }

  :where(h4):not([class]) {
    font-size: 22px;
    font-weight: 500;
    line-height: 115%;
    letter-spacing: 0.01em;
    line-height: 24px;
    margin-bottom: 8px;
  }
  :where(p):not([class]) {
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 1.7499375rem;
    color: ${Colors.primaryText.highEmphasis};
    margin-top: 0;
    margin-bottom: 24px;
    width: 100%;
  }

  :where(ul, ol):not([class]) {
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 1.7499375rem;
    color: ${Colors.primaryText.highEmphasis};
    padding-left: 24px;
    margin-top: 8px;
    margin-bottom: 40px;
    list-style-position: outside;
    margin-block-start: 21.25px;
    tab-size: 4;
    margin-left: 12px;
    padding-left: 32px;
    padding-inline-start: 32px;
  }

  :where(ul):not([class]) {
    list-style-type: disc;
  }

  :where(li):not([class]) {
    margin-bottom: 8px;
  }

  :where(li:last-child):not([class]) {
    margin-bottom: 0;
  }

  :where(strong):not([class]) {
    font-weight: 700;
  }

  :where(em):not([class]) {
    font-style: italic;
  }

  :where(a):not([class]) {
    color: ${Colors.blue};
    text-decoration: underline;
    text-decoration-thickness: 2px;
  }
  section:last-child {
    margin-bottom: 80px;
  }
  section > *:last-child,
  div > *:last-child {
    margin-bottom: 0px;
  }
`;

const CaseContent = ({ children }) => {
  return <StyledCaseContent>{children}</StyledCaseContent>;
};

export default CaseContent;
