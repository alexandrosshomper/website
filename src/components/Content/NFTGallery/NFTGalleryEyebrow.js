import React from "react";
import styled from "@emotion/styled";

const NFTGalleryEyebrow = ({ text, color1, color2 }) => {
  let csscolor = null;
  if (color1 && color2) {
    csscolor = `background-image: linear-gradient(to right, ${color1}, ${color2});`;
  } else {
    csscolor = `background-image: linear-gradient(to right, #ff1744, #ff616f);`;
  }
  const NFTGalleryEyebrow = styled.p`
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
    ${csscolor};
    -webkit-background-clip: text;
    background-clip: text;
  `;

  return <NFTGalleryEyebrow>{text}</NFTGalleryEyebrow>;
};

export default NFTGalleryEyebrow;
