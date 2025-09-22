import styled from "@emotion/styled";
import React from "react";
import { Helmet } from "react-helmet";

import { getFlowMeta } from "../../../data/flows";

// DESIGN SYSTEM
import { Colors, Devices } from "../../DesignSystem";

//COMPONENTS
import CaseSectionHead from "../../Content/Case/CaseSectionHead";
import CaseSubline from "../../Content/Case/CaseSubline";
import CaseTitle from "../../Content/Case/CaseTitle";
import CaseTitleEyebrow from "../../Content/Case/CaseTitleEyebrow";
import CaseCard from "../../Content/CaseCard/CaseCard";

import FlowCarousel from "../../Content/FlowCarousel/FlowCarousel";
import FadeInSection from "../../Content/FadeInSection/FadeInSection";

const ContentWrapper = styled.div`
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

const Paragraph = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  align-self: stretch;
  flex-grow: 0;
  margin-bottom: 140px;
`;

const CaseCardGrid = styled.section`
  margin: 0px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  align-items: center;
  gap: 24px;
  margin-bottom: calc(-1 * var(--gap));

  & > * {
    margin-left: var(--gap);
    margin-bottom: var(--gap);
  }

  ${Devices.tabletS} {
    width: 564px;
  }
  ${Devices.tabletM} {
    width: 708px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  ${Devices.laptopS} {
    width: 852px;
  }
  ${Devices.laptopM} {
    width: 1140px;
  }
`;

const Chips = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 12px;
  width: 90%;

  ${Devices.tabletS} {
    width: 564px;
  }
  ${Devices.tabletM} {
    width: 708px;
  }
  ${Devices.laptopS} {
    width: 740px;
  }
`;

const Chip = styled.div`
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  color: ${Colors.primaryText.highEmphasis};
  background-color: white;
  border-radius: 20px;
  padding: 8px 16px 8px 16px;
  cursor: default;
  white-space: nowrap;
`;

const RelatedResourcesWrapper = ({ resources }) => {
  if (!resources || resources.length === 0) {
    return null;
  }

  return (
    <Paragraph>
      <CaseSectionHead headline={"Related Ressources"} />
      <CaseCardGrid>
        {resources.map((resource) => (
          <FadeInSection stagger={0.3} key={resource.headline}>
            <CaseCard {...resource} />
          </FadeInSection>
        ))}
      </CaseCardGrid>
    </Paragraph>
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
    <ContentWrapper>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
      </Helmet>
      <Section>
        <CaseTitleEyebrow text={"Flow"} color1="#00b8d4" color2="#62ebff" />
        <CaseTitle headline={flowMeta.name} />
        <CaseSubline subline={flowMeta.desc} />

        {chips.length > 0 && (
          <Chips>
            {chips.map((chipValue) => (
              <Chip key={chipValue}>{chipValue}</Chip>
            ))}
          </Chips>
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
      </Section>
    </ContentWrapper>
  );
};

export default FlowPageTemplate;
