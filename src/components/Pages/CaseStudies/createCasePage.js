import React from "react";

import CaseTemplate from "./CaseTemplate";
import CaseContent from "../../Content/Case/CaseContent";

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
      <CaseContent>
        {typeof renderContent === "function" ? renderContent() : null}
      </CaseContent>
    </CaseTemplate>
  );

  if (title) {
    CasePage.displayName = `CasePage(${title})`;
  }

  return CasePage;
};

export default createCasePage;
