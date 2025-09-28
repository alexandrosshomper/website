import React, { useCallback, useEffect, useMemo } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const buildFadeVariants = ({ duration, staggerChildren } = {}) => {
  const effectiveDuration = duration ?? 0.3;
  const effectiveStagger =
    staggerChildren !== undefined ? staggerChildren : 0.3;

  const visibleTransition = {};
  if (effectiveStagger !== undefined && effectiveStagger !== null) {
    visibleTransition.staggerChildren = effectiveStagger;
  }

  return {
    transition: { duration: effectiveDuration },
    variants: {
      visible: {
        opacity: 1,
        transition: visibleTransition,
      },
      hidden: {
        opacity: 0,
      },
    },
  };
};

const buildMoveUpVariants = ({ duration, staggerChildren, offset } = {}) => {
  const effectiveDuration = duration ?? 0.6;
  const effectiveStagger =
    staggerChildren !== undefined ? staggerChildren : 0.3;
  const effectiveOffset = offset ?? 0;

  const visibleTransition = {
    when: "beforeChildren",
  };
  if (effectiveStagger !== undefined && effectiveStagger !== null) {
    visibleTransition.staggerChildren = effectiveStagger;
  }

  return {
    transition: { duration: effectiveDuration },
    variants: {
      visible: {
        opacity: 1,
        y: 0,
        transition: visibleTransition,
      },
      hidden: {
        opacity: 0,
        y: effectiveOffset,
        transition: {
          when: "afterChildren",
        },
      },
    },
  };
};

const buildRevealVariants = ({ duration, staggerChildren } = {}) => {
  const effectiveDuration = duration ?? 0.9;
  const effectiveStagger =
    staggerChildren !== undefined ? staggerChildren : 0.3;

  const visibleTransition = {
    when: "beforeChildren",
  };
  if (effectiveStagger !== undefined && effectiveStagger !== null) {
    visibleTransition.staggerChildren = effectiveStagger;
  }

  return {
    transition: { duration: effectiveDuration },
    variants: {
      visible: {
        opacity: 1,
        transition: visibleTransition,
      },
      hidden: {
        opacity: 0,
        transition: {
          when: "afterChildren",
        },
      },
    },
  };
};

const VARIANT_BUILDERS = {
  fade: buildFadeVariants,
  moveUp: buildMoveUpVariants,
  reveal: buildRevealVariants,
};

const InViewMotion = React.forwardRef(
  (
    {
      children,
      variant = "fade",
      duration,
      staggerChildren,
      offset,
      transition: transitionOverride = {},
      visible: visibleOverride = {},
      hidden: hiddenOverride = {},
      triggerOnce = true,
      threshold,
      rootMargin,
      reset = false,
      onInView,
      onOutOfView,
      ...rest
    },
    forwardedRef
  ) => {
    const controls = useAnimation();
    const [inViewRef, inView] = useInView({
      triggerOnce,
      threshold,
      rootMargin,
    });

    const setRefs = useCallback(
      (node) => {
        inViewRef(node);
        if (typeof forwardedRef === "function") {
          forwardedRef(node);
        } else if (forwardedRef) {
          forwardedRef.current = node;
        }
      },
      [inViewRef, forwardedRef]
    );

    useEffect(() => {
      if (inView) {
        controls.start("visible");
        onInView?.();
      } else if (reset && !triggerOnce) {
        controls.start("hidden");
        onOutOfView?.();
      } else if (!inView) {
        onOutOfView?.();
      }
    }, [controls, inView, onInView, onOutOfView, reset, triggerOnce]);

    const config = useMemo(() => {
      const builder = VARIANT_BUILDERS[variant] || VARIANT_BUILDERS.fade;
      return builder({ duration, staggerChildren, offset });
    }, [variant, duration, staggerChildren, offset]);

    const transition = useMemo(
      () => ({
        ...config.transition,
        ...transitionOverride,
      }),
      [config, transitionOverride]
    );

    const variants = useMemo(() => {
      const visibleVariant = {
        ...config.variants.visible,
        ...visibleOverride,
      };
      const hiddenVariant = {
        ...config.variants.hidden,
        ...hiddenOverride,
      };

      return {
        visible: visibleVariant,
        hidden: hiddenVariant,
      };
    }, [config, visibleOverride, hiddenOverride]);

    return (
      <motion.div
        ref={setRefs}
        initial="hidden"
        animate={controls}
        transition={transition}
        variants={variants}
        {...rest}
      >
        {children}
      </motion.div>
    );
  }
);

InViewMotion.displayName = "InViewMotion";

export default InViewMotion;
export { VARIANT_BUILDERS as inViewMotionVariants };
