import React from "react";
import styled from "@emotion/styled";

import { Devices, Colors } from "../../DesignSystem";
const StyledNFTGalleryHeadline = styled.h3`
  cursor: pointer;
  direction: ltr;
  display: block;

  list-style-image: none;
  list-style-position: outside;
  list-style-type: none;

  padding: 0px;
  margin-block-end: 4px;
  margin-block-start: 0px;
  margin-bottom: 8px;
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
  font-size: 16px;
  line-height: 120%;

  color: ${Colors.primaryText.highEmphasis};

  &:hover {
    color: ${Colors.primaryText.mediumEmphasis};
  }
  &:visited {
    color: ${Colors.primaryText.highEmphasis};
    text-decoration: none;
  }

  margin-top: 0px;

  ${Devices.tabletS} {
    font-size: 12px;
  }
  ${Devices.tabletM} {
    font-size: 12px;
  }
  ${Devices.laptopS} {
    font-size: 12px;
  }
`;


const NFTGalleryHeadline = ({ text }) => {
return <StyledNFTGalleryHeadline>{text}</StyledNFTGalleryHeadline>;
};

export default NFTGalleryHeadline;
