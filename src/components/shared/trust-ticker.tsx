export default function TrustTicker() {
  const points = [
    "FREE 24H DELIVERY IN CHENNAI",
    "100% GENUINE CERTIFIED",
    "4.9/5 RATING ON GOOGLE",
    "LIFETIME SUPPORT INCLUDED",
  ];

  return (
    <div className="bg-emerald-500 py-4 overflow-hidden border-y border-emerald-400">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...points, ...points].map((text, i) => (
          <span key={i} className="flex items-center mx-10 text-xs font-black text-slate-950 uppercase tracking-[0.3em]">
            <Crown size={14} className="mr-3" /> {text}
          </span>
        ))}
      </div>
    </div>
  );
}