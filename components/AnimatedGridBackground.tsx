"use client";

import { motion } from "framer-motion";
import "./AnimatedGridBackground.css";

interface AnimatedGridBackgroundProps {
  variant?: "fixed" | "absolute";
  opacity?: number;
}

const BOX_POSITIONS = [
  { left: "10%", top: "10%" },
  { left: "25%", top: "20%" },
  { left: "45%", top: "15%" },
  { left: "60%", top: "30%" },
  { left: "75%", top: "18%" },
  { left: "15%", top: "40%" },
  { left: "35%", top: "50%" },
  { left: "55%", top: "60%" },
  { left: "80%", top: "45%" },
  { left: "20%", top: "70%" },
  { left: "40%", top: "5%" },
  { left: "65%", top: "8%" },
  { left: "85%", top: "35%" },
  { left: "5%", top: "25%" },
  { left: "90%", top: "55%" },
  { left: "30%", top: "65%" },
  { left: "50%", top: "75%" },
  { left: "70%", top: "80%" },
  { left: "12%", top: "85%" },
  { left: "42%", top: "90%" },
  { left: "68%", top: "95%" },
  { left: "88%", top: "88%" },
  { left: "8%", top: "50%" },
  { left: "95%", top: "12%" },
];

export default function AnimatedGridBackground({
  variant = "absolute",
  opacity = 0.2,
}: AnimatedGridBackgroundProps) {
  const positionClass = variant === "fixed" ? "fixed" : "absolute";

  return (
    <div
      className={`${positionClass} inset-0 pointer-events-none z-0 overflow-hidden`}
      style={{
        opacity,
        willChange: "transform",
        transform: "translateZ(0)",
        contain: "layout style paint",
      }}
    >
      {/* Main Grid Lines - light on dark */}
      <div
        className="absolute inset-0 animated-grid-bg"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.15) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Diagonal Grid Lines */}
      <div
        className="absolute inset-0 opacity-70 animated-grid-bg-diagonal"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              45deg,
              transparent,
              transparent 2px,
              rgba(255,255,255,0.12) 2px,
              rgba(255,255,255,0.12) 3px
            )
          `,
          backgroundSize: "120px 120px",
        }}
      />

      {/* Animated Square Boxes */}
      {[...Array(24)].map((_, i) => {
        const size = 30 + (i % 4) * 15;
        const pos = BOX_POSITIONS[i % BOX_POSITIONS.length];
        return (
          <motion.div
            key={i}
            className="absolute border-2 border-white/25 bg-white/5 rounded-sm"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: pos.left,
              top: pos.top,
              willChange: "transform, opacity",
              transform: "translateZ(0)",
            }}
            animate={{
              rotate: [0, 90, 180, 270, 360],
              scale: [1, 1.15, 1, 0.85, 1],
              opacity: [0.75, 0.95, 0.85, 0.9, 0.75],
            }}
            transition={{
              duration: 5 + (i % 4) * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.15,
            }}
            layout={false}
          />
        );
      })}

      {/* Connecting Lines */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={`line-${i}`}
          className="absolute h-0.5 bg-white/28 rounded-full"
          style={{
            width: "200px",
            left: `${15 + (i * 7)}%`,
            top: `${10 + (i * 7)}%`,
            transform: `rotate(${i * 12}deg) translateZ(0)`,
            willChange: "transform, opacity",
          }}
          animate={{
            opacity: [0.15, 0.5, 0.15],
            scaleX: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 3 + (i % 2),
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3,
          }}
          layout={false}
        />
      ))}
    </div>
  );
}
