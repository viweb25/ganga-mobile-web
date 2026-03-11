"use client";

import { Crown } from "lucide-react";

export default function TrustTicker() {
  const points = [
    "FREE 24H DELIVERY IN CHENNAI",
    "100% GENUINE CERTIFIED",
    "4.9/5 RATING ON GOOGLE",
    "LIFETIME SUPPORT INCLUDED",
  ];

  return (
    <div className="bg-emerald-500 py-4 overflow-hidden border-y-2 border-slate-950 relative z-10">
      {/* Ensure you have the 'animate-marquee' keyframes defined 
        in your tailwind.config.ts for this to move! 
      */}
      <div className="flex whitespace-nowrap animate-marquee">
        {[...points, ...points, ...points].map((text, i) => (
          <span 
            key={i} 
            className="flex items-center mx-10 text-[10px] font-black text-slate-950 uppercase tracking-[0.2em]"
          >
            <Crown size={14} className="mr-3 fill-slate-950" /> 
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}