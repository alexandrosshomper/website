import React from "react";

import CaseCopy from "../../Content/Case/CaseCopy";
import CaseHeadlineThree from "../../Content/Case/CaseHeadlineThree";
import CaseSectionHead from "../../Content/Case/CaseSectionHead";
import LeadGenerationForm from "../../LeadGen/LeadGenerationForm";
import ReportTemplate, {
  ReportParagraph,
  ReportUnorderedList,
  ReportListItem,
} from "./ReportTemplate";

const FourIndustryShifts = () => {
  return (
    <ReportTemplate
      metaTitle="Four industry shifts making user onboarding & activation indispensible | Alexandros Shomper"
      metaDescription="For early-stage and growth startup founders, retention is everything. But what if the key to higher retention and ARR isn't just engagement or new features? Our latest whitepaper dives into why user onboarding and activation are the most powerful (and cost-effective) levers for boosting long-term retention and revenue. Discover how optimizing these critical stages can drastically reduce churn, increase customer lifetime value, and accelerate growth. Download the full report to uncover the strategies top SaaS companies use to turn new users into loyal, paying customers."
      title="Four industry shifts making user onboarding & activation indispensible"
      subline="User Onboarding & Activation: a strategic imperative for growth, retention, and survival."
    >
      <CaseSectionHead
        headline={"Introduction"}
        subline={"Is your SaaS equipped for the new-normal?"}
      />
      <CaseCopy
        copy="In today's challenging startup landscape, acquiring and retaining users has never been more critical – or more difficult. This in-depth report reveals why exceptional user onboarding is no longer optional."
      />
      <br />

      <ReportParagraph>
        <CaseHeadlineThree headline={"Our latest report reveals:"} />
        <ReportUnorderedList>
          <ReportListItem>Market Dynamics Have Fundamentally Changed</ReportListItem>
          <ReportListItem>The Funding Environment Has Tightened</ReportListItem>
          <ReportListItem>Product and Team Structures Have Evolved</ReportListItem>
          <ReportListItem>External Influences Shape Internal Pressures</ReportListItem>
        </ReportUnorderedList>
        <br />
        <br />
        <CaseHeadlineThree headline={"Key Insights You'll Discover:"} />
        <ReportUnorderedList>
          <ReportListItem>
            How market dynamics have fundamentally shifted, making user activation more crucial than ever
          </ReportListItem>
          <ReportListItem>
            Why companies with strong onboarding see up to 86% higher customer lifetime value
          </ReportListItem>
          <ReportListItem>
            The direct link between onboarding quality and key metrics like CAC, CLV, and NRR
          </ReportListItem>
          <ReportListItem>
            Real-world examples and case studies from successful companies
          </ReportListItem>
        </ReportUnorderedList>
      </ReportParagraph>
      <ReportParagraph>
        <CaseSectionHead
          headline={"Who this report is for"}
          subline={"We designed this report for founders of early-stage and growth startups who are:"}
        />

        <ReportUnorderedList>
          <ReportListItem>
            Startup founders and product leaders seeking sustainable growth
          </ReportListItem>
          <ReportListItem>
            SaaS companies struggling with user retention and activation
          </ReportListItem>
          <ReportListItem>
            Product teams looking to optimize their onboarding experience
          </ReportListItem>
          <ReportListItem>
            Growth managers focused on improving key metrics
          </ReportListItem>
        </ReportUnorderedList>
        <br />
        <CaseCopy
          copy="Download now to understand why user onboarding and activation have become the cornerstone of sustainable business growth in today's market."
        />

        <LeadGenerationForm
          portal={"49351608"}
          form={"ce820859-2f9e-41bb-a9f8-db512c279fba"}
          size={"M"}
          successLink="./report-docs/[Report] Four industry shifts making onboarding & activation indispensable.pdf"
        />
      </ReportParagraph>
    </ReportTemplate>
  );
};

export default FourIndustryShifts;
