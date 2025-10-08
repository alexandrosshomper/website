import React from "react";

import wrikeFlow from "../../../data/flows/wrike_flow.json";
import FlowPageTemplate from "./FlowPageTemplate";

const relatedResources = [
  {
    eyebrow: "Case Study",
    eyebrowColor2: "#FFEAED",
    eyebrowColor1: "#FD594A",
    headline:
      "Asana – How positioning for teams & enterprise impacts your segmentation, setup, and plan selection",
    copy: "",
    imgURL: "/img/case_studies/wrike/Cover@2x.png",
    link: "/case-studies/wrike",
  },
];

const AsanaFlow = () => (
  <FlowPageTemplate flowSlug="wrike" screens={wrikeFlow} />
);

export default AsanaFlow;
