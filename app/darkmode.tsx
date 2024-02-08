import React, { useState, useEffect } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/solid'; // Or your preferred icon library

function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false); // Default to light mode

  useEffect(() => {
    // Handle initial theme based on user preference or browser setting
    const storedTheme = localStorage.getItem('dark-mode');
    if (storedTheme) {
      setDarkMode(storedTheme === 'true');
    } else {
      // Fallback to browser preference (if supported)
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      if (mediaQuery && mediaQuery.matches) {
        setDarkMode(true);
      }
    }
  }, []);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="focus:ring-2 focus:ring-offset-2 focus:ring-white hover:ring-opacity-50 rounded-full bg-transparent border-2 border-white p-2"
    >
      {darkMode ? <MoonIcon className="w-5 h-5 text-white" /> : <SunIcon className="w-5 h-5 text-yellow-500" />}
    </button>
  );
}

export default DarkModeToggle;
