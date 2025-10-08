import React from "react";

import createReportPage, { DEFAULT_META_DESCRIPTION } from "./createReportPage";
import { ArticleSection, ArticleSectionContent } from "../../DesignSystem";

const metaTitle =
  "Four industry shifts making user onboarding & activation indispensible | Alexandros Shomper";

const renderContent = ({ LeadGenerationForm }) => (
  <ArticleSection>
    <ArticleSectionContent>
      <h2>Introduction</h2>
      <p>
        In today's challenging startup landscape, acquiring and retaining users
        has never been more critical – or more difficult. This in-depth report
        reveals why exceptional user onboarding is no longer optional.
      </p>

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
          How market dynamics have fundamentally shifted, making user activation
          more crucial than ever.
        </li>
        <li>
          Why companies with strong onboarding see up to 86% higher customer
          lifetime value.
        </li>
        <li>
          The direct link between onboarding quality and key metrics like CAC,
          CLV, and NRR.
        </li>
        <li>Real-world examples and case studies from successful companies.</li>
      </ul>

      <h3>Who this report is for</h3>
      <p>
        We designed this report for founders of early-stage and growth startups
        who are:
      </p>
      <ul>
        <li>
          Startup founders and product leaders seeking sustainable growth.
        </li>
        <li>SaaS companies struggling with user retention and activation.</li>
        <li>Product teams looking to optimize their onboarding experience.</li>
        <li>Growth managers focused on improving key metrics.</li>
      </ul>
      <p>
        Download now to understand why user onboarding and activation have
        become the cornerstone of sustainable business growth in today's market.
      </p>
      <div data-report-form>
        <LeadGenerationForm />
      </div>
    </ArticleSectionContent>
  </ArticleSection>
);

export default createReportPage({
  metaTitle,
  metaDescription: DEFAULT_META_DESCRIPTION,
  title:
    "Four industry shifts making user onboarding & activation indispensible",
  subline:
    "User Onboarding & Activation: a strategic imperative for growth, retention, and survival.",
  leadGenerationFormProps: {
    successLink:
      "/report-docs/[Report] Four industry shifts making onboarding & activation indispensable.pdf",
  },
  renderContent,
});
