import { css } from "@emotion/react";
import { Colors } from "../DesignSystem";

const DEFAULT_GRADIENT_START = Colors.orange;
const DEFAULT_GRADIENT_END = Colors.orangeLight;

export const buttonBaseStyles = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin: 0;
  min-width: 51px;
  border: none;
  cursor: pointer;
  font-style: normal;
  font-weight: 500;
  text-align: center;
  text-decoration: none;
  transition: background-color 0.2s ease, background-image 0.2s ease,
    color 0.2s ease;

  &:hover {
    text-decoration: none;
  }

  &:visited {
    color: inherit;
    text-decoration: none;
  }
`;

export const getGradientBackground = (color1, color2) => {
  if (color1 && color2) {
    return `linear-gradient(to right, ${color1}, ${color2})`;
  }

  return `linear-gradient(to right, ${DEFAULT_GRADIENT_START}, ${DEFAULT_GRADIENT_END})`;
};

export const getHoverColor = (color1, color2) =>
  color2 || color1 || Colors.orangeDark;
