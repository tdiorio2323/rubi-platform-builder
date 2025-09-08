import React from "react";
import type { FeatureKey } from "./RubiPlatformBuilder";

interface FeatureCardProps {
  featureKey: FeatureKey;
  selected: boolean;
  toggle: (k: FeatureKey) => void;
  title: string;
}

export default function FeatureCard({ featureKey, selected, toggle, title }: FeatureCardProps) {
  const base =
    "text-left rounded-xl p-4 border transition shadow-md backdrop-blur-md";
  const active = "bg-pink-400/30 border-pink-200/60 text-white";
  const inactive = "bg-white/10 border-white/20 hover:bg-white/20 text-pink-600";

  return (
    <button onClick={() => toggle(featureKey)} className={`${base} ${selected ? active : inactive}`}>
      <div className="flex items-center justify-between gap-4">
        <div className="flex-1">
          <h3 className="text-sm font-semibold">{title}</h3>
          <p className={`text-xs ${selected ? "text-white/90" : "text-pink-200/80"}`}>Click to toggle</p>
        </div>
        <div
          className={`w-6 h-6 rounded-full flex items-center justify-center border ${selected ? "border-pink-300 bg-pink-200/40" : "border-white/30 bg-white/10"}`}
        >
          {selected ? "✓" : ""}
        </div>
      </div>
    </button>
  );
}
