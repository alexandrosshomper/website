import styled from "@emotion/styled";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useInView } from "react-intersection-observer";

import { getFlowMeta } from "../../../data/flows";

// DESIGN SYSTEM
import { Colors, Devices } from "../../DesignSystem";

//COMPONENTS
import CaseSectionHead from "../../Content/Case/CaseSectionHead";
import CaseSubline from "../../Content/Case/CaseSubline";
import CaseTitle from "../../Content/Case/CaseTitle";
import CaseTitleEyebrow from "../../Content/Case/CaseTitleEyebrow";
import CaseCard from "../../Content/CaseCard/CaseCard";
import SectionLayout from "../../Content/Section/SectionLayout";
import CardGrid from "../../Content/Section/CardGrid";

import FlowCarousel from "../../Content/FlowCarousel/FlowCarousel";

function FadeInWhenVisible({ children }) {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 0.3 }}
      variants={{
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.3,
          },
        },
        hidden: {
          opacity: 0,
        },
      }}
    >
      {children}
    </motion.div>
  );
}

const ContentWrapper = styled.div`
  text-align: left;
  margin-top: 72px;
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
    <SectionLayout marginBottom="140px">
      <CaseSectionHead headline={"Related Ressources"} />
      <CardGrid
        margin="0px"
        responsive={{
          tabletS: "width: 564px;",
          tabletM: `
            width: 708px;
            flex-direction: row;
            align-items: center;
            justify-content: center;
          `,
          laptopS: "width: 852px;",
          laptopM: "width: 1140px;",
        }}
      >
        {resources.map((resource) => (
          <FadeInWhenVisible key={resource.headline}>
            <CaseCard {...resource} />
          </FadeInWhenVisible>
        ))}
      </CardGrid>
    </SectionLayout>
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
      <SectionLayout marginBottom="0">
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
      </SectionLayout>
    </ContentWrapper>
  );
};

export default FlowPageTemplate;
