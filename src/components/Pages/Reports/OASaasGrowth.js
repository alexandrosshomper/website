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

const OASaasGrowth = () => {
  return (
    <ReportTemplate
      metaTitle="Why Onboarding & Activation Are The Ultimate Levers for SaaS Growth | Alexandros Shomper"
      metaDescription="For early-stage and growth startup founders, retention is everything. But what if the key to higher retention and ARR isn't just engagement or new features? Our latest whitepaper dives into why user onboarding and activation are the most powerful (and cost-effective) levers for boosting long-term retention and revenue. Discover how optimizing these critical stages can drastically reduce churn, increase customer lifetime value, and accelerate growth. Download the full report to uncover the strategies top SaaS companies use to turn new users into loyal, paying customers."
      title="Why Onboarding & Activation Are The Ultimate Levers for SaaS Growth"
      subline="User Onboarding & Activation: The Secret to Long-Term Retention & ARR Growth"
    >
      <CaseSectionHead
        headline={"Introduction"}
        subline={"Is your SaaS growth strategy truly built for the long run?"}
      />
      <CaseCopy
        copy="For early-stage and growth startup founders, the path to sustainable growth isn't just about acquiring new users – it's about keeping them. And the most powerful levers for improving retention and ARR? User Onboarding & Activation."
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
          <ReportListItem>
            Why effective onboarding and activation are the most cost-efficient ways to boost retention.
          </ReportListItem>
          <ReportListItem>
            The metrics, frameworks, and psychological insights that make onboarding work.
          </ReportListItem>
          <ReportListItem>
            Case studies from successful SaaS companies like HubSpot, Slack, Robinhood, and more.
          </ReportListItem>
          <ReportListItem>
            How optimizing onboarding & activation impacts critical metrics like CAC:CLV, NRR, and ARR.
          </ReportListItem>
        </ReportUnorderedList>
        <br />
        <br />
        <CaseHeadlineThree headline={"Key Metrics You'll Discover"} />
        <ReportUnorderedList>
          <ReportListItem>
            Improving user onboarding can boost customer retention by up to 50% <i>(Invesp)</i>.
          </ReportListItem>
          <ReportListItem>
            A well-designed onboarding flow can increase revenue by up to 150% over six months.
          </ReportListItem>
          <ReportListItem>
            Reducing churn by just 5% can increase profits by up to 95% <i>(Harvard Business Review)</i>.
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
            Struggling with <b>high churn</b> rates and {" "}
            <b>low user retention</b>.
          </ReportListItem>
          <ReportListItem>
            Finding it <b>hard to convert free users to paying customers</b>.
          </ReportListItem>
          <ReportListItem>
            Seeking cost-effective ways to {" "}
            <b>improve retention and revenue growth</b>.
          </ReportListItem>
          <ReportListItem>
            Unsure <b>how to measure and optimize onboarding</b> {" "}
            effectiveness.
          </ReportListItem>
          <ReportListItem>
            Looking to <b>improve CAC:CLV</b> ratios and <b>accelerate ARR</b>
            growth.
          </ReportListItem>
          <ReportListItem>
            Building or refining their <b>product-led growth strategy</b>.
          </ReportListItem>
        </ReportUnorderedList>
        <br />
        <CaseCopy
          copy="If you're trying to turn new users into loyal, paying customers, this whitepaper is for you."
        />

        <LeadGenerationForm
          portal={"49351608"}
          form={"ce820859-2f9e-41bb-a9f8-db512c279fba"}
          size={"M"}
          successLink="./report-docs/[Report]Why-Onboarding&Activation-Are-The-Ultimate-Levers-For-SaaS-Growth.pdf"
        />
      </ReportParagraph>
    </ReportTemplate>
  );
};

export default OASaasGrowth;
