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
      <ReportSection>
        <CaseTitleEyebrow text={"Report"} color1="#00b8d4" color2="#62ebff" />
        <CaseTitle
          headline={
            "Why Onboarding & Activation Are The Ultimate Levers for SaaS Growth"
          }
        />
        <CaseSubline subline="User Onboarding & Activation: The Secret to Long-Term Retention & ARR Growth" />
        <br />
        <br />
        <br />
        <br />
        <br />
        <CaseSectionHead
          headline={"Introduction"}
          subline={"Is your SaaS growth strategy truly built for the long run?"}
        />
        <CaseCopy
          copy={
            "For early-stage and growth startup founders, the path to sustainable growth isn't just about acquiring new users – it's about keeping them. And the most powerful levers for improving retention and ARR? User Onboarding & Activation."
          }
        />
        <br />
        <LeadGenerationForm
          portal={"49351608"}
          form={"ce820859-2f9e-41bb-a9f8-db512c279fba"}
          size={"M"}
          successLink="./reports/[Report]Why-Onboarding&Activation-Are-The-Ultimate-Levers-For-SaaS-Growth.pdf"
        />

        <ReportParagraph>
          <CaseHeadlineThree headline={"Our latest report reveals:"} />
          <ReportUnorderedList>
            <ReportUnorderedListItem>
              Why effective onboarding and activation are the most
              cost-efficient ways to boost retention.
            </ReportUnorderedListItem>
            <ReportUnorderedListItem>
              The metrics, frameworks, and psychological insights that make
              onboarding work.
            </ReportUnorderedListItem>
            <ReportUnorderedListItem>
              Case studies from successful SaaS companies like HubSpot, Slack,
              Robinhood, and more.
            </ReportUnorderedListItem>
            <ReportUnorderedListItem>
              How optimizing onboarding & activation impacts critical metrics
              like CAC:CLV, NRR, and ARR.
            </ReportUnorderedListItem>
          </ReportUnorderedList>
          <br />
          <br />
          <CaseHeadlineThree headline={"Key Metrics You'll Discover"} />
          <ReportUnorderedList>
            <ReportUnorderedListItem>
              Improving user onboarding can boost customer retention by up to
              50% <i>(Invesp)</i>.
            </ReportUnorderedListItem>
            <ReportUnorderedListItem>
              A well-designed onboarding flow can increase revenue by up to 150%
              over six months.
            </ReportUnorderedListItem>
            <ReportUnorderedListItem>
              Reducing churn by just 5% can increase profits by up to 95%
              <i>(Harvard Business Review)</i>.
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
              Struggling with <b>high churn</b> rates and{" "}
              <b>low user retention</b>.
            </ReportUnorderedListItem>
            <ReportUnorderedListItem>
              Finding it <b>hard to convert free users to paying customers</b>.
            </ReportUnorderedListItem>
            <ReportUnorderedListItem>
              Seeking cost-effective ways to{" "}
              <b>improve retention and revenue growth</b>.
            </ReportUnorderedListItem>
            <ReportUnorderedListItem>
              Unsure <b>how to measure and optimize onboarding</b>{" "}
              effectiveness.
            </ReportUnorderedListItem>
            <ReportUnorderedListItem>
              Looking to <b>improve CAC:CLV</b> ratios and <b>accelerate ARR</b>
              growth.
            </ReportUnorderedListItem>
            <ReportUnorderedListItem>
              Building or refining their <b>product-led growth strategy</b>.
            </ReportUnorderedListItem>
          </ReportUnorderedList>
          <br />
          <CaseCopy
            copy={
              "If you're trying to turn new users into loyal, paying customers, this whitepaper is for you."
            }
          />

          <LeadGenerationForm
            portal={"49351608"}
            form={"ce820859-2f9e-41bb-a9f8-db512c279fba"}
            size={"M"}
            successLink="./report-docs/[Report]Why-Onboarding&Activation-Are-The-Ultimate-Levers-For-SaaS-Growth.pdf"
          />
        </ReportParagraph>
      </ReportSection>
    </ReportContent>
  );
};

export default Content;
