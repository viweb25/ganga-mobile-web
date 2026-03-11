"use client";

import { useState, useMemo } from "react";
import { Plus, Star, Smartphone, Zap, Headphones, Watch, Shield, Search, ShoppingCart, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const CATEGORIES = ["All Gear", "MagSafe", "Protection", "Power", "Audio"];

const PRODUCTS = [
  { id: 1, name: "Aramid Fiber Case", price: 3499, cat: "Protection", icon: <Shield size={32} />, tag: "Best Seller" },
  { id: 2, name: "GaN 120W Ultra", price: 5200, cat: "Power", icon: <Zap size={32} />, tag: "New Arrival" },
  { id: 3, name: "Sonic Zenith Pro", price: 12999, cat: "Audio", icon: <Headphones size={32} />, tag: "Limited" },
  { id: 4, name: "Titanium Link Band", price: 4500, cat: "Accessories", icon: <Watch size={32} />, tag: "Premium" },
  { id: 5, name: "MagSafe Lux Pad", price: 2800, cat: "MagSafe", icon: <Zap size={32} />, tag: "Certified" },
  { id: 6, name: "Liquid Silicone", price: 1100, cat: "Protection", icon: <Smartphone size={32} />, tag: "Essential" },
];

export default function ProductGrid() {
  const [activeTab, setActiveTab] = useState("All Gear");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      const matchesCat = activeTab === "All Gear" || p.cat === activeTab;
      const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCat && matchesSearch;
    });
  }, [activeTab, searchQuery]);

  return (
    <div className="space-y-12">
      
      {/* --- SEARCH & CATEGORY BAR --- */}
      <div className="flex flex-col lg:flex-row gap-6 items-center">
        <div className="relative w-full lg:w-96 group">
          <input 
            type="text"
            placeholder="Search Chennai Inventory..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-50 border-2 border-slate-950 rounded-2xl py-4 px-6 text-xs font-black uppercase tracking-widest outline-none focus:ring-4 focus:ring-violet-100 transition-all"
          />
          <Search className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
        </div>
        
        <div className="flex gap-3 overflow-x-auto no-scrollbar w-full">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] border-2 transition-all whitespace-nowrap ${
                activeTab === cat 
                  ? "bg-slate-950 text-white border-slate-950 shadow-xl" 
                  : "bg-white border-slate-100 text-slate-400 hover:border-slate-950 hover:text-slate-950"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* --- SEPARATE CARDS GRID --- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProducts.map((product) => (
            <motion.div
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              key={product.id}
              className="group bg-white border-2 border-slate-950 rounded-[2.5rem] p-4 hover:shadow-[20px_20px_0px_0px_rgba(124,58,237,0.1)] transition-all duration-500 flex flex-col"
            >
              {/* Image Container with Inner Frame */}
              <div className="relative aspect-square bg-slate-50 rounded-[2rem] border-2 border-slate-950/5 overflow-hidden flex items-center justify-center group-hover:bg-violet-50 transition-colors">
                <div className="absolute top-4 left-4">
                   <span className="bg-slate-950 text-white text-[7px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
                     {product.tag}
                   </span>
                </div>
                
                <div className="text-slate-900 group-hover:scale-110 group-hover:rotate-6 transition-all duration-700">
                  {product.icon}
                </div>

                <button className="absolute bottom-4 right-4 h-10 w-10 bg-white border-2 border-slate-950 rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all">
                  <ArrowUpRight size={18} className="text-slate-950" />
                </button>
              </div>

              {/* Product Info */}
              <div className="px-4 py-6 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="text-[10px] font-black text-violet-600 uppercase tracking-widest mb-1">{product.cat}</p>
                    <h3 className="text-lg font-black text-slate-950 tracking-tighter uppercase leading-tight group-hover:text-violet-600 transition-colors">
                      {product.name}
                    </h3>
                  </div>
                </div>

                {/* Footer with Price and Action */}
                <div className="mt-auto pt-6 flex items-center justify-between border-t border-slate-100">
                  <div>
                    <p className="text-[8px] font-black text-slate-400 uppercase mb-1">Price Point</p>
                    <p className="text-xl font-black text-slate-950">₹{product.price.toLocaleString()}</p>
                  </div>
                  
                  <button className="h-14 w-14 bg-slate-950 text-white rounded-2xl flex items-center justify-center hover:bg-violet-600 shadow-lg shadow-slate-200 transition-all active:scale-90">
                    <ShoppingCart size={20} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Empty State */}
      {filteredProducts.length === 0 && (
        <div className="py-20 text-center bg-slate-50 rounded-[3rem] border-2 border-dashed border-slate-200">
          <h3 className="text-xl font-black text-slate-400 uppercase italic">No gear matches your search</h3>
        </div>
      )}
    </div>
  );
}