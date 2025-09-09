"use client";
import React, { useEffect } from "react";

const CircuitBackground = ({ glow = true }) => {
  useEffect(() => {
    const dots = Array.from(document.querySelectorAll(".circuit-dot"));
    let activeDots = [];

    function animateDot(dot) {
      const path = dot.closest("g").querySelector("path");
      const pathLength = path.getTotalLength();
      let start = null;
      const speed = Math.random() > 0.3 ? 3000 : 1500;

      function step(timestamp) {
        if (!start) start = timestamp;
        let progress = ((timestamp - start) / speed) % 1;
        let point = path.getPointAtLength(progress * pathLength);
        dot.setAttribute("cx", point.x);
        dot.setAttribute("cy", point.y);
        requestAnimationFrame(step);
      }

      requestAnimationFrame(step);
    }

    function updateDots() {
      if (activeDots.length >= 3) {
        const oldDot = activeDots.shift();
        oldDot.classList.remove("active");
      }

      const availableDots = dots.filter(dot => !activeDots.includes(dot));
      if (availableDots.length === 0) return;

      const newDot = availableDots[Math.floor(Math.random() * availableDots.length)];
      activeDots.push(newDot);
      newDot.classList.add("active");
      animateDot(newDot);
    }

    const interval = setInterval(updateDots, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="circuit-container">
      <svg viewBox="0 0 800 600" className="circuit-svg">
        {[
          "M400 0 L400 300", "M300 1 L300 300", "M500 1 L500 300",
          "M400 600 L400 300", "M300 600 L300 300", "M500 600 L500 300",
          "M-300 200 L400 200", "M-300 300 L400 300", "M-300 400 L400 400",
          "M1200 200 L400 200", "M1200 300 L400 300", "M1200 400 L400 400",
          "M-100 0 L300 300", "M-200 0 L200 300", "M0 0 L400 300",
          "M900 0 L500 300", "M1000 0 L600 300", "M800 0 L400 300",
          "M-100 600 L300 300", "M-200 600 L200 300", "M0 600 L400 300",
          "M900 600 L500 300", "M1000 600 L600 300", "M800 600 L400 300"
        ].map((d, i) => (
          <g key={i} className={`circuit-line ${glow ? "glow" : ""}`}>
            <path d={d} stroke="cyan" strokeWidth="2" fill="none" />
            <circle className="circuit-dot" cx="400" cy="300" r="4" fill="cyan" />
          </g>
        ))}
      </svg>
    </div>
  );
};

export default CircuitBackground;
