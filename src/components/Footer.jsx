import React from 'react';

const Footer = () => {
  return (
    <footer className="py-10 border-t border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-600">
        <p>© {new Date().getFullYear()} FitForge. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <a href="#features" className="hover:text-slate-900">Features</a>
          <a href="#contact" className="hover:text-slate-900">Contact</a>
          <a href="#" className="hover:text-slate-900">Privacy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
