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
        <title>White Papers | Alexandros Shomper</title>
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
          headline="Reports"
          subline="Data and anecdotes from industry research & use cases."
        />
        <Panels style={{ marginBottom: "48px" }}>
          <FadeInWhenVisible>
            <CaseSectionSummary
              copy="In a complex, uncertain and volatile world, the pace of digital change is faster than ever. Looking ahead is critical to success. These reports provide insights into major business and technology trends that will help you stay ahead and make smarter decisions for your organization."
              //imgURL="./img/PanelTestImages/one.jpg"
            />
          </FadeInWhenVisible>
        </Panels>
        <CaseCardGrid>
          <FadeInWhenVisible>
            <CaseCard
              eyebrow="Report"
              eyebrowColor2="#231768"
              eyebrowColor1="#10d5f5"
              headline="Why Onboarding & Activation Are The Ultimate Levers for SaaS Growth"
              copy="For early-stage and growth startup founders, retention is everything. But what if the key to higher retention and ARR isn’t just engagement or new features? Our latest whitepaper dives into why user onboarding and activation are the most powerful (and cost-effective) levers for boosting long-term retention and revenue. Discover how optimizing these critical stages can drastically reduce churn, increase customer lifetime value, and accelerate growth. Download the full report to uncover the strategies top SaaS companies use to turn new users into loyal, paying customers."
              imgURL="./img/Knauf/CoverKnaufTransformation.png"
              link="/why-onboarding-and-activation-are-the-ultimate-levers-for-saas-growth"
            />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <CaseCard
              eyebrow="Report"
              eyebrowColor2="#231768"
              eyebrowColor1="#10d5f5"
              headline="myKnauf: A global construction app platform"
              copy="Knauf want's to explore the opportunities of digitizing the construction business by rapidly developing validated product & business ideas"
              imgURL="./img/Knauf/CoverMyKnauf.png"
              link="/myKnauf"
            />
          </FadeInWhenVisible>
        </CaseCardGrid>
      </Section>
    </Content>
  );
};

export default Content;
