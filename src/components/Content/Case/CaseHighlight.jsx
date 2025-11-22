import React from "react";
import styled from "@emotion/styled";
import { Devices } from "../../DesignSystem";

const sizeMap = {
  default: {
    tabletS: "564px",
    tabletM: "100%",
    laptopS: "100%",
  },
  S: {
    tabletS: "564px",
    tabletM: "564px",
    laptopS: "564px",
  },
  M: {
    tabletS: "564px",
    tabletM: "708px",
    laptopS: "740px",
  },
  L: {
    tabletS: "100%",
    tabletM: "100%",
    laptopS: "100%",
  },
};

const getWidthFor = (size = "default", breakpoint) =>
  sizeMap[size]?.[breakpoint] || sizeMap.default[breakpoint];

const CaseHighlightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin: 20px 0 64px 0;
  direction: ltr;
  list-style: none;
  overflow: hidden;
  text-align: left;
  text-decoration-thickness: auto;
  text-size-adjust: 100%;
  -webkit-box-direction: normal;
  -webkit-font-smoothing: antialiased;

  width: 100%;

  ${Devices.tabletS} {
    flex-direction: row;
    width: ${({ $size }) => getWidthFor($size, "tabletS")};
  }

  ${Devices.tabletM} {
    width: ${({ $size }) => getWidthFor($size, "tabletM")};
  }

  ${Devices.laptopS} {
    width: ${({ $size }) => getWidthFor($size, "laptopS")};
  }
`;

const Picture = styled.img`
  display: block;
  order: 0;
  width: 90%;
  height: auto;
  margin: 0;
  list-style: none;
  text-align: left;
  text-decoration-thickness: auto;
  text-size-adjust: 100%;
  -webkit-box-direction: normal;
  -webkit-font-smoothing: antialiased;
  border-radius: 0.38rem;
  box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.1);
  ${Devices.tabletS} {
    width: 40%;
    order: 2;
  }
`;
const CaseHighlightText = styled.div`
  order: 1;
`;
const CaseHighlightHeadline = styled.h6``;
const CaseHighlightCopy = styled.p``;

const CaseHighlight = ({ imgURL, headline, copy, direction }) => {
  return (
    <CaseHighlightWrapper>
      <CaseHighlightText
        style={{
          order: direction === "RTL" ? "3" : "1",
        }}
      >
        <CaseHighlightHeadline>{headline}</CaseHighlightHeadline>
        <CaseHighlightCopy>{copy}</CaseHighlightCopy>
      </CaseHighlightText>
      <Picture src={imgURL} />
    </CaseHighlightWrapper>
  );
};

export default CaseHighlight;
