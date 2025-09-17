import React from "react";
import { Helmet } from "react-helmet";
import styled from "@emotion/styled";

//Components
import { Devices } from "../../DesignSystem";
import SectionHead from "../../Content/Section/SectionHead";

import CaseSectionSummary from "../../Content/Case/CaseSectionSummary";
//GALLERY
import GalleryList from "../../Gallery/GalleryList";
import galleryData from "../../../data/flows/flows.json";

const Content = (props) => {
  const Content = styled.div`
    text-align: left;
    margin-top: 72px;
  `;

  const Section = styled.section`
    /* Auto Layout */
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    /* Inside Auto Layout */
    flex: none;
    order: 3;
    align-self: stretch;
    flex-grow: 0;
    margin-bottom: 200px;
  `;

  const Panels = styled.section`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: auto;
    justify-content: flex-start;
    align-content: center;
    align-items: flex-start;
    gap: 12px;

    margin: 0px;
    ${Devices.tabletS} {
      width: 576px;
    }
    ${Devices.tabletM} {
      width: 720px;
      flex-direction: row;
    }
    ${Devices.laptopS} {
      width: 864px;
    }
    ${Devices.laptopM} {
      width: 1152px;
    }
  `;

  return (
    <Content>
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
      <Section>
        <SectionHead
          headline="Flow Gallery"
          subline="A collection of user onboarding & activation flows from your favorite apps."
        />
        <Panels style={{ marginBottom: "48px" }}>
          <CaseSectionSummary
            copy="
Detailed use cases assessing the user onboarding & activation flows from different companies and products."
            //imgURL="./img/PanelTestImages/one.jpg"
          />
        </Panels>
      </Section>
      <Section>
        <GalleryList data={galleryData} />
      </Section>
    </Content>
  );
};

export default Content;
