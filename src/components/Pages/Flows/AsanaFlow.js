import styled from "@emotion/styled";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useInView } from "react-intersection-observer";

import asanaFlow from "../../../data/flows/asana.json";

// DESIGN SYSTEM
import { Colors, Devices } from "../../DesignSystem";

//COMPONENTS
import CaseSectionHead from "../../Content/Case/CaseSectionHead";
import CaseSubline from "../../Content/Case/CaseSubline";
import CaseTitle from "../../Content/Case/CaseTitle";
import CaseTitleEyebrow from "../../Content/Case/CaseTitleEyebrow";
import CaseCard from "../../Content/CaseCard/CaseCard";

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

    align-self: stretch;
    flex-grow: 0;
  `;

  const Paragraph = styled.section`
    /* Auto Layout */
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    /* Inside Auto Layout */
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
  `;
  return (
    <Content>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Asana Onboarding Flow | Alexandros Shomper</title>
        <meta
          name="description"
          content="Digital Anthropologist. Experienced Product-, Service & Business
          Designer with demonstrated track record of successfully developing
          meaningful experiences that people love by using emerging technology,
          solid company purpose, and a strong brand to elevate human experiences
          and interactions."
        />
        <description></description>
        <title>Asana Onboarding Flow</title>
      </Helmet>
      <Section>
        <CaseTitleEyebrow text={"Flow"} color1="#00b8d4" color2="#62ebff" />
        <CaseTitle headline={"Asana"} />
        <CaseSubline subline={"Where work connects"} />

        <Chips>
          <Chip>Project Management</Chip>
          <Chip>B2B</Chip>
          <Chip>Freemium</Chip>
        </Chips>
        <br />
        <br />
        <br />
        <FlowCarousel data={asanaFlow} appname={"Asana"} />
        <br />
        <br />
        <br />
        <br />
        <Paragraph>
          <CaseSectionHead headline={"Related Ressources"} />
          <CaseCardGrid>
            <FadeInWhenVisible>
              <CaseCard
                eyebrow="Case Study"
                eyebrowColor2="#FFEAED"
                eyebrowColor1="#FD594A"
                headline="Asana – How positioning for teams & enterprise impacts your segmentation, setup, and plan selection"
                copy=""
                imgURL="/img/case_studies/asana/Cover@2x.png"
                link="/case-studies/asana"
              />
            </FadeInWhenVisible>
          </CaseCardGrid>
        </Paragraph>
      </Section>
    </Content>
  );
};

export default Content;
