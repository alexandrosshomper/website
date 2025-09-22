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

const Panels = styled.section`
  display: flex;
  flex-direction: ${({ flexDirection = "column" }) => flexDirection};
  flex-wrap: ${({ flexWrap = "wrap" }) => flexWrap};
  justify-content: ${({ justifyContent = "flex-start" }) => justifyContent};
  align-content: ${({ alignContent = "center" }) => alignContent};
  align-items: ${({ alignItems = "flex-start" }) => alignItems};
  gap: ${({ gap = "12px" }) => gap};
  margin: ${({ margin = "0px" }) => margin};
  width: ${({ width = "auto" }) => width};
  box-sizing: border-box;

  ${({ responsive }) => buildResponsiveStyles(responsive)};
`;

export default Panels;
