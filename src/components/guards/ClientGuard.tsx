"use client";

import { useEffect } from "react";

export function ClientGuard() {
  useEffect(() => {
    // Block common DevTools keyboard shortcuts
    const blockShortcuts = (e: KeyboardEvent) => {
      // F12
      if (e.key === "F12") {
        e.preventDefault();
        return false;
      }

      // Ctrl+Shift+I (Inspect)
      if (e.ctrlKey && e.shiftKey && e.key === "I") {
        e.preventDefault();
        return false;
      }

      // Ctrl+Shift+J (Console)
      if (e.ctrlKey && e.shiftKey && e.key === "J") {
        e.preventDefault();
        return false;
      }

      // Ctrl+Shift+C (Inspect Element)
      if (e.ctrlKey && e.shiftKey && e.key === "C") {
        e.preventDefault();
        return false;
      }

      // Ctrl+U (View Source)
      if (e.ctrlKey && e.key === "u") {
        e.preventDefault();
        return false;
      }

      // Mac shortcuts
      if (e.metaKey && e.altKey && (e.key === "i" || e.key === "j" || e.key === "c")) {
        e.preventDefault();
        return false;
      }
    };

    // Block right-click context menu
    const blockContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      return false;
    };

    // Add event listeners
    document.addEventListener("keydown", blockShortcuts);
    document.addEventListener("contextmenu", blockContextMenu);

    // Cleanup
    return () => {
      document.removeEventListener("keydown", blockShortcuts);
      document.removeEventListener("contextmenu", blockContextMenu);
    };
  }, []);

  return null;
}
