import React from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

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
  const { pathname } = useLocation();
  const canonical = `https://www.alexandrosshomper.de${pathname}`;

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
  const pageDescription =
    flowMeta.desc ||
    "Explore detailed onboarding and activation flows from leading products.";

  return (
    <PageContent>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.alexandrosshomper.de/img/social/og-default.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.alexandrosshomper.de/" },
            { "@type": "ListItem", "position": 2, "name": "Flows", "item": "https://www.alexandrosshomper.de/flows" },
            { "@type": "ListItem", "position": 3, "name": flowMeta.name, "item": canonical }
          ]
        })}</script>
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
        <FlowCarousel
          data={screens}
          appname={flowMeta.name}
          url={flowMeta.path}
        />
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
