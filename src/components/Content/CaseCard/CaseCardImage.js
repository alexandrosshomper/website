import styled from "@emotion/styled";
import React from "react";
import { Colors, Devices } from "../../DesignSystem";

const CaseCardImage = ({ imgURL, alt, comingSoon }) => {
  const CaseCardImage = styled.div`
    border-top-left-radius: 0.38rem;
    border-top-right-radius: 0.38rem;

    direction: ltr;
    display: block;

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
  `;
  const Picture = styled.picture`
    direction: ltr;
    max-width: 100%;
    height: 300px;

    list-style-image: none;
    list-style-position: outside;
    list-style-type: none;

    text-align: left;
    text-decoration-thickness: auto;
    text-size-adjust: 100%;

    -webkit-box-direction: normal;
    -webkit-font-smoothing: antialiased;

    background-color: none;

    ${Devices.tabletS} {
      height: auto;
    }
    ${Devices.tabletM} {
    }
    ${Devices.laptopS} {
    }
    ${Devices.laptopM} {
    }
  `;

  const imgStyle = {
    width: "100%",
    height: "auto",
    opacity: `${comingSoon ? 0.3 : 1}`,
  };

  const Title = styled.p`
    z-index: 2;
    direction: ltr;
    display: block;
    font-size: 36px;
    color: ${Colors.textWhite.highEmphasis};
    position: absolute;
    top: 20%;

    list-style-image: none;
    list-style-position: outside;
    list-style-type: none;

    text-align: center;
    text-decoration-thickness: auto;
    text-size-adjust: 100%;
    width: 100%;
    -webkit-box-direction: normal;
    -webkit-font-smoothing: antialiased;
  `;

  return (
    <CaseCardImage>
      {comingSoon && <Title>Coming Soon</Title>}
      <Picture>
        <source srcset={`${imgURL}`}></source>
        <img src={`${imgURL}`} alt={`${alt}`} style={imgStyle}></img>
      </Picture>
    </CaseCardImage>
  );
};

export default CaseCardImage;
