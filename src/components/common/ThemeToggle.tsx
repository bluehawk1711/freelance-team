'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState, useCallback } from 'react';
import { Moon, Sun } from 'lucide-react';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = useCallback(() => {
    const html = document.documentElement;
    const newTheme = theme === 'dark' ? 'light' : 'dark';

    // Create the circular reveal animation
    const overlay = document.createElement('div');
    overlay.className = 'theme-transition-overlay';

    // Get the button position for the animation origin
    const btn = document.querySelector('[aria-label="Toggle theme"]');
    const rect = btn?.getBoundingClientRect();
    const x = rect ? rect.left + rect.width / 2 : window.innerWidth / 2;
    const y = rect ? rect.top + rect.height / 2 : window.innerHeight / 2;

    const maxDim = Math.max(window.innerWidth, window.innerHeight) * 2.5;

    // Use CSS variable for theme background to stay consistent with globals.css
    overlay.style.cssText = `
      left: ${x}px;
      top: ${y}px;
      width: 0px;
      height: 0px;
      border-radius: 50%;
      background: var(--background);
      transform: translate(-50%, -50%);
      transition: width 0.5s cubic-bezier(0.4, 0, 0.2, 1), height 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    `;

    document.body.appendChild(overlay);

    // Trigger the expand
    requestAnimationFrame(() => {
      overlay.style.width = `${maxDim}px`;
      overlay.style.height = `${maxDim}px`;
    });

    // Apply the actual theme at the midpoint
    setTimeout(() => {
      setTheme(newTheme);
    }, 200);

    // Remove overlay after animation
    setTimeout(() => {
      overlay.style.opacity = '0';
      overlay.style.transition = 'opacity 0.3s ease-out';
      setTimeout(() => overlay.remove(), 300);
    }, 500);
  }, [theme, setTheme]);

  if (!mounted) return null;

  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg hover:bg-muted transition-colors relative overflow-hidden"
      aria-label="Toggle theme"
    >
      <div
        className="transition-transform duration-300"
        style={{ transform: isDark ? 'rotate(360deg)' : 'rotate(0deg)' }}
      >
        {isDark ? (
          <Moon className="w-5 h-5 text-muted-foreground" />
        ) : (
          <Sun className="w-5 h-5 text-muted-foreground" />
        )}
      </div>
    </button>
  );
}
