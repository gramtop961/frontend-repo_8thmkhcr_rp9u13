import React, { useState } from 'react';
import { Mail, Phone, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Thanks! We\'ll get back to you shortly.');
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Let\'s talk</h2>
            <p className="mt-3 text-slate-600">Have questions about plans, features, or partnerships? Send us a message and our team will reach out.</p>

            <div className="mt-8 space-y-4 text-slate-700">
              <div className="flex items-center gap-3">
                <span className="inline-flex w-10 h-10 items-center justify-center rounded-lg bg-indigo-100 text-indigo-700"><Mail size={18} /></span>
                support@fitforge.app
              </div>
              <div className="flex items-center gap-3">
                <span className="inline-flex w-10 h-10 items-center justify-center rounded-lg bg-indigo-100 text-indigo-700"><Phone size={18} /></span>
                +1 (555) 012-3456
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700">First name</label>
                <input required type="text" className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Jane" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Last name</label>
                <input required type="text" className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Doe" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-slate-700">Email</label>
                <input required type="email" className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="jane@company.com" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-slate-700">Message</label>
                <textarea required rows="4" className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Tell us what you\'re looking for..." />
              </div>
            </div>
            <button type="submit" className="mt-4 inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-slate-900 text-white font-medium hover:bg-slate-800 transition-colors">
              <MessageSquare size={18} />
              Send message
            </button>
            {status && <p className="mt-3 text-sm text-green-700">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
