import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { motion, useAnimation } from "framer-motion";
import styled from "@emotion/styled";
import { Helmet } from "react-helmet-async";
import { Colors, Devices } from "../../DesignSystem";
import SectionHead from "../../Content/Section/SectionHead";
import SectionCopy from "../../Content/Section/SectionCopy";
import SectionDivider from "../../Content/Section/SectionDivider";
import BusinessCard from "../../Content/BusinessCard/BusinessCard";
import Button from "../../Button/Button";
import FlipCard from "../../Content/FlipCard/FlipCard";
import ListPanel from "../../Content/List/ListPanel/ListPanel";

const mdiEmail =
  "M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z";
const mdiLinkedin =
  "M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z";

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
const Summary = styled.div`
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
  }
  ${Devices.laptopS} {
    width: 864px;
  }
  ${Devices.laptopM} {
    width: 1152px;
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

const PageWrapper = styled.main`
  text-align: left;
  margin-top: 200px;
  margin-bottom: 100px;
`;
const CVWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px 24px 120px 24px;
  gap: 64px;

  ${Devices.tabletS} {
    padding: 0px 0 120px 0;
  }
`;

const Hero = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  text-align: center;
`;

const NameBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
const Name = styled.h1`
  margin: 0;
  font-size: 36px;
  line-height: 120%;
  font-weight: 500;
  color: ${Colors.primaryText.highEmphasis};

  ${Devices.tabletS} {
    font-size: 36px;
  }
`;

const Subline = styled.p`
  margin: 0;
  font-size: 18px;
  line-height: 150%;
  color: ${Colors.primaryText.mediumEmphasis};

  width: 100%;
  max-width: 720px;

  ${Devices.tabletS} {
    font-size: 20px;
    margin: 0 auto;
    width: 600px;
  }
`;
const CVSection = styled.section`
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
  margin-bottom: 60px;
  ${Devices.tabletS} {
    align-items: center;
  }
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

const CVEyebrow = styled.h2`
  margin: 0px;
  margin-bottom: 8px;
  font-size: 16px;
  font-weight: 600;
  line-height: 120%;
  color: ${Colors.primaryText.mediumEmphasis};
  text-align: left;
`;

const CompanyList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border-radius: 20px;
  overflow: hidden;
`;

const CompanyItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  padding: 16px 20px;
  background: #ffffff;

  &:not(:last-of-type) {
    border-bottom: 1px solid rgba(8, 8, 8, 0.08);
  }
  ${Devices.tabletS} {
    align-items: center;
  }
`;

const CompanyDetails = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  flex: 1;
  min-width: 0;
  ${Devices.tabletS} {
    align-items: center;
  }
`;

const CompanyIcon = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 0.02em;
  color: ${Colors.textWhite.highEmphasis};
  background-image: ${(props) =>
    props.$background ? `url(${props.$background})` : "none"};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  text-transform: uppercase;
  flex-shrink: 0;
`;

const CompanyName = styled.span`
  display: block;
  font-size: 18px;
  font-weight: 600;
  line-height: 140%;
  color: ${Colors.primaryText.highEmphasis};
  letter-spacing: 0.01em;
`;

const CompanyText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0px;
  min-width: 0;
  text-align: left;
`;

const CompanySubline = styled.span`
  font-size: 15px;
  line-height: 150%;
  color: ${Colors.primaryText.mediumEmphasis};
  letter-spacing: 0.01em;
`;

const VisitButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  padding: 10px 20px;
  border-radius: 999px;
  background: ${Colors.greyLight};
  color: ${Colors.text.highEmphasis};
  border: none;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.02em;
  cursor: pointer;
  transition:
    background 0.2s ease,
    transform 0.2s ease;
  text-decoration: none;

  &:hover,
  &:focus-visible {
    background: ${Colors.greyDark};
    color: ${Colors.textWhite.highEmphasis};
  }

  &:visited {
    color: ${Colors.text.highEmphasis};
  }

  &:focus-visible {
    outline: 2px solid ${Colors.blueLight};
    outline-offset: 2px;
  }
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
    margin: 0 auto;
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

const sections = [
  {
    title: "Current",
    items: [
      {
        name: "Kimarina",
        subline: "Founder, Growth & Product Design Consultancy",
        label: "Visit",
        url: "https://kimarina.com",
        logo: "/img/company-logos/kimarina.jpeg",
      },
      {
        name: "UnternehmerTUM",
        subline: "Startup Advisor PMF, Growth & Product Design",
        label: "Visit",
        url: "https://www.unternehmertum.de",
        logo: "/img/company-logos/unternehmertum.jpeg",
      },
      {
        name: "Start2 Group",
        subline: "Startup Advisor Growth & Product Design",
        label: "Visit",
        url: "https://www.start2.group",
        logo: "/img/company-logos/start2.jpeg",
      },
      {
        name: "PioneersClub",
        subline: "Startup Advisor PMF, Growth & Product Design",
        label: "Visit",
        url: "https://pioneersclub.io",
        logo: "/img/company-logos/pioneersclub.jpeg",
      },
    ],
  },
  {
    title: "Past Work",
    items: [
      {
        name: "Knauf",
        subline: "Product Owner, Product Design Manager",
        label: "Cases",
        url: "/portfolio",
        logo: "/img/company-logos/knauf.jpeg",
      },
      {
        name: "Occhio",
        subline: "Product Owner & UX Manager",
        label: "Cases",
        url: "/portfolio",
        logo: "/img/company-logos/occhio.jpeg",
      },
      {
        name: "Magirus",
        subline: "Art Director, Product Owner & UX Designer (Agency)",
        logo: "/img/company-logos/magirus.jpeg",
      },
      {
        name: "Stabilo",
        subline: "Art Director (Agency)",
        logo: "/img/company-logos/stabilo.jpeg",
      },
      {
        name: "Crown",
        subline: "Art Director (Agency)",
        logo: "/img/company-logos/crown.jpeg",
      },
      {
        name: "Medi",
        subline: "Art Director (Agency)",
        logo: "/img/company-logos/medi.jpeg",
      },
      {
        name: "Disney",
        subline: "Art Director (Agency)",
        logo: "/img/company-logos/disney.jpeg",
      },
      {
        name: "Studio 100",
        subline: "Art Director (Agency)",
        logo: "/img/company-logos/studio100.jpeg",
      },
      {
        name: "Sixt",
        subline: "Art Director (Agency)",
        logo: "/img/company-logos/sixt.jpeg",
      },
    ],
  },
];

const Profile = () => {
  return (
    <PageWrapper>
      <Helmet>
        <title>About | Alexandros Shomper</title>
        <meta
          name="description"
          content="15+ years in product, design, and growth. From advertising and brand to SaaS product management, PLG, and design leadership."
        />
        <link rel="canonical" href="https://www.alexandrosshomper.de/about" />
        <meta property="og:title" content="About | Alexandros Shomper" />
        <meta
          property="og:description"
          content="15+ years in product, design, and growth. From advertising and brand to SaaS product management, PLG, and design leadership."
        />
        <meta
          property="og:url"
          content="https://www.alexandrosshomper.de/about"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.alexandrosshomper.de/img/social/og-default.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About | Alexandros Shomper" />
        <meta
          name="twitter:description"
          content="15+ years in product, design, and growth. From advertising and brand to SaaS product management, PLG, and design leadership."
        />
      </Helmet>
      <Section>
        <SectionHead headline="About Alexandros" />
        <BusinessCard
          headline={"Alexandros Shomper"}
          copy="I’m an outcome oriented, remote-first product lead with 15+ years of experience in a variety of B2B and B2C industries - from Startup environment to Corporate."
        />
        <br />
        <br />
        <br />
        <br />
        <Summary>
          <SectionDivider text={"Here’s a TL;DR of my career:"} />
          <RevealWhenVisible>
            <SectionCopy
              copy={"Education in Arts & Marketing, and self-taught developer"}
            />
          </RevealWhenVisible>
          <br />
          <RevealWhenVisible>
            <SectionCopy
              copy={
                "Successful career in advertising and marketing, creating global marketing campaigns and brand experiences"
              }
            />
          </RevealWhenVisible>
          <br />
          <RevealWhenVisible>
            <SectionCopy
              copy={
                "Extensive experience growing products and teams in all stages of enterprises from Product-Market-Fit, to Product Led Growth to Core Product Work"
              }
            />
          </RevealWhenVisible>
          <br />
        </Summary>
        <br />
        <RevealWhenVisible>
          <AnnotationWrapper
            style={{ color: Colors.primaryText.mediumEmphasis }}
          >
            <Annotation>
              There’s a bunch more detail below, but you can also view a summary
              on{" "}
              <a
                href="https://www.linkedin.com/in/alexshomper/"
                style={{ color: Colors.turkish }}
              >
                LinkedIn
              </a>{" "}
              and take a look at my{" "}
              <a
                href="https://github.com/alexandrosshomper"
                style={{ color: Colors.turkish }}
              >
                Manager README on Github
              </a>
              . If you like side projects, check out my{" "}
              <a href="https://cookcook.it" style={{ color: Colors.turkish }}>
                Cooking Social Network
              </a>
              .
            </Annotation>
          </AnnotationWrapper>
          <AnnotationWrapper
            style={{ color: Colors.primaryText.mediumEmphasis }}
          >
            <Button
              href="mailto:alexandros@alexandrosshomper.de"
              text="Email Me"
              gradient={{ from: Colors.black, to: Colors.greyDark }}
              icon={mdiEmail}
            />
            <Button
              size="medium"
              variant="primary"
              href="https://www.linkedin.com/in/alexshomper/"
              text="LinkedIn"
              gradient={{ from: Colors.blue, to: Colors.blueLight }}
              icon={mdiLinkedin}
            />
          </AnnotationWrapper>
        </RevealWhenVisible>
      </Section>
      <Section>
        <SectionHead
          headline="Key strengths"
          subline="I have worked in hybrid roles of product design, product management, and product growth"
        />
        <FlipCardPanels>
          <FlipCard
            eyebrow="Product Design"
            eyebrowColor="#231768"
            eyebrowBackColor="#10D5F5"
            backgroundColor="#231768"
            colorBack="white"
            copy={[""]}
            copyBack={[
              "I turn complex workflows into products people actually use. My focus is always time-to-value — getting users to their first meaningful moment as fast as possible, then designing the experience that keeps them.",
            ]}
          />
          <FlipCard
            eyebrow="Product Thinking"
            eyebrowColor="#206405"
            eyebrowBackColor="#D9EDCA"
            backgroundColor="#206405"
            colorBack="white"
            copy={[""]}
            copyBack={[
              "I bring PM instincts to design. I understand what to build and why before I decide how it should look. That means I can drive scope decisions, challenge briefs, and connect design choices directly to business outcomes.",
            ]}
          />
          <FlipCard
            eyebrow="Product Growth"
            eyebrowColor="#6A210D"
            eyebrowBackColor="#FFB700"
            backgroundColor="#6A210D"
            colorBack="white"
            copy={[""]}
            copyBack={[
              "I design for activation and retention, not just for launch. I work with data, run experiments, and build the growth loops that turn new users into long-term ones. PLG is not a strategy I apply after the fact — it shapes the product from the first screen.",
            ]}
          />
        </FlipCardPanels>
      </Section>
      <Section>
        <SectionHead
          headline="Human Centered Leadership"
          subline="I believe happy and healthy teams are the most productive, and innovative teams."
        />

        <CardPanels>
          <ListPanel
            eyebrow="Autonomy"
            eyebrowColor1={Colors.green}
            eyebrowColor2={Colors.greenLight}
            copy="The best work comes from people who own their decisions. I set direction clearly, then get out of the way. Micromanagement kills the creative risk-taking that produces anything worth shipping."
          />

          <ListPanel
            eyebrow="Mastery"
            eyebrowColor1={Colors.green}
            eyebrowColor2={Colors.greenLight}
            copy="I invest in the people I work with. That means design critiques with real feedback, pairing on hard problems, and creating the space to try things that might not work. Growth doesn't happen in comfort zones."
          />

          <ListPanel
            eyebrow="Purpose"
            eyebrowColor1={Colors.green}
            eyebrowColor2={Colors.greenLight}
            copy="Teams do their best work when they understand why it matters — not just to the business, but to the people using what they're building. I make that connection explicit, and I revisit it when it gets lost."
          />
        </CardPanels>
      </Section>{" "}
      <Section>
        <SectionHead
          headline="My Principles"
          subline="I work with the outcome in mind first, then work backwards to the interface."
        />

        <CardPanels>
          <ListPanel
            eyebrow="Aesthetics"
            copy="Beautiful products are more useful. Craft is not decoration — it's how you signal to users that the product deserves their trust."
          />
          <ListPanel
            eyebrow="Data Driven/Informed"
            copy="Data tells you what is happening. Research tells you why. You need both before you design anything. I never treat a metric as a conclusion — only as the beginning of a question."
          />
          <ListPanel
            eyebrow="Quality"
            copy="Outcome beats output. No one remembers a late launch. Everyone remembers a bad product."
          />
        </CardPanels>
      </Section>
      <CVWrapper>
        <Hero>
          <NameBlock>
            <Name>Curriculum Vitae</Name>
            <Subline>
              <b>Product Design Leader & Startup Advisor</b>
            </Subline>
          </NameBlock>
          <br />
        </Hero>
        {sections.map((section) => (
          <CVSection key={section.title}>
            <CVEyebrow>{section.title}</CVEyebrow>
            <CompanyList>
              {section.items.map((company, index) => (
                <CompanyItem key={company.name}>
                  <CompanyDetails>
                    <CompanyIcon
                      $background={company.logo}
                      aria-hidden="true"
                    ></CompanyIcon>
                    <CompanyText>
                      <CompanyName>{company.name}</CompanyName>
                      <CompanySubline>{company.subline}</CompanySubline>
                    </CompanyText>
                  </CompanyDetails>
                  {company.url && (
                    <VisitButton
                      as="a"
                      href={company.url}
                      {...(company.url.startsWith("http")
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      aria-label={`Visit ${company.name}`}
                    >
                      {company.label}
                    </VisitButton>
                  )}
                </CompanyItem>
              ))}
            </CompanyList>
          </CVSection>
        ))}
      </CVWrapper>
    </PageWrapper>
  );
};

export default Profile;
