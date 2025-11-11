import React from "react";
import styled from "@emotion/styled";
import { Colors, Devices } from "../../DesignSystem";

const sizeMap = {
  default: {
    tabletS: "564px",
    tabletM: "80%",
    laptopS: "80%",
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
  border-radius: 0.38rem;
  box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.1);
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

const CaseImage = ({ imgURL, alt = "", color1, color2, size }) => {
  const backgroundGradient =
    color1 && color2
      ? `linear-gradient(to right, ${color1}, ${color2})`
      : `linear-gradient(to right, ${Colors.red}, ${Colors.redLight})`;

  return (
    <CaseImageWrapper $size={size} style={{ backgroundImage: backgroundGradient }}>
      <Picture src={imgURL} alt={alt} />
    </CaseImageWrapper>
  );
};

export default CaseImage;
