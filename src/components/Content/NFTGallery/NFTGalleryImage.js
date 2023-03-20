import React from "react";
import styled from "@emotion/styled";
import { Colors, Devices } from "../../DesignSystem";

const NFTGalleryImage = ({ imgURL, alt, color1, color2, comingSoon }) => {
  let csscolorbackground = null;
  if (color1 && color2) {
    csscolorbackground = `background-image: linear-gradient(to right, ${color1}, ${color2});`;
  } else {
    csscolorbackground = `background-image: linear-gradient(to right, ${Colors.red}, ${Colors.redLight});`;
  }

  const NFTGalleryImage = styled.div`
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;

    cursor: pointer;

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
    cursor: pointer;
    direction: ltr;
    display: block;
    max-width: 100%;
    height: auto;

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
  };

  const Title = styled.p`
    cursor: pointer;
    direction: ltr;
    display: block;
    font-size: 36px;
    color: ${Colors.textWhite.highEmphasis};
    object-fit: cover;
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

    src: url(${imgURL});
  `;

  return (
    <NFTGalleryImage>
      {comingSoon && <Title>Coming Soon</Title>}
      <Picture>
        <source srcSet={`${imgURL}`}></source>
        <img src={`${imgURL}`} alt={`${alt}`} style={imgStyle}></img>
      </Picture>
    </NFTGalleryImage>
  );
};

export default NFTGalleryImage;
