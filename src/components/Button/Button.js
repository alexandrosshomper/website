import React from "react";
import styled from "@emotion/styled";
import Icon from "@mdi/react";

import { Colors } from "../DesignSystem";

const sizeStyles = {
  medium: `
    padding: 16px 32px;
    border-radius: 8px;
    font-size: 17px;
    line-height: 130%;
    letter-spacing: 0.02em;
  `,
  small: `
    padding: 4px 10px;
    border-radius: 4px;
    font-size: 12px;
    line-height: 133%;
    letter-spacing: 0.01em;
  `,
};

const defaultPrimaryGradient = {
  from: Colors.orange,
  to: Colors.orangeLight,
};

const formatGradient = (gradient) =>
  gradient ? `linear-gradient(90deg, ${gradient.from}, ${gradient.to})` : "none";

const ensureGradient = (gradient, fallback) => {
  if (gradient && gradient.from && gradient.to) {
    return gradient;
  }

  return fallback;
};

const variantStyles = {
  primary: ({ gradient, textColor }) => {
    const resolvedGradient = ensureGradient(gradient, defaultPrimaryGradient);

    return `
      color: ${textColor || Colors.textWhite.highEmphasis};
      background-image: ${formatGradient(resolvedGradient)};
      background-color: transparent;

      &:hover {
        filter: brightness(0.95);
      }
    `;
  },
  secondary: ({ gradient, textColor }) => {
    const resolvedGradient = gradient && gradient.from && gradient.to ? gradient : null;

    return `
      color: ${textColor || Colors.blueDark};
      background-color: ${Colors.blueVeryLight};
      ${resolvedGradient ? `background-image: ${formatGradient(resolvedGradient)};` : "background-image: none;"}

      &:hover {
        background-color: ${Colors.blueLight};
        ${resolvedGradient ? "filter: brightness(0.97);" : ""}
      }
    `;
  },
  text: ({ textColor }) => `
      color: ${textColor || Colors.primaryText.highEmphasis};
      background-color: transparent;
      background-image: none;

      &:hover {
        background-color: ${Colors.greyLight};
      }
    `,
};

const shouldForwardProp = (prop) =>
  !["size", "variant", "gradient", "textColor"].includes(prop);

const StyledButton = styled("button", { shouldForwardProp })(
  ({ size = "medium", variant = "primary", gradient, textColor }) => `
    align-items: center;
    appearance: none;
    background-color: transparent;
    background-repeat: no-repeat;
    background-size: cover;
    border: none;
    color: inherit;
    cursor: pointer;
    display: inline-flex;
    filter: none;
    gap: 8px;
    justify-content: center;
    margin: 0;
    min-width: 51px;
    text-align: center;
    text-decoration: none;
    font-style: normal;
    font-weight: 500;
    font-family: inherit;
    transition: background-color 0.2s ease, filter 0.2s ease, color 0.2s ease;
    -webkit-font-smoothing: antialiased;

    ${sizeStyles[size] || sizeStyles.medium}
    ${(variantStyles[variant] || variantStyles.primary)({ gradient, textColor })}

    &:visited {
      text-decoration: none;
    }

    &:focus-visible {
      outline: 2px solid ${Colors.blue};
      outline-offset: 2px;
    }

    &:disabled,
    &[aria-disabled="true"] {
      cursor: not-allowed;
      opacity: 0.64;
    }

    &[aria-disabled="true"] {
      pointer-events: none;
    }

    svg {
      display: block;
    }
  `
);

const Button = ({
  children,
  href,
  gradient,
  icon,
  iconPosition = "right",
  size = "medium",
  variant = "primary",
  onClick,
  disabled = false,
  target,
  rel,
  type,
  color,
  ...rest
}) => {
  const Element = href ? "a" : "button";
  const relValue = href && target === "_blank" && !rel ? "noopener noreferrer" : rel;

  const iconNode = React.isValidElement(icon)
    ? icon
    : icon
    ? (
        <Icon
          path={icon}
          size={size === "small" ? "16px" : "18px"}
          color="currentColor"
        />
      )
    : null;

  return (
    <StyledButton
      as={Element}
      href={href}
      size={size}
      variant={variant}
      gradient={gradient}
      textColor={color}
      onClick={onClick}
      type={Element === "button" ? type || "button" : undefined}
      disabled={Element === "button" ? disabled : undefined}
      aria-disabled={Element !== "button" && disabled ? true : undefined}
      tabIndex={Element !== "button" && disabled ? -1 : undefined}
      target={href ? target : undefined}
      rel={href ? relValue : undefined}
      {...rest}
    >
      {iconNode && iconPosition === "left" ? iconNode : null}
      {children}
      {iconNode && iconPosition !== "left" ? iconNode : null}
    </StyledButton>
  );
};

export default Button;
