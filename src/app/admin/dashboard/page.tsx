"use client";

import { useState } from "react";
import { Wrench, CheckCircle2, Clock, Plus, Trash2, Save } from "lucide-react";
import { motion } from "framer-motion";

// This would eventually be replaced by a database like Supabase
const INITIAL_REPAIRS = [
  { id: "LAB-8821", name: "Rahul Krishna", phone: "9884012345", device: "iPhone 15 Pro", status: "Repairing", step: 2, update: "Screen calibration in progress." },
  { id: "LAB-9002", name: "Priya Mani", phone: "9840055667", device: "MacBook Air M2", status: "Ready", step: 3, update: "Liquid damage fully repaired." }
];

export default function AdminDashboard() {
  const [repairs, setRepairs] = useState(INITIAL_REPAIRS);

  const updateStatus = (id: string, newStep: number, label: string) => {
    setRepairs(repairs.map(r => 
      r.id === id ? { ...r, step: newStep, status: label } : r
    ));
  };

  return (
    <main className="min-h-screen bg-[#fcfdfe] pt-24 pb-32">
      <div className="container mx-auto px-6">
        
        {/* DASHBOARD HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 border-[3px] border-slate-950 bg-violet-600 text-white px-3 py-1 mb-4">
              <span className="text-[10px] font-black uppercase tracking-widest">Admin Access Only</span>
            </div>
            <h1 className="text-5xl font-black tracking-tighter text-slate-950 uppercase">
              LAB CONTROL <span className="text-violet-600">CENTER.</span>
            </h1>
          </div>
          <button className="bg-slate-950 text-white border-[3px] border-slate-950 px-8 py-4 font-black text-xs uppercase tracking-widest hover:bg-violet-600 transition-all flex items-center gap-2">
            <Plus size={18} strokeWidth={3} /> NEW ENTRY
          </button>
        </div>

        {/* REPAIR MANAGEMENT TABLE */}
        <div className="border-[3px] border-slate-950 bg-white overflow-x-auto shadow-[12px_12px_0px_0px_rgba(0,0,0,0.1)]">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b-[3px] border-slate-950 bg-slate-50">
                <th className="p-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Client / ID</th>
                <th className="p-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Device</th>
                <th className="p-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Current Phase</th>
                <th className="p-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Internal Update</th>
                <th className="p-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Actions</th>
              </tr>
            </thead>
            <tbody>
              {repairs.map((repair) => (
                <tr key={repair.id} className="border-b-2 border-slate-100 hover:bg-slate-50 transition-colors">
                  {/* CLIENT INFO */}
                  <td className="p-6">
                    <p className="text-xs font-black text-slate-950 uppercase">{repair.name}</p>
                    <p className="text-[10px] font-bold text-violet-600 mt-1">{repair.id} • {repair.phone}</p>
                  </td>

                  {/* DEVICE */}
                  <td className="p-6">
                    <span className="px-3 py-1 bg-slate-100 border border-slate-200 text-[10px] font-black uppercase">
                      {repair.device}
                    </span>
                  </td>

                  {/* PHASE CONTROL */}
                  <td className="p-6">
                    <div className="flex gap-2">
                      <button 
                        onClick={() => updateStatus(repair.id, 1, "Received")}
                        className={`p-2 border-2 ${repair.step === 1 ? 'bg-slate-950 border-slate-950 text-white' : 'border-slate-200 text-slate-200 hover:border-slate-400'}`}
                      >
                        <Clock size={16} />
                      </button>
                      <button 
                        onClick={() => updateStatus(repair.id, 2, "Repairing")}
                        className={`p-2 border-2 ${repair.step === 2 ? 'bg-violet-600 border-slate-950 text-white' : 'border-slate-200 text-slate-200 hover:border-slate-400'}`}
                      >
                        <Wrench size={16} />
                      </button>
                      <button 
                        onClick={() => updateStatus(repair.id, 3, "Ready")}
                        className={`p-2 border-2 ${repair.step === 3 ? 'bg-emerald-500 border-slate-950 text-white' : 'border-slate-200 text-slate-200 hover:border-slate-400'}`}
                      >
                        <CheckCircle2 size={16} />
                      </button>
                    </div>
                  </td>

                  {/* INTERNAL UPDATE TEXT */}
                  <td className="p-6">
                    <input 
                      type="text" 
                      defaultValue={repair.update}
                      className="w-full bg-slate-50 border-2 border-slate-100 p-2 text-[11px] font-bold uppercase focus:border-violet-600 outline-none"
                    />
                  </td>

                  {/* DELETE / SAVE */}
                  <td className="p-6">
                    <div className="flex gap-2">
                      <button className="p-2 text-slate-400 hover:text-violet-600"><Save size={18} /></button>
                      <button className="p-2 text-slate-400 hover:text-red-600"><Trash2 size={18} /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ANALYTICS PREVIEW */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="border-[3px] border-slate-950 p-6 bg-white">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Active Tickets</p>
                <p className="text-4xl font-black text-slate-950 mt-2">14</p>
            </div>
            <div className="border-[3px] border-slate-950 p-6 bg-white">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Pending Parts</p>
                <p className="text-4xl font-black text-violet-600 mt-2">03</p>
            </div>
            <div className="border-[3px] border-slate-950 p-6 bg-white">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Ready for Delivery</p>
                <p className="text-4xl font-black text-emerald-500 mt-2">08</p>
            </div>
        </div>

      </div>
    </main>
  );
}