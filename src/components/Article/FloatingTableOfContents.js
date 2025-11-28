import React, { useCallback, useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";

import { Colors } from "../DesignSystem";
import { FLOATING_TOC_GUARD_EVENT } from "../../utils/floatingToc";

const HEADING_SELECTOR = "h2";
const FLOATING_GUARD_SELECTOR = "[data-floating-toc-guard]";
const TOC_WIDTH = 160;
const TOC_HORIZONTAL_GAP = 32;
const VIEWPORT_EDGE_GUTTER = 16;
const TOC_TOP_OFFSET = 112;
const TOC_SCROLL_OFFSET = 120;
const MIN_HEADINGS_TO_RENDER = 2;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

const ArticleSlot = styled.div`
  width: 100%;
`;

const FloatingNav = styled.nav`
  position: fixed;
  top: ${TOC_TOP_OFFSET}px;
  right: ${VIEWPORT_EDGE_GUTTER}px;
  width: ${TOC_WIDTH}px;
  padding: 12px 8px;
  border-radius: 8px;
  backdrop-filter: ${(props) => (props.$expanded ? "blur(8px)" : "none")};
  background-color: ${(props) =>
    props.$expanded ? "rgba(255, 255, 255, 0.8)" : "transparent"};
  border: 1px solid
    ${(props) => (props.$expanded ? "rgba(8, 8, 8, 0.04)" : "transparent")};
  box-shadow: ${(props) =>
    props.$expanded ? "0 4px 4px rgba(8, 8, 8, 0.04)" : "none"};
  z-index: 20;
  display: flex;
  flex-direction: column;
  max-height: calc(100vh - ${TOC_TOP_OFFSET + 48}px);
  transition: opacity 0.2s ease, transform 0.2s ease, background-color 0.2s ease,
    border-color 0.2s ease, box-shadow 0.2s ease, backdrop-filter 0.2s ease;
  opacity: ${(props) => (props["data-hidden"] ? 0 : 1)};
  pointer-events: ${(props) => (props["data-hidden"] ? "none" : "auto")};
  transform: ${(props) =>
    props["data-hidden"] ? "translate3d(0, 8px, 0)" : "translate3d(0, 0, 0)"};
`;

const FloatingNavList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  overflow-y: auto;
  max-height: calc(100vh - ${TOC_TOP_OFFSET + 98}px);
  display: flex;
  flex-direction: column;
`;

const FloatingNavItem = styled.li`
  margin: 0;
  padding: 0;
`;

const TocButton = styled.button`
  border: none;
  background: none;
  padding: ${(props) => (props.$expanded ? "6px 0" : "0")}
  width: 100%;
  text-align: left;
  font-size: ${(props) => (props.$expanded ? "12px" : "0")};
  line-height: ${(props) => (props.$expanded ? "1" : "0")};
  font-weight: ${(props) => (props.$active ? 600 : 500)};
  color: ${(props) =>
    props.$expanded
      ? props.$active
        ? Colors.primaryText.highEmphasis
        : Colors.primaryText.mediumEmphasis
      : "transparent"};
  cursor: ${(props) => (props.$expanded ? "pointer" : "default")};
  padding-left: ${(props) =>
    props.$expanded ? `${props.$indent || 0}px` : "0"};
  transition: color 0.2s ease, padding 0.2s ease;
  pointer-events: ${(props) => (props.$expanded ? "auto" : "none")};
  position: relative;

  &::before {
    content: "";
    display: block;
    width: 16px;
    height: 2px;
    border-radius: 1px;
    margin: ${(props) => (props.$expanded ? "0" : "0px auto")};
    background-color: ${(props) =>
      props.$active
        ? Colors.primaryText.highEmphasis
        : Colors.primaryText.lowEmphasis};
    opacity: ${(props) => (props.$expanded ? 0 : 1)};
    transition: opacity 0.2s ease;
  }

  &:hover,
  &:focus {
    color: ${(props) =>
      props.$expanded ? Colors.primaryText.highEmphasis : "transparent"};
    outline: none;
  }
`;

const slugifyHeading = (text) =>
  text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");

const FloatingTableOfContents = ({ children }) => {
  const articleRef = useRef(null);
  const tocRef = useRef(null);
  const [headings, setHeadings] = useState([]);
  const [activeHeadingId, setActiveHeadingId] = useState(null);
  const [layout, setLayout] = useState({ canShow: false });
  const [isOverlapping, setIsOverlapping] = useState(false);
  const [isArticleInViewport, setIsArticleInViewport] = useState(false);
  const [isHeaderOutOfViewport, setIsHeaderOutOfViewport] = useState(false);

  const collectHeadings = useCallback(() => {
    const container = articleRef.current;

    if (!container) {
      setHeadings([]);
      return;
    }

    const nodes = Array.from(container.querySelectorAll(HEADING_SELECTOR));
    const slugCount = {};

    const nextHeadings = nodes
      .map((node, index) => {
        const text = node.textContent ? node.textContent.trim() : "";

        if (!text) {
          return null;
        }

        const level = Number(node.tagName.replace(/[^0-9]/g, "")) || 2;
        let slug = node.id || slugifyHeading(text);

        if (!slug) {
          slug = `section-${index + 1}`;
        }

        const count = slugCount[slug] || 0;
        slugCount[slug] = count + 1;
        const id = count ? `${slug}-${count}` : slug;

        if (node.id !== id) {
          node.id = id;
        }

        return {
          id,
          text,
          level,
        };
      })
      .filter(Boolean);

    setHeadings(nextHeadings);
  }, []);

  const updateLayout = useCallback(() => {
    if (typeof window === "undefined") {
      return;
    }

    const container = articleRef.current;

    if (!container) {
      setLayout((current) => (current.canShow ? { canShow: false } : current));
      return;
    }

    const baseSection =
      container.querySelector(
        '[data-article-section][data-article-width="default"]'
      ) || container.querySelector("[data-article-section]");

    if (!baseSection) {
      setLayout((current) => (current.canShow ? { canShow: false } : current));
      return;
    }

    const rect = baseSection.getBoundingClientRect();
    const viewportWidth =
      window.innerWidth || document.documentElement?.clientWidth || 0;
    const spaceRight = viewportWidth - rect.right;
    const canShow =
      spaceRight >= TOC_WIDTH + TOC_HORIZONTAL_GAP + VIEWPORT_EDGE_GUTTER;
    setLayout((current) =>
      current.canShow === canShow ? current : { canShow }
    );
  }, []);

  const checkOverlap = useCallback(() => {
    const container = articleRef.current;
    const nav = tocRef.current;

    const updateState = (nextValue) => {
      setIsOverlapping((current) =>
        current === nextValue ? current : nextValue
      );
    };

    if (!container || !nav || !layout.canShow) {
      updateState(false);
      return;
    }

    const tocRect = nav.getBoundingClientRect();
    const guards = Array.from(
      container.querySelectorAll(FLOATING_GUARD_SELECTOR)
    );

    if (!guards.length) {
      updateState(false);
      return;
    }

    const overlaps = guards.some((element) => {
      const rect = element.getBoundingClientRect();
      const verticalOverlap =
        rect.top < tocRect.bottom && rect.bottom > tocRect.top;
      const horizontalOverlap =
        rect.left < tocRect.right && rect.right > tocRect.left;

      return verticalOverlap && horizontalOverlap;
    });

    updateState(overlaps);
  }, [layout.canShow]);

  useEffect(() => {
    collectHeadings();
    updateLayout();
  }, [collectHeadings, updateLayout]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return undefined;
    }

    const element = articleRef.current;

    if (!element) {
      return undefined;
    }

    if (typeof IntersectionObserver === "undefined") {
      setIsArticleInViewport(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsArticleInViewport(Boolean(entry?.isIntersecting));
      },
      {
        threshold: [0],
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") {
      return undefined;
    }

    const element = articleRef.current;

    if (!element) {
      return undefined;
    }

    const container =
      typeof element.closest === "function"
        ? element.closest("[data-article-container]")
        : null;

    const header =
      (container && container.querySelector("[data-article-header]")) ||
      document.querySelector("[data-article-header]");

    if (!header) {
      setIsHeaderOutOfViewport(true);
      return undefined;
    }

    if (typeof IntersectionObserver === "undefined") {
      setIsHeaderOutOfViewport(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHeaderOutOfViewport(!entry?.isIntersecting);
      },
      {
        threshold: [0],
      }
    );

    observer.observe(header);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const container = articleRef.current;

    if (!container) {
      return undefined;
    }

    if (typeof MutationObserver === "undefined") {
      return undefined;
    }

    const observer = new MutationObserver(() => {
      collectHeadings();
      updateLayout();
      checkOverlap();
    });

    observer.observe(container, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, [collectHeadings, updateLayout, checkOverlap]);

  useEffect(() => {
    if (!layout.canShow) {
      setIsOverlapping(false);
      return undefined;
    }

    const handleResize = () => {
      updateLayout();
      checkOverlap();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [layout.canShow, updateLayout, checkOverlap]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return undefined;
    }

    const handleGuardChange = () => {
      checkOverlap();
    };

    window.addEventListener(FLOATING_TOC_GUARD_EVENT, handleGuardChange);

    return () => {
      window.removeEventListener(
        FLOATING_TOC_GUARD_EVENT,
        handleGuardChange
      );
    };
  }, [checkOverlap]);

  useEffect(() => {
    if (!layout.canShow) {
      return undefined;
    }

    let animationFrame = null;

    const handleScroll = () => {
      if (animationFrame) {
        return;
      }

      animationFrame = window.requestAnimationFrame(() => {
        animationFrame = null;
        checkOverlap();
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);

      if (animationFrame) {
        window.cancelAnimationFrame(animationFrame);
      }
    };
  }, [layout.canShow, checkOverlap]);

  useEffect(() => {
    if (headings.length < MIN_HEADINGS_TO_RENDER) {
      setActiveHeadingId(null);
      return undefined;
    }

    const visibleHeadings = new Set();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleHeadings.add(entry.target.id);
          } else {
            visibleHeadings.delete(entry.target.id);
          }
        });

        if (visibleHeadings.size) {
          const nextActive = headings.find((heading) =>
            visibleHeadings.has(heading.id)
          );

          if (nextActive) {
            setActiveHeadingId(nextActive.id);
            return;
          }
        }

        const fallback = headings.find((heading) => {
          const element = document.getElementById(heading.id);

          if (!element) {
            return false;
          }

          return element.getBoundingClientRect().top >= 0;
        });

        const lastResort = headings[headings.length - 1];
        setActiveHeadingId((fallback || lastResort || {}).id || null);
      },
      {
        rootMargin: "-35% 0px -55% 0px",
        threshold: [0, 0.25, 0.5, 1],
      }
    );

    const elements = headings
      .map((heading) => document.getElementById(heading.id))
      .filter(Boolean);

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [headings]);

  const handleHeadingClick = useCallback((event, headingId) => {
    event.preventDefault();

    const target = document.getElementById(headingId);

    if (target) {
      const top =
        window.pageYOffset +
        target.getBoundingClientRect().top -
        TOC_SCROLL_OFFSET;

      window.scrollTo({
        top: Math.max(0, top),
        behavior: "smooth",
      });
      setActiveHeadingId(headingId);
    }
  }, []);

  const shouldRenderToc =
    layout.canShow && headings.length >= MIN_HEADINGS_TO_RENDER;

  const shouldShowBasedOnScroll = isHeaderOutOfViewport && isArticleInViewport;

  const navHidden = isOverlapping || !shouldShowBasedOnScroll;
  const isNavExpanded = true;

  const tocIndentation = useCallback((level) => {
    if (typeof level !== "number") {
      return 12;
    }

    return 12 + Math.min(Math.max(level - 2, 0) * 12, 48);
  }, []);

  return (
    <Wrapper>
      <ArticleSlot ref={articleRef}>{children}</ArticleSlot>
      {shouldRenderToc ? (
        <FloatingNav
          ref={tocRef}
          $expanded={isNavExpanded}
          data-hidden={navHidden}
          aria-hidden={navHidden}
          aria-label="Table of contents"
        >
          <FloatingNavList>
            {headings.map((heading) => (
              <FloatingNavItem key={heading.id}>
                <TocButton
                  type="button"
                  onClick={(event) => handleHeadingClick(event, heading.id)}
                  $indent={tocIndentation(heading.level)}
                  $active={heading.id === activeHeadingId}
                  $expanded={isNavExpanded}
                  aria-current={
                    heading.id === activeHeadingId ? "true" : undefined
                  }
                >
                  {heading.text}
                </TocButton>
              </FloatingNavItem>
            ))}
          </FloatingNavList>
        </FloatingNav>
      ) : null}
    </Wrapper>
  );
};

export default FloatingTableOfContents;
