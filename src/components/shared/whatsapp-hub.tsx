"use client";

import { MessageCircle, X, Smartphone, ShieldAlert, Cpu, MapPin, Navigation } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function WhatsAppHub() {
  const [isOpen, setIsOpen] = useState(false);

  const branches = [
    { 
      name: "Pallikaranai (Main)", 
      address: "Opp. Balaji Dental College",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=2/21,+Velachery+Main+Rd,+Narayanapuram,+Pallikaranai,+Chennai"
    },
    { 
      name: "Medavakkam Hub", 
      address: "Rice Mill Rd (Digibank ATM)",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Rice+Mill+Rd,+Jalladiampet,+Medavakkam,+Chennai"
    },
    { 
      name: "Kandigai Branch", 
      address: "Kelambakkam - Vandalur Rd",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=381,+Nellikuppam+Road,+Kandigai,+Tamil+Nadu"
    }
  ];

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="mb-4 w-80 bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-slate-100 overflow-hidden"
          >
            {/* CLEAN LIGHT HEADER */}
            <div className="bg-emerald-50 p-6 border-b border-emerald-100">
              <div className="flex items-center gap-2 mb-1">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-600 text-shadow-sm">Ganga Support Live</p>
              </div>
              <h4 className="text-xl font-black text-slate-900 tracking-tighter uppercase">How can we help?</h4>
            </div>

            <div className="p-4 space-y-4 max-h-[400px] overflow-y-auto custom-scrollbar">
              
              {/* SERVICE SECTION */}
              <div>
                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-2 mb-2">Quick Chat</p>
                <div className="grid grid-cols-1 gap-2">
                  <a
                    href="https://wa.me/9198XXXXXXXX?text=I need a repair quote"
                    target="_blank"
                    className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50 hover:bg-emerald-500 hover:text-white transition-all group border border-slate-100"
                  >
                    <div className="h-10 w-10 rounded-xl bg-white flex items-center justify-center text-emerald-600 shadow-sm group-hover:bg-emerald-400 group-hover:text-white">
                      <MessageCircle size={18} />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-tight">Chat with Expert</span>
                  </a>
                </div>
              </div>

              {/* BRANCH LOCATIONS SECTION */}
              <div>
                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-2 mb-2">Visit our Chennai Hubs</p>
                <div className="space-y-2">
                  {branches.map((branch, i) => (
                    <a
                      key={i}
                      href={branch.mapUrl}
                      target="_blank"
                      className="flex items-start gap-3 p-3 rounded-2xl border border-slate-50 hover:border-violet-200 hover:bg-violet-50 transition-all group"
                    >
                      <div className="h-10 w-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-white group-hover:text-violet-600 shrink-0 transition-colors">
                        <Navigation size={18} />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[11px] font-black text-slate-900 uppercase leading-none mb-1">{branch.name}</span>
                        <span className="text-[9px] font-bold text-slate-500 uppercase leading-tight">{branch.address}</span>
                        <span className="text-[8px] font-black text-violet-500 uppercase mt-2 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                          Open in Maps <Navigation size={8} />
                        </span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* FOOTER */}
            <div className="p-4 bg-slate-50 border-t border-slate-100 flex justify-center">
               <p className="text-[8px] font-bold text-slate-400 uppercase tracking-widest">Chennai's Trusted Repair Network</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* THE MAIN TOGGLE BUTTON */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`h-16 w-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 ${
          isOpen ? 'bg-slate-900 text-white rotate-90' : 'bg-emerald-500 text-white shadow-emerald-200'
        }`}
      >
        {isOpen ? <X size={28} /> : <MessageCircle size={28} fill="currentColor" />}
      </button>
    </div>
  );
}