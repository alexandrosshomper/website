import { useEffect, useState, useRef } from "react";

function useSticky() {
  const [isSticky, setSticky] = useState(false);
  const element = useRef(null);

  const handleScroll = () => {
    window.scrollY > element.current.getBoundingClientRect().bottom
      ? setSticky(true)
      : setSticky(false);
  };

  const debounce = (func, wait = 20, immediate = true) => {
    let timeout;
    return () => {
      let context = this;
      let args = arguments;
      const later = () => {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

  useEffect(() => {
    window.addEventListener("scroll", debounce(handleScroll));
    return () => {
      window.removeEventListener("scroll", () => handleScroll);
    };
  }, [debounce, handleScroll]);

  return { isSticky, element };
}

export default useSticky;
