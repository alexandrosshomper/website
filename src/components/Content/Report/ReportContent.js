import React from "react";
import styled from "@emotion/styled";

import { Colors, Devices } from "../../DesignSystem";

const StyledReportContent = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > * {
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 140px;
  }

  & > *:last-child {
    margin-bottom: 0;
  }

  ${Devices.tabletS} {
    & > * {
      width: 564px;
    }
  }

  ${Devices.tabletM} {
    & > * {
      width: 708px;
    }
  }

  ${Devices.laptopS} {
    & > * {
      width: 740px;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: bold;
    color: ${Colors.primaryText.highEmphasis};
    text-align: left;
    margin-top: 0;
    margin-bottom: 16px;
    width: 100%;
  }

  h2 {
    font-size: 28px;
    line-height: 109%;

    ${Devices.tabletS} {
      font-size: 36px;
    }
  }

  h3 {
    font-size: 24px;
    line-height: 115%;
    margin-bottom: 8px;
    color: transparent;
    background-image: linear-gradient(
      to right,
      ${Colors.blue},
      ${Colors.blueLight}
    );
    -webkit-background-clip: text;
    background-clip: text;
  }

  p {
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 132%;
    color: ${Colors.primaryText.highEmphasis};
    margin-top: 0;
    margin-bottom: 40px;
    width: 100%;
  }

  ul,
  ol {
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 130%;
    color: ${Colors.primaryText.highEmphasis};
    padding-left: 24px;
    margin-top: 8px;
    margin-bottom: 40px;
    width: 100%;
  }

  ul {
    list-style-type: disc;
  }

  li {
    margin-bottom: 12px;
  }

  li:last-child {
    margin-bottom: 0;
  }

  strong {
    font-weight: 700;
  }

  em {
    font-style: italic;
  }

  a {
    color: ${Colors.blue};
    text-decoration: underline;
    text-decoration-thickness: 2px;
  }

  section > *:last-child,
  div > *:last-child {
    margin-bottom: 0;
  }

  [data-report-form] {
    width: 100%;
    margin: 48px auto 40px;
    display: flex;
    justify-content: center;
  }

  [data-report-form] > * {
    width: 100%;
  }
`;

const ReportContent = ({ children }) => {
  return <StyledReportContent>{children}</StyledReportContent>;
};

export default ReportContent;
