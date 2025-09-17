import React from "react";
import { act, render, screen } from "@testing-library/react";
import useSticky from "./useSticky";

describe("useSticky", () => {
  const TestComponent = () => {
    const { isSticky, element } = useSticky();

    return (
      <div>
        <div ref={element} data-testid="marker" />
        <span data-testid="status">{isSticky ? "sticky" : "not-sticky"}</span>
      </div>
    );
  };

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test("toggles sticky state when the marker scrolls out of view", () => {
    render(<TestComponent />);

    const marker = screen.getByTestId("marker");
    const status = screen.getByTestId("status");

    act(() => {
      marker.getBoundingClientRect = () => ({ bottom: 150 });
      window.dispatchEvent(new Event("scroll"));
    });

    expect(status).toHaveTextContent("not-sticky");

    act(() => {
      marker.getBoundingClientRect = () => ({ bottom: -5 });
      window.dispatchEvent(new Event("scroll"));
    });

    expect(status).toHaveTextContent("sticky");
  });

  test("removes the scroll listener on unmount", () => {
    const addSpy = jest.spyOn(window, "addEventListener");
    const removeSpy = jest.spyOn(window, "removeEventListener");

    const { unmount } = render(<TestComponent />);

    const [[, scrollHandler]] = addSpy.mock.calls.filter(
      ([event]) => event === "scroll"
    );

    unmount();

    expect(removeSpy).toHaveBeenCalledWith("scroll", scrollHandler);
  });
});
