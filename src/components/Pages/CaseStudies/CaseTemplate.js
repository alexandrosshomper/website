import styled from "@emotion/styled";
import React from "react";
import { Helmet } from "react-helmet";

import CaseTitle from "../../Content/Case/CaseTitle";
import CaseTitleEyebrow from "../../Content/Case/CaseTitleEyebrow";
import CaseSubtitle from "../../Content/Case/CaseSubtitle";
import FloatingTableOfContents from "../../Article/FloatingTableOfContents";
import CaseCard from "../../Content/CaseCard/CaseCard";
import CaseCardGrid from "../../Content/CaseCard/CaseCardGrid";
import caseStudiesData from "../../../data/portfolio/portfolio.json";
import CaseSectionHead from "../../Content/Case/CaseSectionHead";

const ContentWrapper = styled.div`
  text-align: left;
  margin-top: 72px;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  align-self: stretch;
  flex-grow: 0;
`;

const ArticleHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const HeaderSpacing = () => (
  <>
    <br />
    <br />
    <br />
    <br />
  </>
);
const CASE_STUDIES = caseStudiesData.map((caseStudy) => {
  return {
    id: caseStudy.id,
    type: caseStudy.type,
    eyebrow: "Case Study",
    headline: caseStudy.name,
    copy: caseStudy.desc,
    imgURL: caseStudy.cover,
    link: caseStudy.slug,
    comingSoon: caseStudy.coming,
  };
});

const CaseTemplate = ({
  metaTitle,
  metaDescription,
  eyebrow = "Case Study",
  eyebrowColor1,
  eyebrowColor2,
  title,
  subline,
  hero,
  children,
}) => {
  const renderHero = () => {
    if (typeof hero === "function") {
      return hero();
    }

    return hero || null;
  };

  return (
    <ContentWrapper>
      <Helmet>
        <meta charSet="utf-8" />
        {metaTitle && <title>{metaTitle}</title>}
        {metaDescription && (
          <meta name="description" content={metaDescription} />
        )}
      </Helmet>
      <Section data-article-container="true">
        <ArticleHeader data-article-header="true">
          {eyebrow ? (
            <CaseTitleEyebrow
              text={eyebrow}
              color1={eyebrowColor1}
              color2={eyebrowColor2}
            />
          ) : null}
          {title ? <CaseTitle headline={title} /> : null}
          {subline ? <CaseSubtitle text={subline} /> : null}
          <HeaderSpacing />
          {renderHero()}
          <HeaderSpacing />
        </ArticleHeader>
        <FloatingTableOfContents>{children}</FloatingTableOfContents>
      </Section>{" "}
      <CaseSectionHead headline="Other Case Studies" />
      <CaseCardGrid>
        {CASE_STUDIES.map((caseStudy) => (
          <CaseCard
            key={caseStudy.id}
            eyebrow={caseStudy.eyebrow}
            eyebrowColor2={caseStudy.eyebrowColor2}
            eyebrowColor1={caseStudy.eyebrowColor1}
            headline={caseStudy.headline}
            copy={caseStudy.copy}
            imgURL={caseStudy.imgURL}
            link={caseStudy.link}
            comingSoon={caseStudy.comingSoon}
          />
        ))}
      </CaseCardGrid>
    </ContentWrapper>
  );
};

export default CaseTemplate;
export { HeaderSpacing as CaseHeaderSpacing };
