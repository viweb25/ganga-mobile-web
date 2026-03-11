"use client";

import { useState } from "react";
import { Search, CheckCircle2, Clock, Truck, Smartphone, Loader2, MapPin, AlertCircle, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const STAGES = [
  { label: "Booked", icon: <Clock size={18} />, id: 1 },
  { label: "In-Lab", icon: <Search size={18} />, id: 2 },
  { label: "Repairing", icon: <Smartphone size={18} />, id: 3 },
  { label: "QA Tested", icon: <CheckCircle2 size={18} />, id: 4 },
  { label: "Dispatched", icon: <Truck size={18} />, id: 5 },
];

export default function RepairTracker() {
  const [inputValue, setInputValue] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "found" | "not-found">("idle");

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue) return;
    
    setStatus("loading");
    
    // Simulating a Frontend Logic: 
    // If user enters '98400', show a fake success. Otherwise, show 'Not Found'
    setTimeout(() => {
      if (inputValue.includes("98400")) {
        setStatus("found");
      } else {
        setStatus("not-found");
      }
    }, 1500);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* INPUT ZONE */}
      <form onSubmit={handleTrack} className="relative mb-12">
        <div className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400">
          <Search size={20} />
        </div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="ENTER MOBILE NUMBER OR JOB-ID"
          className="w-full bg-white border-2 border-slate-950 rounded-[2rem] py-8 pl-16 pr-44 text-sm font-black text-slate-950 placeholder:text-slate-300 focus:shadow-[0_0_0_8px_rgba(124,58,237,0.05)] transition-all outline-none"
        />
        <button 
          className="absolute right-3 top-3 bottom-3 bg-slate-950 text-white px-10 rounded-2xl font-black text-[10px] tracking-[0.2em] hover:bg-violet-600 transition-all disabled:opacity-50"
          disabled={status === "loading"}
        >
          {status === "loading" ? <Loader2 className="animate-spin" size={18} /> : "VALIDATE"}
        </button>
      </form>

      <AnimatePresence mode="wait">
        {/* CASE 1: FOUND STATUS */}
        {status === "found" && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
            className="bg-white border-2 border-slate-950 p-8 md:p-12 rounded-[3rem] shadow-2xl"
          >
            <div className="flex justify-between items-center mb-12">
                <div className="px-4 py-1 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100 text-[10px] font-black uppercase tracking-widest">
                  Live: Stage 03 - Technical Bay
                </div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Job ID: CF-7721</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
              {STAGES.map((stage, i) => {
                const isPast = i < 2;
                const isCurrent = i === 2;
                return (
                  <div key={stage.id} className="flex flex-col items-center text-center group">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 border-2 transition-all ${
                      isPast ? "bg-slate-950 border-slate-950 text-white" : 
                      isCurrent ? "bg-violet-600 border-violet-600 text-white animate-pulse" : 
                      "bg-white border-slate-100 text-slate-200"
                    }`}>
                      {stage.icon}
                    </div>
                    <span className={`text-[9px] font-black uppercase tracking-tighter ${isPast || isCurrent ? "text-slate-950" : "text-slate-300"}`}>
                      {stage.label}
                    </span>
                  </div>
                )
              })}
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 flex items-center justify-between">
               <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                    <MapPin size={16} className="text-violet-600" />
                  </div>
                  <div>
                    <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Current Hub</p>
                    <p className="text-xs font-black text-slate-950 uppercase">Pallikaranai Lab, Chennai</p>
                  </div>
               </div>
               <button className="text-[10px] font-black text-violet-600 uppercase underline decoration-2 underline-offset-4">Chat with Tech</button>
            </div>
          </motion.div>
        )}

        {/* CASE 2: NOT FOUND / LEAD GENERATION */}
        {status === "not-found" && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
            className="bg-orange-50 border-2 border-orange-200 p-8 md:p-12 rounded-[3rem] text-center"
          >
            <div className="h-16 w-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 text-orange-500 shadow-sm">
              <AlertCircle size={32} />
            </div>
            <h3 className="text-2xl font-black text-slate-950 uppercase tracking-tight mb-2">Order Not Synced Yet</h3>
            <p className="text-sm text-slate-500 font-medium mb-8 max-w-sm mx-auto">
              We couldn't find a live repair for <span className="text-slate-950 font-bold">{inputValue}</span>. 
              Our systems take 2 hours to sync after physical handover.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-slate-950 text-white px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-violet-600 transition-all flex items-center justify-center gap-2">
                Request Manual Update <ArrowRight size={14} />
              </button>
              <button onClick={() => setStatus("idle")} className="bg-white text-slate-400 px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest border border-orange-200">
                Try Again
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}