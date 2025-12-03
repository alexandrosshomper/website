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

    direction: ltr;

    width: 100%;

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

    ${Devices.tabletS} {
      max-height: 800px;
    }
    ${Devices.tabletM} {
    }
    ${Devices.laptopS} {
    }
    ${Devices.desktopS} {
      border-radius: 10px;
      max-width: 80%;
    }
  `;
  const Picture = styled.img`
    direction: ltr;
    display: block;

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
    ${Devices.tabletS} {
    }
    ${Devices.tabletM} {
    }
    ${Devices.laptopS} {
    }
    ${Devices.laptopM} {
    }
  `;

  return (
    <CaseCover>
      <Picture src={`${imgURL}`} alt={`${alt}`} />
    </CaseCover>
  );
};

export default CaseCover;
