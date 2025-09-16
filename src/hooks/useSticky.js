import { useCallback, useEffect, useMemo, useRef, useState } from "react";

const debounce = (func, wait = 20, immediate = true) => {
  let timeout;
  return (...args) => {
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      timeout = null;
      if (!immediate) {
        func(...args);
      }
    }, wait);

    if (callNow) {
      func(...args);
    }
  };
};

function useSticky() {
  const [isSticky, setSticky] = useState(false);
  const element = useRef(null);

  const handleScroll = useCallback(() => {
    if (!element.current) {
      setSticky(false);
      return;
    }

    const { bottom } = element.current.getBoundingClientRect();
    setSticky(window.scrollY > bottom);
  }, []);

  const debouncedHandleScroll = useMemo(
    () => debounce(handleScroll),
    [handleScroll]
  );

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", debouncedHandleScroll);
    return () => {
      window.removeEventListener("scroll", debouncedHandleScroll);
    };
  }, [debouncedHandleScroll, handleScroll]);

  return { isSticky, element };
}

export default useSticky;
