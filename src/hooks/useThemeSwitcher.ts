"use client";

import { useEffect, useState } from "react";


// Available theme color classes
const colors = [
  "color-1",
  "color-2",
  "color-3",
  "color-4",
  "color-5",
] as const;


// Creates a type from colors array
type ThemeColor = (typeof colors)[number];


// Custom hook for theme + dark mode management
export function useThemeSwitcher() {

  // Stores current selected theme color
  const [theme, setTheme] = useState<ThemeColor>(() => {

    // Prevent SSR errors in Next.js
    if (typeof window === "undefined") {
      return "color-1";
    }

    // Get saved theme from localStorage
    return (
      (localStorage.getItem("theme") as ThemeColor) ||
      "color-1"
    );
  });


  // Stores dark mode state
  const [darkMode, setDarkMode] = useState(() => {

    // Prevent SSR issues
    if (typeof window === "undefined") {
      return false;
    }

    // Read dark mode value from localStorage
    return localStorage.getItem("darkMode") === "true";
  });


  // Apply selected theme class to body
  useEffect(() => {

    // Remove previous theme classes
    document.body.classList.remove(...colors);

    // Add active theme class
    document.body.classList.add(theme);

    // Save theme in localStorage
    localStorage.setItem("theme", theme);

  }, [theme]);


  // Apply/remove dark mode class
  useEffect(() => {

    // Toggle dark class on body
    document.body.classList.toggle("dark", darkMode);

    // Save dark mode state
    localStorage.setItem(
      "darkMode",
      darkMode.toString()
    );

  }, [darkMode]);


  // Expose states and updater functions
  return {
    theme,
    setTheme,
    darkMode,
    setDarkMode,
    colors,
  };
}