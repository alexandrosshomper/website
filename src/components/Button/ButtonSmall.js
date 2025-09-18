import React from "react";
import styled from "@emotion/styled";
import Icon from "@mdi/react";
import { Colors } from "../DesignSystem";
import {
  buttonBaseStyles,
  getGradientBackground,
  getHoverColor,
} from "./buttonStyles";

const StyledSmallButton = styled("a", {
  shouldForwardProp: (prop) => prop !== "color1" && prop !== "color2",
})`
  ${buttonBaseStyles};
  padding: 4px 10px;
  border-radius: 4px;
  font-size: 12px;
  line-height: 133%;
  letter-spacing: 0.01em;
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

const ButtonSmall = ({ href, text, color1, color2, icon, clickAction }) => (
  <StyledSmallButton
    href={href}
    onClick={clickAction}
    color1={color1}
    color2={color2}
  >
    {text}
    {icon && <Icon path={icon} title={text} size="16px" />}
  </StyledSmallButton>
);

export default ButtonSmall;
