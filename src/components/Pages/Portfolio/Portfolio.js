import React, { useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import styled from "@emotion/styled";
import { ArrowRight } from "lucide-react";
import { Colors, Devices } from "../../DesignSystem";
import SectionHead from "../../Content/Section/SectionHead";
import caseStudiesData from "../../../data/portfolio/portfolio.json";
import Button from "../../Button/Button";
import CaseStudyCardVideo from "../../Content/Case/CaseStudyCardVideo";
import AiTechStack from "../../Content/AiTechStack/AiTechStack";

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
          subline="From luxury eCommerce to B2B SaaS. Built for real users, measured with real data."
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
