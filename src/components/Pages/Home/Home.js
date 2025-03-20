import styled from "@emotion/styled";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useInView } from "react-intersection-observer";
import Trend from "react-trend";

//Components
import BlackQuote from "../../Content/BlackQuote/BlackQuote";
import Intro from "../../Content/Intro/Intro";
import ListBigText from "../../Content/List/ListBigText/ListBigText";
import ListPanel from "../../Content/List/ListPanel/ListPanel";
import ListSmallText from "../../Content/List/ListSmallText/ListSmallText";
import { Colors, Devices } from "../../DesignSystem";
import FlipCard from "../../Content/FlipCard/FlipCard";
import CaseUnorderdList from "../../Content/Case/CaseUnorderedList";
import CaseUnorderedList from "../../Content/Case/CaseUnorderedList";
import Icon from "@mdi/react";
import { mdiPlus } from "@mdi/js";
import { mdiReminder } from "@mdi/js";
import SectionHead from "../../Content/Section/SectionHead";
import SectionCopy from "../../Content/Section/SectionCopy";
import SectionDivider from "../../Content/Section/SectionDivider";
import Head from "../../Content/Landingpage/Head";
import Headline2 from "../../Content/Landingpage/Headline2";

import ButtonMedium from "../../Button/ButtonMedium";
import { mdiFilePdfBox } from "@mdi/js";
import BusinessCard from "../../Content/BusinessCard/BusinessCard";
import { mdiEmail, mdiAbTesting } from "@mdi/js";
import SectionSubline from "../../Content/Section/SectionSubline";
import HeadSubline from "../../Content/Landingpage/HeadSubline";
import HeadCopy from "../../Content/Landingpage/HeadCopy";
import SectionOverline from "../../Content/Section/SectionOverline";
import IconHeadlineCopyCard from "../../Content/IconHeadlineCopyCard/IconHeadlineCopyCard";

import {
  ClipboardList,
  Waypoints,
  Presentation,
  ListTodo,
  PanelsTopLeft,
  FileText,
  MessagesSquare,
} from "lucide-react";

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

function MoveUpWhenVisible({ children }) {
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
      transition={{ duration: 0.6 }}
      variants={{
        visible: {
          opacity: 1,
          scale: 1,
          y: 0,
          transition: {
            when: "beforeChildren",
            staggerChildren: 0.3,
          },
        },
        hidden: {
          opacity: 0,
          scale: 0.8,
          y: "+100%",
          transition: {
            when: "afterChildren",
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

function RevealWhenVisible({ children }) {
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
      transition={{ duration: 0.9 }}
      variants={{
        visible: {
          opacity: 1,
          x: 0,
          transition: {
            when: "beforeChildren",
            staggerChildren: 0.3,
          },
        },
        hidden: {
          opacity: 0,
          x: "5%",
          transition: {
            when: "afterChildren",
          },
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
    align-items: stretch;
    flex-grow: 0;
    margin-bottom: 200px;
    ${Devices.tabletS} {
      align-items: center;
    }
  `;

  const CardPanels = styled.section`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: auto;
    justify-content: center;
    align-content: center;
    align-items: stretch;
    --gap: 12px;

    margin-bottom: calc(1 * var(--gap));
    margin-right: 12px;
    margin-left: 12px;

    ${Devices.tabletS} {
      width: 576px;
      margin-right: 0px;
      margin-left: 0px;
      margin-bottom: calc(-1 * var(--gap));
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
  const FlipCardPanels = styled.section`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: auto;
    justify-content: flex-start;
    align-content: center;
    align-items: flex-start;
    --gap: 12px;
    margin-left: 12px;
    margin-right: 12px;
    margin-bottom: calc(1 * var(--gap));

    ${Devices.tabletS} {
      width: 576px;

      margin-bottom: calc(-1 * var(--gap));
      flex-wrap: nowrap;
      gap: 12px;
    }
    ${Devices.tabletM} {
      width: 720px;
      margin-left: calc(1.6 * var(--gap));
      margin-right: calc(1.6 * var(--gap));
    }
    ${Devices.laptopS} {
      width: 864px;
    }
    ${Devices.laptopM} {
      width: 1152px;
    }
  `;
  const Polaroids = styled.section`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    align-items: flex-start;
    column-gap: 16px;
    row-gap: 24px;
    margin-left: 12px;
    margin-right: 12px;

    ${Devices.tabletS} {
      margin-left: 0px;
      margin-right: 0px;
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

  const Annotation = styled.p`
    max-width: 280px;

    ${Devices.tabletS} {
      max-width: 280px;
    }
    ${Devices.tabletM} {
      max-width: 280px;
    }
    ${Devices.laptopS} {
      max-width: 42%;
    }
    ${Devices.laptopM} {
      max-width: 33%;
    }
  `;
  const AnnotationWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-content: center;
    align-items: flex-start;
    gap: 16px;
    margin: 0px 24px 24px 24px;

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
  const Hero = styled.div`
    /* Auto Layout */
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;

    padding: 0px;

    position: static;

    left: 0px;
    top: 0px;

    /* Inside Auto Layout */
    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 0px 24px 40px 24px;

    ${Devices.tabletS} {
      margin: 0px 0px 60px 0px;
      width: 576px;
      align-items: center;
    }
    ${Devices.tabletM} {
      width: 720px;
      margin: 0px 0px 60px 0px;
    }
    ${Devices.laptopS} {
      width: 864px;
      margin: 0px 0px 60px 0px;
    }
    ${Devices.laptopM} {
      width: 1152px;
      margin: 0px 0px 60px 0px;
    }
  `;
  const HeroHeadline = styled.h1`
    font-family: "Roboto", sans-serif;
    font-weight: bold;
    font-style: normal;

    color: ${Colors.primaryText.highEmphasis};
    margin-bottom: 8px;
    margin-top: 0px;

    font-size: 64px;
    line-height: 109%;
    text-align: center;
    ${Devices.tabletS} {
      text-align: center;
      width: 564px;
    }
    ${Devices.tabletM} {
      width: 708px;

      line-height: 114%;
    }
    ${Devices.laptopS} {
      width: 852px;

      font-size: 64px;
      line-height: 131%;
    }
    ${Devices.laptopM} {
      width: 920px;

      font-size: 80px;
      line-height: 114%;
    }
  `;

  const HeroSubline = styled.p`
    font-family: "Roboto", sans-serif;
    font-weight: bold;
    font-style: normal;

    color: ${Colors.primaryText.mediumEmphasis};
    margin-bottom: 8px;
    margin-top: 0px;

    font-size: 24px;
    line-height: 112%;
    text-align: center;
    width: 100%;

    ${Devices.tabletS} {
      text-align: center;
      width: 576px;
    }
    ${Devices.tabletM} {
      width: 708px;

      font-size: 24px;
      line-height: 111%;
    }
    ${Devices.laptopS} {
      width: 852px;

      font-size: 32px;
      line-height: 100%;
    }
    ${Devices.laptopM} {
      width: 720px;

      font-size: 24px;
      line-height: 124%;
    }
  `;

  const OnboardingGradient = styled.span`
    color: transparent;
    background-image: linear-gradient(to right, #ff1744, #6200ea);
    -webkit-background-clip: text;
    background-clip: text;
  `;

  const ExperienceGradient = styled.span`
    color: transparent;
    background-image: linear-gradient(to right, #6200ea, #00b8d4);
    -webkit-background-clip: text;
    background-clip: text;
  `;

  const ProblemHeadline = styled.h2`
    font-family: "Roboto", sans-serif;
    font-weight: bold;
    font-style: normal;

    color: transparent;
    background-image: linear-gradient(
      129deg,
      #e83273,
      #e43240,
      #dc4c24,
      #bd271a,
      #991e2f
    );
    -webkit-background-clip: text;
    background-clip: text;
    margin-bottom: 8px;
    margin-top: 0px;

    font-size: 52px;
    line-height: 109%;
    text-align: center;
    ${Devices.tabletS} {
      text-align: center;
      width: 564px;
    }
    ${Devices.tabletM} {
      width: 708px;

      font-size: 64px;
      line-height: 114%;
    }
    ${Devices.laptopS} {
      width: 852px;

      line-height: 131%;
    }
    ${Devices.laptopM} {
      width: 920px;

      font-size: 72px;
      line-height: 114%;
    }
  `;
  const ProblemList = styled.ul`
    /* Auto Layout */
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 48px;
    padding-inline-start: 0px;
  `;
  const ProblemListItem = styled.li`
    font-family: "Roboto", sans-serif;
    font-weight: bold;
    font-style: normal;
    list-style-type: none;

    color: ${Colors.primaryText.highEmphasis};
    margin-bottom: 8px;
    margin-top: 0px;

    font-size: 44px;
    line-height: 109%;
    text-align: center;
    ${Devices.tabletS} {
      text-align: center;
      width: 564px;
    }
    ${Devices.tabletM} {
      width: 708px;

      font-size: 44px;
      line-height: 114%;
    }
    ${Devices.laptopS} {
      width: 852px;

      font-size: 64px;
      line-height: 131%;
    }
    ${Devices.laptopM} {
      width: 920px;

      font-size: 52px;
      line-height: 114%;
    }
  `;
  const ProblemHighlight = styled.span`
    color: transparent;
    background-image: linear-gradient(
      129deg,
      #e83273,
      #e43240,
      #dc4c24,
      #bd271a,
      #991e2f
    );
    -webkit-background-clip: text;
    background-clip: text;
  `;
  const SolutionHeadline = styled.h2`
    font-family: "Roboto", sans-serif;
    font-weight: bold;
    font-style: normal;

    color: transparent;
    background-image: linear-gradient(
      129deg,
      #00d959,
      #13bb58,
      #1aad35,
      #1cac36,
      #1d9a0f
    );
    -webkit-background-clip: text;
    background-clip: text;
    margin-bottom: 8px;
    margin-top: 0px;

    font-size: 52px;
    line-height: 109%;
    text-align: center;
    ${Devices.tabletS} {
      text-align: center;
      width: 564px;
    }
    ${Devices.tabletM} {
      width: 708px;

      font-size: 64px;
      line-height: 114%;
    }
    ${Devices.laptopS} {
      width: 852px;

      line-height: 131%;
    }
    ${Devices.laptopM} {
      width: 920px;

      font-size: 72px;
      line-height: 114%;
    }
  `;

  const SolutionTitle = styled.h3`
    font-family: "Roboto", sans-serif;
    font-weight: bold;
    font-style: normal;

    color: transparent;
    background-image: linear-gradient(
      129deg,
      #00d959,
      #13bb58,
      #1aad35,
      #1cac36,
      #1d9a0f
    );
    -webkit-background-clip: text;
    background-clip: text;
    margin-bottom: 8px;
    margin-top: 0px;

    font-size: 44px;
    line-height: 109%;
    text-align: center;

    width: 100%;
    ${Devices.tabletS} {
    }
    ${Devices.tabletM} {
      font-size: 44px;
      line-height: 114%;
    }
    ${Devices.laptopS} {
      text-align: left;

      font-size: 36px;
      line-height: 114%;
    }
    ${Devices.laptopM} {
      font-size: 36px;
      line-height: 114%;
    }
  `;
  const SolutionCopy = styled.p`
    font-family: "Roboto", sans-serif;
    font-weight: bold;
    font-style: normal;

    color: ${Colors.primaryText.mediumEmphasis};
    margin-bottom: 8px;
    margin-top: 0px;

    font-size: 18px;
    line-height: 112%;
    text-align: center;
    width: 100%;

    ${Devices.tabletS} {
    }
    ${Devices.tabletM} {

      font-size: 21px;
      line-height: 111%;
    }
    ${Devices.laptopS} {
      text-align: left;

      font-size: 21px;
      line-height: 124%;
    }
    ${Devices.laptopM} 
      font-size: 21px;
      line-height: 147%;
    }
  `;
  const SolutionCards = styled.ul`
    /* Auto Layout */
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 48px;
    padding-inline-start: 0px;
  `;
  const SolutionCard = styled.div`
    border-radius: 30px;
    margin-bottom: 12px;
    float: left;
    background-color: ${Colors.back};
    flex-grow: 1;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: auto;
    justify-content: space-between;
    align-content: center;
    align-items: stretch;
    --gap: 12px;

    margin-bottom: calc(1 * var(--gap));
    margin-right: 12px;
    margin-left: 12px;

    ${Devices.tabletS} {
      width: 576px;
      margin-right: 0px;
      margin-left: 0px;
      margin-bottom: calc(-1 * var(--gap));
    }
    ${Devices.tabletM} {
      width: 720px;
    }
    ${Devices.laptopS} {
      flex-direction: row;
      width: 864px;
    }
    ${Devices.laptopM} {
      width: 1152px;
    }
  `;
  const SolutionBody = styled.div`
    /* Auto Layout */
    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: stretch;
    align-content: stretch;
    gap: 85px;

    height: 100%;
    padding-left: 24px;
    padding-right: 24px;
    padding-bottom: 24px;
    padding-top: 24px;

    width: 100%;
    ${Devices.tabletS} {
      padding-left: 85px;
      padding-right: 85px;
      padding-bottom: 85px;
      padding-top: 85px;
    }
    ${Devices.laptopS} {
      flex-direction: row;
    }
    ${Devices.laptopM} {
    }
  `;

  const SolutionBodyMac = styled.div`
    /* Auto Layout */
    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: stretch;
    align-content: stretch;
    gap: 85px;

    height: 100%;
    padding-left: 24px;
    padding-right: 24px;
    padding-bottom: 24px;
    padding-top: 24px;

    width: 100%;
    ${Devices.tabletS} {
      padding-left: 85px;
      padding-right: 85px;
      padding-bottom: 85px;
      padding-top: 85px;
    }
    ${Devices.laptopS} {
      flex-direction: row;
      padding-right: 0px;
    }
    ${Devices.laptopM} {
    }
  `;
  const SolutionParagraph = styled.div`
    min-height: 80px;
    min-width: 80px;
    width: 100%;
    flex: flex-grow;

    /* Auto Layout */
    display: flex;
    flex-direction: column;
    align-items: left;
    align-self: center;

    ${Devices.tabletS} {
      min-width: 300px;
    }
    ${Devices.tabletM} {
    }
    ${Devices.laptopS} {
    }
    ${Devices.laptopM} {
      margin-top: 85px;
      margin-bottom: 85px;
    }
  `;

  const SolutionPicture = styled.img`
    width: 350px;
    height: 280px;
    flex: flex-grow;
    /* Auto Layout */

    align-items: left;
    align-self: center;

    ${Devices.tabletS} {
    }
    ${Devices.tabletM} {
    }
    ${Devices.laptopS} {
      margin-top: 85px;
      margin-bottom: 85px;
    }
    ${Devices.laptopM} {
      width: 450px;
      height: 350px;
    }
  `;
  const SolutionPictureBig = styled.img`
    width: 400px;
    height: 300px;
    flex: flex-grow;
    /* Auto Layout */

    align-items: left;
    align-self: center;

    margin-right: 12px;
    ${Devices.tabletS} {
      width: 449px;
      height: 321px;
    }
    ${Devices.tabletM} {
    }
    ${Devices.laptopS} {
    }
    ${Devices.laptopM} {
      width: 800px;
      height: 600px;
    }
  `;

  const PricePanel = styled.div`
    text-align: left;

    border-radius: 30px;

    margin-bottom: 12px;
    width: 100%;
    float: left;
    background-color: ${Colors.back};

    ${Devices.tabletS} {
      width: 372px;
    }
    ${Devices.tabletM} {
    }
    ${Devices.laptopS} {
    }
    ${Devices.laptopM} {
    }
  `;

  const PanelContent = styled.div`
    text-align: center;
    padding: 30px 30px 42px 30px;
  `;
  const PanelBody = styled.div`
    /* Auto Layout */
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    margin-bottom: 32px;
  `;
  const PanelCopy = styled.p`
    font-weight: 400;
    font-size: 17px;
    line-height: 130%;

    text-align: left;
    color: ${Colors.primaryText.highEmphasis};

    margin-top: 0px;
    margin-bottom: 0px;

    ${Devices.tabletS} {
      font-size: 20px;
      line-height: 117%;
    }
    ${Devices.tabletM} {
      font-size: 20px;
      line-height: 117%;
    }
    ${Devices.laptopS} {
      font-size: 20px;
      line-height: 117%;
    }
  `;
  const PanelEyebrow = styled.p`
    font-weight: 700;
    font-size: 24px;
    line-height: 120%;

    text-align: left;

    color: grey;

    margin-top: 0px;
    margin-bottom: 4px;

    ${Devices.tabletS} {
    }
    ${Devices.tabletM} {
    }
    ${Devices.laptopS} {
    }
  `;
  const PricePanelTitle = styled.p`
    font-weight: 700;
    font-size: 40px;
    line-height: 120%;

    text-align: left;

    color: black;

    margin-top: 0px;
    margin-bottom: 24px;

    padding-bottom: 24px;

    border-bottom: 1px solid black;

    ${Devices.tabletS} {
    }
    ${Devices.tabletM} {
    }
    ${Devices.laptopS} {
    }
  `;
  const PanelListItem = styled.div`
    /* Auto Layout */
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 8px;
  `;

  const PriceBullet = styled.p`
    font-weight: 400;
    font-size: 17px;
    line-height: 24px;
    min-height: 24px;
    min-width: 24px;
    text-align: center;

    color: white;

    margin: 0px;

    background-color: blue;
    border-radius: 17px;
  `;

  const DeliverablesHeadline = styled.h2`
    font-family: "Roboto", sans-serif;
    font-weight: bold;
    font-style: normal;

    color: ${Colors.primaryText.mediumEmphasis};
    margin-bottom: 36px;
    margin-top: 0px;

    font-size: 32px;
    line-height: 112%;
    text-align: center;
    width: 100%;

    ${Devices.tabletS} {
      text-align: center;
      width: 576px;
      margin-bottom: 52px;
    }
    ${Devices.tabletM} {
      width: 708px;

      font-size: 36px;
      line-height: 111%;
    }
    ${Devices.laptopS} {
      width: 852px;

      font-size: 48px;
      line-height: 100%;
    }
    ${Devices.laptopM} {
      width: 1141px;

      font-size: 60px;
      line-height: 113%;
    }
  `;

  return (
    <Content>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Alexandros Shomper</title>
        <description>
          Experienced in core and growth initiatives from acquisition to
          retention & engagement. Bridging business, design, and tech to create
          awesome solutions people love.
        </description>
      </Helmet>
      <Section>
        <Hero>
          <HeroHeadline>
            Let's fix your <OnboardingGradient>onboarding</OnboardingGradient>{" "}
            <ExperienceGradient>experience</ExperienceGradient>.
          </HeroHeadline>
          <HeroSubline>
            Are you struggling to activate and retain new users? <br /> We help
            you create an onboarding experience that{" "}
            <span style={{ color: "black" }}>keeps users engaged longer</span>{" "}
            and{" "}
            <span style={{ color: "black" }}>converts new users faster</span>.
          </HeroSubline>
          <ButtonMedium
            href="https://calendar.app.google/qNqHiTZCN54GL2ij7"
            text={"Work with me"}
            color1={Colors.blue}
            color2={Colors.blueDark}
          />
        </Hero>
      </Section>

      <Section>
        <ProblemHeadline>Problem</ProblemHeadline>
        <HeadCopy copy="Does this sound familiar?" />
        <ProblemList>
          <MoveUpWhenVisible>
            <ProblemListItem>
              Users{" "}
              <ProblemHighlight>abandon the registration</ProblemHighlight> or
              account creation process
            </ProblemListItem>
          </MoveUpWhenVisible>
          <MoveUpWhenVisible>
            <ProblemListItem>
              Users{" "}
              <ProblemHighlight>fail to meaningfully engage</ProblemHighlight>{" "}
              with your product
            </ProblemListItem>
          </MoveUpWhenVisible>
          <MoveUpWhenVisible>
            <ProblemListItem>
              Users{" "}
              <ProblemHighlight>
                leave before discovering core features
              </ProblemHighlight>{" "}
              of your product
            </ProblemListItem>
          </MoveUpWhenVisible>
          <MoveUpWhenVisible>
            <ProblemListItem>
              Users <ProblemHighlight>quickly lose interest</ProblemHighlight>{" "}
              and stop using your product
            </ProblemListItem>
          </MoveUpWhenVisible>
        </ProblemList>
      </Section>
      <Section>
        <SolutionHeadline>Solution</SolutionHeadline>
        <HeadCopy copy="Work directly with Alexandros to upgrade your product’s onboarding." />
        <SolutionCards>
          <FadeInWhenVisible>
            <SolutionCard>
              <SolutionBody>
                <SolutionParagraph>
                  <SolutionTitle>
                    Audit your onboarding experience
                  </SolutionTitle>
                  <SolutionCopy>
                    I'll analyze your current onboarding flow, user research,
                    and data to{" "}
                    <span style={{ color: "black" }}>
                      pinpoint key drop-off points and opportunities
                    </span>
                    for improvement.
                  </SolutionCopy>
                </SolutionParagraph>
                <SolutionPicture src="./img/Landingpage/Solutions/Notes.png" />
              </SolutionBody>
            </SolutionCard>
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <SolutionCard>
              <SolutionBody>
                <SolutionParagraph style={{ order: "2" }}>
                  <SolutionTitle>
                    Design delightful user experiences
                  </SolutionTitle>
                  <SolutionCopy>
                    I'll craft an onboarding journey that{" "}
                    <span style={{ color: "black" }}>
                      perfectly matches your core value proposition
                    </span>{" "}
                    and your users' goals.
                  </SolutionCopy>
                  <SolutionCopy>
                    The result? A personalized experience that{" "}
                    <span style={{ color: "black" }}>
                      guides new users to success
                    </span>
                    —without overwhelming them .
                  </SolutionCopy>
                </SolutionParagraph>
                <SolutionPicture src="./img/Landingpage/Solutions/Wireflow.png" />
              </SolutionBody>
            </SolutionCard>
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <SolutionCard>
              <SolutionBodyMac>
                <SolutionParagraph>
                  <SolutionTitle>
                    Transform your onboarding with the new user journey
                  </SolutionTitle>
                  <SolutionCopy>
                    I'll deliver wireframes and detailed recommendations for
                    your{" "}
                    <span style={{ color: "black" }}>
                      onboarding screens, flows, and empty states
                    </span>
                    .
                  </SolutionCopy>
                  <SolutionCopy>
                    You'll have everything you need to build a world-class
                    onboarding experience.
                  </SolutionCopy>
                </SolutionParagraph>
                <SolutionPictureBig src="./img/Landingpage/Solutions/Assessment1.png" />
              </SolutionBodyMac>
            </SolutionCard>
          </FadeInWhenVisible>
        </SolutionCards>
      </Section>
      <Section>
        <DeliverablesHeadline>What you'll get</DeliverablesHeadline>

        <Polaroids>
          <IconHeadlineCopyCard
            icon={<MessagesSquare size={46} strokeWidth={1.5} />}
            headline="Consultation"
            copy="Three consulting sessions throughout the project from kickoff to handover. We'll discuss requirements, constraints, goals, progress, recommendations, and much more…"
          />
          <IconHeadlineCopyCard
            icon={<Waypoints size={46} strokeWidth={1.5} />}
            headline="Onboarding Journey Map"
            copy="Access to a Miro file with the onboarding journey from your product including ups and lows."
          />
          <IconHeadlineCopyCard
            icon={<ClipboardList size={46} strokeWidth={1.5} />}
            headline="Onboarding Assessment"
            copy="A detailed summary of the audit and findings and list of clear & prioritized recommendation"
          />

          <IconHeadlineCopyCard
            icon={<Presentation size={46} strokeWidth={1.5} />}
            headline="Strategic Onboarding Canvas"
            copy="Access to a Miro file with the core information driving the onboarding strategy and decisions for your product."
          />

          <IconHeadlineCopyCard
            icon={<PanelsTopLeft size={46} strokeWidth={1.5} />}
            headline="Designs as Figma files"
            copy="All you need to get started implementing the new onboarding flow. Wireframes of the Onboarding Flow, Getting Started Page, Empty States."
          />
          <IconHeadlineCopyCard
            icon={<FileText size={46} strokeWidth={1.5} />}
            headline="Full report"
            copy="A detailed executive summary of the audit, findings, and next steps. "
          />
        </Polaroids>
      </Section>
      <Section>
        <Headline2 headline="Investment" />

        <FadeInWhenVisible>
          <CardPanels>
            <PricePanel>
              <PanelContent>
                <PricePanelTitle>
                  <PanelEyebrow>Onboarding Experience Development</PanelEyebrow>
                  10.000€*
                </PricePanelTitle>
                <PanelBody>
                  <PanelListItem>
                    <PriceBullet>✓</PriceBullet>
                    <PanelCopy>Three 90-minute Consulting Sessions</PanelCopy>
                  </PanelListItem>
                  <PanelListItem>
                    <PriceBullet>✓</PriceBullet>
                    <PanelCopy>
                      Onboarding Assessment - Onboarding Journey Mapping Canvas
                    </PanelCopy>
                  </PanelListItem>
                  <PanelListItem>
                    <PriceBullet>✓</PriceBullet>
                    <PanelCopy>
                      Wireframes for Onboarding Screens, Getting Started Page +
                      Empty States
                    </PanelCopy>
                  </PanelListItem>
                </PanelBody>
                <ButtonMedium
                  href="https://calendar.app.google/qNqHiTZCN54GL2ij7"
                  text={"Work with me"}
                  color1={Colors.blue}
                  color2={Colors.blueDark}
                />
                <p style={{ color: "grey" }}>
                  *discount available for small startups and non-profits,
                  details in FAQ
                </p>
              </PanelContent>
            </PricePanel>
          </CardPanels>
        </FadeInWhenVisible>
      </Section>
      <Section>
        <Headline2 headline="Questions? Answers." />

        <MoveUpWhenVisible>
          <ListBigText
            //headline="Establish empathy together as a team"
            //copy="It’s important to understand your users together as a team. Doing so eventually weaves benefit into the product at every level. By increasing your team’s exposure to users, you will increase the user’s satisfaction of the product."
            headline="Do you offer discounts?"
            copy="Yes! For any companies that either 1) have 10 or less employees or 2) are doing less than €1m in ARR, the discounted price is €7,500. For Non-Profits please schedule a call and let's talk."
          />
        </MoveUpWhenVisible>
        <MoveUpWhenVisible>
          <ListBigText
            //headline="Collectively define and agree on problems"
            //copy="Take time to understand and clearly define your user’s problems. Feeding the team solutions will only lead to demoralisation; people like being empowered and to have a chance to be creative. Let the team stretch their skills, and give them time to truly understand the problem."
            headline="What do I actually get at the end of the process?"
            copy="By the end of our project, you’ll get a Figma file including:

A completed onboarding journey mapping canvas

Wireframe mockups with detailed recommendations for updating your onboarding screens, user flows, and empty states."
          />
        </MoveUpWhenVisible>
        <MoveUpWhenVisible>
          <ListBigText
            //headline="Prototype and test with real users"
            //copy="Fake it until you can make it. Spend the minimum amount of time to create the closest to the real thing. You’re looking for feedback on the idea, not whether your design looks finished. Test with real representative users."
            headline="How long does the process take?"
            copy="End-to-end, the process takes roughly one month to complete. However, this timeline is highly dependent on how quick and timely your team can provide feedback on our iterations. Be prepared to sync with your team in a timely manner in order to keep the final stage of the process moving forward."
          />
        </MoveUpWhenVisible>
        <MoveUpWhenVisible>
          <ListBigText
            //headline="Group ideation"
            //copy="Good ideas can come from anyone. Waiting for one member of the team to create the best idea will take time, and will be biassed towards their experience. It doesn’t have to take long, there are exercises designed to generate lots of ideas quickly."
            headline="Can you also help with ongoing optimizations?"
            copy="Yes, I offer a retainer service to continuously refine, test and optimize your onboarding flow and other user journeys based on real user data and feedback. I also advise in other areas of product-led growth."
          />
        </MoveUpWhenVisible>
      </Section>
    </Content>
  );
};

export default Content;
