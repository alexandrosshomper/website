import React from "react";
import { OverviewPages } from "../../DesignSystem";

const CaseSectionSummary = ({ copy }) => {
  return (
    <OverviewPages.Summary>
      {copy ? <OverviewPages.Copy>{copy}</OverviewPages.Copy> : null}
    </OverviewPages.Summary>
  );
};

export default CaseSectionSummary;
