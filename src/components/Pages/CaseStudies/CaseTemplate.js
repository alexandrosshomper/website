import styled from "@emotion/styled";
import React from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

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
  margin-top: 220px;
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
  const { pathname } = useLocation();
  const canonical = `https://www.alexandrosshomper.de${pathname}`;
  const slug = pathname.split("/").pop();

  const renderHero = () => {
    if (typeof hero === "function") {
      return hero();
    }

    return hero || null;
  };

  return (
    <ContentWrapper>
      <Helmet>
        {metaTitle && <title>{metaTitle}</title>}
        {metaDescription && (
          <meta name="description" content={metaDescription} />
        )}
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={metaTitle || "Alexandros Shomper"} />
        {metaDescription && <meta property="og:description" content={metaDescription} />}
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.alexandrosshomper.de/img/social/og-default.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metaTitle || "Alexandros Shomper"} />
        {metaDescription && <meta name="twitter:description" content={metaDescription} />}
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.alexandrosshomper.de/" },
            { "@type": "ListItem", "position": 2, "name": "Case Studies", "item": "https://www.alexandrosshomper.de/case-studies" },
            { "@type": "ListItem", "position": 3, "name": title || slug, "item": canonical }
          ]
        })}</script>
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
