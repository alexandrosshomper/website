import React from "react";
import { Helmet } from "react-helmet";
import styled from "@emotion/styled";

//Components
import ReportContent from "../../Content/Report/ReportContent";
import CaseTitle from "../../Content/Case/CaseTitle";
import CaseTitleEyebrow from "../../Content/Case/CaseTitleEyebrow";

import CaseSubline from "../../Content/Case/CaseSubline";
import LeadGenerationForm from "../../LeadGen/LeadGenerationForm";

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
          Why Onboarding & Activation Are The Ultimate Levers for SaaS Growth |
          Alexandros Shomper
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
            "Why Onboarding & Activation Are The Ultimate Levers for SaaS Growth"
          }
        />
        <CaseSubline subline="User Onboarding & Activation: The Secret to Long-Term Retention & ARR Growth" />
        <ReportContent>
          <section>
            <h2>Introduction</h2>
            <p>
              For early-stage and growth startup founders, the path to
              sustainable growth isn't just about acquiring new users – it's
              about keeping them. And the most powerful levers for improving
              retention and ARR? User Onboarding &amp; Activation.
            </p>
            <div data-report-form>
              <LeadGenerationForm
                portal={"49351608"}
                form={"ce820859-2f9e-41bb-a9f8-db512c279fba"}
                size={"M"}
                successLink="./reports/[Report]Why-Onboarding&Activation-Are-The-Ultimate-Levers-For-SaaS-Growth.pdf"
              />
            </div>
          </section>
          <section>
            <h3>Our latest report reveals:</h3>
            <ul>
              <li>
                Why effective onboarding and activation are the most
                cost-efficient ways to boost retention.
              </li>
              <li>
                The metrics, frameworks, and psychological insights that make
                onboarding work.
              </li>
              <li>
                Case studies from successful SaaS companies like HubSpot, Slack,
                Robinhood, and more.
              </li>
              <li>
                How optimizing onboarding &amp; activation impacts critical metrics
                like CAC:CLV, NRR, and ARR.
              </li>
            </ul>
            <h3>Key Metrics You'll Discover</h3>
            <ul>
              <li>
                Improving user onboarding can boost customer retention by up to
                50% <i>(Invesp)</i>.
              </li>
              <li>
                A well-designed onboarding flow can increase revenue by up to
                150% over six months.
              </li>
              <li>
                Reducing churn by just 5% can increase profits by up to 95%
                <i>(Harvard Business Review)</i>.
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
                Struggling with <strong>high churn</strong> rates and
                <strong>low user retention</strong>.
              </li>
              <li>
                Finding it <strong>hard to convert free users to paying customers</strong>.
              </li>
              <li>
                Seeking cost-effective ways to <strong>improve retention and revenue growth</strong>.
              </li>
              <li>
                Unsure <strong>how to measure and optimize onboarding</strong>
                effectiveness.
              </li>
              <li>
                Looking to <strong>improve CAC:CLV</strong> ratios and
                <strong>accelerate ARR</strong> growth.
              </li>
              <li>
                Building or refining their <strong>product-led growth strategy</strong>.
              </li>
            </ul>
            <p>
              If you're trying to turn new users into loyal, paying customers,
              this whitepaper is for you.
            </p>
            <div data-report-form>
              <LeadGenerationForm
                portal={"49351608"}
                form={"ce820859-2f9e-41bb-a9f8-db512c279fba"}
                size={"M"}
                successLink="./report-docs/[Report]Why-Onboarding&Activation-Are-The-Ultimate-Levers-For-SaaS-Growth.pdf"
              />
            </div>
          </section>
        </ReportContent>
      </Section>
    </PageWrapper>
  );
};

export default Content;
