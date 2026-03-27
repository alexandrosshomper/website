import React from "react";
import styled from "@emotion/styled";
import { Colors, Devices } from "../../DesignSystem";

const CaseCover = ({ imgURL, alt, color1, color2 }) => {
  let csscolorbackground = null;
  if (color1 && color2) {
    csscolorbackground = `background-image: linear-gradient(to right, ${color1}, ${color2});`;
  } else {
    csscolorbackground = `background-image: linear-gradient(to right, ${Colors.red}, ${Colors.redLight});`;
  }
  const CaseCover = styled.div`
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: auto;
    margin-right: auto;

    width: 90%;

    ${Devices.tabletS} {
      width: 70%;
      border-radius: 10px;
    }
  `;
  const Picture = styled.img`
    display: block;
    width: 100%;
    height: auto;
  `;

  return (
    <CaseCover>
      <Picture src={`${imgURL}`} alt={`${alt}`} />
    </CaseCover>
  );
};

export default CaseCover;
