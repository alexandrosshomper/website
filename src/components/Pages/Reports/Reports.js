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
        <title>Reports | Alexandros Shomper</title>
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
          headline="Reports"
          subline="Data and anecdotes from industry research & use cases about user onboarding & activation, user retention, and growth."
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
            copy="In a complex, uncertain and volatile world, the pace of digital change is faster than ever. Looking ahead is critical to success. These reports provide insights into major business and technology trends that will help you stay ahead and make smarter decisions for your organization."
            //imgURL="./img/PanelTestImages/one.jpg"
          />
        </Panels>
        <CardGrid
          margin="0 auto"
          padding="0 24px"
          width="100%"
          alignItems="stretch"
          responsive={{
            tabletS: "max-width: 564px;",
            tabletM: `
              max-width: 708px;
              flex-direction: row;
              align-items: stretch;
              justify-content: center;
            `,
            laptopS: "max-width: 852px;",
            laptopM: `
              max-width: 1140px;
              --gap: 12px;
            `,
          }}
        >
          <CaseCard
            eyebrow="Report"
            eyebrowColor2="#231768"
            eyebrowColor1="#10d5f5"
            headline="Why Onboarding & Activation Are The Ultimate Levers for SaaS Growth"
            copy="For early-stage and growth startup founders, retention is everything. But what if the key to higher retention and ARR isn’t just engagement or new features? Our latest whitepaper dives into why user onboarding and activation are the most powerful (and cost-effective) levers for boosting long-term retention and revenue. Discover how optimizing these critical stages can drastically reduce churn, increase customer lifetime value, and accelerate growth. Download the full report to uncover the strategies top SaaS companies use to turn new users into loyal, paying customers."
            imgURL="./img/Reports/Cover – [Report] Why Onboarding & Activation are the ultimate levers for  SaaS Growth.png"
            link="/reports/why-onboarding-and-activation-are-the-ultimate-levers-for-saas-growth"
          />

          <CaseCard
            eyebrow="Report"
            eyebrowColor2="#231768"
            eyebrowColor1="#10d5f5"
            headline="Four industry shifts making user onboarding & activation indispensible"
            copy=""
            imgURL="./img/Reports/Cover – [Report] Four industry shifts making User Onboarding & Activation indispensible.png"
            link="/reports/four-indsutry-shifts-making-onboarding-and-activation-indispensible"
          />
        </CardGrid>
      </SectionLayout>
    </ContentWrapper>
  );
};

export default Content;
