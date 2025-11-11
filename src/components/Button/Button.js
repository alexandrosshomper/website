import React from "react";
import styled from "@emotion/styled";
import Icon from "@mdi/react";
import { Colors } from "../DesignSystem";

const DEFAULT_PRIMARY_GRADIENT = [Colors.orange, Colors.orangeLight];
const DEFAULT_SECONDARY_GRADIENT = [Colors.blue, Colors.blueDark];

const sizeStyles = {
  medium: `
    padding: 16px 32px;
    font-size: 17px;
    line-height: 130%;
    letter-spacing: 0.02em;
    border-radius: 8px;
  `,
  small: `
    padding: 4px 10px;
    font-size: 12px;
    line-height: 133%;
    letter-spacing: 0.01em;
    border-radius: 4px;
  `,
};

const resolveGradientStops = (gradient, fallback) => {
  if (!gradient) {
    return fallback;
  }

  if (Array.isArray(gradient)) {
    if (gradient.length === 1) {
      return [gradient[0], gradient[0]];
    }

    if (gradient.length >= 2) {
      return [gradient[0], gradient[1]];
    }
  }

  if (typeof gradient === "object") {
    const from = gradient.from ?? gradient.start ?? gradient.color1;
    const to = gradient.to ?? gradient.end ?? gradient.color2;

    if (from && to) {
      return [from, to];
    }

    if (from) {
      return [from, from];
    }
  }

  if (typeof gradient === "string") {
    return [gradient, gradient];
  }

  return fallback;
};

const variantStyles = {
  primary: ({ gradientStops }) => {
    const [from, to] = gradientStops ?? DEFAULT_PRIMARY_GRADIENT;

    return `
      background-image: linear-gradient(to right, ${from}, ${to});
      color: ${Colors.textWhite.highEmphasis};

      &:hover {
        filter: brightness(0.95);
      }
    `;
  },
  secondary: ({ gradientStops, textColor }) => {
    if (gradientStops) {
      const [from, to] = gradientStops;
      return `
        background-image: linear-gradient(to right, ${from}, ${to});
        color: ${Colors.textWhite.highEmphasis};

        &:hover {
          filter: brightness(0.95);
        }
      `;
    }

    return `
      background-color: ${Colors.blueVeryLight};
      color: ${textColor || Colors.blueDark};

      &:hover {
        background-color: ${Colors.blueLight};
      }
    `;
  },
  text: ({ textColor }) => `
    background-color: transparent;
    color: ${textColor || Colors.blueDark};

    &:hover {
      background-color: ${Colors.greyLight};
    }
  `,
};

const StyledButton = styled.button(
  ({ $size, $variant, $gradient, $textColor }) => {
    const sizeStyle = sizeStyles[$size] || sizeStyles.medium;
    const variantResolver = variantStyles[$variant] || variantStyles.primary;

    let gradientStops;
    if ($variant === "primary") {
      gradientStops = resolveGradientStops($gradient, DEFAULT_PRIMARY_GRADIENT);
    } else if ($variant === "secondary") {
      gradientStops = $gradient
        ? resolveGradientStops($gradient, DEFAULT_SECONDARY_GRADIENT)
        : null;
    }

    return `
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      min-width: 51px;
      padding: 0;
      border: none;
      text-decoration: none;
      text-align: center;
      font-family: inherit;
      font-style: normal;
      font-weight: 500;
      cursor: pointer;
      transition: background-color 0.2s ease, filter 0.2s ease, color 0.2s ease;
      ${sizeStyle}
      ${variantResolver({ gradientStops, textColor: $textColor })}

      &:focus-visible {
        outline: 2px solid ${Colors.blueDark};
        outline-offset: 2px;
      }

      &:visited {
        text-decoration: none;
      }

      &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
        pointer-events: none;
      }
    `;
  }
);

const Button = ({
  children,
  text,
  size = "medium",
  variant = "primary",
  gradient,
  icon,
  color,
  ...rest
}) => {
  const content = children ?? text;
  const iconSize = size === "small" ? "14px" : "16px";
  const showIcon = Boolean(icon);
  let iconElement = null;

  if (showIcon) {
    iconElement =
      typeof icon === "string" ? (
        <Icon
          path={icon}
          title={typeof content === "string" ? content : undefined}
          size={iconSize}
        />
      ) : (
        icon
      );
  }

  return (
    <StyledButton
      $size={size}
      $variant={variant}
      $gradient={gradient}
      $textColor={color}
      {...rest}
    >
      {content}
      {iconElement}
    </StyledButton>
  );
};

export default Button;
