import React from "react";
import styled from "@emotion/styled";

const StyledNFTGalleryEyebrow = styled("p", {
  shouldForwardProp: (prop) =>
    !["gradientStart", "gradientEnd"].includes(prop),
})`
  cursor: pointer;
  direction: ltr;
  display: block;

  list-style-image: none;
  list-style-position: outside;
  list-style-type: none;

  padding: 0px;
  margin-block-end: 4px;
  margin-block-start: 0px;
  margin-bottom: 4x;
  margin-inline-end: 0px;
  margin-inline-start: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;

  text-align: left;
  text-decoration-thickness: auto;
  text-size-adjust: 100%;
  -webkit-box-direction: normal;
  -webkit-font-smoothing: antialiased;

  font-weight: 700;
  font-size: 12px;
  line-height: 120%;

  color: transparent;
  background-image: linear-gradient(
    to right,
    ${({ gradientStart }) => gradientStart},
    ${({ gradientEnd }) => gradientEnd}
  );
  -webkit-background-clip: text;
  background-clip: text;
`;

const NFTGalleryEyebrow = ({ text, color1, color2 }) => {
  const gradientStart = color1 || "#ff1744";
  const gradientEnd = color2 || "#ff616f";

  return (
    <StyledNFTGalleryEyebrow
      gradientStart={gradientStart}
      gradientEnd={gradientEnd}
    >
      {text}
    </StyledNFTGalleryEyebrow>
  );
};

export default NFTGalleryEyebrow;
