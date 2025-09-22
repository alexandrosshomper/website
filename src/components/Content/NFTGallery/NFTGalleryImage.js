import React from "react";
import styled from "@emotion/styled";
import { Colors, Devices } from "../../DesignSystem";

const StyledNFTGalleryImage = styled("div", {
  shouldForwardProp: (prop) =>
    !["gradientStart", "gradientEnd"].includes(prop),
})`
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
  background-image: linear-gradient(
    to right,
    ${({ gradientStart }) => gradientStart},
    ${({ gradientEnd }) => gradientEnd}
  );
`;

const StyledTitle = styled.p`
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

const NFTGalleryImage = ({ imgURL, alt, color1, color2, comingSoon }) => {
  const gradientStart = color1 || Colors.red;
  const gradientEnd = color2 || Colors.redLight;

  return (
    <StyledNFTGalleryImage
      gradientStart={gradientStart}
      gradientEnd={gradientEnd}
    >
      {comingSoon && <StyledTitle>Coming Soon</StyledTitle>}
      <Picture>
        <source srcSet={imgURL}></source>
        <img src={imgURL} alt={alt} style={imgStyle}></img>
      </Picture>
    </StyledNFTGalleryImage>
  );
};

export default NFTGalleryImage;
