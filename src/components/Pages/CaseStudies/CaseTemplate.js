import styled from "@emotion/styled";
import React from "react";
import { Helmet } from "react-helmet";

import CaseTitle from "../../Content/Case/CaseTitle";
import CaseTitleEyebrow from "../../Content/Case/CaseTitleEyebrow";
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

const HeaderSpacing = () => (
  <>
    <br />
    <br />
    <br />
    <br />
    <br />
  </>
);

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
      <Section>
        {eyebrow ? (
          <CaseTitleEyebrow
            text={eyebrow}
            color1={eyebrowColor1}
            color2={eyebrowColor2}
          />
        ) : null}
        {title ? <CaseTitle headline={title} /> : null}
        {subline ? <CaseSectionHead subline={subline} /> : null}
        {renderHero()}
        <HeaderSpacing />
        {children}
      </Section>
    </ContentWrapper>
  );
};

export default CaseTemplate;
export { HeaderSpacing as CaseHeaderSpacing };
