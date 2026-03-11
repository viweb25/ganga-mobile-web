"use client";

import { Smartphone, Cpu, ShieldCheck, MapPin, Layers, Zap, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "iPhone Display Restoration",
    desc: "Original OLED and TrueTone calibration. Surgical glass-only replacement to save your original display cost in Chennai.",
    icon: <Smartphone size={24} />,
    keyword: "Screen Replacement",
    link: "/services/iphone-repair",
    accent: "border-violet-600"
  },
  {
    title: "Motherboard Chip-Level",
    desc: "Advanced IC reballing and micro-soldering for dead MacBooks and iPhones. We fix what others call 'unfixable'.",
    icon: <Cpu size={24} />,
    keyword: "Logic Board Repair",
    link: "/services/motherboard",
    accent: "border-fuchsia-600"
  },
  {
    title: "Expert Data Recovery",
    desc: "Secure recovery from water-damaged or dead devices. Trusted by Chennai's professionals for 100% privacy and success.",
    icon: <Layers size={24} />,
    keyword: "Data Retrieval",
    link: "/services/data-recovery",
    accent: "border-blue-600"
  }
];

const locations = ["Adyar", "T. Nagar", "Velachery", "Anna Nagar"];

export default function ServicesGrid() {
  return (
    <section className="bg-white py-20 lg:py-24 relative overflow-hidden">
      {/* Background Tech-Grid Decor */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#000 1.5px, transparent 1.5px), linear-gradient(90deg, #000 1.5px, transparent 1.5px)', backgroundSize: '60px 60px' }} />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl border-l-4 border-slate-950 pl-6 md:pl-10">
            <div className="flex items-center gap-2 mb-4 text-violet-600">
               <Zap size={16} fill="currentColor" />
               <span className="text-[10px] font-black uppercase tracking-[0.4em]">Service Protocol v2.0</span>
            </div>
            <h2 className="text-4xl md:text-7xl font-black text-slate-950 tracking-tighter leading-[0.9] uppercase">
              TECHNICAL <br /> 
              <span className="italic text-slate-400">RESTORE.</span>
            </h2>
          </div>
          
          <div className="flex flex-wrap lg:justify-end gap-2 max-w-sm">
            {locations.map((loc) => (
              <span key={loc} className="inline-flex items-center gap-1.5 rounded-md border-2 border-slate-950 bg-white px-3 py-1.5 text-[9px] font-black text-slate-950 uppercase tracking-widest shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                <MapPin size={10} /> {loc}
              </span>
            ))}
          </div>
        </div>

        {/* SERVICES: HARD-BORDER CARDS */}
        <div className="grid gap-10 md:grid-cols-3">
          {services.map((s, i) => (
            <Link 
              href={s.link} 
              key={i} 
              className="group relative block rounded-[2rem] border-2 border-slate-950 bg-white p-8 lg:p-10 transition-all duration-300 hover:-translate-y-2 hover:-translate-x-1 hover:shadow-[10px_10px_0px_0px_rgba(124,58,237,1)]"
            >
              {/* Top Detail Bar */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[2px] w-24 h-[4px] bg-slate-950 rounded-b-full group-hover:bg-violet-600 transition-colors" />
              
              {/* Icon & Keyword Badge */}
              <div className="flex items-start justify-between mb-10">
                <div className="h-14 w-14 rounded-2xl bg-slate-50 border-2 border-slate-950 flex items-center justify-center text-slate-950 transition-all duration-500 group-hover:bg-slate-950 group-hover:text-white group-hover:rotate-6">
                  {s.icon}
                </div>
                <div className="text-right">
                  <span className="text-[7px] font-black text-slate-400 uppercase tracking-[0.3em] block mb-1">Module {i + 1}</span>
                  <span className="text-[9px] font-black uppercase tracking-widest px-3 py-1.5 border-2 border-slate-950 rounded-lg bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    {s.keyword}
                  </span>
                </div>
              </div>

              {/* Content Area */}
              <div className="space-y-4 mb-12">
                <h3 className="text-2xl font-black text-slate-950 tracking-tighter uppercase leading-none group-hover:text-violet-600 transition-colors">
                  {s.title}
                </h3>
                <p className="text-[11px] font-bold text-slate-500 uppercase leading-relaxed tracking-tight">
                  {s.desc}
                </p>
              </div>

              {/* Bottom Action Button (The "Plug-In" Look) */}
              <div className="flex items-center justify-between pt-6 border-t-2 border-slate-950">
                <div className="flex flex-col">
                  <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Price Authority</span>
                  <span className="text-xs font-black text-slate-950 uppercase">Instant Quote</span>
                </div>
                <div className="h-12 w-12 rounded-xl bg-slate-950 text-white flex items-center justify-center transition-all group-hover:bg-violet-600 group-hover:scale-110">
                  <ArrowUpRight size={20} />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* FOOTER TRUST SIGNALS */}
        <div className="mt-20 py-8 border-y-2 border-slate-100 flex flex-col md:flex-row items-center justify-center gap-8 opacity-50">
           <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em]">
             <ShieldCheck size={16} /> 100% Data Privacy
           </div>
           <div className="hidden md:block w-2 h-2 rounded-full bg-slate-200" />
           <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em]">
             <Zap size={16} /> Express Diagnostics
           </div>
        </div>
      </div>
    </section>
  );
}