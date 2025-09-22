import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Devices } from "../../DesignSystem";

const buildResponsiveStyles = (responsive) => {
  if (!responsive) {
    return null;
  }

  return Object.entries(responsive).map(([breakpoint, styles]) => {
    const mediaQuery = Devices[breakpoint];

    if (!mediaQuery || !styles) {
      return null;
    }

    return css`
      ${mediaQuery} {
        ${styles}
      }
    `;
  });
};

const spacingStyles = ({ gap = "24px", spacingStrategy = "gap", bleedRight }) => {
  if (spacingStrategy === "margins") {
    return css`
      --gap: ${gap};
      margin-left: calc(-1 * var(--gap));
      margin-bottom: calc(-1 * var(--gap));
      ${bleedRight ? "margin-right: calc(-1 * var(--gap));" : ""}

      & > * {
        margin-left: var(--gap);
        margin-bottom: var(--gap);
      }
    `;
  }

  return css`
    --gap: ${gap};
    gap: var(--gap);
  `;
};

const CardGrid = styled.section`
  box-sizing: border-box;
  display: flex;
  flex-direction: ${({ flexDirection = "column" }) => flexDirection};
  flex-wrap: ${({ flexWrap = "wrap" }) => flexWrap};
  justify-content: ${({ justifyContent = "center" }) => justifyContent};
  align-content: ${({ alignContent = "center" }) => alignContent};
  align-items: ${({ alignItems = "center" }) => alignItems};
  align-self: ${({ alignSelf = "auto" }) => alignSelf};
  margin: ${({ margin = "0px 24px" }) => margin};
  padding: ${({ padding = "0px" }) => padding};
  width: ${({ width = "auto" }) => width};
  max-width: ${({ maxWidth = "none" }) => maxWidth};

  ${(props) => spacingStyles(props)}

  ${({ responsive }) => buildResponsiveStyles(responsive)};
`;

export default CardGrid;
