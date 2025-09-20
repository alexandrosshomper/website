import React from "react";

import ReportTemplate from "./ReportTemplate";
import ReportContent from "../../Content/Report/ReportContent";
import LeadGenerationForm from "../../LeadGen/LeadGenerationForm";

const DEFAULT_LEAD_GENERATION_FORM_PROPS = {
  portal: "49351608",
  form: "ce820859-2f9e-41bb-a9f8-db512c279fba",
  size: "M",
};

const DEFAULT_META_DESCRIPTION =
  "For early-stage and growth startup founders, retention is everything. But what if the key to higher retention and ARR isn't just engagement or new features? Our latest whitepaper dives into why user onboarding and activation are the most powerful (and cost-effective) levers for boosting long-term retention and revenue. Discover how optimizing these critical stages can drastically reduce churn, increase customer lifetime value, and accelerate growth. Download the full report to uncover the strategies top SaaS companies use to turn new users into loyal, paying customers.";

const createReportPage = ({
  metaTitle,
  metaDescription = DEFAULT_META_DESCRIPTION,
  eyebrow,
  eyebrowColor1,
  eyebrowColor2,
  title,
  subline,
  leadGenerationFormProps,
  renderContent,
}) => {
  const mergedLeadGenerationFormProps = {
    ...DEFAULT_LEAD_GENERATION_FORM_PROPS,
    ...(leadGenerationFormProps || {}),
  };

  const LeadGenerationFormWithDefaults = (props) => (
    <LeadGenerationForm
      {...mergedLeadGenerationFormProps}
      {...props}
    />
  );

  const ReportPage = () => (
    <ReportTemplate
      metaTitle={metaTitle}
      metaDescription={metaDescription}
      eyebrow={eyebrow}
      eyebrowColor1={eyebrowColor1}
      eyebrowColor2={eyebrowColor2}
      title={title}
      subline={subline}
    >
      <ReportContent>
        {typeof renderContent === "function"
          ? renderContent({ LeadGenerationForm: LeadGenerationFormWithDefaults })
          : null}
      </ReportContent>
    </ReportTemplate>
  );

  if (title) {
    ReportPage.displayName = `ReportPage(${title})`;
  }

  return ReportPage;
};

export default createReportPage;
export { DEFAULT_META_DESCRIPTION };
export { DEFAULT_LEAD_GENERATION_FORM_PROPS };
