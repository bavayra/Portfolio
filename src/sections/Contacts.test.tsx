import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Contacts from "./Contacts";

const mockFetch = vi.fn();

describe("Contacts Form", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    vi.stubGlobal("fetch", mockFetch);
    sessionStorage.clear();
  });

  afterEach(() => {
    vi.unstubAllGlobals();
    vi.useRealTimers();
  });

  it("should render form fields", () => {
    render(<Contacts />);
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /send/i })).toBeInTheDocument();
  });

  it("should show validation errors for empty fields", async () => {
    render(<Contacts />);

    const user = userEvent.setup();
    const submitButton = screen.getByRole("button", { name: /send/i });

    await user.click(submitButton);

    expect(await screen.findByText(/name is required/i)).toBeInTheDocument();
    expect(await screen.findByText(/email is required/i)).toBeInTheDocument();
    expect(await screen.findByText(/message is too short/i)).toBeInTheDocument();
  });

  it("should show error for invalid email", async () => {
    render(<Contacts />);

    const user = userEvent.setup();
    const emailInput = screen.getByLabelText(/email/i);
    const submitButton = screen.getByRole("button", { name: /send/i });

    await user.type(screen.getByLabelText(/name/i), "John Doe");
    await user.type(emailInput, "invalid-email");
    await user.type(screen.getByLabelText(/message/i), "Test message here");

    await user.click(submitButton);

    expect(await screen.findByText(/invalid email format/i)).toBeInTheDocument();
  });

  it("should submit form successfully with valid data", async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ success: true }),
    });

    render(<Contacts />);

    const user = userEvent.setup();
    await user.type(screen.getByLabelText(/name/i), "John Doe");
    await user.type(screen.getByLabelText(/email/i), "john@example.com");
    await user.type(screen.getByLabelText(/message/i), "Hello, this is a test message");

    await user.click(screen.getByRole("button", { name: /send/i }));

    expect(mockFetch).toHaveBeenCalledWith(
      expect.stringContaining("formspree.io"),
      expect.objectContaining({
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: expect.stringContaining("john@example.com"),
      })
    );

    expect(await screen.findByText(/thank you/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/name/i)).toHaveValue("");
    expect(screen.getByLabelText(/email/i)).toHaveValue("");
  });

  it("should enforce rate limiting", async () => {
    mockFetch.mockResolvedValue({
      ok: true,
      json: async () => ({ success: true }),
    });

    render(<Contacts />);

    const user = userEvent.setup();

    await user.type(screen.getByLabelText(/name/i), "John");
    await user.type(screen.getByLabelText(/email/i), "john@example.com");
    await user.type(screen.getByLabelText(/message/i), "Test message");

    await user.click(screen.getByRole("button", { name: /send/i }));
    await waitFor(() => {
      expect(screen.getByText(/thank you/i)).toBeInTheDocument();
    });

    await user.type(screen.getByLabelText(/name/i), "John");
    await user.type(screen.getByLabelText(/email/i), "john@example.com");
    await user.type(screen.getByLabelText(/message/i), "Second message");

    await user.click(screen.getByRole("button", { name: /send/i }));

    expect(await screen.findByText(/wait 30 seconds/i)).toBeInTheDocument();
  });
});
