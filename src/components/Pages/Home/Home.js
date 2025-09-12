import styled from "@emotion/styled";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";

import { useInView } from "react-intersection-observer";

import ReactGA from "react-ga4";

//Components

import ListBigText from "../../Content/List/ListBigText/ListBigText";

import { Colors, Devices } from "../../DesignSystem";

import Headline2 from "../../Content/Landingpage/Headline2";

import ButtonMedium from "../../Button/ButtonMedium";
import ButtonMediumSecondary from "../../Button/ButtonMediumSecondary";
import BusinessCard from "../../Content/BusinessCard/BusinessCard";

import DeliverablesCard from "../../Content/DeliverablesCard/DeliverablesCard";

import {
  HandCoins,
  MousePointerClick,
  ChartNoAxesCombined,
  Check,
  PanelsTopLeft,
  FileText,
  Presentation,
} from "lucide-react";
import AccordeonVisual from "../../Content/AccordeonVisual/AccordeonVisual";
import PricingCanvas from "../../Content/PricingCanvas/PricingCanvas";

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
          y: 0,
          transition: {
            staggerChildren: 0.3,
          },
        },
        hidden: {
          opacity: 0.5,
          y: "+15%",
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
  const handleBookAudit = (e) => {
    e.preventDefault();
    ReactGA.event({
      category: "Button",
      action: "Click",
      label: "Book Audit",
    });
    console.log("Book Audit");
  };
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
    flex-direction: row;
    flex-wrap: nowrap;
    gap: 40px;
    justify-content: center;
    align-content: center;
    align-items: flex-start;
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

  const PricePanels = styled.section`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    gap: 12px;
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
  const DeliverablesCards = styled.section`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    align-items: flex-start;
    column-gap: 16px;
    row-gap: 16px;
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

    font-size: 52px;
    line-height: 1;
    font-weight: 700;
    letter-spacing: -0.00028em;

    text-align: center;
    ${Devices.tabletS} {
      font-size: 64px;
      line-height: 1.0625;
      font-weight: 700;
      letter-spacing: -0.009em;
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
      width: 1024px;

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

    font-size: 16px;
    line-height: 112%;
    text-align: center;
    width: 100%;

    ${Devices.tabletS} {
      font-size: 24px;

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
    margin: 0px 26px 8px 26px;

    padding-bottom: 80px;

    font-size: 32px;
    line-height: 109%;
    text-align: center;
    ${Devices.tabletS} {
      font-size: 52px;
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

  const ProblemSubline = styled.p`
    font-family: "Roboto", sans-serif;
    font-weight: bold;
    font-style: normal;

    color: ${Colors.primaryText.mediumEmphasis};
    margin-bottom: 36px;
    margin-top: 0px;

    font-size: 24px;
    line-height: 112%;
    text-align: center;
    width: 100%;

    ${Devices.tabletS} {
      text-align: center;
      width: 576px;
      margin-bottom: 52px;
      font-size: 24px;
      line-height: 112%;
    }
    ${Devices.tabletM} {
      width: 708px;
    }
    ${Devices.laptopS} {
      width: 852px;

      font-size: 38px;
      line-height: 100%;
    }
    ${Devices.laptopM} {
      width: 1141px;

      font-size: 38px;
      line-height: 113%;
    }
  `;
  const ProblemList = styled.ul`
    /* Auto Layout */
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 48px;
    padding-inline-start: 0px;
    margin: 0 26px 0 26px;
    ${Devices.tabletS} {
      margin: 0 80px 0 80px;
    }
  `;
  const ProblemListItem = styled.li`
    font-family: "Roboto", sans-serif;
    font-weight: bold;
    font-style: normal;
    list-style-type: none;

    color: ${Colors.primaryText.highEmphasis};
    margin-bottom: 8px;
    margin-top: 0px;

    font-size: 32px;
    line-height: 1.125;
    font-weight: 700;
    letter-spacing: 0.004em;
    text-align: center;
    ${Devices.tabletS} {
      font-size: 32px;
      line-height: 1.125;
      font-weight: 700;
      letter-spacing: 0.004em;
    }
    ${Devices.tabletM} {
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

    margin: 0px 20px 8px 20px;

    padding-bottom: 20px;

    font-size: 32px;
    line-height: 109%;
    text-align: center;

    ${Devices.tabletS} {
      font-size: 52px;
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

  const SolutionSubline = styled.p`
    font-family: "Roboto", sans-serif;
    font-weight: bold;
    font-style: normal;

    color: ${Colors.primaryText.mediumEmphasis};
    margin: 0px 20px 32px 20px;

    font-size: 24px;
    line-height: 112%;
    text-align: center;

    ${Devices.tabletS} {
      text-align: center;
      width: 576px;
      margin-bottom: 52px;
      font-size: 28px;
      line-height: 112%;
    }
    ${Devices.tabletM} {
      width: 708px;

      font-size: 32px;
      line-height: 111%;
    }
    ${Devices.laptopS} {
      width: 852px;

      font-size: 38px;
      line-height: 100%;
    }
    ${Devices.laptopM} {
      width: 1141px;

      font-size: 38px;
      line-height: 113%;
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

    font-size: 32px;
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
    border-radius: 0.38rem;
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
    gap: 24px;

    height: 100%;
    padding-left: 24px;
    padding-right: 24px;
    padding-bottom: 24px;
    padding-top: 24px;

    width: 100%;
    ${Devices.tabletS} {
      padding-left: 85px;
      padding-right: 85px;
      padding-bottom: 24px;
      padding-top: 24px;
      gap: 85px;
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
    gap: 24px;

    height: 100%;
    padding-left: 24px;
    padding-right: 24px;
    padding-bottom: 24px;
    padding-top: 24px;

    width: 100%;
    ${Devices.tabletS} {
      padding-left: 85px;
      padding-right: 85px;
      padding-bottom: 24px;
      padding-top: 24px;
      gap: 85px;
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
    width: 100%;
    min-width: 0;
    max-width: none;
    flex: flex-grow;
    /* Auto Layout */
    align-items: left;
    align-self: center;

    border-radius: 8px;
    border: 2px ${Colors.primaryText.lowEmphasis} solid;
    box-shadow: 0 6px 24px rgba(0, 0, 0, 0.08);

    ${Devices.tabletS} {
      width: 350px;
      height: 280px;
    }
    ${Devices.tabletM} {
    }
    ${Devices.laptopS} {
      margin-top: 24px;
      margin-bottom: 24px;
      width: 100%;
      height: auto;
    }
    ${Devices.laptopM} {
    }
  `;
  const SolutionPictureBig = styled.img`
    width: 100%;
    min-width: 0;
    max-width: none;

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
      width: 100%;
      height: auto;
    }
    ${Devices.laptopM} {
      width: 800px;
      height: 600px;
      min-width: fit-content;
    }
  `;

  const PricePanel = styled.div`
    display: flex;

    border-radius: 0.38rem;

    margin-bottom: 12px;
    width: 100%;

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

  const PriceComment = styled.p`
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;

    text-align: left;
    color: ${Colors.primaryText.lowEmphasis};

    margin-top: 10px;
    margin-bottom: 0px;

    ${Devices.tabletS} {
    }
    ${Devices.tabletM} {
    }
    ${Devices.laptopM} {
      font-size: 14px;
      line-height: 130%;
    }
  `;

  const PanelContent = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 16px 10px 20px 10px;
    ${Devices.laptopM} {
      padding: 30px 30px 42px 30px;
    }
  `;
  const PanelBody = styled.div`
    /* Auto Layout */
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    flex-grow: 1;
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
    }
    ${Devices.tabletM} {
    }
    ${Devices.laptopS} {
    }
  `;
  const PanelEyebrow = styled.p`
    font-weight: 600;
    font-size: 21px;
    line-height: 120%;

    text-align: left;

    color: grey;

    margin-top: 0px;
    margin-bottom: 8px;

    ${Devices.tabletS} {
    }
    ${Devices.tabletM} {
    }
    ${Devices.laptopS} {
    }
    ${Devices.laptopM} {
      font-weight: 700;
      font-size: 24px;
      line-height: 120%;
    }
  `;
  const PricePanelTitle = styled.div`
    min-height: 160px;
    font-weight: 700;
    font-size: 32px;
    line-height: 120%;

    text-align: left;

    color: black;

    margin-top: 0px;
    margin-bottom: 28px;

    padding-bottom: 12px;

    border-bottom: 1px solid black;

    ${Devices.tabletS} {
    }
    ${Devices.tabletM} {
    }
    ${Devices.laptopM} {
      min-height: 180px;
      font-weight: 700;
      font-size: 40px;
    }
  `;
  const PanelListItem = styled.div`
    /* Auto Layout */
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 8px;
  `;

  const PriceBullet = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 20px;
    min-width: 20px;
    text-align: center;

    color: white;

    margin: 1px 0 0 0;

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
  const ProblemConclusion = styled.p`
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: normal;
    color: ${Colors.primaryText.lowEmphasis};
    margin: 80px 24px 24px 24px;

    font-size: 24px;
    line-height: 120%;
    text-align: center;

    ${Devices.tabletS} {
      text-align: center;
      width: 576px;
      font-size: 28px;
      line-height: 120%;
    }
    ${Devices.tabletM} {
      width: 720px;

      margin-bottom: 32px;
      margin-left: 0px;
      margin-right: 0px;
    }
    ${Devices.laptopS} {
      width: 864px;

      font-size: 36px;
      line-height: 100%;
      margin-bottom: 38px;
    }
    ${Devices.laptopM} {
      width: 1024px;

      font-size: 42px;
      line-height: 113%;
      margin-bottom: 46px;
    }
  `;

  const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    justify-content: center;
    align-content: center;
    align-items: flex-start;

    ${Devices.tabletS} {
    }
    ${Devices.tabletM} {
      flex-direction: row;
      gap: 16px;
    }
    ${Devices.laptopS} {
    }
    ${Devices.laptopM} {
    }
  `;

  const LightboxOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
    padding: 24px;
  `;

  const LightboxContent = styled.div`
    position: relative;
    width: 100%;
    max-width: 1080px;
    aspect-ratio: 16 / 9;
    background: #000;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 12px 48px rgba(0, 0, 0, 0.35);
  `;

  const CloseLightboxButton = styled.button`
    position: absolute;
    top: 8px;
    right: 8px;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: none;
    background: rgba(255, 255, 255, 0.9);
    color: #000;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    line-height: 1;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  `;
  const LOOM_VIDEO_URL =
    "https://www.loom.com/embed/94ad4dc7e038465a81e930c05aa4c21a";

  const [isLightboxOpen, setIsLightboxOpen] = React.useState(false);

  const hanldeWatchDemo = () => {
    ReactGA.event({
      category: "User",
      action: "watch_demo_clicked",
      label: "Watch Demo",
      value: 10,
      nonInteraction: false,
    });

    setTimeout(() => {
      setIsLightboxOpen(true);
    }, 150);
    console.log("Clicked Watch Demo");
  };

  const hanldeBookAudit = (e, href) => {
    e.preventDefault();
    ReactGA.event({
      category: "User",
      action: "book_audit_click",
      label: "Book Audit",
      value: 10,
      nonInteraction: false,
    });
    setTimeout(() => {
      window.location.href = href;
    }, 150);
    console.log("Clicked Book Audit");
  };

  React.useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsLightboxOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <Content>
      <Section>
        <Hero>
          <HeroHeadline>
            Let's fix your leaky onboarding.
            <br />
            <OnboardingGradient>Boost activation in 14 days</OnboardingGradient>
            .
          </HeroHeadline>
          <HeroSubline>
            I help SaaS teams
            <span style={{ color: "black" }}>
              {" "}
              turn more sign-ups into active, paying users
            </span>{" "}
            with a focused Onboarding Development Sprint.
          </HeroSubline>
          <ButtonWrapper>
            <ButtonMedium
              href="https://calendar.app.google/qNqHiTZCN54GL2ij7"
              clickAction={() => hanldeBookAudit()}
              text={"Book intro call"}
              color1={Colors.blue}
              color2={Colors.blueDark}
            />
            <ButtonMediumSecondary
              clickAction={() => hanldeWatchDemo()}
              text={"Watch a Demo"}
              color1={Colors.blue}
              color2={Colors.blueDark}
            />
          </ButtonWrapper>
          {isLightboxOpen && (
            <LightboxOverlay onClick={() => setIsLightboxOpen(false)}>
              <LightboxContent onClick={(e) => e.stopPropagation()}>
                <CloseLightboxButton
                  onClick={() => setIsLightboxOpen(false)}
                  aria-label="Close video"
                >
                  ×
                </CloseLightboxButton>
                <iframe
                  src={LOOM_VIDEO_URL}
                  title="Loom video"
                  allow="autoplay; fullscreen; clipboard-write"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  style={{
                    width: "100%",
                    height: "100%",
                    border: 0,
                    display: "block",
                  }}
                />
              </LightboxContent>
            </LightboxOverlay>
          )}
        </Hero>
      </Section>
      <Section>
        <PricingCanvas />
      </Section>

      <Section>
        <ProblemHeadline>
          <span style={{ color: "black" }}>The Problem</span>
          <br />
          Bad user onboarding and activation kills your startup
        </ProblemHeadline>
        <ProblemSubline>Does this sound familiar?</ProblemSubline>
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
              <ProblemHighlight>
                leave before discovering core features
              </ProblemHighlight>{" "}
              of your product
            </ProblemListItem>
          </MoveUpWhenVisible>
          <MoveUpWhenVisible>
            <ProblemListItem>
              Users <ProblemHighlight>are not upgrading</ProblemHighlight> their
              plans
            </ProblemListItem>
          </MoveUpWhenVisible>
        </ProblemList>
        <ProblemConclusion>It doesn't have to be like this…</ProblemConclusion>
      </Section>
      <Section>
        <BusinessCard />
      </Section>
      <Section>
        <SolutionHeadline>
          <span style={{ color: "black" }}>Our Solution</span>
          <br />A 2–week sprint to fine-tune your product’s onboarding
          experience{" "}
        </SolutionHeadline>
        <SolutionSubline>
          {" "}
          Good user onboarding and activation makes the winners.{" "}
        </SolutionSubline>

        <SolutionCards>
          <FadeInWhenVisible>
            <SolutionCard>
              <SolutionBody>
                <SolutionParagraph>
                  <SolutionTitle>
                    <span style={{ color: "black" }}>Week 1</span> Onboarding
                    Discovery
                  </SolutionTitle>
                  <SolutionCopy>
                    I'll diagnose your current onboarding by reviewing data and
                    user research to{" "}
                    <span style={{ color: "black" }}>
                      pinpoint key drop-off points map value moments, and
                      refining website positioning{" "}
                    </span>
                    set the foundation for change.
                  </SolutionCopy>
                  <SolutionCopy>
                    The outcome? Clear understanding of where users drop off,
                    what value moments matter most, and{" "}
                    <span style={{ color: "black" }}>
                      how your onboarding should evolve
                    </span>
                    .
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
                    {" "}
                    <span style={{ color: "black" }}>Week 2</span> Onboarding
                    Development
                  </SolutionTitle>
                  <SolutionCopy>
                    I'll design and deliver a new onboarding flow with
                    wireframes, and copy that{" "}
                    <span style={{ color: "black" }}>
                      perfectly matches your core value proposition
                    </span>{" "}
                    and your users' goals.
                  </SolutionCopy>
                  <SolutionCopy>
                    The outcome? A ready-to-implement onboarding flow that helps{" "}
                    <span style={{ color: "black" }}>
                      more sign-ups reach their Aha Moment and form lasting
                      habits
                    </span>
                    .
                  </SolutionCopy>
                </SolutionParagraph>
                <SolutionPicture src="./img/Landingpage/Solutions/Week2.png" />
              </SolutionBody>
            </SolutionCard>
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <SolutionCard>
              <SolutionBodyMac>
                <SolutionParagraph>
                  <SolutionTitle>
                    {" "}
                    <span style={{ color: "black" }}>Results</span> A
                    Ready-to-Implement Onboarding Flow
                  </SolutionTitle>
                  <SolutionCopy>
                    By the end of the sprint, you’ll walk away with{" "}
                    <span style={{ color: "black" }}>
                      a redesigned onboarding journey that turns more sign-ups
                      into activated, retained users
                    </span>
                    .
                  </SolutionCopy>
                  <SolutionCopy>
                    You’ll have high-level wireframes with copy, defined value
                    moment metrics, and a prioritized experiment
                    backlog—everything your team needs to{" "}
                    <span style={{ color: "black" }}>
                      boost activation, shorten time-to-value, and drive
                      long-term retention
                    </span>
                    .
                  </SolutionCopy>
                </SolutionParagraph>
                <SolutionPictureBig src="./img/Landingpage/Solutions/Assessment1.png" />
              </SolutionBodyMac>
            </SolutionCard>
          </FadeInWhenVisible>
        </SolutionCards>
      </Section>

      <Section>
        <DeliverablesHeadline>Your Deliverables</DeliverablesHeadline>

        <DeliverablesCards>
          <DeliverablesCard
            headline="New Positioning"
            img="../img/Landingpage/Deliverables/Positioning.png"
            color1={Colors.blue}
            color2={Colors.blueDark}
            copy="A light-weight positioning for your website, that communicates the right message to the right customer to ensure customers get your product at the first touchpoint."
          />
          <DeliverablesCard
            headline="New Onboarding Journey"
            img="../img/Landingpage/Deliverables/NewOnboardingJourney.png"
            color1={Colors.blue}
            color2={Colors.blueDark}
            copy="A new onboarding journey for your product with clear value moments (conversions, setup moment, aha moment, habit moment), and their metrics for you to implement."
          />

          <DeliverablesCard
            headline="Wireframes + Copy"
            img="../img/Landingpage/Deliverables/WireFrames.png"
            color1={Colors.blue}
            color2={Colors.blueDark}
            copy="Ready to work with Wireframes for each step of the new onboarding journey (from Landingpage to First Experience) including copy, empty states, and flow-variants."
          />

          <DeliverablesCard
            headline="Prioritized List of Improvements"
            img="../img/Landingpage/Deliverables/PrioritizedList.png"
            color1={Colors.blue}
            color2={Colors.blueDark}
            copy="A prioritized list of improvements and experiments for you to get started and plan implementation right away."
          />
        </DeliverablesCards>
      </Section>
      <Section>
        <SolutionSubline>How it works</SolutionSubline>

        <AccordeonVisual />
      </Section>
      <Section>
        <Headline2 headline="Onboarding Development Sprint" />
        <PricePanels>
          <PricePanel>
            <PanelContent>
              <PricePanelTitle>
                <PanelEyebrow>Early Stage Startup</PanelEyebrow>
                5.000€
                <PriceComment style={{ color: "grey" }}>
                  Best for <b>Pre-Seed to Seed Startups</b> <br />
                  with <b>less than 1M ARR</b>.
                </PriceComment>
              </PricePanelTitle>
              <PanelBody></PanelBody>
              <ButtonMedium
                href="https://calendar.notion.so/meet/alexandros/0a6mz4m5q"
                clickAction={() => hanldeBookAudit()}
                text={"Work with us"}
                color1={Colors.blue}
                color2={Colors.blueDark}
              />
            </PanelContent>
          </PricePanel>

          <PricePanel>
            <PanelContent>
              <PricePanelTitle>
                <PanelEyebrow>Growth Stage Startup</PanelEyebrow>
                10.000€
                <PriceComment style={{ color: "grey" }}>
                  Best for <b>Seed to Series A Startups</b>
                  <br /> with <b> 1M – 5M ARR</b>.
                </PriceComment>
              </PricePanelTitle>
              <PanelBody>
                <PanelListItem>
                  <PriceBullet>
                    <Check size={16} strokeWidth={2.5} />
                  </PriceBullet>
                  <PanelCopy>
                    Feedback support over ~1 month to ensure best practices are
                    implemented
                  </PanelCopy>
                </PanelListItem>
              </PanelBody>
              <ButtonMedium
                href="https://calendar.app.google/qNqHiTZCN54GL2ij7"
                clickAction={() => hanldeBookAudit()}
                text={"Work with us"}
                color1={Colors.blue}
                color2={Colors.blueDark}
              />
            </PanelContent>
          </PricePanel>

          <PricePanel>
            <PanelContent>
              <PricePanelTitle>
                <PanelEyebrow>Scale Stage Startup</PanelEyebrow>
                15.000€
                <PriceComment style={{ color: "grey" }}>
                  Best for <b>Series A+ Startups</b> with <b>5M – 15M ARR</b>.
                </PriceComment>
              </PricePanelTitle>
              <PanelBody>
                <PanelListItem>
                  <PriceBullet>
                    <Check size={16} strokeWidth={2.5} />
                  </PriceBullet>
                  <PanelCopy>
                    Feedback support over ~2 months to ensure best practices are
                    implemented
                  </PanelCopy>
                </PanelListItem>
              </PanelBody>
              <ButtonMedium
                href="https://calendar.app.google/qNqHiTZCN54GL2ij7"
                clickAction={() => hanldeBookAudit()}
                text={"Work with us"}
                color1={Colors.blue}
                color2={Colors.blueDark}
              />
            </PanelContent>
          </PricePanel>

          <PricePanel>
            <PanelContent>
              <PricePanelTitle>
                <PanelEyebrow>Mature Startup</PanelEyebrow>
                25.000€
                <PriceComment style={{ color: "grey" }}>
                  Best for <b>Series A+ Startups</b> with <b>+15M ARR</b>.
                </PriceComment>
              </PricePanelTitle>
              <PanelBody>
                <PanelListItem>
                  <PriceBullet>
                    <Check size={16} strokeWidth={2.5} />
                  </PriceBullet>
                  <PanelCopy>
                    Feedback support over ~4 months to ensure best practices are
                    implemented
                  </PanelCopy>
                </PanelListItem>
              </PanelBody>
              <ButtonMedium
                href="https://calendar.app.google/qNqHiTZCN54GL2ij7"
                clickAction={() => hanldeBookAudit()}
                text={"Work with us"}
                color1={Colors.blue}
                color2={Colors.blueDark}
              />
            </PanelContent>
          </PricePanel>
        </PricePanels>
      </Section>

      <Section>
        <Headline2 headline="Questions? Answers." />

        <MoveUpWhenVisible>
          <ListBigText
            //headline="Establish empathy together as a team"
            //copy="It’s important to understand your users together as a team. Doing so eventually weaves benefit into the product at every level. By increasing your team’s exposure to users, you will increase the user’s satisfaction of the product."
            headline="Do you offer discounts?"
            copy="Yes! For Non-Profits I offer discounts. Please schedule a call and let's talk."
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
            copy="End-to-end, the process takes roughly two weeks to complete. However, this timeline is highly dependent on how quick and timely your team can provide feedback on our iterations. Be prepared to sync with your team in a timely manner in order to keep the final stage of the process moving forward."
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
      <Section>
        <Hero>
          <HeroHeadline>
            Let's fix your <OnboardingGradient>onboarding</OnboardingGradient>{" "}
            <ExperienceGradient>experience</ExperienceGradient>.
          </HeroHeadline>
          <HeroSubline>
            Struggling to activate and retain users? <br />
            <br /> I'll help you create an onboarding experience that{" "}
            <span style={{ color: "black" }}>
              keeps users engaged longer
            </span>{" "}
            and{" "}
            <span style={{ color: "black" }}>converts new users faster</span>.
          </HeroSubline>
          <ButtonMedium
            href="https://calendar.app.google/qNqHiTZCN54GL2ij7"
            clickAction={() => hanldeBookAudit()}
            text={"Book my audit"}
            color1={Colors.blue}
            color2={Colors.blueDark}
          />
        </Hero>
      </Section>
    </Content>
  );
};

export default Content;
