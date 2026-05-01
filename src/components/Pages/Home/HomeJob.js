import React, { useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { ArrowRight } from "lucide-react";
import { Colors, Devices } from "../../DesignSystem";
import SectionHead from "../../Content/Section/SectionHead";
import Intro from "../../Content/Intro/Intro";
import caseStudiesData from "../../../data/portfolio/portfolio-homepage.json";
import Button from "../../Button/Button";
import CaseStudyCardVideo from "../../Content/Case/CaseStudyCardVideo";
import AiTechStack from "../../Content/AiTechStack/AiTechStack";
import LogoWall from "../../Content/LogoWall/LogoWall";

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
    videoURL: caseStudy.video,
    link: caseStudy.slug,
    comingSoon: caseStudy.coming,
    bg: caseStudy.bg,
    color: caseStudy.color,
    keyResults: caseStudy.keyResults,
  };
});

const PageWrapper = styled.div`
  text-align: left;
  margin-top: 200px;
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

const CaseBlockImageWrapper = styled.div`
  flex: 1;
  margin: 0px;
  min-width: 0;
  overflow: hidden;
  display: flex;
  align-self: stretch;
`;

const CaseBlock = styled(Link)`
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
  margin: 0px auto 24px auto;
  cursor: pointer;
  ${Devices.tabletS} {
    width: 564px;
  }
  ${Devices.tabletM} {
    margin: 0px auto 48px auto;
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
  margin: 8px 24px 28px 24px;

  min-height: 400px;
  order: 1;
  text-align: left;
  ${Devices.tabletS} {
    margin: 24px 0px 24px 24px;
    order: 0;
    width: 40%;
  }
`;

const CaseBlockDetailsText = styled.div`
  margin: 0px 0px 0px 0px;
`;

const CaseBlockHeadline = styled.h3`
  color: ${Colors.primaryText.highEmphasis};
  font-size: 32px;
  font-family: "Averia Serif Libre", "Noto Sans", sans-serif;

  line-height: 110%;
  font-weight: 400;

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
  line-height: 130%;

  text-align: left;
  margin: 0px 0px 0px 0px;
  ${Devices.tabletS} {
    line-height: 120%;
  }
`;

const KeyResultsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  padding: 0;
  margin: 0;
  margin-top: 8px;
  list-style: none;
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

const ProcessContainer = styled.div`
  position: relative;
  width: 92vw;
  height: 92vw;
  margin: 0 auto;

  ${Devices.tabletM} {
    width: 700px;
    height: 700px;
  }

  @supports (aspect-ratio: 1) {
    width: min(700px, 92vw);
    height: auto;
    aspect-ratio: 1;
  }
`;

// Glow pulse animation
// Idle: purple for 5s. Wave: all 6 colors sweep center→edge over 1s. Total: 6s.
// Diagonal model — at each step the "front" advances by one ring while each
// ring behind it shows the previous color. 11 wave steps × (1s/11) ≈ 91ms each.
// Step positions = 83.33% + n × 1.5152% (n = 0..11)
const _P = "208, 0, 255"; // purple
const _R = "255, 0, 60"; // red
const _O = "255, 128, 0"; // orange
const _Y = "255, 220, 100"; // yellow
const _G = "100, 220, 100"; // green
const _B = "0, 0, 255"; // blue

const _gr = (c0, c1, c2, c3, c4, c5) =>
  `radial-gradient(ellipse at 50% 50%, rgba(${c0},1) 0%, rgba(${c1},0.85) 20%, rgba(${c2},0.5) 22%, rgba(${c3},0.22) 38%, rgba(${c4},0.1) 52%, rgba(${c5},0.05) 65%, transparent 78%)`;

const glowPulse = keyframes`
  0%     { background: ${_gr(_P, _P, _P, _P, _P, _P)}; }
  83.33% { background: ${_gr(_P, _P, _P, _P, _P, _P)}; }
  84.85% { background: ${_gr(_B, _P, _P, _P, _P, _P)}; }
  86.36% { background: ${_gr(_G, _B, _P, _P, _P, _P)}; }
  87.88% { background: ${_gr(_Y, _G, _B, _P, _P, _P)}; }
  89.39% { background: ${_gr(_O, _Y, _O, _B, _P, _P)}; }
  90.91% { background: ${_gr(_R, _O, _Y, _G, _B, _P)}; }
  92.42% { background: ${_gr(_P, _R, _O, _Y, _G, _B)}; }
  93.94% { background: ${_gr(_P, _P, _R, _O, _Y, _G)}; }
  95.45% { background: ${_gr(_P, _P, _P, _R, _O, _Y)}; }
  96.97% { background: ${_gr(_P, _P, _P, _P, _R, _O)}; }
  98.48% { background: ${_gr(_P, _P, _P, _P, _P, _R)}; }
  100%   { background: ${_gr(_P, _P, _P, _P, _P, _P)}; }
`;

const ProcessGlow = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  filter: blur(22px);
  pointer-events: none;
  animation: ${glowPulse} 6s ease-in-out infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    background: ${_gr(_P, _P, _P, _P, _P, _P)};
  }
`;

const ProcessBubble = styled.div`
  position: absolute;
  width: 41.4%;
  height: 41.4%;
  border-radius: 50%;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 2px;
`;

const ProcessNumber = styled.p`
  color: #d000ff;
  font-size: clamp(22px, 5.6vw, 80px);
  font-weight: 500;
  line-height: 1;
  margin: 0;
  font-family: "Averia Serif Libre", serif;
`;

const ProcessLabel = styled.p`
  color: black;
  font-size: clamp(13px, 2.8vw, 28px);
  font-weight: 500;
  line-height: 1.15;
  margin: 0;
`;

const ProcessCtaWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 64px;
`;

const EmptyState = styled.p`
  color: ${Colors.primaryText.mediumEmphasis};
  font-size: 16px;
  line-height: 150%;
  margin: 48px 0;
  max-width: 420px;
  text-align: center;
`;

const Content = (props) => {
  const [selectedType, setSelectedType] = useState(CASE_STUDY_TYPES.ALL);
  const { pathname } = useLocation();
  const canonical =
    pathname === "/"
      ? "https://www.alexandrosshomper.de/"
      : "https://www.alexandrosshomper.de/portfolio";

  const filteredCaseStudies = useMemo(() => {
    if (selectedType === CASE_STUDY_TYPES.ALL) {
      return CASE_STUDIES;
    }
    setSelectedType(selectedType);

    return CASE_STUDIES.filter((caseStudy) => caseStudy.type === selectedType);
  }, [selectedType]);

  return (
    <PageWrapper>
      <Helmet>
        <title>Portfolio | Alexandros Shomper</title>
        <meta
          name="description"
          content="Product design and growth case studies — Knauf, Asana, Occhio, and more. UX, PLG, and design system work across B2B and B2C."
        />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content="Portfolio | Alexandros Shomper" />
        <meta
          property="og:description"
          content="Product design and growth case studies — Knauf, Asana, Occhio, and more. UX, PLG, and design system work across B2B and B2C."
        />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.alexandrosshomper.de/img/social/og-default.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Portfolio | Alexandros Shomper" />
        <meta
          name="twitter:description"
          content="Product design and growth case studies — Knauf, Asana, Occhio, and more. UX, PLG, and design system work across B2B and B2C."
        />
      </Helmet>
      <Section>
        <Intro />
        <LogoWall></LogoWall>
      </Section>
      <Section>
        <SectionHead
          headline="AI Native Tech Stack"
          subline="Fluent in the tools redefining how products are designed and built."
          centered
        />
        <AiTechStack />
      </Section>
      <Section>
        <SectionHead
          headline="Selected Work"
          subline="Product design, growth, and B2B SaaS, built for real users."
          centered
        />

        {filteredCaseStudies.length > 0 ? (
          filteredCaseStudies.map((caseStudy) => (
            <CaseBlock
              key={caseStudy.id}
              style={{ backgroundColor: caseStudy.bg }}
              to={caseStudy.link}
            >
              <CaseBlockDetails>
                <CaseBlockDetailsText>
                  <CaseBlockHeadline>
                    {caseStudy.company} {caseStudy.headline}
                  </CaseBlockHeadline>
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
                  icon={<ArrowRight size="21" />}
                />
              </CaseBlockDetails>
              <CaseBlockImageWrapper>
                <CaseStudyCardVideo url={caseStudy.videoURL} />
              </CaseBlockImageWrapper>
            </CaseBlock>
          ))
        ) : (
          <EmptyState>
            No case studies are available for this type yet. Please check back
            soon.
          </EmptyState>
        )}

        <Button
          as="a"
          size="large"
          variant="primary"
          href="/portfolio"
          text="See All Work"
          gradient={{ from: Colors.blueDark, to: Colors.purpleDark }}
        />
      </Section>
      <Section>
        <SectionHead
          headline="How I work"
          subline="A repeatable process to make data-driven and customer centric product decisions."
          centered
        />
        <ProcessContainer>
          <ProcessGlow />
          <ProcessBubble style={{ left: 0, top: "29.3%" }}>
            <ProcessNumber>1</ProcessNumber>
            <ProcessLabel>Validate</ProcessLabel>
          </ProcessBubble>
          <ProcessBubble style={{ left: "29.3%", top: 0 }}>
            <ProcessNumber>2</ProcessNumber>
            <ProcessLabel>Design</ProcessLabel>
          </ProcessBubble>
          <ProcessBubble style={{ left: "58.6%", top: "29.3%" }}>
            <ProcessNumber>3</ProcessNumber>
            <ProcessLabel>Develop</ProcessLabel>
          </ProcessBubble>
          <ProcessBubble style={{ left: "29.3%", top: "58.6%" }}>
            <ProcessNumber>4</ProcessNumber>
            <ProcessLabel>Distribute</ProcessLabel>
          </ProcessBubble>
        </ProcessContainer>
        <ProcessCtaWrapper>
          <Button
            as="a"
            size="large"
            variant="primary"
            href="/how-i-work"
            text="Learn more"
            gradient={{ from: Colors.blueDark, to: Colors.purpleDark }}
          />
        </ProcessCtaWrapper>
      </Section>
    </PageWrapper>
  );
};

export default Content;
