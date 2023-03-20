import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import styled from "@emotion/styled";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

//Components
import { Devices } from "../../DesignSystem";
import SectionHead from "../../Content/Section/SectionHead";

import CaseCard from "../../Content/CaseCard/CaseCard";

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
    }
  `;

  return (
    <Content>
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
        <SectionHead subline="A selection of projects." />
        <CaseCardGrid>
          <FadeInWhenVisible>
            <CaseCard
              eyebrow="Case Study"
              eyebrowColor1="#00b8d4"
              eyebrowColor2="#62ebff"
              headline="Knauf Unlimited Ecosystem"
              copy="Building the digital future of the construction business. The roadmap is there, now we need to get tracktion."
              imgURL="./img/Knauf/KnaufExecutionComingSoon.png"
              comingSoon="true"
            />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <CaseCard
              eyebrow="Case Study"
              eyebrowColor1="#00b8d4"
              eyebrowColor2="#62ebff"
              headline="Knauf Digital Transformation & Business Design"
              copy="Knauf want's to explore the opportunities of digitizing the construction business by rapidly developing validated product & business ideas"
              imgURL="./img/Knauf/KnaufExplorations.png"
              link="/knauf-explorations"
            />
          </FadeInWhenVisible>
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
        </CaseCardGrid>
      </Section>
    </Content>
  );
};

export default Content;
