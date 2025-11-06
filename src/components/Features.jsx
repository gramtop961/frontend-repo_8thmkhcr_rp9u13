import React from 'react';
import { Activity, Clock, ShieldCheck, Sparkles } from 'lucide-react';

const features = [
  {
    icon: Activity,
    title: 'Smart Workout Tracking',
    desc: 'Log sets and reps in seconds, track PRs, and visualize your progress over time.',
  },
  {
    icon: Clock,
    title: 'Adaptive Plans',
    desc: 'Personalized programs that adjust based on performance and recovery insights.',
  },
  {
    icon: ShieldCheck,
    title: 'Form & Safety',
    desc: 'Tips and video cues to help maintain proper form and prevent injuries.',
  },
  {
    icon: Sparkles,
    title: 'Motivation Engine',
    desc: 'Streaks, badges, and reminders to keep you consistent and engaged.',
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Everything you need to crush your goals</h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
            A modern, intuitive experience designed to make every workout efficient and rewarding.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-flex w-11 h-11 items-center justify-center rounded-lg bg-indigo-600 text-white shadow group-hover:scale-105 transition-transform">
                <Icon size={20} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
