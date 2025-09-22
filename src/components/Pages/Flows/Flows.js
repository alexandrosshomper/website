import React from "react";
import { Helmet } from "react-helmet";
import styled from "@emotion/styled";

//Components
import SectionHead from "../../Content/Section/SectionHead";

import CaseSectionSummary from "../../Content/Case/CaseSectionSummary";
import SectionLayout from "../../Content/Section/SectionLayout";
import Panels from "../../Content/Section/Panels";
//GALLERY
import GalleryList from "../../Gallery/GalleryList";
import galleryData from "../../../data/flows";

const ContentWrapper = styled.div`
  text-align: left;
  margin-top: 72px;
`;

const panelsResponsive = {
  tabletS: "width: 576px;",
  tabletM: `
    width: 720px;
    flex-direction: row;
  `,
  laptopS: "width: 864px;",
  laptopM: "width: 1152px;",
};

const Content = (props) => {
  return (
    <ContentWrapper>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Gallery | Alexandros Shomper</title>
        <description>
          Digital Anthopologist. Experienced Product-, Service & Business
          Designer with demonstrated track record of successfully developing
          meaningful experiences that people love by using emerging technology,
          solid company purpose, and a strong brand to elevate human experiences
          and interactions.
        </description>
      </Helmet>
      <SectionLayout>
        <SectionHead
          headline="Flow Gallery"
          subline="A collection of user onboarding & activation flows from your favorite apps."
        />
        <Panels margin="0 0 48px" responsive={panelsResponsive}>
          <CaseSectionSummary
            copy="
Detailed use cases assessing the user onboarding & activation flows from different companies and products."
            //imgURL="./img/PanelTestImages/one.jpg"
          />
        </Panels>
      </SectionLayout>
      <SectionLayout>
        <GalleryList data={galleryData} />
      </SectionLayout>
    </ContentWrapper>
  );
};

export default Content;
