import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs font-medium mb-5">
              <span className="inline-flex w-1.5 h-1.5 rounded-full bg-indigo-600" />
              New: AI-powered coaching insights
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Transform your fitness with personalized guidance
            </h1>
            <p className="mt-5 text-lg text-slate-600 max-w-xl">
              Track workouts, get custom plans, and stay motivated with a modern, easy-to-use fitness companion.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-slate-900 text-white font-medium hover:bg-slate-800 transition-colors">
                Contact us
                <ArrowRight size={18} />
              </a>
              <a href="#features" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white text-slate-900 font-medium border border-slate-200 hover:bg-slate-50 transition-colors">
                <Play size={18} />
                See features
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-slate-600">
              <div>
                <span className="font-semibold text-slate-900">120k+</span> workouts tracked
              </div>
              <div>
                <span className="font-semibold text-slate-900">4.9/5</span> user rating
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-tr from-indigo-600 to-purple-600 p-1 shadow-2xl">
              <div className="w-full h-full rounded-2xl bg-white p-6 grid grid-cols-3 gap-4">
                {/* Simplified mock UI card grid to suggest app screens */}
                <div className="col-span-2 space-y-4">
                  <div className="h-40 rounded-xl bg-indigo-100" />
                  <div className="h-20 rounded-xl bg-purple-100" />
                </div>
                <div className="space-y-4">
                  <div className="h-24 rounded-xl bg-slate-100" />
                  <div className="h-40 rounded-xl bg-slate-100" />
                </div>
                <div className="col-span-3 grid grid-cols-3 gap-4">
                  <div className="h-24 rounded-xl bg-slate-100" />
                  <div className="h-24 rounded-xl bg-indigo-100" />
                  <div className="h-24 rounded-xl bg-slate-100" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
