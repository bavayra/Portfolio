import { useEffect, useRef, useState } from "react";

type UseInViewOnceOptions = {
  threshold?: number;
  root?: Element | null;
  rootMargin?: string;
};

export function useInViewOnce<T extends Element>(
  options: UseInViewOnceOptions = {},
) {
  const { threshold = 0.1, root = null, rootMargin = "0px" } = options;

  const ref = useRef<T | null>(null);
  const [inViewOnce, setInViewOnce] = useState(false);

  useEffect(() => {
    if (!ref.current || inViewOnce) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInViewOnce(true);
          observer.disconnect();
        }
      },
      { threshold, root, rootMargin },
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [threshold, root, rootMargin, inViewOnce]);

  return { ref, inViewOnce };
}

export default useInViewOnce;
