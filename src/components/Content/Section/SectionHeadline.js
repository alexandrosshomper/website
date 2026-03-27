import React from "react";
import { OverviewPages } from "../../DesignSystem";

const SectionHeadline = ({ headline, style }) => {
  return <OverviewPages.Headline style={style}>{headline}</OverviewPages.Headline>;
};

export default SectionHeadline;
