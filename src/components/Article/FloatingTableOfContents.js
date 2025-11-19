import React, { useCallback, useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";

import { Colors } from "../DesignSystem";

const HEADING_SELECTOR = "h2";
const FLOATING_GUARD_SELECTOR = "[data-floating-toc-guard]";
const TOC_WIDTH = 248;
const TOC_HORIZONTAL_GAP = 32;
const VIEWPORT_EDGE_GUTTER = 16;
const TOC_TOP_OFFSET = 112;
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
  width: ${TOC_WIDTH}px;
  padding: 16px 20px 20px;
  border-radius: 16px;
  background-color: rgba(255, 255, 255, 0.95);
  border: 1px solid rgba(8, 8, 8, 0.08);
  box-shadow: 0 24px 60px rgba(8, 8, 8, 0.08);
  z-index: 20;
  display: flex;
  flex-direction: column;
  max-height: calc(100vh - ${TOC_TOP_OFFSET + 48}px);
  transition: opacity 0.2s ease, transform 0.2s ease;
  opacity: ${(props) => (props["data-hidden"] ? 0 : 1)};
  pointer-events: ${(props) => (props["data-hidden"] ? "none" : "auto")};
  transform: ${(props) =>
    props["data-hidden"] ? "translate3d(0, 8px, 0)" : "translate3d(0, 0, 0)"};
`;

const FloatingNavTitle = styled.p`
  margin: 0 0 12px;
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-weight: 600;
  color: ${Colors.primaryText.mediumEmphasis};
`;

const FloatingNavList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  overflow-y: auto;
  max-height: calc(100vh - ${TOC_TOP_OFFSET + 98}px);
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const FloatingNavItem = styled.li`
  margin: 0;
  padding: 0;
`;

const TocButton = styled.button`
  border: none;
  background: none;
  padding: 6px 0;
  width: 100%;
  text-align: left;
  font-size: 14px;
  line-height: 1.45;
  font-weight: ${(props) => (props.$active ? 600 : 500)};
  color: ${(props) =>
    props.$active
      ? Colors.primaryText.highEmphasis
      : Colors.primaryText.mediumEmphasis};
  cursor: pointer;
  padding-left: ${(props) => props.$indent || 0}px;
  transition: color 0.2s ease;

  &:hover,
  &:focus {
    color: ${Colors.primaryText.highEmphasis};
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
  const [layout, setLayout] = useState({ canShow: false, left: 0 });
  const [isOverlapping, setIsOverlapping] = useState(false);

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
      setLayout((current) =>
        current.canShow ? { canShow: false, left: 0 } : current
      );
      return;
    }

    const baseSection =
      container.querySelector(
        '[data-article-section][data-article-width="default"]'
      ) || container.querySelector('[data-article-section]');

    if (!baseSection) {
      setLayout((current) =>
        current.canShow ? { canShow: false, left: 0 } : current
      );
      return;
    }

    const rect = baseSection.getBoundingClientRect();
    const viewportWidth =
      window.innerWidth || document.documentElement?.clientWidth || 0;
    const spaceRight = viewportWidth - rect.right;
    const canShow =
      spaceRight >= TOC_WIDTH + TOC_HORIZONTAL_GAP + VIEWPORT_EDGE_GUTTER;
    const desiredLeft = rect.right + TOC_HORIZONTAL_GAP;
    const minLeft = VIEWPORT_EDGE_GUTTER;
    const maxLeft = viewportWidth - TOC_WIDTH - VIEWPORT_EDGE_GUTTER;
    const computedLeft = Math.min(
      Math.max(desiredLeft, minLeft),
      maxLeft
    );

    setLayout((current) => {
      if (current.canShow === canShow && current.left === computedLeft) {
        return current;
      }

      return { canShow, left: computedLeft };
    });
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
      const verticalOverlap = rect.top < tocRect.bottom && rect.bottom > tocRect.top;
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
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveHeadingId(headingId);
    }
  }, []);

  const shouldRenderToc = layout.canShow && headings.length >= MIN_HEADINGS_TO_RENDER;

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
          style={{ left: `${layout.left}px` }}
          data-hidden={isOverlapping}
          aria-hidden={isOverlapping}
          aria-label="Table of contents"
        >
          <FloatingNavTitle>On this page</FloatingNavTitle>
          <FloatingNavList>
            {headings.map((heading) => (
              <FloatingNavItem key={heading.id}>
                <TocButton
                  type="button"
                  onClick={(event) => handleHeadingClick(event, heading.id)}
                  $indent={tocIndentation(heading.level)}
                  $active={heading.id === activeHeadingId}
                  aria-current={heading.id === activeHeadingId ? "true" : undefined}
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
