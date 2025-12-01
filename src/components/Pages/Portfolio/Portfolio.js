import React, { useMemo, useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { Helmet } from "react-helmet";
import styled from "@emotion/styled";
import { ArrowRight } from "lucide-react";
import { mdiLinkedin, mdiEmail } from "@mdi/js";
//Components
import { Colors, Devices } from "../../DesignSystem";
import SectionHead from "../../Content/Section/SectionHead";
import BlackQuote from "../../Content/BlackQuote/BlackQuote";
import ListPanel from "../../Content/List/ListPanel/ListPanel";

import caseStudiesData from "../../../data/portfolio/portfolio.json";
import Button from "../../Button/Button";
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
const CASE_STUDY_TYPES = {
  ALL: "All Case Studies",
  ONBOARDING: "Onboarding Case Studies",
  GENERAL: "General Case Studies",
};

const mapCaseStudyType = (type) => {
  if (type === CASE_STUDY_TYPES.ONBOARDING) {
    return CASE_STUDY_TYPES.ONBOARDING;
  }

  if (type === CASE_STUDY_TYPES.GENERAL) {
    return CASE_STUDY_TYPES.GENERAL;
  }

  if (type === "General Case Study") {
    return CASE_STUDY_TYPES.GENERAL;
  }

  return type;
};

const CASE_STUDIES = caseStudiesData.map((caseStudy) => {
  return {
    id: caseStudy.id,
    type: mapCaseStudyType(caseStudy.type),
    company: caseStudy.company,
    headline: caseStudy.name,
    subline: caseStudy.sub,
    copy: caseStudy.desc,
    imgURL: caseStudy.cover,
    link: caseStudy.slug,
    comingSoon: caseStudy.coming,
    bg: caseStudy.bg,
    color: caseStudy.color,
    keyResults: caseStudy.keyResults,
  };
});
const ButtonRow = styled.div`
  color: rgb(29, 29, 31);
  direction: ltr;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: center;
  align-items: flex-start;
  gap: 12px;
  height: 60px;
  letter-spacing: -0.374px;
  line-height: 25px;

  padding-top: 12px;
  quotes: "“" "”";
  text-align: center;
  text-size-adjust: 100%;

  width: 100%;
  height: 200px;

  /* Inside Auto Layout */
  flex: none;
  order: 3;
  align-self: stretch;
  flex-grow: 0;
  -webkit-font-smoothing: antialiased;
  --gap: 12px;
  margin-left: calc(-1 * var(--gap));
  margin-right: calc(-1 * var(--gap));
  margin-bottom: calc(-1 * var(--gap));

  & > * {
    margin-left: var(--gap);
    margin-bottom: calc(2 * var(--gap));
  }
  ${Devices.tabletS} {
    justify-content: center;
    align-content: center;
    align-items: center;
    gap: 24px;
  }
  ${Devices.tabletM} {
  }
  ${Devices.laptopS} {
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;

  position: static;

  /* Inside Auto Layout */

  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
  margin: 0px auto;
  margin-top: 40px;
  margin-left: 24px;
  margin-right: 24px;

  /* Inside Auto Layout */
  flex: none;
  order: 3;
  align-self: stretch;
  flex-grow: 0;
  -webkit-font-smoothing: antialiased;
  ${Devices.tabletS} {
    width: 564px;
    margin: 0px auto;
  }
  ${Devices.tabletM} {
    width: 708px;
  }
  ${Devices.laptopS} {
    width: 852px;
  }
`;

const Content = (props) => {
  const [selectedType, setSelectedType] = useState(CASE_STUDY_TYPES.ALL);

  const filteredCaseStudies = useMemo(() => {
    if (selectedType === CASE_STUDY_TYPES.ALL) {
      return CASE_STUDIES;
    }
    setSelectedType(selectedType);

    return CASE_STUDIES.filter((caseStudy) => caseStudy.type === selectedType);
  }, [selectedType]);

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
  const CardPanels = styled.section`
    display: flex;
    flex-direction: column;
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
      flex-direction: row;
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
  const CaseBlockImage = styled.img`
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    transition: transform 0.5s ease;
    transform: scale(1);
    flex: 1;
  `;
  const CaseBlockImageWrapper = styled.div`
    flex: 1;
    margin: 0px;
    min-width: 0;
    overflow: hidden;
    display: flex;
    align-self: stretch;
  `;
  const CaseBlock = styled.a`
    text-decoration: none;
    display: flex;
    flex-direction: column;
    gap: 24px;
    overflow: hidden;
    background-color: white;
    color: ${Colors.primaryText.mediumEmphasis};
    font-size: 16px;
    line-height: 150%;
    width: 90%;
    min-height: 400px;
    border-radius: 40px;
    border: 1px solid rgba(255, 255, 255, 0.3);
    text-align: center;
    margin: 0px 0px 24px 0px;
    cursor: pointer;
    ${Devices.tabletS} {
      width: 564px;
    }
    ${Devices.tabletM} {
      margin: 0px 0px 48px 0px;
      width: 708px;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }
    ${Devices.laptopS} {
      width: 864px;
    }
    ${Devices.laptopM} {
      width: 1152px;
    }
    &:hover img {
      transform: scale(1.2);
    }
  `;
  const CaseBlockDetails = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 24px;
    color: ${Colors.primaryText.mediumEmphasis};
    font-size: 16px;
    line-height: 150%;
    margin: 8px 14px 14px 14px;

    min-height: 400px;
    order: 1;
    text-align: left;
    ${Devices.tabletS} {
      margin: 32px 0px 24px 24px;
      order: 0;
      width: 40%;
    }
  `;
  const CaseBlockDetailsText = styled.div`
    margin: 0px 0px 0px 0px;
  `;
  const CaseBlockEyebrow = styled.p`
    color: ${Colors.primaryText.highEmphasis};
    font-size: 12px;
    font-weight: 600;
    line-height: 110%;

    text-align: left;
    margin: 0px 0px 4px 0px;
  `;
  const CaseBlockHeadline = styled.h3`
    color: ${Colors.primaryText.highEmphasis};
    font-size: 32px;
    line-height: 110%;

    text-align: left;
    margin: 0px 0px 0px 0px;
  `;
  const CaseBlockSubline = styled.p`
    color: ${Colors.primaryText.highEmphasis};
    font-size: 24px;
    line-height: 110%;

    text-align: left;
    margin: 0px 0px 24px 0px;
  `;
  const CaseBlockCopy = styled.p`
    color: ${Colors.primaryText.mediumEmphasis};
    font-size: 18px;
    line-height: 110%;

    text-align: left;
    margin: 0px 0px 0px 0px;
  `;
  const KeyResultsList = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    padding: 0;
    margin: 0;
    margin-top: 8px;
    !list-style: none;
  `;

  const KeyResultItem = styled.div`
    background: ${Colors.back};
    border: 1px solid rgba(8, 8, 8, 0.08);
    color: ${Colors.primaryText.highEmphasis};
    border-radius: 999px;
    padding: 10px 16px;
    font-size: 15px;
    line-height: 1.3;
  `;
  const EmptyState = styled.p`
    color: ${Colors.primaryText.mediumEmphasis};
    font-size: 16px;
    line-height: 150%;
    margin: 48px 0;
    max-width: 420px;
    text-align: center;
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
        <SectionHead
          headline="Product Designer / Manager with 15+ years experience in various products"
          subline="Now seeking a Product Design Manager role in a high-growth environment."
        />
      </Section>
      <Section>
        <SectionHead subline="Work" copy="Selected projects" />

        {filteredCaseStudies.length > 0 ? (
          filteredCaseStudies.map((caseStudy) => (
            <FadeInWhenVisible>
              <CaseBlock
                key={caseStudy.id}
                style={{ backgroundColor: caseStudy.bg }}
                href={caseStudy.link}
              >
                <CaseBlockDetails>
                  <CaseBlockDetailsText>
                    <CaseBlockEyebrow style={{ color: caseStudy.color }}>
                      {caseStudy.company}
                    </CaseBlockEyebrow>
                    <CaseBlockHeadline>{caseStudy.headline}</CaseBlockHeadline>
                    <CaseBlockSubline>{caseStudy.subline}</CaseBlockSubline>
                    <CaseBlockCopy>{caseStudy.copy}</CaseBlockCopy>
                  </CaseBlockDetailsText>
                  <KeyResultsList>
                    {caseStudy.keyResults?.map((keyResult, index) => (
                      <KeyResultItem key={index}>{keyResult}</KeyResultItem>
                    ))}
                  </KeyResultsList>
                  <Button
                    text="View Case Study"
                    gradient="#000"
                    href={caseStudy.link}
                    icon={<ArrowRight size="21" />}
                  />
                </CaseBlockDetails>
                <CaseBlockImageWrapper>
                  <CaseBlockImage src={caseStudy.imgURL} />
                </CaseBlockImageWrapper>
              </CaseBlock>
            </FadeInWhenVisible>
          ))
        ) : (
          <EmptyState>
            No case studies are available for this type yet. Please check back
            soon.
          </EmptyState>
        )}
      </Section>
      <Section>
        <SectionHead
          headline="Human Centered Leadership"
          subline="I believe happy and healthy teams are the most productive, and innovative teams."
        />
        <FadeInWhenVisible>
          <CardPanels>
            <ListPanel
              eyebrow="Autonomy"
              eyebrowColor1={Colors.green}
              eyebrowColor2={Colors.greenLight}
              copy="Foster motivation and satisfaction by believing in and respecting an individuals's ability to make decisions."
              //imgURL="./img/PanelTestImages/two.jpg"
            />

            <ListPanel
              eyebrow="Mastery"
              eyebrowColor1={Colors.green}
              eyebrowColor2={Colors.greenLight}
              copy="Enable personal and team development by supporting the individuals urge to progress and excel in what drives them."
              //imgURL="./img/PanelTestImages/two.jpg"
            />

            <ListPanel
              eyebrow="Purpouse"
              eyebrowColor1={Colors.green}
              eyebrowColor2={Colors.greenLight}
              copy="Connect personal and business goals of individuals by developing a meaningful and shared vision for the team."
              //imgURL="./img/PanelTestImages/two.jpg"
            />
          </CardPanels>
        </FadeInWhenVisible>
      </Section>{" "}
      <Section>
        <BlackQuote
          //quote="I want to use technological developments, a solid company purpose, and a strong brand to elevate experiences and give meaning to actions and ideas."
          quote="Building tools, communicating complex ideas, 
          and forming flexible cooperations are the essence of human nature in order to solve problems bigger than oneself."
        />
      </Section>
      <Section>
        <SectionHead
          headline="My Principles"
          subline="Give meaning to actions and ideas."
        />
        <FadeInWhenVisible>
          <CardPanels>
            <ListPanel
              eyebrow="Data Driven/Informed"
              copy="Uncovering the human in the machine is becoming the key for delivering useful experiences to the customer."
              //imgURL="./img/PanelTestImages/one.jpg"
            />

            <ListPanel
              eyebrow="Aesthetics"
              copy="Beautiful products are more useful. They attract more customers, and have more loyal customers."
              //imgURL="./img/PanelTestImages/two.jpg"
            />

            <ListPanel
              eyebrow="Quality"
              copy="Outcome beats Output. No one remembers a late launch. But everyone remembers a bad product."
              //imgURL="./img/PanelTestImages/two.jpg"
            />

            <ListPanel
              eyebrow="Holistic"
              copy="The whole is more than the sum of its parts. You want your product to be great? Every part has to be great!"
              //imgURL="./img/PanelTestImages/two.jpg"
            />

            <ListPanel
              eyebrow="Innovative & Brave"
              copy="Free your mind. If you only focus on what is already there, you will never build something new to the world."
              //imgURL="./img/PanelTestImages/two.jpg"
            />

            <ListPanel
              eyebrow="Long Term"
              copy="Keep an eye on what is happening around you, but also on emerging trends and long term possibilities."
              //imgURL="./img/PanelTestImages/two.jpg"
            />
          </CardPanels>
        </FadeInWhenVisible>
      </Section>
      <Section>
        <RevealWhenVisible>
          <ButtonContainer>
            <ButtonRow>
              <Button
                size="medium"
                variant="primary"
                href="https://www.linkedin.com/in/alexshomper/"
                text="LinkedIn"
                gradient={{ from: Colors.blue, to: Colors.blueLight }}
                icon={mdiLinkedin}
              />
              <Button
                href="mailto:alexandros@alexandrosshomper.de"
                text="Email Me"
                gradient={{ from: Colors.black, to: Colors.greyDark }}
                icon={mdiEmail}
              />
            </ButtonRow>
          </ButtonContainer>
        </RevealWhenVisible>
      </Section>
    </Content>
  );
};

export default Content;
