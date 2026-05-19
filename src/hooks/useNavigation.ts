"use client";

import { useState } from "react";

export function useNavigation() {
  const [active, setActive] = useState("Home");
  const [prev, setPrev] = useState<string | null>(null);

  const navigate = (section: string) => {
    if (section === active) return;

    setPrev(active);
    setActive(section);

    const sections = document.querySelectorAll(".section");

    sections.forEach((sec) => {
      sec.classList.remove("active", "back-section");
    });

    const current = document.getElementById(section);
    const previous = document.getElementById(active);

    // previous goes back
    if (previous) {
      previous.classList.add("back-section");
    }

    // new becomes active
    if (current) {
      current.classList.add("active");
    }
  };

  return {
    active,
    navigate,
    prev,
  };
}