import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import { act } from "react";
import { useInViewOnce } from "./useInViewOnce";

describe("useInViewOnce", () => {
  let observeCallback: IntersectionObserverCallback;
  let observeMock: ReturnType<typeof vi.fn>;
  let disconnectMock: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    observeMock = vi.fn();
    disconnectMock = vi.fn();

    globalThis.IntersectionObserver = class IntersectionObserver {
      constructor(callback: IntersectionObserverCallback) {
        observeCallback = callback;
      }

      observe = observeMock;
      disconnect = disconnectMock;
      unobserve = vi.fn();
      root = null;
      rootMargin = "";
      thresholds = [];
      takeRecords = () => [];
    } as unknown as typeof IntersectionObserver;
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  function triggerIntersection(isIntersecting: boolean, target: Element) {
    const entry: Partial<IntersectionObserverEntry> = {
      isIntersecting,
      target,
      intersectionRatio: isIntersecting ? 1 : 0,
      boundingClientRect: {} as DOMRectReadOnly,
      intersectionRect: {} as DOMRectReadOnly,
      rootBounds: null,
      time: Date.now(),
    };
    observeCallback([entry as IntersectionObserverEntry], {} as IntersectionObserver);
  }

  function TestComponent() {
    const { ref, inViewOnce } = useInViewOnce<HTMLDivElement>();
    return (
      <div>
        <div ref={ref} data-testid="target" data-in-view={inViewOnce}>
          Content
        </div>
      </div>
    );
  }

  it("should observe element when mounted", () => {
    render(<TestComponent />);

    expect(observeMock).toHaveBeenCalled();
  });

  it("should set inViewOnce to true when element intersects", async () => {
    render(<TestComponent />);

    const element = screen.getByTestId("target");
    expect(element).toHaveAttribute("data-in-view", "false");

    act(() => {
      triggerIntersection(true, element);
    });

    await waitFor(() => {
      expect(element).toHaveAttribute("data-in-view", "true");
    });
  });

  it("should disconnect observer after first intersection", async () => {
    render(<TestComponent />);

    const element = screen.getByTestId("target");

    act(() => {
      triggerIntersection(true, element);
    });

    await waitFor(() => {
      expect(disconnectMock).toHaveBeenCalled();
    });
  });

  it("should not change inViewOnce back to false", async () => {
    render(<TestComponent />);

    const element = screen.getByTestId("target");

    act(() => {
      triggerIntersection(true, element);
    });

    await waitFor(() => {
      expect(element).toHaveAttribute("data-in-view", "true");
    });

    act(() => {
      triggerIntersection(false, element);
    });

    expect(element).toHaveAttribute("data-in-view", "true");
  });
});
