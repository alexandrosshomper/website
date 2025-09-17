import React from "react";
import { Helmet } from "react-helmet";
import styled from "@emotion/styled";

//Components
import { Devices } from "../../DesignSystem";
import SectionHead from "../../Content/Section/SectionHead";

import CaseCard from "../../Content/CaseCard/CaseCard";
import CaseSectionSummary from "../../Content/Case/CaseSectionSummary";

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

  const CaseCardGrid = styled.section`
    margin: 0px 24px 0px 24px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    align-items: center;
    --gap: 24px;
    gap: var(--gap);
    ${Devices.tabletS} {
      width: 564px;
    }
    ${Devices.tabletM} {
      margin: 0px 0px 0px 0px;

      width: 708px;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }
    ${Devices.laptopS} {
      width: 864px;
    }
    ${Devices.laptopM} {
      width: 1140px;
      --gap: 12px;
    }
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
        <title>Case Studies | Alexandros Shomper</title>
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
          headline="Case Studies"
          subline="Studies on user onboarding & activation from various products."
        />
        <Panels style={{ marginBottom: "48px" }}>
          <CaseSectionSummary
            copy="
Detailed use cases assessing the user onboarding & activation flows from different companies and products."
            //imgURL="./img/PanelTestImages/one.jpg"
          />
        </Panels>
        <CaseCardGrid>
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
        </CaseCardGrid>
      </Section>
    </Content>
  );
};

export default Content;
