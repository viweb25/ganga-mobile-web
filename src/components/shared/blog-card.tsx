"use client";

import { ArrowUpRight, Clock, BookOpen } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

interface PostProps {
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  slug: string;
}

export default function BlogCard({ title, excerpt, category, readTime, slug }: PostProps) {
  return (
    <Link href={`/blog/${slug}`} className="group block">
      <motion.div 
        whileHover={{ y: -8 }}
        className="h-full bg-white border-[3px] border-slate-950 p-8 transition-all hover:shadow-[8px_8px_0px_0px_rgba(124,58,237,1)] flex flex-col"
      >
        {/* Top Meta Info */}
        <div className="flex justify-between items-center mb-8 pb-4 border-b border-slate-100">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-violet-600">
            {category}
          </span>
          <div className="flex items-center gap-2 text-slate-400 text-[9px] font-black uppercase tracking-widest">
            <Clock size={12} strokeWidth={3} /> {readTime}
          </div>
        </div>
        
        {/* Content Section */}
        <div className="flex-grow">
          <h3 className="text-2xl font-black text-slate-950 mb-4 group-hover:text-violet-600 transition-colors leading-[1.1] uppercase tracking-tighter">
            {title}
          </h3>
          
          <p className="text-slate-500 text-sm font-bold leading-snug mb-8 uppercase tracking-tight">
            {excerpt}
          </p>
        </div>

        {/* Action Bottom Bar */}
        <div className="mt-auto pt-6 border-t-2 border-slate-950 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BookOpen size={16} className="text-violet-600" />
            <span className="text-[10px] font-black text-slate-950 uppercase tracking-[0.2em]">Read Report</span>
          </div>
          <div className="h-10 w-10 bg-slate-950 text-white flex items-center justify-center transition-all group-hover:bg-violet-600 group-hover:rotate-12">
            <ArrowUpRight size={20} strokeWidth={3} />
          </div>
        </div>
      </motion.div>
    </Link>
  );
}