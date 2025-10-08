import React, { forwardRef } from "react";
import ButtonBase from "./ButtonBase";

const createButtonVariant = (size, variant, displayName) => {
  const Variant = forwardRef((props, ref) => (
    <ButtonBase ref={ref} size={size} variant={variant} {...props} />
  ));

  Variant.displayName = displayName;

  return Variant;
};

export const ButtonMedium = createButtonVariant("medium", "primary", "ButtonMedium");
export const ButtonSmall = createButtonVariant("small", "primary", "ButtonSmall");
export const ButtonMediumSecondary = createButtonVariant(
  "medium",
  "secondary",
  "ButtonMediumSecondary"
);
export const ButtonSmallSecondary = createButtonVariant(
  "small",
  "secondary",
  "ButtonSmallSecondary"
);
export const ButtonMediumText = forwardRef((props, ref) => (
  <ButtonBase ref={ref} size="medium" variant="text" {...props} />
));
ButtonMediumText.displayName = "ButtonMediumText";

export { ButtonBase };
export default ButtonBase;
