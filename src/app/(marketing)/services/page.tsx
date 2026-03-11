"use client";

import { useState } from "react";
import Link from "next/link";
import { 
   Smartphone, Laptop, Tablet, Watch, ShieldCheck,
  Zap, Sparkles, CheckCircle2, ChevronRight, 
  Microscope, Waves, Battery, Cpu, Lock, RotateCcw 
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// 1. Tab Configuration
const SERVICE_TABS = [
  {
    id: "hardware",
    label: "Physical Repairs",
    icon: <Smartphone size={16} />,
    description: "Factory-grade restoration for broken hardware.",
    items: [
      { title: "OEM Screen Replacement", desc: "Original AMOLED/OLED with TrueTone retention.", icon: <Sparkles className="text-blue-500" /> },
      { title: "Battery Bio-Health", desc: "0-Cycle original cells with 100% health capacity.", icon: <Battery className="text-emerald-500" /> },
      { title: "Chassis Restoration", desc: "Frame and back-glass replacement with laser precision.", icon: <RotateCcw className="text-slate-500" /> },
      { title: "Camera & Lens", desc: "Focus calibration and sapphire crystal lens repair.", icon: <Sparkles className="text-violet-500" /> },
    ]
  },
  {
    id: "chip",
    label: "L3 Chip-Level",
    icon: <Cpu size={16} />,
    description: "Chennai's most advanced micro-soldering lab.",
    items: [
      { title: "Logic Board Repair", desc: "Fixing dead phones, short circuits, and IC issues.", icon: <Microscope className="text-fuchsia-500" /> },
      { title: "Liquid Damage Recovery", desc: "Ultrasonic cleaning and trace restoration.", icon: <Waves className="text-cyan-500" /> },
      { title: "CPU Reballing", desc: "Fixing high-end processor and RAM connection issues.", icon: <Cpu className="text-orange-500" /> },
      { title: "Charging IC Fix", desc: "Repairing U2/Hydra and power management units.", icon: <Zap className="text-yellow-500" /> },
    ]
  },
  {
    id: "software",
    label: "Software & Data",
    icon: <Lock size={16} />,
    description: "Secure data recovery and OS restoration.",
    items: [
      { title: "Data Forensics", desc: "Retrieving photos/docs from dead or disabled devices.", icon: <ShieldCheck className="text-emerald-500" /> },
      { title: "OS Calibration", desc: "Fixing boot loops, 'Apple Logo' stuck, and bricked units.", icon: <RotateCcw className="text-blue-500" /> },
      { title: "Security Consultancy", desc: "iCloud, Passcode, and FRP unlock assistance.", icon: <Lock className="text-slate-950" /> },
      { title: "Global Unlocking", desc: "Official network and carrier unlocking services.", icon: <CheckCircle2 className="text-violet-500" /> },
    ]
  }
];

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState("hardware");

  return (
    <main className="min-h-screen bg-white">
      {/* --- HERO: CHENNAI AUTHORITY --- */}
      <section className="relative pt-32 pb-40 overflow-hidden bg-slate-950">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[100px]" />
        
        <div className="container relative mx-auto px-6">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 mb-8">
              <span className="h-2 w-2 rounded-full bg-violet-500 animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-300">Chennai's Service Standard</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-[0.85] mb-8 uppercase">
              TECHNICAL <br />
              <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-orange-400 bg-clip-text text-transparent italic">EXCELLENCE.</span>
            </h1>
            
            <p className="max-w-xl text-slate-400 text-lg font-medium leading-relaxed">
              We operate at a <span className="text-white italic">molecular level.</span> From simple screen swaps to complex motherboard forensics, we are Chennai's first choice for premium electronics restoration.
            </p>
          </div>
        </div>
      </section>

      {/* --- TABBED SERVICE NAV --- */}
      <section className="-mt-20 relative z-30">
        <div className="container mx-auto px-6">
          <div className="bg-white border-2 border-slate-950 rounded-[3rem] p-4 shadow-3xl shadow-slate-200">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <div className="flex p-2 bg-slate-50 rounded-[2rem] gap-2 overflow-x-auto no-scrollbar">
                {SERVICE_TABS.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-3 px-8 py-4 rounded-full text-xs font-black uppercase tracking-widest transition-all whitespace-nowrap ${
                      activeTab === tab.id 
                      ? "bg-slate-950 text-white shadow-xl" 
                      : "text-slate-400 hover:text-slate-950"
                    }`}
                  >
                    {tab.icon}
                    {tab.label}
                  </button>
                ))}
              </div>
              <div className="hidden lg:flex items-center gap-6 pr-8">
                 <div className="text-right">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">Status</p>
                    <p className="text-xs font-black text-emerald-500 uppercase mt-1">Lab Active</p>
                 </div>
                 <div className="h-10 w-[2px] bg-slate-100" />
                 <Link href="/contact/" className="text-xs font-black uppercase tracking-widest text-violet-600 underline decoration-2 underline-offset-4">Book Diagnostic</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- DYNAMIC CONTENT AREA --- */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <div className="grid lg:grid-cols-12 gap-16">
                {/* Left: Info */}
                <div className="lg:col-span-4">
                  <h3 className="text-xs font-black text-violet-600 uppercase tracking-[0.4em] mb-4">
                    {SERVICE_TABS.find(t => t.id === activeTab)?.label}
                  </h3>
                  <h2 className="text-4xl lg:text-5xl font-black text-slate-950 tracking-tighter uppercase leading-none mb-6">
                    ENGINEERED <br /> <span className="italic text-slate-400 font-medium">PRECISION.</span>
                  </h2>
                  <p className="text-slate-500 text-sm font-medium leading-relaxed mb-8">
                    {SERVICE_TABS.find(t => t.id === activeTab)?.description}
                  </p>
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                       <CheckCircle2 size={16} className="text-emerald-500" />
                       <span className="text-[10px] font-black uppercase text-slate-900 tracking-widest">ESD Safe Environment</span>
                    </div>
                    <div className="flex items-center gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                       <CheckCircle2 size={16} className="text-emerald-500" />
                       <span className="text-[10px] font-black uppercase text-slate-900 tracking-widest">Micro-Precision Tools</span>
                    </div>
                  </div>
                </div>

                {/* Right: Service Cards */}
                <div className="lg:col-span-8 grid md:grid-cols-2 gap-4">
                  {SERVICE_TABS.find(t => t.id === activeTab)?.items.map((item, idx) => (
                    <div key={idx} className="group p-8 rounded-[2.5rem] bg-white border border-slate-100 hover:border-slate-950 transition-all shadow-sm hover:shadow-2xl">
                      <div className="h-12 w-12 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        {item.icon}
                      </div>
                      <h4 className="text-lg font-black text-slate-950 uppercase tracking-tight mb-2">{item.title}</h4>
                      <p className="text-xs text-slate-400 font-medium leading-relaxed mb-6">
                        {item.desc}
                      </p>
                      <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-violet-600 opacity-0 group-hover:opacity-100 transition-opacity">
                        Get Pricing <ChevronRight size={12} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* --- SEO KEYWORD CLUSTER FOOTER --- */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-6">
           <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
             {["iPhone Repair", "MacBook Screen", "iWatch Battery", "Data Recovery", "iPad Logic Board", "IC Reballing"].map((key) => (
               <div key={key} className="text-center">
                  <p className="text-[9px] font-black text-slate-300 uppercase tracking-widest group-hover:text-slate-950 transition-colors">{key} Chennai</p>
               </div>
             ))}
           </div>
        </div>
      </section>
    </main>
  );
}