import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./Button";

describe("Button", () => {
  it("should render children text", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  it("should apply primary variant styles by default", () => {
    render(<Button>Test</Button>);
    const button = screen.getByRole("button", { name: "Test" });
    expect(button).toHaveClass("bg-section-title");
  });

  it("should apply secondary variant styles", () => {
    render(<Button variant="secondary">Test</Button>);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("bg-accent-red");
  });

  it("should be disabled when disabled prop is true", () => {
    render(<Button disabled>Test</Button>);
    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
    expect(button).toHaveClass("disabled:opacity-50");
  });

  it("should call onClick handler when clicked", async () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click me</Button>);

    const user = userEvent.setup();
    const button = screen.getByRole("button");
    await user.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("should not call onClick when disabled", async () => {
    const handleClick = vi.fn();
    render(
      <Button onClick={handleClick} disabled>
        Test
      </Button>
    );

    const user = userEvent.setup();
    const button = screen.getByRole("button");

    await user.click(button);

    expect(handleClick).not.toHaveBeenCalled();
  });

  it("should apply custom className", () => {
    render(<Button className="custom-class">Test</Button>);

    const button = screen.getByRole("button");
    expect(button).toHaveClass("custom-class");
  });

  it("should render different sizes", () => {
    const { rerender } = render(<Button size="small">Small</Button>);

    let button = screen.getByRole("button");
    expect(button).toHaveClass("px-4");

    rerender(<Button size="large">Large</Button>);

    button = screen.getByRole("button");
    expect(button).toHaveClass("px-6");
  });
});
