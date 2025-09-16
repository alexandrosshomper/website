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
import Checkbox from "../../Checkbox/Checkbox";

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

// ROI Calculator Lightbox styles (module scope to avoid remounting on input)
const ROICalculatorOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.48);
  backdrop-filter: blur(20px);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  z-index: 10001;
  padding: 24px;
  ${Devices.tabletS} {
    align-items: center;
  }
`;

const ROICalculatorModal = styled.div`
  background: #ffffff;
  border-radius: 26px;
  width: 100%;
  max-width: 600px;
  padding: 24px;
  box-shadow: 0 12px 48px rgba(0, 0, 0, 0.35);
  position: relative;
  max-height: 75vh;
  overflow-y: auto;
  ${Devices.tabletS} {
    padding: 32px;
  }
`;

const ROICalculatorTitle = styled.h3`
  margin: 0 0 8px 0;
  font-size: 24px;
  line-height: 120%;
  color: ${Colors.primaryText.highEmphasis};
  text-align: left;
  font-weight: 700;
  ${Devices.tabletS} {
    font-size: 32px;
    line-height: 120%;
  }
`;

const ROICalculatorSubline = styled.p`
  margin: 0 0 32px 0;
  font-size: 16px;
  font-weight: 500;
  line-height: 114%;
  color: ${Colors.primaryText.mediumEmphasis};
  ${Devices.tabletS} {
    margin: 0 0 40px 0;
    font-size: 18px;
  }
`;

const ROIForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 32px;
`;

const ROIInputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ROILabel = styled.label`
  font-size: 16px;
  font-weight: 600;
  color: ${Colors.primaryText.highEmphasis};
  ${Devices.tabletS} {
    font-size: 18px;
  }
`;

const ROIInput = styled.input`
  padding: 12px 16px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  color: ${Colors.primaryText.highEmphasis};
  background: #ffffff;
  transition: border-color 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${Colors.blue};
  }

  &::placeholder {
    color: ${Colors.primaryText.lowEmphasis};
  }
`;

const ROIResults = styled.div`
  background: #f8f9fa;
  border-radius: 12px;
  padding: 24px;
  margin-bottom: 32px;
  border: 1px solid #e9ecef;
`;

const ROIResultsTitle = styled.h4`
  margin: 0 0 16px 0;
  font-size: 18px;
  font-weight: 700;
  color: ${Colors.primaryText.highEmphasis};
  ${Devices.tabletS} {
    font-size: 20px;
  }
`;

const ROIMetric = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  border-bottom: 1px solid #e9ecef;

  &:last-child {
    border-bottom: none;
  }
`;

const ROIMetricLabel = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: ${Colors.primaryText.mediumEmphasis};
  ${Devices.tabletS} {
    font-size: 16px;
  }
`;

const ROIMetricValue = styled.span`
  font-size: 16px;
  font-weight: 700;
  color: ${Colors.primaryText.highEmphasis};
  ${Devices.tabletS} {
    font-size: 18px;
  }
`;

const ROIImprovement = styled.div`
  background: linear-gradient(135deg, #00d959, #13bb58);
  color: white;
  padding: 16px;
  border-radius: 8px;
  margin-top: 16px;
  text-align: center;
`;

const ROIImprovementTitle = styled.h5`
  margin: 0 0 8px 0;
  font-size: 16px;
  font-weight: 700;
  ${Devices.tabletS} {
    font-size: 18px;
  }
`;

const ROIImprovementValue = styled.div`
  font-size: 24px;
  font-weight: 700;
  ${Devices.tabletS} {
    font-size: 32px;
  }
`;

const ROIModalClose = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: none;
  background: rgba(0, 0, 0, 0.06);
  color: ${Colors.primaryText.highEmphasis};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  line-height: 1;
`;

function FadeInWhenVisible({ children }) {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const [hasAnimated, setHasAnimated] = React.useState(false);

  useEffect(() => {
    if (inView && !hasAnimated) {
      controls.start("visible");
      setHasAnimated(true);
    }
  }, [controls, inView, hasAnimated]);

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
  const [hasAnimated, setHasAnimated] = React.useState(false);

  useEffect(() => {
    if (inView && !hasAnimated) {
      controls.start("visible");
      setHasAnimated(true);
    }
  }, [controls, inView, hasAnimated]);

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
  const [hasAnimated, setHasAnimated] = React.useState(false);

  useEffect(() => {
    if (inView && !hasAnimated) {
      controls.start("visible");
      setHasAnimated(true);
    }
  }, [controls, inView, hasAnimated]);

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

const ContentWrapper = styled.div`
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
const HeaderSection = styled.section`
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
  margin-bottom: 40px;
  ${Devices.tabletS} {
    align-items: center;
    margin-bottom: 200px;
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

  font-size: 38px;
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

// Self-Check Lightbox styles
const SelfCheckOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.48);
  backdrop-filter: blur(20px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  padding: 24px;
`;

const SelfCheckModal = styled.div`
  background: #ffffff;
  border-radius: 26px;
  width: 100%;
  max-width: 560px;
  padding: 24px;
  box-shadow: 0 12px 48px rgba(0, 0, 0, 0.35);
  position: relative;
  ${Devices.tabletS} {
    padding: 24px 32px;
  }
`;

const SelfCheckTitle = styled.h3`
  margin: 0 0 4px 0;
  font-size: 21px;
  line-height: 120%;
  color: ${Colors.primaryText.highEmphasis};
  text-align: left;
  ${Devices.tabletS} {
    font-size: 28px;
    line-height: 120%;
  }
`;

const SelfCheckSubline = styled.p`
  margin: 0 0 24px 0;
  font-size: 16px;
  font-weight: 500;
  line-height: 114%;
  color: ${Colors.primaryText.mediumEmphasis};
  ${Devices.tabletS} {
    margin: 0 0 32px 0;
  }
`;

const SelfCheckList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 32px 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const SelfCheckItem = styled.li`
  color: ${Colors.primaryText.highEmphasis};
  font-size: 16px;
  font-weight: 500;
  line-height: 120%;

  ${Devices.tabletS} {
    font-size: 18px;
    line-height: 120%;
  }
  ${Devices.tabletM} {
  }
  ${Devices.laptopS} {
  }
  ${Devices.laptopM} {
  }
`;

const Thermometer = styled.div`
  width: 100%;
  height: 32px;
  border-radius: 30px;
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: flex-start;
  color: #fff;
  font-weight: 600;
  margin: 8px 0 20px 0;
  ${Devices.tabletS} {
    margin-bottom: 32px;
  }
`;

const ThermometerText = styled.p`
  margin: 0;
  font-size: 16px;
  font-weight: 500;
  line-height: 114%;
  color: ${Colors.primaryText.highEmphasis};
  ${Devices.tabletS} {
    font-size: 26px;
  }
`;

const BlinkingCircle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin: 0;
  transition: background-color 0.3s ease;
  animation: ${(props) =>
    props.shouldBlink ? `blink ${props.blinkInterval}s infinite` : "none"};
  ${Devices.tabletS} {
    width: 40px;
    height: 40px;
  }
  @keyframes blink {
    0%,
    50% {
      opacity: 1;
    }
    51%,
    100% {
      opacity: 0.3;
    }
  }
`;

const ModalActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  border-top: 1px solid grey;
  padding-top: 16px;
  ${Devices.tabletS} {
    flex-direction: row;
    justify-content: flex-end;
    margin-top: 24px;
  }
`;

const ModalClose = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: none;
  background: rgba(0, 0, 0, 0.06);
  color: ${Colors.primaryText.highEmphasis};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  line-height: 1;
`;

const LightboxOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.48);
  backdrop-filter: blur(20px);

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
  // ROI calculator constants
  const LOOM_VIDEO_URL =
    "https://www.loom.com/embed/94ad4dc7e038465a81e930c05aa4c21a";

  const [isLightboxOpen, setIsLightboxOpen] = React.useState(false);
  const [isROICalculatorOpen, setIsROICalculatorOpen] = React.useState(false);

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

  const hanldeBookAudit = (e, href, instance = "unknown") => {
    e.preventDefault();
    ReactGA.event({
      category: "User",
      action: "book_audit_click",
      label: `Book Audit - ${instance}`,
      value: 10,
      nonInteraction: false,
    });
    setTimeout(() => {
      window.open(href, "_blank", "noopener,noreferrer");
    }, 150);
    console.log(`Clicked Book Audit - ${instance}`);
  };

  const handleClickActivationScore = (e, href, instance = "unknown") => {
    e.preventDefault();
    ReactGA.event({
      category: "User",
      action: "activation_score_click",
      label: `Activation Score - ${instance}`,
      value: 10,
      nonInteraction: false,
    });
    setTimeout(() => {
      window.open(href, "_blank", "noopener,noreferrer");
    }, 150);
    console.log(`Clicked Activation Score - ${instance}`);
  };

  const handleClickOnboardingSelfCheck = () => {
    ReactGA.event({
      category: "User",
      action: "self_check_click",
      label: "Self Check",
      value: 10,
      nonInteraction: false,
    });

    console.log("Clicked Self Check");
    setIsSelfCheckOpen(true);
  };

  const handleClickROICalculator = (e, instance = "unknown") => {
    e.preventDefault();
    ReactGA.event({
      category: "User",
      action: "roi_calculator_click",
      label: `ROI Calculator - ${instance}`,
      value: 10,
      nonInteraction: false,
    });

    console.log(`Clicked ROI Calculator - ${instance}`);
    setIsROICalculatorOpen(true);
  };

  // Self-Check state and logic
  const [isSelfCheckOpen, setIsSelfCheckOpen] = React.useState(false);
  const [selectedIssues, setSelectedIssues] = React.useState([
    false,
    false,
    false,
    false,
    false,
  ]);

  const toggleIssue = (index) => {
    setSelectedIssues((prev) => {
      const next = [...prev];
      next[index] = !next[index];
      return next;
    });
  };

  const selectedCount = selectedIssues.filter(Boolean).length;
  let thermometerColor = "#1db954"; // green
  let thermometerText = "Onboarding: OK";
  let shouldBlink = false;
  let blinkInterval = 1;

  if (selectedCount === 1) {
    thermometerColor = "#f1c40f"; // yellow
    thermometerText = "Onboarding: Keep observing.";
    shouldBlink = true;
    blinkInterval = 1; // 1 second
  } else if (selectedCount === 2) {
    thermometerColor = "#f39c12"; // orange
    thermometerText = "Onboarding: There is a Problem";
    shouldBlink = true;
    blinkInterval = 0.5; // 0.5 seconds
  } else if (selectedCount >= 3) {
    thermometerColor = "#e53935"; // red
    thermometerText = "Onboarding: Big Problem";
    shouldBlink = true;
    blinkInterval = 0.25; // 0.25 seconds
  }

  React.useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsLightboxOpen(false);
        setIsROICalculatorOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // ROI Calculator state
  const [roiInputs, setROIInputs] = React.useState({
    monthlySignups: "",
    currentActivationRate: "",
    averageRevenuePerUser: "",
    churnRate: "",
  });
  // ROI Calculator logic

  const handleROIInputChange = (field, value) => {
    setROIInputs((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const calculateROI = () => {
    const {
      monthlySignups,
      currentActivationRate,
      averageRevenuePerUser,
      churnRate,
    } = roiInputs;

    if (
      !monthlySignups ||
      !currentActivationRate ||
      !averageRevenuePerUser ||
      !churnRate
    ) {
      return null;
    }

    const signups = parseFloat(monthlySignups);
    const activationRate = parseFloat(currentActivationRate) / 100;
    const arpu = parseFloat(averageRevenuePerUser);
    const churn = parseFloat(churnRate) / 100;

    // Current state
    const currentActivatedUsers = signups * activationRate;
    const currentMonthlyRevenue = currentActivatedUsers * arpu;
    const currentAnnualRevenue = currentMonthlyRevenue * 12;

    // Improved state (assuming 20% improvement in activation rate)
    const improvedActivationRate = Math.min(activationRate * 1.2, 0.95); // Cap at 95%
    const improvedActivatedUsers = signups * improvedActivationRate;
    const improvedMonthlyRevenue = improvedActivatedUsers * arpu;
    const improvedAnnualRevenue = improvedMonthlyRevenue * 12;

    // Calculate improvement
    const monthlyImprovement = improvedMonthlyRevenue - currentMonthlyRevenue;
    const annualImprovement = improvedAnnualRevenue - currentAnnualRevenue;

    return {
      current: {
        activatedUsers: currentActivatedUsers,
        monthlyRevenue: currentMonthlyRevenue,
        annualRevenue: currentAnnualRevenue,
      },
      improved: {
        activatedUsers: improvedActivatedUsers,
        monthlyRevenue: improvedMonthlyRevenue,
        annualRevenue: improvedAnnualRevenue,
      },
      improvement: {
        monthly: monthlyImprovement,
        annual: annualImprovement,
      },
    };
  };

  const roiResults = calculateROI();

  return (
    <ContentWrapper>
      <HeaderSection>
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
              clickAction={(e) =>
                hanldeBookAudit(
                  e,
                  "https://calendar.notion.so/meet/alexandros/onboarding-discovery",
                  "hero-section"
                )
              }
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
      </HeaderSection>
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
          <MoveUpWhenVisible key="problem-1">
            <ProblemListItem>
              <ProblemHighlight>Low Activation →</ProblemHighlight> New Users
              sign up but never reach their Aha Moment.
            </ProblemListItem>
          </MoveUpWhenVisible>

          <MoveUpWhenVisible key="problem-2">
            <ProblemListItem>
              <ProblemHighlight>Weak Retention →</ProblemHighlight> Even
              activated users drop off before forming habits.
            </ProblemListItem>
          </MoveUpWhenVisible>
          <MoveUpWhenVisible key="problem-3">
            <ProblemListItem>
              <ProblemHighlight>Poor Conversion →</ProblemHighlight> Too few
              free users upgrade to paid plans.
            </ProblemListItem>
          </MoveUpWhenVisible>
        </ProblemList>
        <ProblemConclusion>
          40% of startups die because of bad traction
        </ProblemConclusion>
        <div
          style={{ display: "flex", justifyContent: "center", marginTop: 16 }}
        >
          <ButtonMedium
            clickAction={() => handleClickOnboardingSelfCheck()}
            text={"Take Onboarding Self-Check"}
            color1="#000000"
            color2="#000000"
          />
        </div>
        {isSelfCheckOpen && (
          <SelfCheckOverlay onClick={() => setIsSelfCheckOpen(false)}>
            <SelfCheckModal onClick={(e) => e.stopPropagation()}>
              <ModalClose
                onClick={() => setIsSelfCheckOpen(false)}
                aria-label="Close self-check"
              >
                ×
              </ModalClose>
              <SelfCheckTitle>Onboarding Self-Check</SelfCheckTitle>
              <SelfCheckSubline>
                Find out whether you have an onboarding problem. Check what
                applies.
              </SelfCheckSubline>
              <SelfCheckList>
                <SelfCheckItem>
                  <Checkbox
                    checked={selectedIssues[1]}
                    onChange={() => toggleIssue(1)}
                    label="Are new users signing up but not activating—dropping off
                    before they experience real value?"
                  />
                </SelfCheckItem>
                <SelfCheckItem>
                  <Checkbox
                    checked={selectedIssues[2]}
                    onChange={() => toggleIssue(2)}
                    label="Do you see low retention after the first weeks even though
                    acquisition is steady?"
                  />
                </SelfCheckItem>
                <SelfCheckItem>
                  <Checkbox
                    checked={selectedIssues[3]}
                    onChange={() => toggleIssue(3)}
                    label="Are too few free users upgrading to paid plans, leaving
                    revenue on the table?"
                  />
                </SelfCheckItem>

                <SelfCheckItem>
                  <Checkbox
                    checked={selectedIssues[4]}
                    onChange={() => toggleIssue(4)}
                    label="Do you notice support tickets piling up because the product
                    doesn't guide users well enough?"
                  />
                </SelfCheckItem>
                <SelfCheckItem>
                  <Checkbox
                    checked={selectedIssues[5]}
                    onChange={() => toggleIssue(5)}
                    label="Do you notice support tickets piling up because the product
                    doesn't guide ?"
                  />
                </SelfCheckItem>
              </SelfCheckList>
              <Thermometer>
                <BlinkingCircle
                  style={{ backgroundColor: thermometerColor }}
                  shouldBlink={shouldBlink}
                  blinkInterval={blinkInterval}
                />
                <ThermometerText>{thermometerText}</ThermometerText>
              </Thermometer>

              <ModalActions>
                <ButtonMediumSecondary
                  clickAction={(e) =>
                    handleClickActivationScore(
                      e,
                      "https://alexshomper.notion.site/26eadf77b88b80d0b73aca5b171c586c",
                      "self-check"
                    )
                  }
                  text="Calculate Activation Score"
                />
                <ButtonMedium
                  clickAction={(e) =>
                    hanldeBookAudit(
                      e,
                      "https://calendar.notion.so/meet/alexandros/onboarding-discovery",
                      "self-check"
                    )
                  }
                  text="Book intro call"
                  color1={Colors.blue}
                  color2={Colors.blueDark}
                />
              </ModalActions>
            </SelfCheckModal>
          </SelfCheckOverlay>
        )}
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
            headline="Positioning"
            img="../img/Landingpage/Deliverables/Positioning.png"
            color1={Colors.blue}
            color2={Colors.blueDark}
            copy="A light-weight positioning for your website, that communicates the right message to the right customer to ensure customers get your product at the first touchpoint."
          />
          <DeliverablesCard
            headline="Onboarding & Activation Journey"
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
            headline="Prioritized To Do List"
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
              <PanelBody>
                <PanelListItem>
                  <PriceBullet>
                    <Check size={16} strokeWidth={2.5} />
                  </PriceBullet>
                  <PanelCopy>Onboarding & Activation Journey Map</PanelCopy>
                </PanelListItem>
                <PanelListItem>
                  <PriceBullet>
                    <Check size={16} strokeWidth={2.5} />
                  </PriceBullet>
                  <PanelCopy>Wireframes + Copy</PanelCopy>
                </PanelListItem>
                <PanelListItem>
                  <PriceBullet>
                    <Check size={16} strokeWidth={2.5} />
                  </PriceBullet>
                  <PanelCopy>Positioning Canvas</PanelCopy>
                </PanelListItem>
                <PanelListItem>
                  <PriceBullet>
                    <Check size={16} strokeWidth={2.5} />
                  </PriceBullet>
                  <PanelCopy>Prioritized To Do List</PanelCopy>
                </PanelListItem>
              </PanelBody>
              <ButtonMedium
                clickAction={(e) =>
                  hanldeBookAudit(
                    e,
                    "https://calendar.notion.so/meet/alexandros/onboarding-discovery",
                    "pricing-panel-early"
                  )
                }
                text={"Book intro call"}
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
                  <PanelCopy>Onboarding & Activation Journey Map</PanelCopy>
                </PanelListItem>
                <PanelListItem>
                  <PriceBullet>
                    <Check size={16} strokeWidth={2.5} />
                  </PriceBullet>
                  <PanelCopy>Wireframes + Copy</PanelCopy>
                </PanelListItem>
                <PanelListItem>
                  <PriceBullet>
                    <Check size={16} strokeWidth={2.5} />
                  </PriceBullet>
                  <PanelCopy>Positioning Canvas</PanelCopy>
                </PanelListItem>
                <PanelListItem>
                  <PriceBullet>
                    <Check size={16} strokeWidth={2.5} />
                  </PriceBullet>
                  <PanelCopy>Prioritized To Do List</PanelCopy>
                </PanelListItem>
                <PanelListItem>
                  <PriceBullet>
                    <Check size={16} strokeWidth={2.5} />
                  </PriceBullet>
                  <PanelCopy>
                    Feedback support over <b>~1 month</b> to ensure best
                    practices are implemented
                  </PanelCopy>
                </PanelListItem>
              </PanelBody>
              <ButtonMedium
                clickAction={(e) =>
                  hanldeBookAudit(
                    e,
                    "https://calendar.notion.so/meet/alexandros/onboarding-discovery",
                    "pricing-panel-growth"
                  )
                }
                text={"Book intro call"}
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
                  <PanelCopy>Onboarding & Activation Journey Map</PanelCopy>
                </PanelListItem>
                <PanelListItem>
                  <PriceBullet>
                    <Check size={16} strokeWidth={2.5} />
                  </PriceBullet>
                  <PanelCopy>Wireframes + Copy</PanelCopy>
                </PanelListItem>
                <PanelListItem>
                  <PriceBullet>
                    <Check size={16} strokeWidth={2.5} />
                  </PriceBullet>
                  <PanelCopy>Positioning Canvas</PanelCopy>
                </PanelListItem>
                <PanelListItem>
                  <PriceBullet>
                    <Check size={16} strokeWidth={2.5} />
                  </PriceBullet>
                  <PanelCopy>Prioritized To Do List</PanelCopy>
                </PanelListItem>
                <PanelListItem>
                  <PriceBullet>
                    <Check size={16} strokeWidth={2.5} />
                  </PriceBullet>
                  <PanelCopy>
                    Feedback support over <b>~2 months</b> to ensure best
                    practices are implemented
                  </PanelCopy>
                </PanelListItem>
              </PanelBody>
              <ButtonMedium
                clickAction={(e) =>
                  hanldeBookAudit(
                    e,
                    "https://calendar.notion.so/meet/alexandros/onboarding-discovery",
                    "pricing-panel-scale"
                  )
                }
                text={"Book intro call"}
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
                  <PanelCopy>Onboarding & Activation Journey Map</PanelCopy>
                </PanelListItem>
                <PanelListItem>
                  <PriceBullet>
                    <Check size={16} strokeWidth={2.5} />
                  </PriceBullet>
                  <PanelCopy>Wireframes + Copy</PanelCopy>
                </PanelListItem>
                <PanelListItem>
                  <PriceBullet>
                    <Check size={16} strokeWidth={2.5} />
                  </PriceBullet>
                  <PanelCopy>Positioning Canvas</PanelCopy>
                </PanelListItem>
                <PanelListItem>
                  <PriceBullet>
                    <Check size={16} strokeWidth={2.5} />
                  </PriceBullet>
                  <PanelCopy>Prioritized To Do List</PanelCopy>
                </PanelListItem>
                <PanelListItem>
                  <PriceBullet>
                    <Check size={16} strokeWidth={2.5} />
                  </PriceBullet>
                  <PanelCopy>
                    Feedback support over <b>~4 months</b> to ensure best
                    practices are implemented
                  </PanelCopy>
                </PanelListItem>
              </PanelBody>
              <ButtonMedium
                clickAction={(e) =>
                  hanldeBookAudit(
                    e,
                    "https://calendar.notion.so/meet/alexandros/onboarding-discovery",
                    "pricing-panel-mature"
                  )
                }
                text={"Book intro call"}
                color1={Colors.blue}
                color2={Colors.blueDark}
              />
            </PanelContent>
          </PricePanel>
        </PricePanels>

        <div
          style={{ display: "flex", justifyContent: "center", marginTop: 32 }}
        >
          <ButtonMediumSecondary
            clickAction={(e) => handleClickROICalculator(e, "pricing-panels")}
            text={"Calculate Onboarding ROI"}
            color1="#000000"
            color2="#000000"
          />
          {isROICalculatorOpen && (
            <ROICalculatorOverlay onClick={() => setIsROICalculatorOpen(false)}>
              <ROICalculatorModal onClick={(e) => e.stopPropagation()}>
                <ROIModalClose
                  onClick={() => setIsROICalculatorOpen(false)}
                  aria-label="Close ROI calculator"
                >
                  ×
                </ROIModalClose>
                <ROICalculatorTitle>
                  Calculate Onboarding ROI
                </ROICalculatorTitle>
                <ROICalculatorSubline>
                  See how much revenue you could gain by improving your
                  onboarding activation rate.
                </ROICalculatorSubline>

                <ROIForm>
                  <ROIInputGroup>
                    <ROILabel>Monthly Signups</ROILabel>
                    <ROIInput
                      id="roi-monthlySignups"
                      key="roi-monthlySignups"
                      name="monthlySignups"
                      type="text"
                      inputMode="numeric"
                      autoComplete="off"
                      placeholder="e.g., 1000"
                      value={roiInputs.monthlySignups}
                      onChange={(e) =>
                        handleROIInputChange("monthlySignups", e.target.value)
                      }
                    />
                  </ROIInputGroup>

                  <ROIInputGroup>
                    <ROILabel>Current Activation Rate (%)</ROILabel>
                    <ROIInput
                      id="roi-currentActivationRate"
                      key="roi-currentActivationRate"
                      name="currentActivationRate"
                      type="text"
                      inputMode="decimal"
                      autoComplete="off"
                      placeholder="e.g., 25"
                      value={roiInputs.currentActivationRate}
                      onChange={(e) =>
                        handleROIInputChange(
                          "currentActivationRate",
                          e.target.value
                        )
                      }
                    />
                  </ROIInputGroup>

                  <ROIInputGroup>
                    <ROILabel>Average Revenue Per User (€)</ROILabel>
                    <ROIInput
                      id="roi-averageRevenuePerUser"
                      key="roi-averageRevenuePerUser"
                      name="averageRevenuePerUser"
                      type="text"
                      inputMode="decimal"
                      autoComplete="off"
                      placeholder="e.g., 50"
                      value={roiInputs.averageRevenuePerUser}
                      onChange={(e) =>
                        handleROIInputChange(
                          "averageRevenuePerUser",
                          e.target.value
                        )
                      }
                    />
                  </ROIInputGroup>

                  <ROIInputGroup>
                    <ROILabel>Monthly Churn Rate (%)</ROILabel>
                    <ROIInput
                      id="roi-churnRate"
                      key="roi-churnRate"
                      name="churnRate"
                      type="text"
                      inputMode="decimal"
                      autoComplete="off"
                      placeholder="e.g., 5"
                      value={roiInputs.churnRate}
                      onChange={(e) =>
                        handleROIInputChange("churnRate", e.target.value)
                      }
                    />
                  </ROIInputGroup>
                </ROIForm>

                {roiResults && (
                  <ROIResults>
                    <ROIResultsTitle>ROI Analysis</ROIResultsTitle>

                    <ROIMetric>
                      <ROIMetricLabel>
                        Current Activated Users/Month
                      </ROIMetricLabel>
                      <ROIMetricValue>
                        {Math.round(roiResults.current.activatedUsers)}
                      </ROIMetricValue>
                    </ROIMetric>

                    <ROIMetric>
                      <ROIMetricLabel>
                        Improved Activated Users/Month
                      </ROIMetricLabel>
                      <ROIMetricValue>
                        {Math.round(roiResults.improved.activatedUsers)}
                      </ROIMetricValue>
                    </ROIMetric>

                    <ROIMetric>
                      <ROIMetricLabel>Current Monthly Revenue</ROIMetricLabel>
                      <ROIMetricValue>
                        €
                        {Math.round(
                          roiResults.current.monthlyRevenue
                        ).toLocaleString()}
                      </ROIMetricValue>
                    </ROIMetric>

                    <ROIMetric>
                      <ROIMetricLabel>Improved Monthly Revenue</ROIMetricLabel>
                      <ROIMetricValue>
                        €
                        {Math.round(
                          roiResults.improved.monthlyRevenue
                        ).toLocaleString()}
                      </ROIMetricValue>
                    </ROIMetric>

                    <ROIImprovement>
                      <ROIImprovementTitle>
                        Additional Monthly Revenue
                      </ROIImprovementTitle>
                      <ROIImprovementValue>
                        €
                        {Math.round(
                          roiResults.improvement.monthly
                        ).toLocaleString()}
                      </ROIImprovementValue>
                    </ROIImprovement>

                    <ROIImprovement style={{ marginTop: "12px" }}>
                      <ROIImprovementTitle>
                        Additional Annual Revenue
                      </ROIImprovementTitle>
                      <ROIImprovementValue>
                        €
                        {Math.round(
                          roiResults.improvement.annual
                        ).toLocaleString()}
                      </ROIImprovementValue>
                    </ROIImprovement>
                  </ROIResults>
                )}

                <ModalActions>
                  <ButtonMedium
                    clickAction={(e) =>
                      hanldeBookAudit(
                        e,
                        "https://calendar.notion.so/meet/alexandros/onboarding-discovery",
                        "roi-calculator"
                      )
                    }
                    text="Book intro call"
                    color1={Colors.blue}
                    color2={Colors.blueDark}
                  />
                </ModalActions>
              </ROICalculatorModal>
            </ROICalculatorOverlay>
          )}
        </div>
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
            href="https://calendar.notion.so/meet/alexandros/onboarding-discovery"
            clickAction={(e) =>
              hanldeBookAudit(
                e,
                "https://calendar.notion.so/meet/alexandros/onboarding-discovery",
                "cta-section"
              )
            }
            text={"Book intro call"}
            color1={Colors.blue}
            color2={Colors.blueDark}
          />
        </Hero>
      </Section>
    </ContentWrapper>
  );
};

export default Content;
