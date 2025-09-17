import React from "react";
import styled from "@emotion/styled";
import { Colors } from "../DesignSystem";
import { buttonBaseStyles } from "./buttonStyles";

const StyledMediumTextButton = styled("a", {
  shouldForwardProp: (prop) => prop !== "color1" && prop !== "color2",
})`
  ${buttonBaseStyles};
  padding: 16px 32px;
  border-radius: 8px;
  font-size: 17px;
  line-height: 130%;
  letter-spacing: 0.02em;
  background-color: transparent;
  color: ${({ color1 }) => color1 || Colors.blue};

  &:hover {
    background-color: ${Colors.greyLight};
    color: ${({ color1, color2 }) =>
      color2 || color1 || Colors.primaryText.highEmphasis};
  }
`;

const ButtonMediumText = ({
  href,
  color1,
  color2,
  text,
  icon,
  clickAction,
}) => (
  <StyledMediumTextButton
    href={href}
    onClick={clickAction}
    color1={color1}
    color2={color2}
  >
    {text}
    {icon && icon}
  </StyledMediumTextButton>
);

export default ButtonMediumText;
