import React from "react";

import trelloFlow from "../../../data/flows/trello_flow.json";
import FlowPageTemplate from "./FlowPageTemplate";

const relatedResources = [
  {
    eyebrow: "Case Study",
    eyebrowColor2: "#FFEAED",
    eyebrowColor1: "#FD594A",
    headline:
      "Asana – How positioning for teams & enterprise impacts your segmentation, setup, and plan selection",
    copy: "",
    imgURL: "/img/case_studies/trello/Cover@2x.png",
    link: "/case-studies/trello",
  },
];

const AsanaFlow = () => (
  <FlowPageTemplate flowSlug="trello" screens={trelloFlow} />
);

export default AsanaFlow;
