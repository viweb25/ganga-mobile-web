"use client";

import { useState } from "react";
import { Search, Loader2, CheckCircle2, Clock, Wrench, ShieldAlert, Bell, BellRing } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Mock Database for testing
const MOCK_REPAIRS: Record<string, any> = {
  "9884012345": {
    id: "LAB-8821",
    device: "iPhone 15 Pro",
    status: "IN PROGRESS",
    step: 2,
    eta: "TODAY, 6:00 PM",
    update: "Screen calibration in progress. OEM parts verified."
  },
  "9840055667": {
    id: "LAB-9002",
    device: "MacBook Air M2",
    status: "READY FOR PICKUP",
    step: 3,
    eta: "COLLECT NOW",
    update: "Liquid damage fully repaired. 12-month warranty activated."
  }
};

export default function StatusTracker() {
  const [phone, setPhone] = useState("");
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [notify, setNotify] = useState(false);

  const handleTrack = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setResult(null);

    // Simulated Lab Database Latency
    await new Promise((res) => setTimeout(res, 1200));

    if (MOCK_REPAIRS[phone]) {
      setResult(MOCK_REPAIRS[phone]);
    } else {
      setError(true);
    }
    setLoading(false);
  };

  return (
    <div className="max-w-xl mx-auto w-full">
      {/* 1. INDUSTRIAL SEARCH BAR */}
      <form onSubmit={handleTrack} className="relative mb-10 group">
        <div className="absolute -inset-1 bg-violet-600 opacity-0 group-focus-within:opacity-20 transition-opacity blur-sm" />
        <div className="relative flex">
          <input
            required
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="ENTER REGISTERED PHONE NUMBER"
            className="w-full bg-white border-[3px] border-slate-950 px-6 py-5 text-slate-950 font-black text-xs uppercase outline-none focus:shadow-[8px_8px_0px_0px_rgba(124,58,237,1)] transition-all placeholder:text-slate-300"
          />
          <button 
            type="submit"
            disabled={loading}
            className="bg-slate-950 text-white px-8 border-y-[3px] border-r-[3px] border-slate-950 hover:bg-violet-600 transition-colors flex items-center justify-center min-w-[80px]"
          >
            {loading ? <Loader2 size={20} className="animate-spin" /> : <Search size={20} strokeWidth={3} />}
          </button>
        </div>
      </form>

      {/* 2. LIVE STATUS REPORT */}
      <AnimatePresence mode="wait">
        {result && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="border-[3px] border-slate-950 bg-white shadow-[12px_12px_0px_0px_rgba(124,58,237,1)] overflow-hidden"
          >
            {/* Header: Device & Global Status */}
            <div className="p-8 pb-0">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <div className="h-2 w-2 rounded-full bg-violet-600 animate-pulse" />
                    <span className="text-[10px] font-black text-violet-600 uppercase tracking-widest">Live Lab Feedback</span>
                  </div>
                  <h3 className="text-3xl font-black text-slate-950 uppercase tracking-tighter leading-none">
                    {result.device}
                  </h3>
                  <p className="text-[10px] font-black text-slate-400 mt-2 uppercase tracking-widest">Job ID: {result.id}</p>
                </div>
                <div className="bg-slate-950 text-white px-4 py-2 text-[10px] font-black uppercase tracking-widest border-2 border-slate-950">
                  {result.status}
                </div>
              </div>

              {/* Steps Visualizer */}
              <div className="py-8 border-y-2 border-slate-50 relative flex justify-between">
                <div className="absolute top-[3.25rem] left-0 w-full h-[3px] bg-slate-100 z-0" />
                {[
                  { icon: <Clock size={16} />, label: "Received" },
                  { icon: <Wrench size={16} />, label: "In Repair" },
                  { icon: <CheckCircle2 size={16} />, label: "Ready" }
                ].map((s, i) => {
                  const isActive = result.step >= i + 1;
                  return (
                    <div key={i} className="relative z-10 flex flex-col items-center gap-3 bg-white px-2">
                      <div className={`h-12 w-12 border-[3px] flex items-center justify-center transition-all duration-500 ${
                        isActive 
                        ? "bg-violet-600 border-slate-950 text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]" 
                        : "bg-white border-slate-200 text-slate-200"
                      }`}>
                        {s.icon}
                      </div>
                      <span className={`text-[9px] font-black uppercase tracking-widest ${
                        isActive ? "text-slate-950" : "text-slate-300"
                      }`}>{s.label}</span>
                    </div>
                  );
                })}
              </div>

              {/* Lab Notes Content */}
              <div className="py-8">
                <div className="bg-slate-50 border-[3px] border-slate-950 p-5 relative">
                  <div className="absolute -top-3 left-4 bg-slate-950 text-white px-3 py-1 text-[8px] font-black uppercase tracking-widest">
                    Technical Update
                  </div>
                  <p className="text-xs font-black text-slate-950 uppercase leading-relaxed pt-2">
                    {result.update}
                  </p>
                </div>
              </div>
            </div>

            {/* Footer Actions: ETA & WhatsApp Notification */}
            <div className="bg-slate-950 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left">
                <p className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em]">Estimate Delivery</p>
                <p className="text-sm font-black text-white uppercase">{result.eta}</p>
              </div>

              <button 
                onClick={() => setNotify(!notify)}
                className={`w-full sm:w-auto flex items-center justify-center gap-3 px-6 py-3 border-2 transition-all font-black text-[10px] uppercase tracking-widest ${
                  notify 
                  ? "bg-green-500 border-white text-white" 
                  : "bg-transparent border-slate-700 text-slate-400 hover:text-white hover:border-white"
                }`}
              >
                {notify ? <BellRing size={14} /> : <Bell size={14} />}
                {notify ? "Alerts Active" : "Notify via WhatsApp"}
              </button>
            </div>
          </motion.div>
        )}

        {error && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-5 p-8 border-[3px] border-slate-950 bg-red-50"
          >
            <div className="h-12 w-12 bg-red-600 text-white flex items-center justify-center border-2 border-slate-950">
              <ShieldAlert size={24} strokeWidth={3} />
            </div>
            <div>
              <p className="text-xs font-black text-slate-950 uppercase tracking-tighter">Record Not Found</p>
              <p className="text-[10px] font-bold text-red-600 uppercase">Check number or visit Lab Reception.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}