import { useEffect, useRef, type RefObject, type ReactNode } from "react";
import { createPortal } from "react-dom";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  ariaLabel?: string;
  panelClassName?: string;
  initialFocusRef?: RefObject<HTMLElement>;
  children: ReactNode;
};

const FOCUSABLE_SELECTORS =
  'a[href], button:not([disabled]), textarea, input:not([type="hidden"]):not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';

function getFocusable(el: HTMLElement | null) {
  if (!el) return [] as HTMLElement[];
  return Array.from(
    el.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTORS)
  ).filter(
    (node) =>
      !!(node.offsetWidth || node.offsetHeight || node.getClientRects().length)
  );
}

export default function Modal({
  isOpen,
  onClose,
  ariaLabel,
  initialFocusRef,
  panelClassName,
  children,
}: ModalProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const previouslyFocused = useRef<Element | null>(null);

  useEffect(() => {
    if (!isOpen) return;

    previouslyFocused.current = document.activeElement;
    const el = containerRef.current;
    if (!el) return;
    const focusable = getFocusable(el);
    const toFocus = initialFocusRef?.current ?? focusable[0] ?? el;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    if (toFocus) {
      (toFocus as HTMLElement).focus();
    }

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        e.stopPropagation();
        onClose();
        return;
      }
      if (e.key === "Tab") {
        const nodes = getFocusable(el);
        if (nodes.length === 0) {
          e.preventDefault();
          return;
        }
        const first = nodes[0];
        const last = nodes[nodes.length - 1];
        const active = document.activeElement as HTMLElement | null;

        if (!e.shiftKey && active === last) {
          e.preventDefault();
          first.focus();
        } else if (e.shiftKey && (active === first || active === el)) {
          e.preventDefault();
          last.focus();
        }
      }
    }

    document.addEventListener("keydown", onKeyDown, true);
    return () => {
      document.removeEventListener("keydown", onKeyDown, true);
      document.body.style.overflow = prevOverflow;
      (previouslyFocused.current as HTMLElement | null)?.focus?.();
    };
  }, [isOpen, onClose, initialFocusRef]);

  if (!isOpen) return null;

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={ariaLabel ?? "Dialog"}
      className="fixed inset-0 z-50 flex items-center justify-center"
    >
      <div
        className="absolute inset-0 bg-black/70"
        onMouseDown={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
      />
      <div
        ref={containerRef}
        className={
          panelClassName ??
          "relative z-10 w-[min(95%,900px)] max-h-[90vh] overflow-auto rounded bg-white text-black p-4"
        }
        tabIndex={-1}
      >
        {children}
      </div>
    </div>,
    document.body
  );
}
