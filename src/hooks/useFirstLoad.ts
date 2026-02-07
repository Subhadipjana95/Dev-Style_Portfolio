"use client";

import { useState, useEffect } from "react";

/**
 * Hook to detect if this is the first page load in the current session
 * Returns true only on initial load or page reload, false during client-side navigation
 */
export function useFirstLoad() {
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  useEffect(() => {
    // Check if page has been loaded before in this session
    const hasLoadedBefore = sessionStorage.getItem('pageHasLoaded');
    
    if (hasLoadedBefore) {
      // Not first load - skip animations
      setIsFirstLoad(false);
    } else {
      // First load - play animations and mark as loaded
      sessionStorage.setItem('pageHasLoaded', 'true');
    }
  }, []);

  return isFirstLoad;
}
