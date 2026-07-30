'use client';

import { useEffect } from 'react';

export function PerformanceMonitor() {
  useEffect(() => {
    // Monitor Web Vitals
    if ('web-vital' in window) {
      return;
    }

    // Monitor long tasks
    if ('PerformanceObserver' in window) {
      try {
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            // Log long tasks for analysis
            if (entry.duration > 50) {
              console.log('[Performance] Long task detected:', {
                name: entry.name,
                duration: entry.duration,
                startTime: entry.startTime,
              });
            }
          }
        });

        observer.observe({ entryTypes: ['longtask'] });
        return () => observer.disconnect();
      } catch (error) {
        // PerformanceObserver might not support longtask
        console.log('[Performance] PerformanceObserver not available');
      }
    }
  }, []);

  return null;
}
