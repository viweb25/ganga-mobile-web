import Link from "next/link";
import { ShieldCheck, Search, Zap, Mail, Phone, MessageSquare } from "lucide-react";
import MobileMenu from "../shared/mobile-menu";

const navItems = [
  { name: "Services", href: "/services/" },
  { name: "Track Repair", href: "/track/" },
  { name: "Premium Shop", href: "/shop/" },
  { name: "Expert Blog", href: "/blog/" },
  { name: "Our Hubs", href: "/#branches" },
];

export default function Header() {
  return (
    <div className="fixed top-0 z-50 w-full">
      {/* --- SMALL TOP BAR --- */}
      <div className="w-full bg-slate-950 py-2 px-6">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            {/* Email */}
            <a 
              href="mailto:info@gangamobiles.com" 
              className="flex items-center gap-2 text-[10px] font-bold text-slate-400 hover:text-white transition-colors uppercase tracking-widest"
            >
              <Mail size={12} className="text-violet-400" />
              <span className="hidden sm:inline">info@gangamobiles.com</span>
            </a>
            
            {/* Phone */}
            <a 
              href="tel:+919876543210" 
              className="flex items-center gap-2 text-[10px] font-bold text-slate-400 hover:text-white transition-colors uppercase tracking-widest"
            >
              <Phone size={12} className="text-violet-400" />
              <span className="hidden sm:inline">+91 98765 43210</span>
            </a>
          </div>

          {/* WhatsApp Support */}
          <a 
            href="https://wa.me/919876543210" 
            target="_blank"
            className="flex items-center gap-2 text-[10px] font-black text-fuchsia-400 hover:text-white transition-colors uppercase tracking-widest"
          >
            <MessageSquare size={12} />
            Support <span className="hidden xs:inline">Online</span>
          </a>
        </div>
      </div>

      {/* --- MAIN NAVIGATION --- */}
      <header className="w-full border-b border-slate-50 bg-white/80 backdrop-blur-xl">
        <div className="container mx-auto flex h-20 items-center justify-between px-6">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950 text-white transition-all group-hover:bg-violet-600 group-hover:scale-105">
              <Zap size={20} fill="currentColor" className="text-fuchsia-400" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-xl font-black tracking-tighter text-slate-950 uppercase">
                Ganga<span className="bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent">Mobiles</span>
              </span>
              <span className="text-[8px] font-black uppercase tracking-[0.4em] text-slate-400">Chennai</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-4 py-2 text-[11px] font-black uppercase tracking-[0.2em] text-slate-500 transition-all hover:text-violet-600"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <button className="hidden h-10 w-10 items-center justify-center rounded-xl text-slate-400 hover:bg-slate-50 hover:text-violet-600 transition-colors lg:flex">
              <Search size={18} />
            </button>
            
            <div className="h-6 w-px bg-slate-100 mx-2 hidden lg:block" />

            <Link 
              href="/book/" 
              className="hidden rounded-2xl bg-slate-950 px-7 py-3.5 text-[11px] font-black uppercase tracking-widest text-white transition-all hover:bg-violet-600 hover:shadow-xl hover:shadow-violet-100 active:scale-95 md:block"
            >
              Get Estimate
            </Link>

            <div className="lg:hidden">
              <MobileMenu items={navItems} />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}