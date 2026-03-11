"use client";

import { useState } from "react";
import { Send, CheckCircle2, Loader2, MapPin, Wrench } from "lucide-react";
import { motion } from "framer-motion";

export default function BookingForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    
    // Simulate Server Action delay
    await new Promise((res) => setTimeout(res, 1500));
    setStatus("success");
  }

  if (status === "success") {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center p-12 text-center bg-white border-[3px] border-slate-950 shadow-[10px_10px_0px_0px_rgba(124,58,237,1)]"
      >
        <div className="h-20 w-20 bg-violet-600 border-[3px] border-slate-950 flex items-center justify-center text-white mb-6">
            <CheckCircle2 size={40} strokeWidth={3} />
        </div>
        <h3 className="text-3xl font-black text-slate-950 uppercase tracking-tighter">Request Logged</h3>
        <p className="text-slate-500 mt-4 font-bold uppercase text-xs tracking-widest leading-relaxed">
          Technical ticket #4402 created. <br /> Our Chennai hub will call you in 15 mins.
        </p>
        <button 
            onClick={() => setStatus("idle")}
            className="mt-8 text-[10px] font-black uppercase tracking-widest text-violet-600 underline underline-offset-4"
        >
            New Request
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-6 p-2">
      {/* 1. NAME & PHONE INPUTS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="relative">
            <label className="text-[9px] font-black uppercase text-slate-400 mb-1 block ml-2">Client Name</label>
            <input 
              required
              type="text" 
              placeholder="E.G. RAHUL KRISHNA" 
              className="w-full bg-slate-50 border-[3px] border-slate-950 px-6 py-4 text-slate-950 font-black text-xs uppercase outline-none focus:bg-white focus:shadow-[4px_4px_0px_0px_rgba(124,58,237,1)] transition-all"
            />
        </div>
        <div className="relative">
            <label className="text-[9px] font-black uppercase text-slate-400 mb-1 block ml-2">Primary Phone</label>
            <input 
              required
              type="tel" 
              placeholder="+91 XXXXX XXXXX" 
              className="w-full bg-slate-50 border-[3px] border-slate-950 px-6 py-4 text-slate-950 font-black text-xs uppercase outline-none focus:bg-white focus:shadow-[4px_4px_0px_0px_rgba(124,58,237,1)] transition-all"
            />
        </div>
      </div>

      {/* 2. BRANCH SELECTOR */}
      <div className="relative">
        <label className="text-[9px] font-black uppercase text-slate-400 mb-1 block ml-2">Nearest Chennai Branch</label>
        <div className="relative">
            <select className="w-full bg-slate-50 border-[3px] border-slate-950 px-6 py-4 text-slate-950 font-black text-xs uppercase appearance-none outline-none focus:bg-white focus:shadow-[4px_4px_0px_0px_rgba(124,58,237,1)] transition-all">
                <option>SELECT HUB LOCATION</option>
                <option>ADYAR HUB - SOUTH CHENNAI</option>
                <option>T. NAGAR HUB - CENTRAL</option>
                <option>VELACHERY HUB - GST ROAD</option>
                <option>ANNA NAGAR HUB - NORTH</option>
            </select>
            <MapPin className="absolute right-6 top-1/2 -translate-y-1/2 text-violet-600" size={18} />
        </div>
      </div>

      {/* 3. ISSUE DESCRIPTION */}
      <div className="relative">
        <label className="text-[9px] font-black uppercase text-slate-400 mb-1 block ml-2">Technical Fault Description</label>
        <div className="relative">
            <textarea 
                placeholder="DESCRIBE THE ISSUE (E.G. IPHONE 15 SCREEN CRACK)" 
                rows={4}
                className="w-full bg-slate-50 border-[3px] border-slate-950 px-6 py-4 text-slate-950 font-black text-xs uppercase outline-none focus:bg-white focus:shadow-[4px_4px_0px_0px_rgba(124,58,237,1)] transition-all resize-none"
            />
            <Wrench className="absolute right-6 top-6 text-slate-200" size={24} />
        </div>
      </div>

      {/* 4. SUBMIT BUTTON */}
      <button 
        disabled={status === "loading"}
        className="group relative w-full border-[3px] border-slate-950 bg-slate-950 py-5 transition-all hover:bg-violet-600 active:translate-x-1 active:translate-y-1 disabled:opacity-70 shadow-[6px_6px_0px_0px_rgba(0,0,0,0.1)] hover:shadow-none"
      >
        <span className="relative z-10 flex items-center justify-center gap-3 text-white font-black text-xs uppercase tracking-[0.3em]">
          {status === "loading" ? (
            <Loader2 className="animate-spin" size={20} />
          ) : (
            <>LOG REPAIR REQUEST <Send size={18} strokeWidth={3} /></>
          )}
        </span>
      </button>

      <p className="text-[8px] font-bold text-slate-400 text-center uppercase tracking-widest">
        By submitting, you agree to our lab terms & conditions.
      </p>
    </form>
  );
}