import React from "react";
import { Helmet } from "react-helmet";
import styled from "@emotion/styled";

//Components
import SectionHead from "../../Content/Section/SectionHead";

import CaseCard from "../../Content/CaseCard/CaseCard";
import CaseSectionSummary from "../../Content/Case/CaseSectionSummary";
import SectionLayout from "../../Content/Section/SectionLayout";
import CardGrid from "../../Content/Section/CardGrid";
import Panels from "../../Content/Section/Panels";

const ContentWrapper = styled.div`
  text-align: left;
  margin-top: 72px;
`;

const Content = (props) => {
  return (
    <ContentWrapper>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Case Studies | Alexandros Shomper</title>
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
          headline="Case Studies"
          subline="Studies on user onboarding & activation from various products."
        />
        <Panels
          margin="0px 0px 48px"
          responsive={{
            tabletS: "width: 576px;",
            tabletM: `
              width: 720px;
              flex-direction: row;
            `,
            laptopS: "width: 864px;",
            laptopM: "width: 1152px;",
          }}
        >
          <CaseSectionSummary
            copy="
Detailed use cases assessing the user onboarding & activation flows from different companies and products."
            //imgURL="./img/PanelTestImages/one.jpg"
          />
        </Panels>
        <CardGrid
          responsive={{
            tabletS: "width: 564px;",
            tabletM: `
              width: 708px;
              flex-direction: row;
              align-items: center;
              justify-content: center;
            `,
            laptopS: "width: 864px;",
            laptopM: `
              width: 1140px;
              --gap: 12px;
            `,
          }}
        >
          <CaseCard
            eyebrow="Case Study"
            eyebrowColor2="#FFEAED"
            eyebrowColor1="#FD594A"
            headline="Asana – How positioning for teams & enterprise impacts your segmentation, setup, and plan selection"
            copy=""
            imgURL="/img/case_studies/asana/Cover@2x.png"
            link="/case-studies/asana"
          />

          <CaseCard
            eyebrow="Case Study"
            eyebrowColor2="#6DFF6A"
            eyebrowColor1="#07CE66"
            headline="Wrike"
            copy=""
            imgURL="/img/case_studies/wrike/Cover@2x.png"
            comingSoon="true"
          />

          <CaseCard
            eyebrow="Case Study"
            eyebrowColor2="#8BACFF"
            eyebrowColor1="#5E6AD2"
            headline="Linear"
            copy=""
            imgURL="/img/case_studies/linear/Cover@2x.png"
            comingSoon="true"
          />

          <CaseCard
            eyebrow="Case Study"
            eyebrowColor2="#9FD5FF"
            eyebrowColor1="#126AE5"
            headline="Trello"
            copy=""
            imgURL="/img/case_studies/trello/Cover@2x.png"
            comingSoon="true"
          />
        </CardGrid>
      </SectionLayout>
    </ContentWrapper>
  );
};

export default Content;
