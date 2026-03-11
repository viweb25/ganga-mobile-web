import Hero from "@/components/shared/hero";
import BrandSlider from "@/components/shared/brand-slider";
import ServicesGrid from "@/components/shared/services-grid";
import PremiumOfferings from "@/components/shared/premium-offerings";
import BranchCTA from "@/components/shared/branch-cta";
import ComparisonTable from "@/components/shared/comparison-table";
import WhatsAppHub from "@/components/shared/whatsapp-hub";
import LeadCalculator from "@/components/shared/lead-calculator";
import StatusTracker from "@/components/shared/status-tracker"; // New Import
import { Activity } from "lucide-react";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <BrandSlider />
      
      <div id="services">
        <ServicesGrid />
      </div>

        {/* Interactive Zone: Calculate Price -> Then Track Progress */}
      <div className="bg-slate-50 py-24 border-y-[3px] border-slate-950">
        <div className="container mx-auto px-6">
          <LeadCalculator />
          
          <div className="mt-32">
            <div className="flex flex-col items-center text-center mb-12">
              <div className="inline-flex items-center gap-2 border-2 border-slate-950 bg-white px-4 py-2 mb-6 shadow-[4px_4px_0px_0px_rgba(124,58,237,1)]">
                <Activity size={16} className="text-violet-600 animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-950">Live Lab Systems</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-slate-950 uppercase">
                TRACK YOUR <span className="text-violet-600 italic">LIVE</span> REPAIR
              </h2>
            </div>
            
            {/* The Tracker Component */}
            <StatusTracker />
          </div>
        </div>
      </div>

      <ComparisonTable />
      
    

      <PremiumOfferings />
      <WhatsAppHub />

      <div id="branches">
        <BranchCTA />
      </div>
    </main>
  );
}