import React from "react";
import { Helmet } from "react-helmet-async";
import styled from "@emotion/styled";

//Components
import { Devices } from "../../DesignSystem";
import SectionHead from "../../Content/Section/SectionHead";

import CaseSectionSummary from "../../Content/Case/CaseSectionSummary";
//GALLERY
import GalleryList from "../../Gallery/GalleryList";
import galleryData from "../../../data/flows";

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
        <title>Flows | Alexandros Shomper</title>
        <meta name="description" content="UX flow galleries for Asana, Linear, Wrike, and Trello — detailed product flow documentation and onboarding analysis." />
        <link rel="canonical" href="https://www.alexandrosshomper.de/flows" />
        <meta property="og:title" content="Flows | Alexandros Shomper" />
        <meta property="og:description" content="UX flow galleries for Asana, Linear, Wrike, and Trello — detailed product flow documentation and onboarding analysis." />
        <meta property="og:url" content="https://www.alexandrosshomper.de/flows" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.alexandrosshomper.de/img/social/og-default.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Flows | Alexandros Shomper" />
        <meta name="twitter:description" content="UX flow galleries for Asana, Linear, Wrike, and Trello — detailed product flow documentation and onboarding analysis." />
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
