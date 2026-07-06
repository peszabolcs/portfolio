import { useRef, useEffect, useState, createElement } from "react";

// Lightweight scroll-reveal. Content is always in the DOM (SSR-safe); we
// only animate opacity/transform in. A safety timeout guarantees content
// becomes visible even if IntersectionObserver never fires (offscreen,
// short pages, reduced-motion, prerender), so nothing can stay hidden.
export default function Reveal({
  as = "div",
  delay = 0,
  className = "",
  children,
  ...rest
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // If already in/near viewport on mount, show immediately.
    const showNow = () => setVisible(true);

    if (typeof IntersectionObserver === "undefined") {
      showNow();
      return;
    }

    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 1.1) {
      showNow();
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -6% 0px" }
    );
    obs.observe(el);

    // Safety net: never leave content hidden.
    const t = setTimeout(showNow, 1200);

    return () => {
      obs.disconnect();
      clearTimeout(t);
    };
  }, []);

  return createElement(
    as,
    {
      ref,
      className: `reveal ${visible ? "is-visible" : ""} ${className}`.trim(),
      style: delay ? { transitionDelay: `${delay}ms` } : undefined,
      ...rest,
    },
    children
  );
}
