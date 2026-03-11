import BlogCard from "@/components/shared/blog-card";
import { Newspaper, Sparkles } from "lucide-react";

const POSTS = [
  {
    title: "iPhone 15 Screen: Original vs Aftermarket",
    excerpt: "Critical analysis of OLED replacement parts for Chennai users.",
    category: "Technical Lab",
    readTime: "5 MIN",
    slug: "iphone-screen-comparison"
  },
  {
    title: "iCloud Optimization: Software Team Secrets",
    excerpt: "How to manage storage in the Apple ecosystem without monthly fees.",
    category: "Software",
    readTime: "4 MIN",
    slug: "icloud-optimization-tips"
  },
  {
    title: "Humidity Resistance: Glass Performance",
    excerpt: "Testing tempered glass durability in the Chennai coastal climate.",
    category: "Hardware",
    readTime: "3 MIN",
    slug: "best-screen-protectors-chennai"
  }
];

export default function BlogPage() {
  return (
    <main className="bg-white py-24 min-h-screen">
      <div className="container mx-auto px-6">
        
        {/* Header Section */}
        <div className="max-w-4xl mb-24">
          <div className="inline-flex items-center gap-2 border-[3px] border-slate-950 bg-white px-4 py-2 mb-8 shadow-[4px_4px_0px_0px_rgba(124,58,237,1)]">
            <Newspaper size={16} className="text-violet-600" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-950">Laboratory Archives</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-slate-950 leading-[0.85] uppercase mb-10">
            THE REPAIR <br />
            <span className="text-violet-600 italic underline decoration-slate-950 underline-offset-8">JOURNAL.</span>
          </h1>
          
          <p className="text-xl text-slate-500 max-w-2xl font-bold uppercase tracking-tight leading-tight">
            Expert maintenance logs and technical insights from our Chennai specialists. Updated weekly for the local tech community.
          </p>
        </div>

        {/* Vertical Structured Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {POSTS.map((post) => (
            <BlogCard key={post.slug} {...post} />
          ))}
        </div>

        {/* Bottom Subscription CTA */}
        <div className="mt-32 border-t-[3px] border-slate-950 pt-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
           <div className="flex items-center gap-4">
              <div className="h-12 w-12 bg-violet-600 border-[3px] border-slate-950 flex items-center justify-center text-white">
                 <Sparkles size={24} />
              </div>
              <h2 className="text-2xl font-black text-slate-950 uppercase tracking-tighter">Stay Tech Informed.</h2>
           </div>
           <div className="flex w-full md:w-auto gap-2">
              <input 
                type="email" 
                placeholder="EMAIL_ADDRESS" 
                className="flex-1 md:w-80 bg-slate-50 border-[3px] border-slate-950 px-6 py-4 text-xs font-black outline-none focus:bg-white"
              />
              <button className="bg-slate-950 text-white px-8 py-4 font-black text-xs uppercase tracking-widest hover:bg-violet-600 transition-all border-[3px] border-slate-950">
                SUBSCRIBE
              </button>
           </div>
        </div>

      </div>
    </main>
  );
}