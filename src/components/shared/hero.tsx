"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Zap, Shield, Smartphone, Laptop } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full bg-white pt-32 pb-16 lg:pt-48 lg:pb-24 overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-violet-50 rounded-full blur-3xl opacity-50 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: High-Impact Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-start"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-100 mb-6">
              <span className="flex h-2 w-2 rounded-full bg-violet-500 animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
                Chennai's Standard in Micro-Soldering
              </span>
            </div>

            <h1 className="text-6xl lg:text-8xl font-black tracking-tighter text-slate-950 leading-[0.9] mb-8">
              REPAIR <br /> 
              <span className="bg-gradient-to-r from-violet-600 via-fuchsia-500 to-orange-500 bg-clip-text text-transparent italic">
                BEYOND
              </span> <br /> 
              LIMITS<span className="text-violet-600">.</span>
            </h1>

            <p className="max-w-md text-lg text-slate-500 font-medium leading-relaxed mb-10">
              Specialized chip-level service for <span className="text-slate-950 underline decoration-violet-200 underline-offset-4">Apple Ecosystem</span>. 
              We solve what others deem "unrepairable."
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <Link 
                href="/book/" 
                className="group w-full sm:w-auto bg-slate-950 text-white px-10 py-5 rounded-2xl text-[11px] font-black uppercase tracking-widest hover:bg-violet-600 transition-all shadow-2xl shadow-violet-100 flex items-center justify-center gap-3"
              >
                Get Repair Estimate
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <div className="flex items-center gap-3 px-6 py-5 rounded-2xl border border-slate-100 bg-white shadow-sm">
                <Shield size={18} className="text-violet-500" />
                <div className="flex flex-col">
                  <span className="text-[10px] font-black text-slate-950 uppercase tracking-widest leading-none">1Yr Warranty</span>
                  <span className="text-[8px] font-bold text-slate-400 uppercase mt-1">On All Hardware</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Technical Expertise Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Floating Badge */}
            <div className="absolute -top-6 -left-6 bg-white shadow-xl rounded-2xl p-4 z-20 hidden md:block border border-slate-50">
              <div className="flex items-center gap-3">
                <div className="bg-fuchsia-50 p-2 rounded-lg text-fuchsia-600">
                   <Zap size={20} fill="currentColor" />
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-950 uppercase">Express Lane</p>
                  <p className="text-[9px] font-bold text-slate-400 uppercase">30-Min Service</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-950 rounded-[3rem] p-10 lg:p-14 text-white relative overflow-hidden shadow-3xl shadow-slate-200">
              {/* Subtle grid pattern for technical feel */}
              <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-10">
                  <div className="h-px flex-1 bg-white/20" />
                  <h3 className="text-[10px] font-black text-fuchsia-400 uppercase tracking-[0.4em]">Expertise Registry</h3>
                  <div className="h-px flex-1 bg-white/20" />
                </div>

                <div className="grid gap-6">
                  {[
                    { title: "Display Restoration", icon: <Smartphone size={18} /> },
                    { title: "Logic-Board Micro-Soldering", icon: <Zap size={18} /> },
                    { title: "MacBook Thermal Overhaul", icon: <Laptop size={18} /> },
                    { title: "Forensic Data Recovery", icon: <Shield size={18} /> }
                  ].map((item, i) => (
                    <div key={i} className="group flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all cursor-default">
                      <div className="flex items-center gap-4">
                        <div className="text-violet-400">{item.icon}</div>
                        <span className="text-xs font-black uppercase tracking-widest text-white/90">{item.title}</span>
                      </div>
                      <CheckCircle2 size={16} className="text-fuchsia-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  ))}
                </div>

                <div className="mt-12 flex items-center justify-between">
                   <div className="flex -space-x-2">
                     {[1,2,3].map((v) => (
                       <div key={v} className="h-8 w-8 rounded-full border-2 border-slate-950 bg-slate-800" />
                     ))}
                   </div>
                   <p className="text-[9px] font-black text-white/40 uppercase tracking-widest">
                     Trusted by 12k+ Chennaiites
                   </p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}