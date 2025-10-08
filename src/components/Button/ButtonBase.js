import React, { forwardRef } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import Icon from "@mdi/react";
import { Colors } from "../DesignSystem";

const sizeStyles = {
  medium: css`
    padding: 16px 32px;
    font-size: 17px;
    line-height: 130%;
    letter-spacing: 0.02em;
    border-radius: 8px;
  `,
  small: css`
    padding: 4px 10px;
    font-size: 12px;
    line-height: 133%;
    letter-spacing: 0.01em;
    border-radius: 4px;
  `,
};

const primaryStyles = (color1, color2) => {
  const start = color1 || Colors.orange;
  const end = color2 || Colors.orangeLight;

  return css`
    color: ${Colors.textWhite.highEmphasis};
    background-image: linear-gradient(to right, ${start}, ${end});
    background-color: ${start};

    &:hover {
      background-image: none;
      background-color: ${end};
      color: ${Colors.textWhite.highEmphasis};
    }

    &:visited {
      color: ${Colors.textWhite.highEmphasis};
    }
  `;
};

const secondaryStyles = (color1, color2) => {
  const base = color1 || Colors.blue;
  const hover = color2 || Colors.blueDark;

  return css`
    background-color: ${Colors.blueVeryLight};
    color: ${base};

    &:hover {
      background-color: ${Colors.blueLight};
      color: ${hover};
    }

    &:visited {
      color: ${base};
    }
  `;
};

const textStyles = (color1, color2) => {
  const base = color1 || Colors.primaryText.highEmphasis;
  const hover = color2 || base;

  return css`
    background-color: transparent;
    color: ${base};

    &:hover {
      background-color: ${Colors.greyLight};
      color: ${hover};
    }

    &:visited {
      color: ${base};
    }
  `;
};

const StyledButton = styled.a`
  align-items: center;
  appearance: none;
  background: transparent;
  border: none;
  box-sizing: border-box;
  cursor: pointer;
  display: inline-flex;
  font-family: inherit;
  font-style: normal;
  font-weight: 500;
  gap: 8px;
  justify-content: center;
  line-height: 1;
  margin: 0;
  min-width: 51px;
  overflow: visible;
  text-align: center;
  text-decoration: none;
  transition: background-color 200ms ease, color 200ms ease, opacity 200ms ease;
  -webkit-font-smoothing: antialiased;

  ${({ size }) => sizeStyles[size] || sizeStyles.medium};

  ${({ variant, color1, color2 }) => {
    if (variant === "secondary") {
      return secondaryStyles(color1, color2);
    }

    if (variant === "text") {
      return textStyles(color1, color2);
    }

    return primaryStyles(color1, color2);
  }}

  ${({ disabled }) =>
    disabled &&
    css`
      cursor: not-allowed;
      opacity: 0.6;
      pointer-events: none;
    `};

  &:hover {
    text-decoration: none;
  }

  &:visited {
    text-decoration: none;
  }

  &:focus {
    outline: none;
  }

  &:focus-visible {
    outline: 2px solid ${Colors.blue};
    outline-offset: 2px;
  }

  svg {
    flex-shrink: 0;
  }
`;

const ButtonBase = forwardRef(
  (
    {
      as,
      href,
      text,
      children,
      icon,
      iconSize,
      size = "medium",
      variant = "primary",
      color1,
      color2,
      clickAction,
      onClick,
      disabled = false,
      type,
      ...rest
    },
    ref
  ) => {
    const elementType = as || (href ? "a" : "button");
    const content = text ?? children;
    const clickHandler = onClick || clickAction;

    let iconElement = null;
    if (icon) {
      if (typeof icon === "string") {
        iconElement = (
          <Icon
            path={icon}
            title={typeof content === "string" ? content : undefined}
            size={iconSize || (size === "small" ? "16px" : "16px")}
          />
        );
      } else {
        iconElement = icon;
      }
    }

    const componentProps = {
      ref,
      as: elementType,
      size,
      variant,
      color1,
      color2,
      onClick: clickHandler,
      disabled,
      ...rest,
    };

    if (elementType === "a") {
      componentProps.href = href;
      if (disabled) {
        componentProps["aria-disabled"] = true;
        componentProps.tabIndex = -1;
      }
    } else {
      componentProps.type = type || "button";
    }

    return (
      <StyledButton {...componentProps}>
        {content}
        {iconElement}
      </StyledButton>
    );
  }
);

ButtonBase.displayName = "ButtonBase";

export default ButtonBase;
