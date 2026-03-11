"use client";
import { useState } from "react";
import { Menu, X, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function MobileMenu({ items }: { items: any[] }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button onClick={() => setIsOpen(true)} className="rounded-xl bg-slate-100 p-3 text-slate-950">
        <Menu size={24} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsOpen(false)} className="fixed inset-0 z-[60] bg-slate-950/20 backdrop-blur-md" />
            <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} className="fixed right-0 top-0 z-[70] h-full w-[85%] bg-white p-10 shadow-2xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Zap className="text-emerald-500" fill="currentColor" />
                  <span className="font-black text-slate-950">COREFIX</span>
                </div>
                <button onClick={() => setIsOpen(false)} className="rounded-full bg-slate-100 p-2"><X size={24} /></button>
              </div>
              
              <nav className="mt-16 flex flex-col gap-8">
                {items.map((item) => (
                  <Link key={item.name} href={item.href} onClick={() => setIsOpen(false)} className="text-4xl font-black tracking-tighter text-slate-900 hover:text-emerald-500">
                    {item.name}
                  </Link>
                ))}
                <Link href="/book" onClick={() => setIsOpen(false)} className="mt-10 rounded-2xl bg-emerald-500 py-6 text-center text-xl font-black text-white">
                  BOOK NOW
                </Link>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}