import React, { useEffect } from "react";
import { motion } from "framer-motion";

import useFadeInOnView from "../../../hooks/useFadeInOnView";

const FadeInSection = ({
  children,
  as,
  onViewChange,
  duration,
  delay,
  stagger,
  once,
  initial,
  animateTo,
  threshold,
  rootMargin,
  variants,
  transition,
  ...rest
}) => {
  const hookOptions = {
    duration,
    delay,
    stagger,
    once,
    initial,
    animateTo,
    threshold,
    rootMargin,
    variants,
    transition,
  };

  const { ref, animationProps, inView, entry } = useFadeInOnView(hookOptions);

  useEffect(() => {
    if (onViewChange) {
      onViewChange(inView, entry);
    }
  }, [inView, entry, onViewChange]);

  const MotionComponent = as || motion.div;

  return (
    <MotionComponent ref={ref} {...animationProps} {...rest}>
      {children}
    </MotionComponent>
  );
};

export default FadeInSection;
