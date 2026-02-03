"use client";

import "./MovingLinesBackground.css";

type ShapeConfig = {
  type: "diamond" | "square";
  size: "small" | "medium" | "large";
  top: string;
  left: string;
  anim: "1" | "2" | "3" | "4" | "5";
  delay: string;
};

const SHAPES: ShapeConfig[] = [
  { type: "diamond", size: "medium", top: "8%", left: "5%", anim: "1", delay: "0s" },
  { type: "square", size: "small", top: "15%", left: "18%", anim: "2", delay: "2s" },
  { type: "diamond", size: "small", top: "22%", left: "32%", anim: "3", delay: "4s" },
  { type: "square", size: "medium", top: "12%", left: "48%", anim: "4", delay: "1s" },
  { type: "diamond", size: "large", top: "28%", left: "62%", anim: "5", delay: "3s" },
  { type: "square", size: "small", top: "18%", left: "78%", anim: "1", delay: "5s" },
  { type: "diamond", size: "medium", top: "35%", left: "8%", anim: "2", delay: "2s" },
  { type: "square", size: "small", top: "42%", left: "22%", anim: "3", delay: "0s" },
  { type: "diamond", size: "small", top: "48%", left: "38%", anim: "4", delay: "6s" },
  { type: "square", size: "medium", top: "38%", left: "55%", anim: "5", delay: "1s" },
  { type: "diamond", size: "small", top: "52%", left: "72%", anim: "1", delay: "4s" },
  { type: "square", size: "large", top: "45%", left: "88%", anim: "2", delay: "3s" },
  { type: "diamond", size: "medium", top: "58%", left: "12%", anim: "3", delay: "5s" },
  { type: "square", size: "small", top: "65%", left: "28%", anim: "4", delay: "2s" },
  { type: "diamond", size: "small", top: "72%", left: "45%", anim: "5", delay: "0s" },
  { type: "square", size: "medium", top: "62%", left: "62%", anim: "1", delay: "4s" },
  { type: "diamond", size: "large", top: "78%", left: "78%", anim: "2", delay: "1s" },
  { type: "square", size: "small", top: "68%", left: "92%", anim: "3", delay: "6s" },
  { type: "diamond", size: "small", top: "82%", left: "6%", anim: "4", delay: "3s" },
  { type: "square", size: "medium", top: "88%", left: "25%", anim: "5", delay: "5s" },
  { type: "diamond", size: "medium", top: "92%", left: "52%", anim: "1", delay: "2s" },
  { type: "square", size: "small", top: "85%", left: "68%", anim: "2", delay: "4s" },
  { type: "diamond", size: "small", top: "78%", left: "85%", anim: "3", delay: "1s" },
];

export default function MovingLinesBackground() {
  return (
    <div className="moving-lines-root" aria-hidden="true">
      <div className="floating-bg-grid" />
      {SHAPES.map((shape, i) => (
        <div
          key={i}
          className={`floating-shape floating-shape--${shape.type} floating-shape--${shape.size} floating-shape--anim-${shape.anim}${
            shape.type === "diamond" ? " floating-shape--diamond" : ""
          }`}
          style={{
            top: shape.top,
            left: shape.left,
            animationDelay: shape.delay,
          }}
        />
      ))}
    </div>
  );
}
