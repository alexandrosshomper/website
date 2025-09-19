import React from "react";
import { Helmet } from "react-helmet";
import styled from "@emotion/styled";

//Components
import ReportContent from "../../Content/Report/ReportContent";
import CaseTitle from "../../Content/Case/CaseTitle";
import CaseTitleEyebrow from "../../Content/Case/CaseTitleEyebrow";

import CaseSubline from "../../Content/Case/CaseSubline";
import LeadGenerationForm from "../../LeadGen/LeadGenerationForm";
import ReportTemplate from "./ReportTemplate";

const PageWrapper = styled.div`
  text-align: left;
  margin-top: 72px;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  align-self: stretch;
  flex-grow: 0;
`;

const Content = () => {
  return (
    <PageWrapper>
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
      <Section>
        <CaseTitleEyebrow text={"Report"} color1="#00b8d4" color2="#62ebff" />
        <CaseTitle
          headline={
            "Four industry shifts making user onboarding & activation indispensible"
          }
        />
        <CaseSubline subline="User Onboarding & Activation: a strategic imperative for growth, retention, and survival." />
        <ReportContent>
          <section>
            <h2>Introduction</h2>
            <p>
              In today's challenging startup landscape, acquiring and retaining
              users has never been more critical – or more difficult. This
              in-depth report reveals why exceptional user onboarding is no
              longer optional.
            </p>
          </section>
          <section>
            <h3>Our latest report reveals:</h3>
            <ul>
              <li>Market dynamics have fundamentally changed.</li>
              <li>The funding environment has tightened.</li>
              <li>Product and team structures have evolved.</li>
              <li>External influences shape internal pressures.</li>
            </ul>
            <h3>Key insights you'll discover:</h3>
            <ul>
              <li>
                How market dynamics have fundamentally shifted, making user
                activation more crucial than ever.
              </li>
              <li>
                Why companies with strong onboarding see up to 86% higher
                customer lifetime value.
              </li>
              <li>
                The direct link between onboarding quality and key metrics like
                CAC, CLV, and NRR.
              </li>
              <li>
                Real-world examples and case studies from successful companies.
              </li>
            </ul>
          </section>
          <section>
            <h3>Who this report is for</h3>
            <p>
              We designed this report for founders of early-stage and growth
              startups who are:
            </p>
            <ul>
              <li>
                Startup founders and product leaders seeking sustainable growth.
              </li>
              <li>
                SaaS companies struggling with user retention and activation.
              </li>
              <li>
                Product teams looking to optimize their onboarding experience.
              </li>
              <li>
                Growth managers focused on improving key metrics.
              </li>
            </ul>
            <p>
              Download now to understand why user onboarding and activation have
              become the cornerstone of sustainable business growth in today's
              market.
            </p>
            <div data-report-form>
              <LeadGenerationForm
                portal={"49351608"}
                form={"ce820859-2f9e-41bb-a9f8-db512c279fba"}
                size={"M"}
                successLink="./report-docs/[Report] Four industry shifts making onboarding & activation indispensable.pdf"
              />
            </div>
          </section>
        </ReportContent>
      </Section>
    </PageWrapper>
  );
};

export default Content;
