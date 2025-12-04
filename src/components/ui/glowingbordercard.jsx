"use client";
import React from "react";

export default function GlowingBorderCard({
  children,
  className = "",
  fromColor = "purple-600",
  toColor = "purple-600",
}) {
  return (
    <div className={`relative group ${className}`}>
      {/* Glowing border effect */}
      <div
        className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-fuchsia-400 rounded-2xl opacity-75 group-hover:opacity-100 blur-sm transition duration-300"
      ></div>
      
      {/* Content container */}
      <div className="relative bg-black rounded-2xl p-4 h-full">
        {children}
      </div>
    </div>
  );
}
