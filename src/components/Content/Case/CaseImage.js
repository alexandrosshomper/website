import React from "react";
import styled from "@emotion/styled";
import { Colors, Devices } from "../../DesignSystem";

const CaseImage = ({ imgURL, alt, color1, color2, size }) => {
  let csscolorbackground = null;
  if (color1 && color2) {
    csscolorbackground = `background-image: linear-gradient(to right, ${color1}, ${color2});`;
  } else {
    csscolorbackground = `background-image: linear-gradient(to right, ${Colors.red}, ${Colors.redLight});`;
  }

  const CaseImage = styled.div`
    margin: 20px auto 40px auto;

    direction: ltr;

    max-width: 740px;

    list-style-image: none;
    list-style-position: outside;
    list-style-type: none;

    overflow-x: hidden;
    overflow-y: hidden;

    text-align: left;
    text-decoration-thickness: auto;
    text-size-adjust: 100%;

    -webkit-box-direction: normal;
    -webkit-font-smoothing: antialiased;

    border-radius: 0.38rem;

    box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.1);
    max-width: 90%;
    ${Devices.tabletS} {
      width: 564px;
    }
    ${Devices.tabletM} {
      width: ${size === "L"
        ? "80%"
        : size === "M"
        ? "708px"
        : size === "S"
        ? "564px"
        : "80%"};
    }
    ${Devices.laptopS} {
      width: ${size === "L"
        ? "80%"
        : size === "M"
        ? "740px"
        : size === "S"
        ? "564px"
        : "80%"};
    }
    ${Devices.laptopM} {
    }
  `;
  const Picture = styled.img`
    direction: ltr;
    display: block;
    max-width: 100%;
    height: auto;
    margin: 0px;

    list-style-image: none;
    list-style-position: outside;
    list-style-type: none;

    text-align: left;
    text-decoration-thickness: auto;
    text-size-adjust: 100%;

    -webkit-box-direction: normal;
    -webkit-font-smoothing: antialiased;

    // ${csscolorbackground};
  `;

  return (
    <CaseImage>
      <Picture src={`${imgURL}`} alt={`${alt}`} />
    </CaseImage>
  );
};

export default CaseImage;
