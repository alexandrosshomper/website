import flows from "./flows.json";
import asanaScreens from "./asana.json";
import linearScreens from "./linear_flow.json";
import trelloScreens from "./trello_flow.json";
import wrikeScreens from "./wrike_flow.json";

const normalizeSlug = (slug = "") =>
  slug
    .replace(/^\//, "")
    .replace(/^flows\//, "")
    .replace(/^\//, "");

const buildPathFromSlug = (slug = "") => {
  const cleanedSlug = slug.trim();
  if (!cleanedSlug) {
    return "";
  }

  if (cleanedSlug.startsWith("/")) {
    return cleanedSlug;
  }

  if (cleanedSlug.startsWith("flows/")) {
    return `/${cleanedSlug}`;
  }

  return `/flows/${cleanedSlug}`;
};

const flowsWithComputedFields = flows.map((flow) => {
  const normalizedSlug = normalizeSlug(flow.slug);
  const path = buildPathFromSlug(flow.slug || normalizedSlug);

  return {
    ...flow,
    slug: normalizedSlug,
    path,
  };
});

const flowsBySlug = flowsWithComputedFields.reduce((acc, flow) => {
  acc[flow.slug] = flow;
  return acc;
}, {});

const flowScreensBySlug = {
  asana: asanaScreens,
  linear: linearScreens,
  trello: trelloScreens,
  wrike: wrikeScreens,
};

export const getAllFlows = () => flowsWithComputedFields;

export const getFlowMeta = (slug) => {
  if (!slug) {
    return undefined;
  }

  return flowsBySlug[normalizeSlug(slug)];
};

export const getFlowScreens = (slug) => {
  if (!slug) {
    return [];
  }

  const normalizedSlug = normalizeSlug(slug);

  return flowScreensBySlug[normalizedSlug] || [];
};

export default flowsWithComputedFields;
