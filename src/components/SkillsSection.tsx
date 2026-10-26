import React, { useState } from 'react';
import { Smartphone, Zap, Receipt, Wallet, Check, Sparkles } from 'lucide-react';
import { skillsList, serviceCards } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const [activeCardIndex, setActiveCardIndex] = useState<number | null>(null);

  const getIcon = (name: string) => {
    switch (name) {
      case 'Smartphone':
        return <Smartphone className="w-5 h-5 text-white" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-white fill-amber-400 text-amber-400" />;
      case 'Receipt':
        return <Receipt className="w-5 h-5 text-white" />;
      case 'Wallet':
      default:
        return <Wallet className="w-5 h-5 text-white" />;
    }
  };

  const partners = [
    { name: 'PLN Prabayar & Pasca' },
    { name: 'Telkomsel' },
    { name: 'Indosat Ooredoo' },
    { name: 'XL Axiata & Axis' },
    { name: 'Tri (3)' },
    { name: 'Smartfren' },
    { name: 'DANA & ShopeePay' },
    { name: 'GoPay & OVO' },
    { name: 'BPJS Kesehatan' },
    { name: 'PDAM Nusantara' },
    { name: 'BCA, BRI, Mandiri, BNI' },
  ];

  return (
    <section id="skills" className="relative py-20 md:py-28 overflow-hidden">
      
      {/* Background radial gradient accent */}
      <div
        className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-amber-100/40 rounded-full blur-3xl -z-10 pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Progress Bars & Overview matching mockup */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <span className="text-xs font-semibold tracking-wider uppercase text-amber-600 font-mono-accent">
              Standar & Keunggulan Layanan
            </span>

            <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold font-display text-stone-900 tracking-tight">
              Mengapa Memilih Layanan Aan Maryani?
            </h2>

            <p className="mt-4 text-sm sm:text-base text-stone-600 leading-relaxed">
              Kami memprioritaskan kecepatan dan ketepatan transaksi. Didukung oleh integrasi multi-server pembayaran digital terkemuka di Indonesia, setiap transaksi diproses secara real-time dengan bukti struk resmi yang sah.
            </p>

            {/* Skill / Performance Bars with Tabular Numbers */}
            <div className="mt-8 w-full space-y-5">
              {skillsList.map((skill, idx) => (
                <div key={idx} className="group">
                  <div className="flex justify-between items-center text-xs sm:text-sm font-medium mb-1.5">
                    <span className="text-stone-800 font-semibold group-hover:text-amber-600 transition-colors">
                      {skill.name}
                    </span>
                    <span className="font-mono-accent font-bold text-stone-700 tabular-nums">
                      {skill.level}%
                    </span>
                  </div>

                  {/* Bar Container */}
                  <div className="h-2.5 w-full bg-stone-100 rounded-full overflow-hidden p-0.5 border border-stone-200/60">
                    <div
                      className="h-full bg-gradient-to-r from-amber-400 to-amber-500 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                  <p className="text-[11px] text-stone-400 mt-1 line-clamp-1">
                    {skill.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Supported Networks Tags */}
            <div className="mt-8 pt-6 border-t border-stone-200/80 w-full">
              <span className="text-xs font-semibold text-stone-700 uppercase tracking-wider block mb-2.5">
                Jaringan Operator, Biller & Bank yang Didukung:
              </span>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs text-stone-600">
                {partners.map((p, idx) => (
                  <React.Fragment key={idx}>
                    <span className="font-medium text-stone-800 hover:text-amber-600 transition-colors">
                      {p.name}
                    </span>
                    {idx < partners.length - 1 && <span className="text-stone-300" aria-hidden="true">·</span>}
                  </React.Fragment>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: 2x2 Grid of Raised Service Cards matching mockup */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {serviceCards.map((service, idx) => (
                <div
                  key={idx}
                  onMouseEnter={() => setActiveCardIndex(idx)}
                  onMouseLeave={() => setActiveCardIndex(null)}
                  className={`bg-white p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-lg cursor-default ${
                    activeCardIndex === idx
                      ? 'border-amber-400 -translate-y-1'
                      : 'border-stone-200/80 hover:border-amber-200'
                  }`}
                >
                  <div>
                    {/* Dark Circular Icon Badge matching mockup */}
                    <div className="w-12 h-12 rounded-full bg-[#18181B] flex items-center justify-center mb-5 shadow-sm group-hover:scale-105 group-hover:bg-amber-500 transition-all duration-300">
                      {getIcon(service.iconName)}
                    </div>

                    <h3 className="text-lg font-bold font-display text-stone-900 group-hover:text-amber-600 transition-colors">
                      {service.title}
                    </h3>

                    <p className="mt-2 text-xs text-stone-500 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Service Features list */}
                  <div className="mt-5 pt-4 border-t border-stone-100 space-y-1.5">
                    {service.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs text-stone-600">
                        <Check className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick banner below cards */}
            <div className="mt-5 bg-gradient-to-r from-stone-900 to-stone-800 text-white p-4 rounded-xl flex items-center justify-between shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-amber-400 text-stone-950 flex items-center justify-center shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-semibold">Butuh Transaksi Rutin / Jumlah Besar?</p>
                  <p className="text-[11px] text-stone-400">Tersedia harga khusus reseller dan langganan bulanan tanpa ribet.</p>
                </div>
              </div>
              <a
                href="#contact"
                className="text-xs font-semibold text-amber-400 hover:text-amber-300 underline underline-offset-2 shrink-0 ml-3"
              >
                Daftar sekarang
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
