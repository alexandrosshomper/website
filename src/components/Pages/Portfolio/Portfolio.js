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
const StyledContent = styled.div`
  text-align: left;
  margin-top: 72px;
`;
const StyledCaseCardGrid = styled.section`
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

const Content = (props) => {
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
    <StyledContent>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Portfolio | Alexandros Shomper</title>
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
          divider="Selected projects"
          headline="Knauf Construction Apps"
          subline="Building a global apps platform, from scratch."
        />
        <Panels style={{ marginBottom: "48px" }}>
          <FadeInWhenVisible>
            <CaseSectionSummary
              copy="
As the Chapter Lead UX, I spearheaded the design and UX for four Knauf construction apps, creating a unified design system. I established key growth metrics for these products, leading to data-informed decisions."
              //imgURL="./img/PanelTestImages/one.jpg"
            />
          </FadeInWhenVisible>
        </Panels>
        <StyledCaseCardGrid>
          <FadeInWhenVisible>
            <CaseCard
              eyebrow="Case Study"
              eyebrowColor2="#231768"
              eyebrowColor1="#10d5f5"
              headline="Knauf Digital Transformation & Business Design"
              copy="Knauf want's to explore the opportunities of digitizing the construction business by rapidly developing validated product & business ideas"
              imgURL="./img/Knauf/CoverKnaufTransformation.png"
              link="/knauf-explorations"
            />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <CaseCard
              eyebrow="Case Study"
              eyebrowColor2="#231768"
              eyebrowColor1="#10d5f5"
              headline="myKnauf: A global construction app platform"
              copy="Knauf want's to explore the opportunities of digitizing the construction business by rapidly developing validated product & business ideas"
              imgURL="./img/Knauf/CoverMyKnauf.png"
              link="/myKnauf"
            />
          </FadeInWhenVisible>
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
        </StyledCaseCardGrid>
      </Section>

      <Section>
        <SectionHead
          headline="Knauf Corporate Website"
          subline="Unifying the user experience of a global conglomerate."
        />
        <Panels
          style={{
            marginBottom: "48px",
            gap: "24px",
          }}
        >
          <FadeInWhenVisible>
            <CaseSectionSummary
              copy="
As the Chapter Lead UX, I led the product design of Knauf's global websites unification, establishing a cohesive design system across 4 product teams. A successful launch in 120 countries and multiple languages, guided by key performance metrics analysis."
              //imgURL="./img/PanelTestImages/one.jpg"
            />
          </FadeInWhenVisible>
        </Panels>
        <StyledCaseCardGrid>
          <FadeInWhenVisible>
            <CaseCard
              eyebrow="Case Study"
              eyebrowColor1="#3b177d"
              eyebrowColor2="#73b9df"
              headline="knauf.com: Information Architecture & navigation for digital future of the construction business"
              copy="Building the digital future of the construction business. The roadmap is there, now we need to get tracktion."
              imgURL="./img/Knauf/CoverKnaufCom.png"
              comingSoon="true"
            />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <CaseCard
              eyebrow="Deep Dive"
              eyebrowColor1="#3b177d"
              eyebrowColor2="#73b9df"
              headline="Product Workflow: How to streamline data-driven and customer-centric product decisions."
              copy="Knauf want's to explore the opportunities of digitizing the construction business by rapidly developing validated product & business ideas"
              imgURL="./img/Knauf/CoverProductWorkflow.png"
              comingSoon="true"
            />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <CaseCard
              eyebrow="Deep Dive"
              eyebrowColor1="#3b177d"
              eyebrowColor2="#73b9df"
              headline="UX Metrics: How to enable data-driven product decisions with a UX Metrics framework"
              copy="Knauf want's to explore the opportunities of digitizing the construction business by rapidly developing validated product & business ideas"
              imgURL="./img/Knauf/CoverUXMetrics.png"
              comingSoon="true"
            />
          </FadeInWhenVisible>
        </StyledCaseCardGrid>
      </Section>
      <Section>
        <SectionHead
          headline="Occhio Website & eCommerce"
          subline="Leading the digital relaunch of a premium lighting brand."
        />
        <Panels style={{ marginBottom: "48px" }}>
          <FadeInWhenVisible>
            <CaseSectionSummary
              copy="As the UX Manager & Product Owner, I led Occhio's website relaunch and e-commerce debut, blending brand, user experience and performance to redefine Occhio's digital presence. This overhaul boosted user engagement and conversion rates, earning accolades and raising e-commerce to 10% of revenue share"
              //imgURL="./img/PanelTestImages/one.jpg"
            />
          </FadeInWhenVisible>
        </Panels>
        <StyledCaseCardGrid>
          <FadeInWhenVisible>
            <CaseCard
              eyebrow="Case Study"
              eyebrowColor1="#FF0000"
              eyebrowColor2="#FFCC00"
              headline="Occhio Website Relaunch and eCommerce Launch"
              copy="Occhio relaunches its Website and establishes it's first e-commerce while simultaneously redefining its brand for a digital world"
              //copy="Auf Basis umfangreicher Marktforschung und einer neuen Digitalstrategie entwickelte Alexandros Shomper das nutzerzentrierte Konzept sowie das UX/UI Design für den Website-Relaunch und eCommerce Launch von Occhio. Dabei standen ein begeisterndes, interaktives Markenerlebnis und die intuitive Führung der Nutzer von der Inspiration hin zum Konfigurations- und Kaufprozess im Vordergrund."
              imgURL="./img/Occhio/Occhio-Website.png"
              link="/occhio"
            />
          </FadeInWhenVisible>
        </StyledCaseCardGrid>
      </Section>
      <Section>
        <SectionHead divider="Side Projects" />
        <StyledCaseCardGrid>
          <FadeInWhenVisible>
            <CaseCard
              eyebrow="Website / eCommerce"
              eyebrowColor2="#d9edca"
              eyebrowColor1="#206405"
              headline="The elegant art of topic authority for fly fishing"
              copy="Feathered Hooks: My blog/eCommerce for fly fishing. A SEO experiment on achieving & monetizing topic authority as quick as possible."
              imgURL="./img/FeatheredHooks/CoverFeatheredHooks.png"
              link="/feathered-hooks"
            />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <CaseCard
              eyebrow="App"
              eyebrowColor2="#6a210d"
              eyebrowColor1="#ffb700"
              headline="CookCook: The Video Recipe Social Network"
              copy="My very own MERN stack app. A technical excercise and solution to a real problem I have: Find easy to follow video recipes."
              imgURL="./img/CookCook/CoverCookCook.png"
              link="https://www.cookcook.it/"
            />
          </FadeInWhenVisible>
        </StyledCaseCardGrid>
      </Section>
    </StyledContent>
  );
};

export default Content;
