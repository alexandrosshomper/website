import React from "react";
import { Helmet } from "react-helmet";

//Components
import CaseCopy from "../../Content/Case/CaseCopy";
import CaseHeadlineThree from "../../Content/Case/CaseHeadlineThree";
import CaseSectionHead from "../../Content/Case/CaseSectionHead";
import CaseTitle from "../../Content/Case/CaseTitle";
import CaseTitleEyebrow from "../../Content/Case/CaseTitleEyebrow";

import CaseSubline from "../../Content/Case/CaseSubline";
import LeadGenerationForm from "../../LeadGen/LeadGenerationForm";
import {
  ReportContent,
  ReportParagraph,
  ReportSection,
  ReportUnorderedList,
  ReportUnorderedListItem,
} from "./ReportArticleLayout";

const Content = () => {
  return (
    <ReportContent>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Four industry shifts making user onboarding & activation indispensible
          | Alexandros Shomper
        </title>
        <description>
          For early-stage and growth startup founders, retention is everything.
          But what if the key to higher retention and ARR isn't just engagement
          or new features? Our latest whitepaper dives into why user onboarding
          and activation are the most powerful (and cost-effective) levers for
          boosting long-term retention and revenue. Discover how optimizing
          these critical stages can drastically reduce churn, increase customer
          lifetime value, and accelerate growth. Download the full report to
          uncover the strategies top SaaS companies use to turn new users into
          loyal, paying customers.
        </description>
      </Helmet>
      <ReportSection>
        <CaseTitleEyebrow text={"Report"} color1="#00b8d4" color2="#62ebff" />
        <CaseTitle
          headline={
            "Four industry shifts making user onboarding & activation indispensible"
          }
        />
        <CaseSubline subline="User Onboarding & Activation: a strategic imperative for growth, retention, and survival." />
        <br />
        <br />
        <br />
        <br />
        <br />
        <CaseSectionHead
          headline={"Introduction"}
          subline={"Is your SaaS equipped for the new-normal?"}
        />
        <CaseCopy
          copy={
            "In today's challenging startup landscape, acquiring and retaining users has never been more critical – or more difficult. This in-depth report reveals why exceptional user onboarding is no longer optional."
          }
        />
        <br />

        <ReportParagraph>
          <CaseHeadlineThree headline={"Our latest report reveals:"} />
          <ReportUnorderedList>
            <ReportUnorderedListItem>
              Market Dynamics Have Fundamentally Changed
            </ReportUnorderedListItem>
            <ReportUnorderedListItem>
              The Funding Environment Has Tightened
            </ReportUnorderedListItem>
            <ReportUnorderedListItem>
              Product and Team Structures Have Evolved
            </ReportUnorderedListItem>
            <ReportUnorderedListItem>
              External Influences Shape Internal Pressures
            </ReportUnorderedListItem>
          </ReportUnorderedList>
          <br />
          <br />
          <CaseHeadlineThree headline={"Key Insights You'll Discover:"} />
          <ReportUnorderedList>
            <ReportUnorderedListItem>
              How market dynamics have fundamentally shifted, making user
              activation more crucial than ever
            </ReportUnorderedListItem>
            <ReportUnorderedListItem>
              Why companies with strong onboarding see up to 86% higher customer
              lifetime value
            </ReportUnorderedListItem>
            <ReportUnorderedListItem>
              The direct link between onboarding quality and key metrics like
              CAC, CLV, and NRR
            </ReportUnorderedListItem>
            <ReportUnorderedListItem>
              Real-world examples and case studies from successful companies
            </ReportUnorderedListItem>
          </ReportUnorderedList>
        </ReportParagraph>
        <ReportParagraph>
          <CaseSectionHead
            headline={"Who this report is for"}
            subline={
              "We designed this report for founders of early-stage and growth startups who are:"
            }
          />

          <ReportUnorderedList>
            <ReportUnorderedListItem>
              Startup founders and product leaders seeking sustainable growth
            </ReportUnorderedListItem>
            <ReportUnorderedListItem>
              SaaS companies struggling with user retention and activation
            </ReportUnorderedListItem>
            <ReportUnorderedListItem>
              Product teams looking to optimize their onboarding experience
            </ReportUnorderedListItem>
            <ReportUnorderedListItem>
              Growth managers focused on improving key metrics
            </ReportUnorderedListItem>
          </ReportUnorderedList>
          <br />
          <CaseCopy
            copy={
              "Download now to understand why user onboarding and activation have become the cornerstone of sustainable business growth in today's market."
            }
          />

          <LeadGenerationForm
            portal={"49351608"}
            form={"ce820859-2f9e-41bb-a9f8-db512c279fba"}
            size={"M"}
            successLink="./report-docs/[Report] Four industry shifts making onboarding & activation indispensable.pdf"
          />
        </ReportParagraph>
      </ReportSection>
    </ReportContent>
  );
};

export default Content;
