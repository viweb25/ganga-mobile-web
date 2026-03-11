import { MapPin, Phone, Clock, ShieldCheck } from "lucide-react";
import { notFound } from "next/navigation";

// This simulates your branch database
const branchData: Record<string, any> = {
  "adyar": { name: "Adyar", address: "123 Gandhi Nagar, Adyar, Chennai 600020", phone: "+91 98400 12345" },
  "t-nagar": { name: "T. Nagar", address: "45 Pondy Bazaar, T. Nagar, Chennai 600017", phone: "+91 98400 54321" },
  "velachery": { name: "Velachery", address: "78 Bypass Road, Velachery, Chennai 600042", phone: "+91 98400 67890" },
  "anna-nagar": { name: "Anna Nagar", address: "12 2nd Avenue, Anna Nagar, Chennai 600040", phone: "+91 98400 09876" },
};

export default function BranchPage({ params }: { params: { slug: string } }) {
  const branch = branchData[params.slug];

  if (!branch) notFound();

  return (
    <div className="min-h-screen bg-white py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl">
          <h1 className="text-6xl font-black tracking-tighter text-slate-950 mb-4">
            COREFIX <span className="text-emerald-500">{branch.name}</span>
          </h1>
          <p className="text-xl text-slate-500 mb-12">Chennai's #1 Premium Repair Hub for {branch.name} Residents.</p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100">
              <MapPin className="text-emerald-500 mb-4" size={32} />
              <h3 className="font-black text-xl mb-2">Visit Us</h3>
              <p className="text-slate-600 font-medium">{branch.address}</p>
            </div>
            <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100">
              <Phone className="text-emerald-500 mb-4" size={32} />
              <h3 className="font-black text-xl mb-2">Call Clinic</h3>
              <p className="text-slate-600 font-medium text-2xl">{branch.phone}</p>
            </div>
          </div>
          
          <div className="bg-slate-950 text-white p-10 rounded-[3rem] flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl font-black mb-2">Ready to fix?</h2>
              <p className="text-slate-400">Average wait time in {branch.name} today: <span className="text-emerald-400 font-bold">22 Mins</span></p>
            </div>
            <button className="bg-emerald-500 text-slate-950 px-10 py-4 rounded-full font-black hover:bg-emerald-400 transition-colors">
              BOOK AN APPOINTMENT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}