import React from "react";

import wrikeFlow from "../../../data/flows/wrike_flow.json";
import FlowPageTemplate from "./FlowPageTemplate";

const AsanaFlow = () => (
  <FlowPageTemplate flowSlug="wrike" screens={wrikeFlow} />
);

export default AsanaFlow;
