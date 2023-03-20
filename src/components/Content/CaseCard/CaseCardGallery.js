import React from "react";
import styled from "@emotion/styled";

const CaseCardGallery = (props) => {
  const CaseCardGallery = styled.ul`
    direction: ltr;
    display: grid;
    grid-template-areas: none;
    grid-template-columns: 492px 492px 492px 492px 492px 492px;
    grid-template-rows: 400px;
    grid-gap: 24px;
    list-style-image: none;
    list-style-position: outside;
    list-style-type: none;
    margin-block-end: 0px;
    margin-block-start: 0px;
    margin-bottom: 0px;
    margin-inline-end: --2000px;
    margin-inline-start: 0px;
    padding-bottom: 20px;
    padding-inline-start: 230px;
    padding-left: 230px;
    padding-right: 230px;
    padding-top: 20px;
    text-align: left;
    text-size-adjust: 100%;
    width: 2980px;
  `;

  return <CaseCardGallery></CaseCardGallery>;
};

export default CaseCardGallery;
