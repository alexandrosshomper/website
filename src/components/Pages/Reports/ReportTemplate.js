import styled from "@emotion/styled";
import React from "react";
import { Helmet } from "react-helmet";

import { Colors, Devices } from "../../DesignSystem";

import CaseSubline from "../../Content/Case/CaseSubline";
import CaseTitle from "../../Content/Case/CaseTitle";
import CaseTitleEyebrow from "../../Content/Case/CaseTitleEyebrow";

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

const Paragraph = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  align-self: stretch;
  flex-grow: 0;
  margin-bottom: 140px;
`;

const CaseUnorderedList = styled.ul`
  position: static;

  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 400;
  color: ${Colors.primaryText.highEmphasis};

  list-style-type: circle;
  list-style-image: none;

  list-style-position: outside;
  padding-left: 0px;

  font-size: 24px;
  line-height: 130%;

  margin: 8px auto;
  width: 90%;

  ${Devices.tabletS} {
    width: 564px;
  }
  ${Devices.tabletM} {
    width: 708px;
  }
  ${Devices.laptopS} {
    width: 740px;
  }
`;

const CaseUnorderedListItem = styled.li`
  margin-bottom: 12px;
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

const ReportTemplate = ({
  metaTitle,
  metaDescription,
  eyebrow = "Report",
  eyebrowColor1 = "#00b8d4",
  eyebrowColor2 = "#62ebff",
  title,
  subline,
  children,
}) => {
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
        <CaseTitleEyebrow
          text={eyebrow}
          color1={eyebrowColor1}
          color2={eyebrowColor2}
        />
        <CaseTitle headline={title} />
        {subline ? <CaseSubline subline={subline} /> : null}
        <HeaderSpacing />
        {children}
      </Section>
    </ContentWrapper>
  );
};

export default ReportTemplate;
export { Paragraph as ReportParagraph };
export { CaseUnorderedList as ReportUnorderedList };
export { CaseUnorderedListItem as ReportListItem };
export { HeaderSpacing as ReportHeaderSpacing };
