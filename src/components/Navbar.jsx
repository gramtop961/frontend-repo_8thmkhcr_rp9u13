import React from 'react';
import { Dumbbell } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2 font-semibold text-slate-900">
            <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-tr from-indigo-600 to-purple-600 text-white shadow">
              <Dumbbell size={20} />
            </span>
            <span className="text-lg tracking-tight">FitForge</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-600">
            <a href="#features" className="hover:text-slate-900 transition-colors">Features</a>
            <a href="#contact" className="hover:text-slate-900 transition-colors">Contact</a>
            <a href="#pricing" className="hover:text-slate-900 transition-colors">Pricing</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#contact" className="px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:text-slate-900">Sign in</a>
            <a href="#contact" className="px-4 py-2 rounded-md text-sm font-medium text-white bg-slate-900 hover:bg-slate-800 transition-colors">Get started</a>
          </div>

          <button className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-slate-200 text-slate-700" aria-label="Open menu">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
