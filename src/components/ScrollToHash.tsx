"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Scroll to a heading only for an intentional URL hash/navigation change.
 * Tracking the stable pathname, rather than the router object, prevents
 * unrelated client rerenders from re-triggering anchor navigation.
 */
export function ScrollToHash() {
  const pathname = usePathname();

  useEffect(() => {
    // A route transition can replace this page without a native hashchange.
    // Wait for a concrete pathname before resolving its fragment target.
    if (!pathname) return;

    const navigateToHash = () => {
      const rawHash = window.location.hash.slice(1);
      if (!rawHash) return;

      let id = rawHash;
      try {
        id = decodeURIComponent(rawHash);
      } catch {
        // Treat malformed percent-encoded fragments as their literal IDs.
      }

      const target = document.getElementById(id);
      if (!target) return;

      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      target.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth" });
    };

    const animationFrame = window.requestAnimationFrame(navigateToHash);
    window.addEventListener("hashchange", navigateToHash);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("hashchange", navigateToHash);
    };
  }, [pathname]);

  return null;
}
