"use client";

import type { ElementType, HTMLAttributes } from "react";

interface StarBorderProps extends Omit<HTMLAttributes<HTMLElement>, "style"> {
  as?: ElementType;
  className?: string;
  innerClassName?: string;
  color?: string;
  speed?: string;
  thickness?: number;
  children: React.ReactNode;
  style?: React.CSSProperties;
  href?: string;
  /** When true, shows a rotating gradient border around the full box */
  rotateBorder?: boolean;
}

const defaultInnerClass =
  "bg-gradient-to-b from-[#1E1E1E] to-gray-900 border border-[#1FA6B8]/30 text-white text-center text-[16px] py-[16px] px-[26px] rounded-[20px]";

export default function StarBorder({
  as: Component = "button",
  className = "",
  innerClassName,
  color = "white",
  speed = "6s",
  thickness = 2,
  children,
  style,
  rotateBorder = false,
  ...rest
}: StarBorderProps) {
  const innerClass = innerClassName ?? defaultInnerClass;

  if (rotateBorder) {
    return (
      <Component
        className={`relative rounded-[20px] overflow-hidden ${className}`}
        style={{
          padding: `${thickness}px`,
          ...style,
        }}
        {...rest}
      >
        {/* Rotating gradient behind content; visible in the padding area */}
        <div
          className="absolute inset-0 rounded-[inherit] z-0"
          style={{
            background: `conic-gradient(from 0deg, ${color}, transparent 60deg, transparent 180deg, ${color} 240deg, transparent 300deg, ${color} 360deg)`,
            animation: `border-spin ${typeof speed === "string" ? speed : "6s"} linear infinite`,
          }}
        />
        <div className={`relative z-[1] min-h-0 ${innerClass}`} style={{ borderRadius: "calc(1.5rem - 2px)" }}>
          {children}
        </div>
      </Component>
    );
  }

  return (
    <Component
      className={`relative overflow-hidden rounded-[20px] ${className}`}
      style={{
        padding: `${thickness}px 0`,
        ...style,
      }}
      {...rest}
    >
      <div
        className="absolute w-[400%] h-[80%] opacity-90 bottom-[-15px] right-[-300%] rounded-full animate-star-movement-bottom z-0"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 28%)`,
          animationDuration: speed,
        }}
      />
      <div
        className="absolute w-[400%] h-[80%] opacity-90 top-[-15px] left-[-300%] rounded-full animate-star-movement-top z-0"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 28%)`,
          animationDuration: speed,
        }}
      />
      <div className={`relative z-[1] ${innerClass}`}>{children}</div>
    </Component>
  );
}
