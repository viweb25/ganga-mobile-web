"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronRight, Smartphone, Laptop, Tablet, Watch, 
  ShieldCheck, ArrowLeft, MessageCircle, Zap, Cpu
} from "lucide-react";

export default function LeadCalculator() {
  const [step, setStep] = useState(1);
  const [selectedDevice, setSelectedDevice] = useState("");
  const [phone, setPhone] = useState("");

  const devices = [
    { id: "iphone", name: "iPhone Repair", icon: <Smartphone size={24} />, color: "group-hover:text-blue-500" },
    { id: "macbook", name: "MacBook Lab", icon: <Laptop size={24} />, color: "group-hover:text-slate-900" },
    { id: "ipad", name: "iPad Restoration", icon: <Tablet size={24} />, color: "group-hover:text-violet-500" },
    { id: "iwatch", name: "iWatch Service", icon: <Watch size={24} />, color: "group-hover:text-fuchsia-500" },
  ];

  return (
    <section className="w-full py-12 px-4 flex justify-center">
      <div className="w-full max-w-5xl bg-white border-2 border-slate-950 rounded-[3rem] overflow-hidden shadow-[20px_20px_0px_0px_rgba(15,23,42,0.05)] flex flex-col md:flex-row relative">
        
        {/* --- LEFT SIDE: THE PITCH (Visual Branding) --- */}
        <div className="md:w-2/5 bg-slate-950 p-10 flex flex-col justify-between text-white border-r-2 border-slate-950">
          <div className="space-y-6">
            <div className="h-12 w-12 bg-violet-600 rounded-2xl flex items-center justify-center">
              <Cpu size={28} className="text-white" />
            </div>
            <h3 className="text-4xl lg:text-5xl font-black tracking-tighter uppercase leading-[0.85]">
              Instant <br />
              <span className="text-violet-400 italic">Diagnostic</span> <br />
              Portal.
            </h3>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] leading-relaxed">
              Chennai's first AI-driven estimate engine for L3 Chip-level repairs.
            </p>
          </div>

          <div className="pt-10 space-y-4 border-t border-slate-800">
             <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[9px] font-black uppercase tracking-widest text-slate-300">Lab Engineers Online</span>
             </div>
             <div className="text-[8px] font-bold text-slate-500 uppercase leading-tight">
                Est. Quote Time: &lt; 120 Seconds
             </div>
          </div>
        </div>

        {/* --- RIGHT SIDE: THE ENGINE (The Form) --- */}
        <div className="flex-1 p-8 lg:p-12 relative bg-slate-50/30">
          
          {/* STEP INDICATOR DOTS */}
          <div className="absolute top-8 right-12 flex gap-2">
            <div className={`h-1.5 w-6 rounded-full transition-all duration-500 ${step === 1 ? 'bg-violet-600 w-10' : 'bg-slate-200'}`} />
            <div className={`h-1.5 w-6 rounded-full transition-all duration-500 ${step === 2 ? 'bg-violet-600 w-10' : 'bg-slate-200'}`} />
          </div>

          <AnimatePresence mode="wait">
            {step === 1 ? (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="h-full flex flex-col justify-center"
              >
                <div className="mb-8">
                  <span className="text-[10px] font-black text-violet-600 uppercase tracking-[0.4em] mb-2 block">Step 01</span>
                  <h4 className="text-2xl font-black text-slate-950 uppercase tracking-tight">Select Infrastructure</h4>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {devices.map((device) => (
                    <button
                      key={device.id}
                      onClick={() => { setSelectedDevice(device.name); setStep(2); }}
                      className="group flex items-center gap-4 p-5 bg-white border-2 border-slate-100 rounded-2xl hover:border-slate-950 transition-all hover:-translate-y-1 active:translate-y-0"
                    >
                      <div className={`transition-colors duration-300 text-slate-400 ${device.color}`}>
                        {device.icon}
                      </div>
                      <span className="text-xs font-black uppercase tracking-widest text-slate-950">{device.name}</span>
                    </button>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="h-full flex flex-col justify-center max-w-sm mx-auto"
              >
                <button 
                  onClick={() => setStep(1)}
                  className="mb-6 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-slate-950 transition-colors"
                >
                  <ArrowLeft size={14} /> Back to Units
                </button>

                <div className="space-y-6">
                  <div className="bg-white border-2 border-slate-950 p-6 rounded-2xl shadow-[8px_8px_0px_0px_rgba(124,58,237,1)]">
                    <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest block mb-4">Entering Diagnostic Tunnel For: <span className="text-violet-600">{selectedDevice}</span></label>
                    
                    <div className="relative">
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="WHATSAPP NUMBER"
                        className="w-full bg-slate-50 border-b-2 border-slate-200 py-3 text-lg font-black tracking-widest text-slate-950 outline-none focus:border-violet-600 transition-colors placeholder:text-slate-200"
                      />
                    </div>
                  </div>

                  <button className="w-full bg-slate-950 text-white py-6 rounded-2xl font-black text-[10px] uppercase tracking-[0.3em] flex items-center justify-center gap-3 hover:bg-violet-600 transition-all active:scale-95 group">
                    <MessageCircle size={18} fill="white" className="group-hover:rotate-12 transition-transform" />
                    Secure Estimate
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}