import BookingForm from "@/components/shared/booking-form";
import { MessageSquare, ShieldCheck, Zap } from "lucide-react";

export default function BookPage() {
  return (
    <section className="py-20 lg:py-32 bg-white min-h-screen">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          
          {/* Left Side: Trust & Info */}
          <div>
            <h1 className="text-6xl font-black tracking-tighter text-slate-950 mb-8">
              Book Your <br />
              <span className="text-emerald-500">Express Repair.</span>
            </h1>
            
            <div className="space-y-8 mt-12">
              <div className="flex gap-6">
                <div className="h-12 w-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                  <Zap size={24} fill="currentColor" />
                </div>
                <div>
                  <h4 className="font-black text-lg text-slate-950 uppercase tracking-tight">30-Min Turnaround</h4>
                  <p className="text-slate-500">Most screen and battery repairs are done while you wait at our lounge.</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="h-12 w-12 rounded-2xl bg-slate-100 text-slate-900 flex items-center justify-center shrink-0">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h4 className="font-black text-lg text-slate-950 uppercase tracking-tight">Genuine Parts Only</h4>
                  <p className="text-slate-500">We only use OEM-grade parts with a 1-year global COREFIX warranty.</p>
                </div>
              </div>
            </div>

            <div className="mt-16 p-8 rounded-[2rem] bg-slate-50 border border-slate-100 flex items-center gap-6">
               <div className="p-4 bg-white rounded-full shadow-sm">
                 <MessageSquare className="text-emerald-500" />
               </div>
               <div>
                 <p className="text-sm font-bold text-slate-400 uppercase">WhatsApp Support</p>
                 <p className="text-xl font-black text-slate-950">+91 98XXX XXXXX</p>
               </div>
            </div>
          </div>

          {/* Right Side: The Form Box */}
          <div className="bg-white rounded-[3rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] p-8 md:p-12 border border-slate-50">
            <BookingForm />
          </div>

        </div>
      </div>
    </section>
  );
}