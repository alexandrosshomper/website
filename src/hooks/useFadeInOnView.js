import { useEffect, useMemo } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

/**
 * Shared hook to orchestrate fade-in animations once an element enters the viewport.
 *
 * @param {Object} options
 * @param {number} [options.duration=0.3] - Duration of the root transition.
 * @param {number} [options.delay=0] - Delay before the root transition starts.
 * @param {number} [options.stagger] - Value used for variants.visible.transition.staggerChildren.
 * @param {boolean} [options.once=true] - Whether the animation should only run the first time the element enters the viewport.
 * @param {string} [options.initial="hidden"] - Initial variant key to use for the motion component.
 * @param {string} [options.animateTo="visible"] - Variant key to start when the element enters the viewport.
 * @param {number|number[]} [options.threshold] - Threshold forwarded to the intersection observer.
 * @param {string} [options.rootMargin] - Root margin forwarded to the intersection observer.
 * @param {Object} [options.variants] - Variants merged with the default fade behaviour.
 * @param {Object} [options.transition] - Additional transition values merged with the root transition.
 */
const useFadeInOnView = ({
  duration = 0.3,
  delay = 0,
  stagger,
  once = true,
  initial = "hidden",
  animateTo = "visible",
  threshold,
  rootMargin,
  variants,
  transition,
} = {}) => {
  const controls = useAnimation();
  const [ref, inView, entry] = useInView({
    triggerOnce: once,
    threshold,
    rootMargin,
  });

  useEffect(() => {
    if (inView) {
      controls.start(animateTo);
    } else if (!once) {
      controls.start(initial);
    }
  }, [controls, inView, animateTo, initial, once]);

  const resolvedTransition = useMemo(() => {
    const baseTransition = { duration, delay };
    if (transition) {
      return { ...baseTransition, ...transition };
    }
    return baseTransition;
  }, [duration, delay, transition]);

  const resolvedVariants = useMemo(() => {
    const { visible = {}, hidden = {}, ...otherVariants } = variants || {};
    const { transition: visibleTransition = {}, ...visibleRest } = visible;
    const { transition: hiddenTransition, ...hiddenRest } = hidden;

    const visibleTransitionWithStagger = {
      ...visibleTransition,
      ...(stagger != null ? { staggerChildren: stagger } : {}),
    };

    const hiddenVariant = {
      opacity: 0,
      ...hiddenRest,
      ...(hiddenTransition ? { transition: hiddenTransition } : {}),
    };

    const visibleVariant = {
      opacity: 1,
      ...visibleRest,
      ...(Object.keys(visibleTransitionWithStagger).length
        ? { transition: visibleTransitionWithStagger }
        : {}),
    };

    return {
      hidden: hiddenVariant,
      visible: visibleVariant,
      ...otherVariants,
    };
  }, [variants, stagger]);

  return {
    ref,
    controls,
    inView,
    entry,
    animationProps: {
      animate: controls,
      initial,
      variants: resolvedVariants,
      transition: resolvedTransition,
    },
  };
};

export default useFadeInOnView;
