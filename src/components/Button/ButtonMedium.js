import React from "react";
import styled from "@emotion/styled";
import Icon from "@mdi/react";
import { Colors } from "../DesignSystem";
import {
  buttonBaseStyles,
  getGradientBackground,
  getHoverColor,
} from "./buttonStyles";

const StyledMediumButton = styled("a", {
  shouldForwardProp: (prop) => prop !== "color1" && prop !== "color2",
})`
  ${buttonBaseStyles};
  padding: 16px 32px;
  border-radius: 8px;
  font-size: 17px;
  line-height: 130%;
  letter-spacing: 0.02em;
  color: ${Colors.textWhite.highEmphasis};
  background-image: ${({ color1, color2 }) =>
    getGradientBackground(color1, color2)};
  background-color: transparent;

  &:hover {
    background-image: none;
    background-color: ${({ color1, color2 }) =>
      getHoverColor(color1, color2)};
  }
`;

const ButtonMedium = ({ href, text, color1, color2, icon, clickAction }) => (
  <StyledMediumButton
    href={href}
    onClick={clickAction}
    color1={color1}
    color2={color2}
  >
    {text}
    {icon && <Icon path={icon} title={text} size="16px" />}
  </StyledMediumButton>
);

export default ButtonMedium;
