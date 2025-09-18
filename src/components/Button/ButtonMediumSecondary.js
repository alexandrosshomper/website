import React from "react";
import styled from "@emotion/styled";
import Icon from "@mdi/react";
import { Colors } from "../DesignSystem";
import { buttonBaseStyles } from "./buttonStyles";

const StyledMediumSecondaryButton = styled("a", {
  shouldForwardProp: (prop) => prop !== "color1" && prop !== "color2",
})`
  ${buttonBaseStyles};
  padding: 16px 32px;
  border-radius: 8px;
  font-size: 17px;
  line-height: 130%;
  letter-spacing: 0.02em;
  background-color: ${Colors.blueVeryLight};
  color: ${({ color1 }) => color1 || Colors.blueDark};

  &:hover {
    background-color: ${Colors.blueLight};
    color: ${({ color1, color2 }) => color2 || color1 || Colors.blueDark};
  }
`;

const ButtonMediumSecondary = ({
  href,
  text,
  color1,
  color2,
  icon,
  clickAction,
}) => (
  <StyledMediumSecondaryButton
    href={href}
    onClick={clickAction}
    color1={color1}
    color2={color2}
  >
    {text}
    {icon && <Icon path={icon} title={text} size="16px" />}
  </StyledMediumSecondaryButton>
);

export default ButtonMediumSecondary;
