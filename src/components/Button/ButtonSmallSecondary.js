import React from "react";
import styled from "@emotion/styled";
import Icon from "@mdi/react";
import { Colors } from "../DesignSystem";
import { buttonBaseStyles } from "./buttonStyles";

const StyledSmallSecondaryButton = styled("a", {
  shouldForwardProp: (prop) => prop !== "color1" && prop !== "color2",
})`
  ${buttonBaseStyles};
  padding: 4px 10px;
  border-radius: 4px;
  font-size: 12px;
  line-height: 133%;
  letter-spacing: 0.01em;
  background-color: ${Colors.blueVeryLight};
  color: ${({ color1 }) => color1 || Colors.blueDark};

  &:hover {
    background-color: ${Colors.blueLight};
    color: ${({ color1, color2 }) => color2 || color1 || Colors.blueDark};
  }
`;

const ButtonSmallSecondary = ({
  href,
  text,
  color1,
  color2,
  icon,
  clickAction,
}) => (
  <StyledSmallSecondaryButton
    href={href}
    onClick={clickAction}
    color1={color1}
    color2={color2}
  >
    {text}
    {icon && <Icon path={icon} title={text} size="16px" />}
  </StyledSmallSecondaryButton>
);

export default ButtonSmallSecondary;
