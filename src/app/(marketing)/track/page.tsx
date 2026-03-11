"use client";

import RepairTracker from "@/components/shared/repair-tracker";
import { Search, MapPin, PhoneCall, ShieldCheck } from "lucide-react";

export default function TrackPage() {
  return (
    <main className="min-h-screen bg-white py-20 lg:py-32 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-50 rounded-full blur-[120px] -z-10 opacity-60" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-fuchsia-50 rounded-full blur-[100px] -z-10 opacity-60" />
      
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 border border-slate-200 bg-white px-4 py-2 rounded-full mb-8 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-600">Chennai Live Support Active</span>
          </div>
          
          <h1 className="text-6xl lg:text-8xl font-black tracking-tighter text-slate-950 mb-8 uppercase leading-[0.85]">
            SERVICE <br />
            <span className="bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent italic">CONCIERGE.</span>
          </h1>
          
          <p className="text-slate-500 text-sm md:text-base font-medium max-w-xl mx-auto leading-relaxed">
            Track your device in real-time or request an instant doorstep pickup across Chennai. 
            Professional restoration, managed digitally.
          </p>
        </div>

        {/* Main Interactive Component */}
        <RepairTracker />

        {/* NEW SECTION: Quick Help Cards */}
        <div className="mt-24 grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { icon: <MapPin className="text-violet-600" />, t: "Check Coverage", d: "Available in Adyar, OMR, Velachery & T-Nagar." },
            { icon: <PhoneCall className="text-fuchsia-600" />, t: "Priority Call", d: "Request a call from our L3 Senior Tech." },
            { icon: <ShieldCheck className="text-emerald-600" />, t: "Warranty Check", d: "Verify your repair warranty via Mobile No." },
          ].map((item, i) => (
            <div key={i} className="p-8 rounded-[2.5rem] border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-xl transition-all group">
              <div className="h-12 w-12 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h4 className="text-sm font-black text-slate-950 uppercase tracking-tight mb-2">{item.t}</h4>
              <p className="text-xs text-slate-400 font-bold leading-relaxed">{item.d}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}