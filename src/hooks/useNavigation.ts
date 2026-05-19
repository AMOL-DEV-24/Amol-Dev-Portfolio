"use client";

import { useState } from "react";

export function useNavigation() {

  // Stores current active section
  const [active, setActive] = useState("Home");

  // Scroll smoothly to selected section
  const navigate = (section: string) => {
    setActive(section);

    document.getElementById(section)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return {
    active,
    navigate,
  };
}