import { useCallback, useEffect, useRef, useState } from "react";

function useSticky() {
  const [isSticky, setSticky] = useState(false);
  const element = useRef(null);

  const handleScroll = useCallback(() => {
    if (!element.current) {
      setSticky(false);
      return;
    }

    const { bottom } = element.current.getBoundingClientRect();
    setSticky(bottom <= 0);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return { isSticky, element };
}

export default useSticky;
