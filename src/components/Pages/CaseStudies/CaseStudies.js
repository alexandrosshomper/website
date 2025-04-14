import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import styled from "@emotion/styled";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

//Components
import { Devices } from "../../DesignSystem";
import SectionHead from "../../Content/Section/SectionHead";

import CaseCard from "../../Content/CaseCard/CaseCard";
import CaseSectionSummary from "../../Content/Case/CaseSectionSummary";

import CaseStudySlider from "../../CaseStudySlider/CaseStudySlider";
import asanaCaseStudy from "../../../data/casestudies/asanaCaseStudy.json";

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
          scale: 1,
          y: 0,
          transition: {
            staggerChildren: 0.3,
          },
        },
        hidden: {
          opacity: 0,
          scale: 0.8,
          y: "+25%",
        },
      }}
    >
      {children}
    </motion.div>
  );
}

const Content = (props) => {
  const Content = styled.div`
    text-align: left;
    margin-top: 72px;
  `;

  const Section = styled.section`
    /* Auto Layout */
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    /* Inside Auto Layout */
    flex: none;
    order: 3;
    align-self: stretch;
    flex-grow: 0;
    margin-bottom: 200px;
  `;

  const CaseCardGrid = styled.section`
    margin: 0px 24px 0px 24px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    align-items: center;
    --gap: 24px;
    margin-left: calc(-1 * var(--gap));
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
      --gap: 12px;
    }
  `;
  const Panels = styled.section`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: auto;
    justify-content: flex-start;
    align-content: center;
    align-items: flex-start;
    gap: 12px;

    margin: 0px;
    ${Devices.tabletS} {
      width: 576px;
    }
    ${Devices.tabletM} {
      width: 720px;
      flex-direction: row;
    }
    ${Devices.laptopS} {
      width: 864px;
    }
    ${Devices.laptopM} {
      width: 1152px;
    }
  `;

  return (
    <Content>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Case Studies | Alexandros Shomper</title>
        <description>
          Digital Anthopologist. Experienced Product-, Service & Business
          Designer with demonstrated track record of successfully developing
          meaningful experiences that people love by using emerging technology,
          solid company purpose, and a strong brand to elevate human experiences
          and interactions.
        </description>
      </Helmet>
      <Section>
        <SectionHead
          headline="Case Studies"
          subline="Studies on user onboarding & activation from various products."
        />
        <Panels style={{ marginBottom: "48px" }}>
          <FadeInWhenVisible>
            <CaseSectionSummary
              copy="
Detailed use cases assessing the user onboarding & activation flows from different companies and products."
              //imgURL="./img/PanelTestImages/one.jpg"
            />
          </FadeInWhenVisible>
          <CaseStudySlider slides={asanaCaseStudy} />
        </Panels>
        <CaseCardGrid>
          <FadeInWhenVisible>
            <CaseCard
              eyebrow="Deep Dive"
              eyebrowColor2="#231768"
              eyebrowColor1="#10d5f5"
              headline="Product Analytics: How to analyze and define retention & engagement metrics for an app platform"
              copy="Knauf want's to explore the opportunities of digitizing the construction business by rapidly developing validated product & business ideas"
              imgURL="./img/Knauf/CoverProductAnalytics.png"
              comingSoon="true"
            />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <CaseCard
              eyebrow="Deep Dive"
              eyebrowColor2="#231768"
              eyebrowColor1="#10d5f5"
              headline="User Acquisition: How to develop a marketing messaging framework for an app platform"
              copy="Knauf want's to explore the opportunities of digitizing the construction business by rapidly developing validated product & business ideas"
              imgURL="./img/Knauf/CoverUserAcquisition.png"
              comingSoon="true"
            />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <CaseCard
              eyebrow="Deep Dive"
              eyebrowColor2="#231768"
              eyebrowColor1="#10d5f5"
              headline="Signups: How to increase signups with user psychology and data analysis"
              copy="Increasing signups for Knauf Account. Reducing signup friction by applying user psychology on registration flows."
              imgURL="./img/Knauf/CoverSignup.png"
              link="/knauf-account"
            />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <CaseCard
              eyebrow="Deep Dive"
              eyebrowColor2="#231768"
              eyebrowColor1="#10d5f5"
              headline="User Retention: How to increase user engagement & activation by analyzing featuer adoption"
              copy="Increasing user engagement & activation for Knauf Digital's app. An unexpected finding: a neglected feature used by 7% of users, accounting for 20% of total traffic."
              imgURL="./img/Knauf/CoverUserRetention.png"
              link="/knauf-orderoverview"
            />
          </FadeInWhenVisible>
        </CaseCardGrid>
      </Section>
    </Content>
  );
};

export default Content;
