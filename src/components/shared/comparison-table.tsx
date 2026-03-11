"use client";

import { motion } from "framer-motion";
import { Check, X, ShieldCheck, Zap, Award, Lock, Timer, MapPin, Star } from "lucide-react";

const features = [
  { 
    name: "Component Quality", 
    corefix: "OEM / 100% Original", 
    others: "Grade-B / Counterfeit",
    icon: <Award size={18} />,
    seo: "Genuine Apple & Samsung Spares" 
  },
  { 
    name: "Service Warranty", 
    corefix: "1-Year Global Warranty", 
    others: "No Warranty / 7 Days",
    icon: <ShieldCheck size={18} />,
    seo: "Trusted Warranty Support" 
  },
  { 
    name: "Data Privacy", 
    corefix: "SOP-Level Security", 
    others: "Unsecured / High Risk",
    icon: <Lock size={18} />,
    seo: "Secure Data Handling" 
  },
  { 
    name: "Expertise", 
    corefix: "L3 Certified Techs", 
    others: "Self-Taught / Novice",
    icon: <Zap size={18} />,
    seo: "Chip-Level Specialists" 
  },
  { 
    name: "Turnaround", 
    corefix: "30-Min Quick Fix", 
    others: "2-4 Business Days",
    icon: <Timer size={18} />,
    seo: "Express Repair Chennai" 
  },
];

export default function Comparison() {
  return (
    <section className="bg-white py-20 lg:py-32 border-b border-slate-50 relative overflow-hidden">
      {/* LOCAL SEO SCHEMA (Hidden) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Ganga Mobiles Chennai",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Chennai",
              "addressRegion": "TN",
              "addressCountry": "IN"
            },
            "description": "Premium chip-level mobile repair service in Chennai. Best alternative to Ritchie Street and T. Nagar local shops.",
            "priceRange": "$$"
          }),
        }}
      />

      <div className="container mx-auto px-6">
        
        {/* Header - Authority Positioning */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 lg:mb-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-50 text-violet-600 border border-violet-100 mb-6">
              <MapPin size={12} fill="currentColor" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">Chennai's No.1 Premium Hub</span>
            </div>
            <h2 className="text-5xl lg:text-7xl font-black text-slate-950 tracking-tighter leading-[0.9] mb-6 uppercase">
              WHY <span className="bg-gradient-to-r from-violet-600 via-fuchsia-500 to-orange-500 bg-clip-text text-transparent italic text-shadow-sm">CHENNAI</span> <br />
              TRUSTS US.
            </h2>
            <p className="text-slate-500 font-medium max-w-lg">
              We don't just fix phones; we restore them to factory standards. Compare our industrial protocols against the local street markets.
            </p>
          </div>
          
          <div className="hidden lg:flex flex-col items-end gap-2 border-l-2 border-slate-950 pl-8">
             <div className="flex gap-1">
               {[1,2,3,4,5].map((s) => <Star key={s} size={14} className="text-orange-500" fill="currentColor" />)}
             </div>
             <p className="text-[11px] font-black text-slate-950 uppercase tracking-widest">Google Top Rated 2024</p>
             <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest text-right">Serving OMR • T-Nagar • Velachery</p>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="relative">
          {/* Decorative side label for desktop */}
          <div className="absolute -left-12 top-1/2 -rotate-90 hidden xl:block">
             <span className="text-[10px] font-black text-slate-200 uppercase tracking-[0.5em] whitespace-nowrap">AUTHENTICITY VERIFIED</span>
          </div>

          <div className="grid gap-6 lg:gap-0 lg:border-2 lg:border-slate-950 lg:rounded-[3rem] overflow-hidden shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)]">
            
            {/* Table Header */}
            <div className="hidden lg:grid lg:grid-cols-3 bg-slate-950 text-white divide-x divide-white/10">
              <div className="p-8 text-[11px] font-black uppercase tracking-[0.4em] opacity-40 italic">Technical Protocol</div>
              <div className="p-8 text-[12px] font-black uppercase tracking-[0.4em] text-fuchsia-400 bg-white/5 flex items-center gap-3">
                <Zap size={14} fill="currentColor" /> Ganga Standard
              </div>
              <div className="p-8 text-[12px] font-black uppercase tracking-[0.4em] text-slate-500">Local Market Shop</div>
            </div>

            {/* Feature Rows */}
            {features.map((f, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="grid grid-cols-1 lg:grid-cols-3 bg-white border border-slate-100 lg:border-none rounded-3xl lg:rounded-none group divide-y lg:divide-y-0 lg:divide-x lg:divide-slate-50"
              >
                {/* Feature Info */}
                <div className="p-8 flex items-center gap-6 group-hover:bg-slate-50 transition-colors">
                  <div className="h-12 w-12 rounded-2xl bg-white border border-slate-100 text-violet-600 flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                    {f.icon}
                  </div>
                  <div>
                    <h4 className="text-[13px] font-black text-slate-950 uppercase tracking-tight leading-none mb-2">{f.name}</h4>
                    <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">{f.seo}</p>
                  </div>
                </div>

                {/* Our Advantage */}
                <div className="p-8 flex items-center gap-4 bg-violet-50/20 group-hover:bg-violet-50/40 transition-colors">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-950 text-white shadow-lg">
                    <Check size={12} strokeWidth={4} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-black text-slate-950 uppercase tracking-tight leading-none">{f.corefix}</span>
                    <span className="lg:hidden text-[9px] font-bold text-violet-500 uppercase mt-1">Our Standard</span>
                  </div>
                </div>

                {/* The Market Problem */}
                <div className="p-8 flex items-center gap-4 opacity-60">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-slate-200 text-slate-300">
                    <X size={12} strokeWidth={3} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-slate-400 uppercase tracking-tight leading-none">{f.others}</span>
                    <span className="lg:hidden text-[9px] font-bold text-slate-300 uppercase mt-1">Local Shops</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* SEO Footnote & Disclaimer */}
        <div className="mt-16 bg-slate-50 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-100">
           <div className="flex items-center gap-4">
             <div className="h-8 w-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                <ShieldCheck size={16} />
             </div>
             <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-relaxed">
               * Comparisons based on 2024 market audits in <span className="text-slate-950">Ritchie Street</span> & <span className="text-slate-950">T. Nagar</span>. <br />
               We are an Independent Premium Service Hub.
             </p>
           </div>
           <button className="px-6 py-3 bg-white border border-slate-200 rounded-xl text-[10px] font-black uppercase tracking-widest text-slate-950 hover:bg-slate-950 hover:text-white transition-all shadow-sm">
             Download Quality Report
           </button>
        </div>

      </div>
    </section>
  );
}