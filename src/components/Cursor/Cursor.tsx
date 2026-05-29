"use client";

import { useEffect, useRef } from "react";
import useCursor from "@/hooks/useCursor";

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const { pos } = useCursor();

  useEffect(() => {
    const animateDOM = () => {
      if (cursorRef.current) {
        cursorRef.current.style.transform =
          `translate3d(${pos.current.x}px, ${pos.current.y}px, 0) translate(-50%, -50%)`;
      }

      requestAnimationFrame(animateDOM);
    };

    animateDOM();
  }, [pos]);

  return <div ref={cursorRef} className="neon-cursor" />;
}