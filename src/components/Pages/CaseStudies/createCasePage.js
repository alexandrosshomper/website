import React from "react";

import CaseTemplate from "./CaseTemplate";
import { ArticleContent } from "../../DesignSystem";
import FloatingTableOfContents from "../../Article/FloatingTableOfContents";

const createCasePage = ({
  metaTitle,
  metaDescription,
  eyebrow,
  eyebrowColor1,
  eyebrowColor2,
  title,
  subline,
  hero,
  renderContent,
}) => {
  const CasePage = () => (
    <CaseTemplate
      metaTitle={metaTitle}
      metaDescription={metaDescription}
      eyebrow={eyebrow}
      eyebrowColor1={eyebrowColor1}
      eyebrowColor2={eyebrowColor2}
      title={title}
      subline={subline}
      hero={hero}
    >
      <ArticleContent>
        {typeof renderContent === "function" ? renderContent() : null}
      </ArticleContent>
    </CaseTemplate>
  );

  if (title) {
    CasePage.displayName = `CasePage(${title})`;
  }

  return CasePage;
};

export default createCasePage;
