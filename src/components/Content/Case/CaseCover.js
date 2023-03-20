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

    max-width: 90%;
    border-radius: 10px;

    box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.1);

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
      max-width: 564px;
    }
    ${Devices.tabletM} {
      max-width: 80%;
    }
    ${Devices.laptopS} {
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
