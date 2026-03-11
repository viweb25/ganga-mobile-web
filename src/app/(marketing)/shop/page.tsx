"use client";

import ProductGrid from "@/components/shared/product-grid";
import { Sparkles, ShieldCheck, Truck, RotateCcw } from "lucide-react";

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-white pt-24 pb-32">
      <div className="container mx-auto px-6">
        
        {/* --- DYNAMIC HEADER --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-slate-50 border border-slate-200 px-4 py-1.5 rounded-full mb-6">
              <Sparkles size={14} className="text-violet-600" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">Premium Inventory</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-slate-950 leading-[0.9] uppercase">
              SELECT <br />
              <span className="bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent italic">EQUIPMENT.</span>
            </h1>
          </div>
          
          <div className="hidden lg:flex items-center gap-8 pb-2">
            {[
              { icon: <ShieldCheck size={18} />, label: "Certified OEM" },
              { icon: <Truck size={18} />, label: "Express Delivery" },
              { icon: <RotateCcw size={18} />, label: "Easy Returns" },
            ].map((trait, i) => (
              <div key={i} className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400">
                <span className="text-violet-600">{trait.icon}</span>
                {trait.label}
              </div>
            ))}
          </div>
        </div>

        {/* --- MAIN PRODUCT INTERFACE --- */}
        <ProductGrid />

      </div>
    </main>
  );
}