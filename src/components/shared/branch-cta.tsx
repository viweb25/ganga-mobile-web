"use client";

import { MapPin, Phone, Clock, Navigation, Zap, ExternalLink, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const locations = [
  { 
    name: "Pallikaranai", 
    area: "Velachery Main Rd", 
    phone: "+91 98400 12345", 
    hours: "10AM - 9PM", 
    landmark: "Opp. Balaji Dental College",
    address: "2/21, Velachery Main Rd, Narayanapuram, Pallikaranai, Chennai 600100",
    mapUrl: "https://maps.google.com"
  },
  { 
    name: "Medavakkam", 
    area: "Jalladiampet", 
    phone: "+91 98400 67890", 
    hours: "10AM - 9PM", 
    landmark: "Inside Digibank ATM Building",
    address: "Rice Mill Rd, Jalladiampet, Medavakkam, Chennai 600100",
    mapUrl: "https://maps.google.com"
  },
  { 
    name: "Kandigai", 
    area: "Vandalur - Kelambakkam", 
    phone: "+91 98400 11223", 
    hours: "10AM - 9PM", 
    landmark: "Nellikuppam Road Intersection",
    address: "381, Nellikuppam Road, Melakottaiyur, Kandigai, TN 600127",
    mapUrl: "https://maps.google.com"
  },
];

export default function BranchCTA() {
  return (
    <section className="bg-white py-16 lg:py-32 relative overflow-hidden">
      {/* BACKGROUND ACCENT: Vertical Line Architecture */}
      <div className="absolute top-0 left-6 bottom-0 w-[1px] bg-slate-100 hidden md:block" />
      <div className="absolute top-0 right-6 bottom-0 w-[1px] bg-slate-100 hidden md:block" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* HEADER: Sharp & Bold */}
        <div className="max-w-4xl mb-16 border-l-4 border-slate-950 pl-6 md:pl-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-violet-600 bg-violet-50 px-3 py-1 rounded-sm">
              Live Network
            </span>
          </div>
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.85] text-slate-950 uppercase mb-6">
            LOCATE A <br />
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-slate-950 to-slate-500 underline decoration-violet-600 decoration-4">LABORATORY.</span>
          </h2>
          <p className="text-slate-400 text-xs md:text-sm font-bold uppercase tracking-widest max-w-md">
            Chennai's most certified chip-level hubs. Select your nearest point of contact.
          </p>
        </div>

        {/* BRANCH CARDS: Blueprint Style */}
        <div className="grid gap-12 md:grid-cols-3">
          {locations.map((loc, i) => (
            <motion.div 
              key={loc.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative"
            >
              {/* Card Numbering Accent */}
              <div className="absolute -top-6 -left-2 text-4xl font-black text-slate-50 italic z-0 select-none">
                0{i + 1}
              </div>

              <div className="group relative z-10 bg-white border-2 border-slate-950 p-8 pt-10 rounded-tr-[4rem] rounded-bl-[4rem] transition-all hover:translate-x-2 hover:-translate-y-2 hover:shadow-[12px_12px_0px_0px_rgba(124,58,237,1)]">
                
                {/* Status Indicator */}
                <div className="absolute top-6 right-8 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping" />
                  <span className="text-[8px] font-black uppercase tracking-widest text-slate-400">Open Now</span>
                </div>

                <div className="mb-8">
                  <h3 className="text-3xl font-black text-slate-950 uppercase tracking-tighter mb-1">{loc.name}</h3>
                  <p className="text-[10px] font-black text-violet-600 uppercase tracking-[0.2em] inline-block border-b-2 border-violet-100 pb-1">
                    {loc.area}
                  </p>
                </div>

                <div className="space-y-6 mb-10">
                  <div className="flex gap-4">
                    <div className="shrink-0 h-10 w-10 rounded-xl bg-slate-950 text-white flex items-center justify-center">
                      <MapPin size={20} />
                    </div>
                    <p className="text-[11px] font-bold text-slate-500 leading-relaxed uppercase tracking-tight">
                      {loc.address}
                    </p>
                  </div>

                  <div className="flex items-center gap-4 border-t border-slate-100 pt-6">
                    <Clock size={16} className="text-slate-400" />
                    <span className="text-[10px] font-black text-slate-950 uppercase tracking-widest">{loc.hours}</span>
                  </div>
                </div>

                {/* CALL TO ACTION BUTTON */}
                <a 
                  href={loc.mapUrl}
                  className="group/btn flex items-center justify-between w-full bg-slate-950 text-white p-5 rounded-2xl overflow-hidden relative"
                >
                  <div className="absolute inset-0 bg-violet-600 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
                  <span className="relative z-10 text-[10px] font-black uppercase tracking-[0.2em]">Navigate To Lab</span>
                  <ArrowRight size={18} className="relative z-10 group-hover/btn:translate-x-2 transition-transform" />
                </a>
              </div>

              {/* Decorative Corner Line for Mobile */}
              <div className="absolute -bottom-4 -right-2 h-12 w-12 border-b-2 border-r-2 border-slate-200 -z-10" />
            </motion.div>
          ))}
        </div>

        {/* BOTTOM SEO BAR */}
        <div className="mt-24 border-t-2 border-slate-950 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-6">
            <div className="flex -space-x-3">
              {[1,2,3].map(i => (
                <div key={i} className="h-10 w-10 rounded-full bg-slate-100 border-2 border-white flex items-center justify-center text-[10px] font-black">
                  {i}
                </div>
              ))}
            </div>
            <p className="text-[10px] font-black uppercase tracking-widest text-slate-950">
              3 High-Tech Hubs <span className="text-slate-300 ml-2">/</span> South Chennai
            </p>
          </div>
          <button className="text-[10px] font-black uppercase tracking-[0.3em] text-violet-600 hover:text-slate-950 transition-colors flex items-center gap-3">
             Download Rate Card <ExternalLink size={14} />
          </button>
        </div>
      </div>
    </section>
  );
}