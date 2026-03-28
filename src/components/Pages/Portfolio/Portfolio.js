import React, { useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import styled from "@emotion/styled";
import { ArrowRight } from "lucide-react";
import { Colors, Devices } from "../../DesignSystem";
import SectionHead from "../../Content/Section/SectionHead";
import BlackQuote from "../../Content/BlackQuote/BlackQuote";
import ListPanel from "../../Content/List/ListPanel/ListPanel";
import Intro from "../../Content/Intro/Intro";
import caseStudiesData from "../../../data/portfolio/portfolio.json";
import Button from "../../Button/Button";
import FlipCard from "../../Content/FlipCard/FlipCard";
import CaseStudyCardVideo from "../../Content/Case/CaseStudyCardVideo";
import AiTechStack from "../../Content/AiTechStack/AiTechStack";

// Inlined SVG paths to avoid loading the full @mdi/js library (2.6MB bundle)
const mdiLinkedin =
  "M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z";
const mdiEmail =
  "M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z";

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

const CaseBlockImageWrapper = styled.div`
  flex: 1;
  margin: 0px;
  min-width: 0;
  overflow: hidden;
  display: flex;
  align-self: stretch;
  pointer-events: none;
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
  font-weight: 500;
  line-height: 110%;

  text-align: left;
  margin: 0px 0px 4px 0px;
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

const EmptyState = styled.p`
  color: ${Colors.primaryText.mediumEmphasis};
  font-size: 16px;
  line-height: 150%;
  margin: 48px 0;
  max-width: 420px;
  text-align: center;
`;

const FlipCardPanels = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: auto;
  justify-content: flex-start;
  align-content: center;
  align-items: stretch;
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

const ButtonRow = styled.div`
  color: rgb(29, 29, 31);
  direction: ltr;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: center;
  align-items: flex-start;
  gap: 12px;
  height: 60px;
  letter-spacing: -0.374px;
  line-height: 25px;

  padding-top: 12px;
  quotes: "" " " "";
  text-align: center;
  text-size-adjust: 100%;

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
    flex-direction: row;

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
  width: 400px;
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
        <SectionHead
          headline="Work"
          subline="Selected projects. My work spans from product design, product management, and growth."
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
      </Section>
      <Section>
        <SectionHead
          headline="AI Native Tech Stack"
          subline="Fluent in the tools redefining how products are designed and built."
          centered
        />
        <AiTechStack />
      </Section>
    </PageWrapper>
  );
};

export default Content;
