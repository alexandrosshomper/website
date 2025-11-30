import React, { useMemo, useState } from "react";
import { Helmet } from "react-helmet";
import styled from "@emotion/styled";
import { ArrowRight } from "lucide-react";

//Components
import { Colors, Devices } from "../../DesignSystem";
import SectionHead from "../../Content/Section/SectionHead";

import CaseCard from "../../Content/CaseCard/CaseCard";
import caseStudiesData from "../../../data/portfolio/portfolio.json";
import Button from "../../Button/Button";

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

  const CaseCardGrid = styled.section`
    margin: 0px 24px 0px 24px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    align-items: center;
    --gap: 24px;
    gap: var(--gap);
    ${Devices.tabletS} {
      width: 564px;
    }
    ${Devices.tabletM} {
      margin: 0px 0px 0px 0px;

      width: 708px;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }
    ${Devices.laptopS} {
      width: 864px;
    }
    ${Devices.laptopM} {
      width: 1140px;
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
    flex-direction: row;
    gap: 24px;
    overflow: hidden;
    background-color: white;
    color: ${Colors.primaryText.mediumEmphasis};
    font-size: 16px;
    line-height: 150%;
    width: 100%;
    min-height: 400px;
    border-radius: 32px;
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
      width: 1140px;
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
    margin: 32px 0px 24px 24px;
    width: 40%;
    min-height: 400px;

    text-align: left;
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
                  gradient={caseStudy.color}
                  href={caseStudy.link}
                  icon={<ArrowRight size="21" />}
                />
              </CaseBlockDetails>
              <CaseBlockImageWrapper>
                <CaseBlockImage src={caseStudy.imgURL} />
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
    </Content>
  );
};

export default Content;
