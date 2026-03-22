import React from "react";

import wrikeFlow from "../../../data/flows/wrike_flow.json";
import FlowPageTemplate from "./FlowPageTemplate";

const WrikeFlow = () => (
  <FlowPageTemplate flowSlug="wrike" screens={wrikeFlow} />
);

export default WrikeFlow;
