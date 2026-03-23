import React from "react";

import trelloFlow from "../../../data/flows/trello_flow.json";
import FlowPageTemplate from "./FlowPageTemplate";

const TrelloFlow = () => (
  <FlowPageTemplate flowSlug="trello" screens={trelloFlow} />
);

export default TrelloFlow;
