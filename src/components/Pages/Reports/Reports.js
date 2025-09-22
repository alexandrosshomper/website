import React from "react";
import { Helmet } from "react-helmet";
import styled from "@emotion/styled";

//Components
import { Devices } from "../../DesignSystem";
import SectionHead from "../../Content/Section/SectionHead";

import CaseCard from "../../Content/CaseCard/CaseCard";
import CaseSectionSummary from "../../Content/Case/CaseSectionSummary";
const StyledContent = styled.div`
  text-align: left;
  margin-top: 72px;
`;
const StyledCaseCardGrid = styled.section`
    --gap: 24px;
    box-sizing: border-box;
    margin: 0 auto;
    width: 100%;
    padding: 0 24px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    align-items: stretch;
    gap: var(--gap);
  ${Devices.tabletS} {
      max-width: 564px;
    }
    ${Devices.tabletM} {
      max-width: 708px;
      flex-direction: row;
      align-items: stretch;
      justify-content: center;
    }
    ${Devices.laptopS} {
      max-width: 852px;
    }
    ${Devices.laptopM} {
      max-width: 1140px;
      --gap: 12px;
      gap: var(--gap);
    }
  `;


const Content = (props) => {
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
    <StyledContent>
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
      <Section>
        <SectionHead
          headline="Reports"
          subline="Data and anecdotes from industry research & use cases about user onboarding & activation, user retention, and growth."
        />
        <Panels style={{ marginBottom: "48px" }}>
          <CaseSectionSummary
            copy="In a complex, uncertain and volatile world, the pace of digital change is faster than ever. Looking ahead is critical to success. These reports provide insights into major business and technology trends that will help you stay ahead and make smarter decisions for your organization."
            //imgURL="./img/PanelTestImages/one.jpg"
          />
        </Panels>
        <StyledCaseCardGrid>
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
        </StyledCaseCardGrid>
      </Section>
    </StyledContent>
  );
};

export default Content;
