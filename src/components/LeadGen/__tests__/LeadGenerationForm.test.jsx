import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import LeadGenerationForm from "../LeadGenerationForm";

describe("LeadGenerationForm", () => {
  const originalFetch = global.fetch;
  const mockSuccessLink = "https://example.com/report.pdf";
  const originalLocation = window.location;

  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
      })
    );
    Object.defineProperty(window, "location", {
      configurable: true,
      value: { href: "https://example.com/report" },
    });
    document.title = "Test Report";
  });

  afterEach(() => {
    global.fetch = originalFetch;
    Object.defineProperty(window, "location", {
      configurable: true,
      value: originalLocation,
    });
    jest.clearAllMocks();
  });

  it("submits the form to HubSpot and shows the success state", async () => {
    render(
      <LeadGenerationForm
        portal="12345"
        form="abcde-12345"
        successLink={mockSuccessLink}
      />
    );

    const nameInput = screen.getByPlaceholderText(/First Name\*/i);
    fireEvent.change(nameInput, { target: { value: "Jane" } });
    fireEvent.blur(nameInput, { target: { value: "Jane" } });

    const emailInput = screen.getByPlaceholderText(/Email\*/i);
    fireEvent.change(emailInput, { target: { value: "jane@example.com" } });
    fireEvent.blur(emailInput, { target: { value: "jane@example.com" } });

    const submitButton = screen.getByText(/Submit/i);
    fireEvent.click(submitButton);

    const successHeading = await screen.findByText(/Success!/i);
    expect(successHeading).toBeInTheDocument();

    expect(global.fetch).toHaveBeenCalledWith(
      "https://api.hsforms.com/submissions/v3/integration/submit/12345/abcde-12345",
      expect.objectContaining({
        method: "POST",
        headers: { "Content-Type": "application/json" },
      })
    );

    const fetchCall = global.fetch.mock.calls[0][1];
    const payload = JSON.parse(fetchCall.body);
    expect(payload.fields).toEqual([
      { name: "firstname", value: "Jane" },
      { name: "email", value: "jane@example.com" },
    ]);
    expect(payload.context).toEqual({
      pageUri: "https://example.com/report",
      pageName: "Test Report",
    });

    expect(
      screen.getByText(/Check your inbox for the document/i)
    ).toBeInTheDocument();

    const downloadLink = screen.getByText(/Begin Download/i);
    expect(downloadLink.closest("a")).toHaveAttribute("href", mockSuccessLink);
  });
});
