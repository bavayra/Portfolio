import { useEffect, useRef, useState } from "react";

type UseInViewOnceOptions = {
  threshold?: number;
  root?: Element | null;
  rootMargin?: string;
};

export function useInViewOnce<T extends Element>(
  options: UseInViewOnceOptions = {}
) {
  const { threshold = 0.1, root = null, rootMargin = "0px" } = options;

  const ref = useRef<T | null>(null);
  const [inViewOnce, setInViewOnce] = useState(false);
  const hasTriggered = useRef(false);

  useEffect(() => {
    if (!ref.current || hasTriggered.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          hasTriggered.current = true;
          setInViewOnce(true);
          observer.disconnect();
        }
      },
      { threshold, root, rootMargin }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [threshold, root, rootMargin]);

  return { ref, inViewOnce };
}
