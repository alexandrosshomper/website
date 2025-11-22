import React from "react";
import styled from "@emotion/styled";
import { Devices } from "../../DesignSystem";

const sizeMap = {
  default: {
    tabletS: "564px",
    tabletM: "80%",
    laptopS: "80%",
  },
  S: {
    tabletS: "300px",
    tabletM: "300px",
    laptopS: "300px",
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

const CaseImageWrapper = styled.div`
  margin: 20px auto 40px auto;
  direction: ltr;
  list-style: none;
  overflow: hidden;
  text-align: left;
  text-decoration-thickness: auto;
  text-size-adjust: 100%;
  -webkit-box-direction: normal;
  -webkit-font-smoothing: antialiased;

  width: 100%;
  max-width: ${({ $size }) => ($size === "L" ? "100%" : "90%")};

  ${Devices.tabletS} {
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
  width: 100%;
  height: auto;
  margin: 0;
  list-style: none;
  text-align: left;
  text-decoration-thickness: auto;
  text-size-adjust: 100%;
  -webkit-box-direction: normal;
  -webkit-font-smoothing: antialiased;
`;

const CaseImageBlank = ({ imgURL, alt = "", size }) => {
  return (
    <CaseImageWrapper $size={size}>
      <Picture src={imgURL} alt={alt} />
    </CaseImageWrapper>
  );
};

export default CaseImageBlank;
