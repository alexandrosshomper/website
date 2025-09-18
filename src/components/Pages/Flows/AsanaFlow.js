import React from "react";

import asanaFlow from "../../../data/flows/asana.json";
import FlowPageTemplate from "./FlowPageTemplate";

const relatedResources = [
  {
    eyebrow: "Case Study",
    eyebrowColor2: "#FFEAED",
    eyebrowColor1: "#FD594A",
    headline:
      "Asana – How positioning for teams & enterprise impacts your segmentation, setup, and plan selection",
    copy: "",
    imgURL: "/img/case_studies/asana/Cover@2x.png",
    link: "/case-studies/asana",
  },
];

const AsanaFlow = () => (
  <FlowPageTemplate
    flowSlug="asana"
    screens={asanaFlow}
    relatedResources={relatedResources}
  />
);

export default AsanaFlow;
