import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { motion, useAnimation } from "framer-motion";
import styled from "@emotion/styled";
import { Helmet } from "react-helmet";
import { mdiEmail, mdiLinkedin } from "@mdi/js";

import { Colors, Devices } from "../../DesignSystem";
import Intro from "../../Content/Intro/Intro";

import SectionHead from "../../Content/Section/SectionHead";
import SectionCopy from "../../Content/Section/SectionCopy";
import SectionDivider from "../../Content/Section/SectionDivider";
import BusinessCard from "../../Content/BusinessCard/BusinessCard";
import Button from "../../Button/Button";

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
    flex-direction: row;
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
  margin-top: 72px;
  margin-bottom: 200px;
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
  transition: background 0.2s ease, transform 0.2s ease;
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
        <title>Alexandros Shomper — Profile</title>
        <meta
          name="description"
          content="Profile of Alexandros Shomper, highlighting current engagements, coached startups, and past work."
        />
      </Helmet>
      <Intro></Intro>

      <Section>
        <SectionHead headline="A little bit about me" />
        <BusinessCard
          headline={"Alexandros Shomper"}
          copy="I’m an outcome oriented, remote-first product lead with 15+ years of experience in a variety of B2B and B2C industries - from Startup environment to Corporate."
        />
        <br />
        <br />
        <SectionDivider text={"Here’s a TL;DR of my career:"} />

        <Summary>
          <RevealWhenVisible>
            <SectionCopy
              copy={
                "Education in Arts & Marketing, and self-taught developer 👨🏻‍💻"
              }
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
                "Extensive experience growing products and teams 🚀 in all stages of enterprises from Product-Market-Fit, to Product Led Growth to Core Product Work"
              }
            />
          </RevealWhenVisible>
          <br />
          <RevealWhenVisible>
            <SectionCopy
              copy={
                "I have a passion for outcome 🎯 by developing and enhancing data-driven and customer-centric processes and culture"
              }
            />
          </RevealWhenVisible>
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
