import React from "react";

import flowData from "../../../data/flows/linear_flow.json";
import FlowPageTemplate from "./FlowPageTemplate";

const LinearFlow = () => (
  <FlowPageTemplate flowSlug="linear" screens={flowData} />
);

export default LinearFlow;
