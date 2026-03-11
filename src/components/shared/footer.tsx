"use client";

import Link from "next/link";
import { Zap, Instagram, Facebook, Youtube, ShieldCheck, MapPin, ArrowUpRight, Phone, MessageSquare } from "lucide-react";

export default function Footer() {
  const branches = ["Adyar", "T. Nagar", "Velachery", "Anna Nagar"];
  
  return (
    <footer className="bg-white border-t-2 border-slate-950 pt-20 pb-10 overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* --- MAIN GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mb-20">
          
          {/* 1. BRAND ARCHITECTURE (4 Cols) */}
          <div className="lg:col-span-4 space-y-8">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 bg-slate-950 text-fuchsia-400 rounded-2xl flex items-center justify-center border-2 border-slate-950 shadow-[4px_4px_0px_0px_rgba(124,58,237,1)]">
                <Zap size={24} fill="currentColor" />
              </div>
              <div>
                <span className="text-2xl font-black tracking-tighter text-slate-950 block leading-none">COREFIX.</span>
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-violet-600">Restoration Lab</span>
              </div>
            </div>
            
            <p className="text-slate-500 text-xs font-bold uppercase tracking-tight leading-relaxed max-w-sm">
              Chennai's premier L3 restoration facility. Specializing in logic board microsoldering, original display calibration, and data recovery for Apple & Samsung flagship devices.
            </p>

            <div className="flex gap-3">
              {[
                { icon: Instagram, label: "IG" },
                { icon: Facebook, label: "FB" },
                { icon: Youtube, label: "YT" }
              ].map((item, i) => (
                <button key={i} className="h-12 w-12 rounded-xl border-2 border-slate-100 flex items-center justify-center text-slate-950 hover:bg-slate-950 hover:text-white hover:border-slate-950 transition-all duration-300 group">
                  <item.icon size={18} className="group-hover:scale-110 transition-transform" />
                </button>
              ))}
            </div>
          </div>

          {/* 2. SERVICES & NAVIGATION (4 Cols) */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-8">
            <div>
              <h4 className="font-black text-slate-950 mb-8 uppercase text-[10px] tracking-[0.3em] flex items-center gap-2">
                <div className="h-1 w-4 bg-violet-600" /> Services
              </h4>
              <ul className="space-y-4 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
                <li><Link href="/services/iphone" className="hover:text-violet-600 flex items-center gap-2 group">iPhone Repair <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
                <li><Link href="/services/macbook" className="hover:text-violet-600 flex items-center gap-2 group">MacBook Lab <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
                <li><Link href="/services/data" className="hover:text-violet-600 flex items-center gap-2 group">Data Recovery <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
                <li><Link href="/shop" className="hover:text-violet-600 flex items-center gap-2 group">OEM Spares <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-black text-slate-950 mb-8 uppercase text-[10px] tracking-[0.3em] flex items-center gap-2">
                <div className="h-1 w-4 bg-fuchsia-600" /> Company
              </h4>
              <ul className="space-y-4 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
                <li><Link href="/track" className="hover:text-slate-950 underline decoration-violet-200 decoration-2 underline-offset-4">Track Status</Link></li>
                <li><Link href="/warranty" className="hover:text-slate-950">Warranty Policy</Link></li>
                <li><Link href="/about" className="hover:text-slate-950">Our Process</Link></li>
                <li><Link href="/contact" className="hover:text-slate-950">Support</Link></li>
              </ul>
            </div>
          </div>

          {/* 3. CONTACT & HUB INFO (4 Cols) */}
          <div className="lg:col-span-4">
            <div className="bg-slate-50 border-2 border-slate-950 rounded-[2rem] p-8 relative overflow-hidden group">
              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-slate-950 rounded-bl-[2rem] flex items-center justify-center text-white">
                <MessageSquare size={20} />
              </div>

              <h4 className="font-black text-slate-950 mb-6 uppercase text-[10px] tracking-[0.3em]">Direct Support</h4>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 bg-white border border-slate-200 rounded-xl flex items-center justify-center text-violet-600 shadow-sm">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Chennai Helpline</p>
                    <p className="text-sm font-black text-slate-950">+91 98400 12345</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 bg-white border border-slate-200 rounded-xl flex items-center justify-center text-fuchsia-600 shadow-sm">
                    <ShieldCheck size={18} />
                  </div>
                  <div>
                    <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Global Warranty</p>
                    <p className="text-sm font-black text-slate-950">12-Month Coverage</p>
                  </div>
                </div>
              </div>

              <button className="mt-8 w-full bg-slate-950 text-white py-4 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] hover:bg-violet-600 transition-colors">
                Book A Diagnostic
              </button>
            </div>
          </div>
        </div>

        {/* --- BRANCH CHIPS (Responsive Mobile Scroller) --- */}
        <div className="flex flex-wrap gap-2 mb-12 py-6 border-y border-slate-100">
          <span className="text-[9px] font-black uppercase text-slate-400 tracking-[0.3em] mr-4 self-center">Our Hubs:</span>
          {branches.map(city => (
            <Link 
              key={city} 
              href={`/branch/${city.toLowerCase()}`}
              className="px-4 py-2 border border-slate-200 rounded-full text-[9px] font-black uppercase tracking-widest text-slate-950 hover:border-slate-950 hover:bg-slate-50 transition-all"
            >
              {city} Studio
            </Link>
          ))}
        </div>

        {/* --- BOTTOM LEGAL --- */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <p className="text-[9px] font-black text-slate-400 uppercase tracking-[0.4em]">
              © 2026 COREFIX MOBILE SOLUTIONS PVT LTD.
            </p>
          </div>
          
          <div className="flex gap-8 text-[9px] font-black text-slate-400 uppercase tracking-widest">
            <Link href="/privacy" className="hover:text-slate-950">Privacy</Link>
            <Link href="/terms" className="hover:text-slate-950">Terms</Link>
            <Link href="/sitemap" className="hover:text-slate-950">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}