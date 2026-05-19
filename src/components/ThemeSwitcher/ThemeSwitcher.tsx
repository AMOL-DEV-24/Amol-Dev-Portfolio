"use client";

import { useState, useEffect } from "react";

const colors = ["color-1", "color-2", "color-3", "color-4", "color-5"];

function getSaved() {
  if (typeof window === "undefined") return { isDark: false, color: "color-1" };
  const saved = localStorage.getItem("theme") || "color-1";
  return {
    isDark: saved.includes("dark"),
    color: colors.find((c) => saved.includes(c)) || "color-1",
  };
}

export default function ThemeSwitcher() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(() => getSaved().isDark);

  // DOM-only effect — no setState here
  useEffect(() => {
    const { isDark, color } = getSaved();
    document.body.classList.remove("dark", ...colors);
    if (isDark) document.body.classList.add("dark");
    document.body.classList.add(color);
  }, []);

  const setColor = (color: string) => {
    document.body.classList.remove(...colors);
    document.body.classList.add(color);
    localStorage.setItem("theme", dark ? `dark ${color}` : color);
  };

  const toggleDark = () => {
    setDark((prev) => {
      const newDark = !prev;
      const currentColor = colors.find((c) => document.body.classList.contains(c)) || "color-1";
      document.body.classList.toggle("dark", newDark);
      localStorage.setItem("theme", newDark ? `dark ${currentColor}` : currentColor);
      return newDark;
    });
  };

  return (
    <div className={`style-switcher ${open ? "open" : ""}`}>
      <div className="s-icon" onClick={() => setOpen(!open)}>
        <i className="fas fa-cog fa-spin"></i>
      </div>
      <div className="s-icon day-night" onClick={toggleDark}>
        <i className={`fas ${dark ? "fa-sun" : "fa-moon"}`} />
      </div>
      <h4>Theme Colors</h4>
      <div className="colors">
        {colors.map((c) => (
          <span key={c} className={c} onClick={() => setColor(c)} />
        ))}
      </div>
    </div>
  );
}