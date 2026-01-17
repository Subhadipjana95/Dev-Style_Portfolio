"use client";

import { useEffect } from "react";

export function ClientGuard() {
  useEffect(() => {
    const block = (e: KeyboardEvent) => {
      if (
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && e.key === "I") ||
        (e.ctrlKey && e.key === "u")
      ) {
        e.preventDefault();
      }
    };

    document.addEventListener("keydown", block);
    document.addEventListener("contextmenu", e => e.preventDefault());

    return () => {
      document.removeEventListener("keydown", block);
    };
  }, []);

  return null;
}
