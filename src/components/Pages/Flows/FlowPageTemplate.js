import React from "react";
import { Helmet } from "react-helmet";

import { getFlowMeta } from "../../../data/flows";

// DESIGN SYSTEM
import {
  CaseCardGrid,
  ChipPill,
  ChipRow,
  PageContent,
  PageParagraph,
  PageSection,
} from "../../Layout";

//COMPONENTS
import CaseSectionHead from "../../Content/Case/CaseSectionHead";
import CaseSubline from "../../Content/Case/CaseSubline";
import CaseTitle from "../../Content/Case/CaseTitle";
import CaseTitleEyebrow from "../../Content/Case/CaseTitleEyebrow";
import CaseCard from "../../Content/CaseCard/CaseCard";

import FlowCarousel from "../../Content/FlowCarousel/FlowCarousel";
import InViewMotion from "../../animation/InViewMotion";

const RelatedResourcesWrapper = ({ resources }) => {
  if (!resources || resources.length === 0) {
    return null;
  }

  return (
    <PageParagraph>
      <CaseSectionHead headline={"Related Ressources"} />
      <CaseCardGrid>
        {resources.map((resource) => (
          <InViewMotion key={resource.headline}>
            <CaseCard {...resource} />
          </InViewMotion>
        ))}
      </CaseCardGrid>
    </PageParagraph>
  );
};

const FlowPageTemplate = ({ flowSlug, screens = [], relatedResources }) => {
  const flowMeta = getFlowMeta(flowSlug);

  if (!flowMeta) {
    return null;
  }

  const chips = [
    flowMeta.category,
    flowMeta.businessType,
    flowMeta.monetization,
    flowMeta.hasSSO ? "SSO available" : null,
  ].filter(Boolean);

  const pageTitle = `${flowMeta.name} Onboarding Flow | Alexandros Shomper`;
  const pageDescription = flowMeta.desc ||
    "Explore detailed onboarding and activation flows from leading products.";

  return (
    <PageContent>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
      </Helmet>
      <PageSection>
        <CaseTitleEyebrow text={"Flow"} color1="#00b8d4" color2="#62ebff" />
        <CaseTitle headline={flowMeta.name} />
        <CaseSubline subline={flowMeta.desc} />

        {chips.length > 0 && (
          <ChipRow>
            {chips.map((chipValue) => (
              <ChipPill key={chipValue}>{chipValue}</ChipPill>
            ))}
          </ChipRow>
        )}
        <br />
        <br />
        <br />
        <FlowCarousel data={screens} appname={flowMeta.name} url={flowMeta.path} />
        <br />
        <br />
        <br />
        <br />
        <RelatedResourcesWrapper resources={relatedResources} />
      </PageSection>
    </PageContent>
  );
};

export default FlowPageTemplate;
