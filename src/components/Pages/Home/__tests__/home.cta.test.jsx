import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Content from "../Home";
import ReactGA from "react-ga4";

jest.mock("react-ga4", () => ({
  event: jest.fn(),
}));

jest.mock("framer-motion", () => {
  const React = require("react");
  const MockMotionDiv = React.forwardRef(({ children, ...rest }, ref) => (
    <div ref={ref} {...rest}>
      {children}
    </div>
  ));

  return {
    motion: {
      div: MockMotionDiv,
    },
    useAnimation: () => ({
      start: jest.fn(),
    }),
  };
});

jest.mock("react-intersection-observer", () => ({
  useInView: () => {
    const ref = jest.fn();
    return [ref, true];
  },
}));

describe("Home page CTAs", () => {
  let originalOpen;

  beforeEach(() => {
    jest.useFakeTimers();
    ReactGA.event.mockClear();
    originalOpen = window.open;
    window.open = jest.fn();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
    window.open = originalOpen;
  });

  it("tracks analytics and opens the booking link for 'Book intro call'", () => {
    render(<Content />);

    const bookButtons = screen.getAllByText(/Book intro call/i);
    const heroButton = bookButtons[0];

    fireEvent.click(heroButton);

    expect(ReactGA.event).toHaveBeenCalledWith({
      category: "User",
      action: "book_audit_click",
      label: "Book Audit - hero-section",
      value: 10,
      nonInteraction: false,
    });

    act(() => {
      jest.advanceTimersByTime(200);
    });

    expect(window.open).toHaveBeenCalledWith(
      "https://calendar.notion.so/meet/alexandros/onboarding-discovery",
      "_blank",
      "noopener,noreferrer"
    );
  });

  it("opens the Loom demo and records analytics when 'Watch a Demo' is clicked", () => {
    render(<Content />);

    const watchDemoButton = screen.getByText(/Watch a Demo/i);
    fireEvent.click(watchDemoButton);

    expect(ReactGA.event).toHaveBeenCalledWith({
      category: "User",
      action: "watch_demo_clicked",
      label: "Watch Demo",
      value: 10,
      nonInteraction: false,
    });

    act(() => {
      jest.advanceTimersByTime(200);
    });

    expect(screen.getByTitle(/Loom video/i)).toBeInTheDocument();
  });

  it("reveals the ROI calculator lightbox with analytics tracking", () => {
    render(<Content />);

    const roiButton = screen
      .getAllByText(/Calculate Onboarding ROI/i)
      .map((element) => element.closest("button"))
      .find(Boolean);

    fireEvent.click(roiButton);

    expect(ReactGA.event).toHaveBeenCalledWith({
      category: "User",
      action: "roi_calculator_click",
      label: "ROI Calculator - pricing-canvas",
      value: 10,
      nonInteraction: false,
    });

    expect(screen.getAllByText(/Calculate Onboarding ROI/i).length).toBeGreaterThan(1);
  });

  it("opens the self-check modal and triggers analytics", () => {
    render(<Content />);

    const selfCheckButton = screen.getByText(/Take Onboarding Self-Check/i);
    fireEvent.click(selfCheckButton);

    expect(ReactGA.event).toHaveBeenCalledWith({
      category: "User",
      action: "self_check_click",
      label: "Self Check",
      value: 10,
      nonInteraction: false,
    });

    expect(screen.getAllByText(/Onboarding Self-Check/i).length).toBeGreaterThan(1);
  });
});
