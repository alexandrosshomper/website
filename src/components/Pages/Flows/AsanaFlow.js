import styled from "@emotion/styled";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useInView } from "react-intersection-observer";

import asanaFlow from "../../../data/flows/asana.json";

// DESIGN SYSTEM
import { Colors, Devices } from "../../DesignSystem";
// CASE STUDY SLIDER
import CaseStudySlider from "../../CaseStudySlider/CaseStudySlider";
import asanaCaseStudy from "../../../data/casestudies/asanaCaseStudy.json";

//COMPONENTS
import CaseCopy from "../../Content/Case/CaseCopy";
import CaseCover from "../../Content/Case/CaseCover";
import CaseHeadlineThree from "../../Content/Case/CaseHeadlineThree";
import CaseImage from "../../Content/Case/CaseImage";
import CaseSectionHead from "../../Content/Case/CaseSectionHead";
import CaseSublineTwo from "../../Content/Case/CaseSublineTwo";
import CaseTitle from "../../Content/Case/CaseTitle";
import CaseTitleEyebrow from "../../Content/Case/CaseTitleEyebrow";

import CaseHeadlineTwo from "../../Content/Case/CaseHeadlineTwo";
import CaseSubline from "../../Content/Case/CaseSubline";
import CaseCard from "../../Content/CaseCard/CaseCard";
import Drawer from "../../Content/Drawer/Drawer";

import FlowsCarousel from "../../Content/FlowCarousel/FlowCarousel";

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
  const galleryItems = [
    {
      id: 1,
      imgURL: "./img/Knauf/myKnaufProjectJourney.jpg",
      imgMobileURL: "./img/Occhio/Personae-mobile.png",
      headline: "Detailing the construction project journey",
      copy: "We went back to the drawing board. A journey that has been created at the start of the projects, when we still aimed for separate offerings per customer type. This is not a customer journey. It covers the journey of all our customer types along the lifecycle of a construction project. Revising this journey helped us discover close interfaces between the apps, but also long gaps that could be filled. Also we could discover important handover moments between the customer types, but also where customer types repeatedly have to check into the project again.",
    },
    {
      id: 2,
      imgURL: "./img/Knauf/myKnaufProductsMicroServices.jpg",
      imgMobileURL: "./img/Occhio/CustomerJourney-mobile.png",
      headline: "Investigating the interfaces of the apps",
      copy: "With that knowledge, we are able to at our apps with new eyes. What can be combined? What can be broken up? It is a difficult but also exciting opportunity to revise two years of work.",
    },
  ];
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

  const CaseUnorderedList = styled.ul`
    position: static;

    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 400;
    color: ${Colors.primaryText.highEmphasis};

    list-style-type: none;
    list-style-image: none;

    list-style-position: outside;
    padding-left: 0px;

    /* Inside Auto Layout */

    font-size: 24px;
    line-height: 160%;

    margin: 0 auto;
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

  const greenArrowStyle = {
    color: Colors.green,
    fontWeight: "bold",
  };

  return (
    <Content>
      <Helmet>
        <meta charSet="utf-8" />
        <title>myKnauf | Alexandros Shomper</title>
        <meta
          name="description"
          content="Digital Anthropologist. Experienced Product-, Service & Business
          Designer with demonstrated track record of successfully developing
          meaningful experiences that people love by using emerging technology,
          solid company purpose, and a strong brand to elevate human experiences
          and interactions."
        />
        <description></description>
        <title>Asana Case Study</title>
      </Helmet>
      <Section>
        <CaseTitleEyebrow
          text={"Case Study"}
          color1="#00b8d4"
          color2="#62ebff"
        />
        <CaseTitle headline={"Asana – Onboarding and Activation"} />
        <CaseSectionHead
          subline={
            "How positioning for teams & enterprise impacts your segmentation, setup, and plan selection"
          }
        />

        <CaseCopy
          copy={
            "In this case study we’ll take a look at asana’s onboarding and activation flow."
          }
        />
        <CaseCopy
          copy={
            "While we’ve identified two use cases (Personal Task Management and Team Collaboration), the case study reveals a strong bias towards the team use case, occasionally at the expense of individual users."
          }
        />
        <CaseCopy
          copy={
            "Asana has clearly positioned itself towards enterprise and team collaboration, which is reflected throughout their user onboarding journey. This strategic focus impacts everything from landing page messaging, signup, to activation metrics."
          }
        />
        <CaseCopy copy={"Let’s take a look."} />
        <br />
        <br />
        <br />
        <br />
        <br />
        {/* <Paragraph>
          <CaseHeadlineThree headline={"At a glance"} />
          <CaseUnorderedList>
            <li>Digital Strategy</li>
            <li>Information Architecture</li>
            <li>Roadmap</li>
            <li>Digital Branding</li>
          </CaseUnorderedList>
       </Paragraph>*/}

        <Paragraph>
          <CaseSectionHead headline={"Audit Walkthrough"} />
          <FlowsCarousel data={asanaFlow} appname={"Asana"} />
        </Paragraph>
      </Section>
    </Content>
  );
};

export default Content;
