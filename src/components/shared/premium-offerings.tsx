"use client";

import { motion } from "framer-motion";
import { Cloud, Gem, ShoppingBag, ArrowRight, Zap, Shield, Database, Cpu } from "lucide-react";
import Link from "next/link";

export default function PremiumOfferings() {
  return (
    <section className="py-16 lg:py-28 bg-white border-b border-slate-50 overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* SECTION HEADER - SEO ORIENTED */}
        <div className="flex flex-col mb-12 lg:mb-16">
          <div className="flex items-center gap-3 mb-4">
             <div className="h-px w-8 bg-violet-600" />
             <span className="text-[10px] font-black uppercase tracking-[0.4em] text-violet-600">Premium Ecosystem</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-slate-950 tracking-tighter uppercase leading-none">
            Beyond <span className="text-slate-400 italic font-medium">Hardware.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          
          {/* 1. SOFTWARE & DATA LAB - THE HIGH-TECH CORE */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-slate-950 rounded-[3rem] p-10 md:p-16 text-white relative overflow-hidden group min-h-[480px] flex flex-col justify-center shadow-3xl shadow-slate-200"
          >
            {/* Background Texture for Performance Feel */}
            <div className="absolute inset-0 opacity-10 pointer-events-none" 
                 style={{ backgroundImage: 'radial-gradient(circle, #4f46e5 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-2 rounded-2xl mb-8">
                <Database size={16} className="text-fuchsia-400" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/80">Forensic Recovery Lab</span>
              </div>
              
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-[0.85] uppercase">
                DATA <br /> 
                <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-orange-400 bg-clip-text text-transparent italic">
                  RECOVERY.
                </span>
              </h2>
              
              <p className="text-slate-400 text-sm md:text-lg max-w-md mb-12 font-medium leading-relaxed">
                Chennai's leading facility for <span className="text-white">Encrypted Retrieval</span>, iCloud unlocking, and OS stabilization. We recover what others claim is lost forever.
              </p>
              
              <Link href="/services/software/" className="group/btn inline-flex items-center gap-4 bg-white text-slate-950 px-8 py-4 rounded-2xl text-[11px] font-black uppercase tracking-widest hover:bg-violet-600 hover:text-white transition-all duration-500">
                Enter Recovery Lab
                <ArrowRight size={16} className="group-hover/btn:translate-x-2 transition-transform" />
              </Link>
            </div>
            
            {/* Floating Decorative Elements */}
            <Cloud size={350} className="absolute -right-20 -top-20 text-white/[0.03] -rotate-12 pointer-events-none group-hover:text-white/[0.05] transition-colors duration-700" />
          </motion.div>

          {/* 2. BOUTIQUE ACCESSORIES - THE RETAIL EXPERIENCE */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-5 bg-violet-600 rounded-[3rem] p-10 md:p-16 text-white flex flex-col justify-between group relative overflow-hidden shadow-3xl shadow-violet-100"
          >
            <div className="relative z-10">
              <div className="h-16 w-16 rounded-3xl bg-white/15 backdrop-blur-xl border border-white/20 flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-500">
                <ShoppingBag size={32} className="text-white" />
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-black tracking-tighter mb-6 leading-[0.9] uppercase">
                PREMIUM <br /> <span className="text-violet-200">BOUTIQUE.</span>
              </h2>
              
              <div className="grid gap-4 mb-12">
                {[
                  { label: "Imported Protection", sub: "Global Brands" },
                  { label: "GaN Fast Charging", sub: "Safe Power" },
                  { label: "Hi-Res Audio", sub: "Audiophile Grade" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors">
                    <Shield size={18} className="text-fuchsia-300" />
                    <div>
                      <p className="text-[11px] font-black uppercase tracking-widest leading-none">{item.label}</p>
                      <p className="text-[9px] font-bold text-violet-200 uppercase mt-1 opacity-60">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Link href="/shop/" className="relative z-10 w-full bg-slate-950 text-white border border-slate-900 rounded-2xl py-5 text-[11px] font-black uppercase tracking-widest text-center hover:bg-white hover:text-slate-950 transition-all duration-300 shadow-xl">
              Shop Selected Gear
            </Link>

            {/* Decoration */}
            <Zap size={250} className="absolute -right-20 -bottom-20 text-white/5 rotate-12 pointer-events-none group-hover:scale-110 transition-transform duration-1000" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}