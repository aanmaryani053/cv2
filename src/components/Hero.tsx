import React from 'react';
import { ArrowRight, PhoneCall, Zap, ShieldCheck, Clock, MessageSquare, CheckCircle2 } from 'lucide-react';
import { ProfileData } from '../data/portfolioData';

interface HeroProps {
  profile: ProfileData;
  onOpenCV: () => void;
}

export const Hero: React.FC<HeroProps> = ({ profile, onOpenCV }) => {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Background Watermark matching mockup */}
      <div
        className="absolute top-12 left-4 md:left-20 text-[100px] md:text-[160px] lg:text-[200px] font-handwriting font-bold text-stone-200/40 select-none pointer-events-none -z-10 leading-none"
        aria-hidden="true"
      >
        {profile.nickname || 'Aan'}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Topographic Organic Badge & Content */}
          <div className="lg:col-span-7 flex flex-col items-start relative z-10">
            
            {/* Topographic Contour Organic Graphic Element (matching mockup left accent) */}
            <div className="relative mb-6">
              <div className="relative w-48 h-28 sm:w-56 sm:h-32 bg-[#18181B] rounded-[40%_60%_70%_30%/50%_40%_60%_50%] shadow-lg overflow-hidden flex items-center justify-center p-3">
                {/* SVG Topographic Contour Curves */}
                <svg
                  className="absolute inset-0 w-full h-full opacity-35"
                  viewBox="0 0 200 150"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <ellipse cx="100" cy="75" rx="85" ry="60" stroke="#F59E0B" strokeWidth="1.2" strokeDasharray="4 3" />
                  <ellipse cx="100" cy="75" rx="65" ry="45" stroke="#ffffff" strokeWidth="1" />
                  <ellipse cx="100" cy="75" rx="45" ry="30" stroke="#F59E0B" strokeWidth="1" />
                  <ellipse cx="100" cy="75" rx="25" ry="16" stroke="#ffffff" strokeWidth="1" />
                  <circle cx="100" cy="75" r="5" fill="#F59E0B" />
                </svg>

                {/* Red Accent Dot (Mockup signature detail) */}
                <span className="absolute top-6 left-8 w-2.5 h-2.5 rounded-full bg-rose-500 shadow-sm shadow-rose-500/50" />

                {/* Golden Speckle constellation */}
                <div className="absolute inset-0 bg-[radial-gradient(#F59E0B_1px,transparent_1px)] [background-size:12px_12px] opacity-25" />

                <div className="relative text-center z-10">
                  <span className="text-[11px] font-mono-accent uppercase tracking-wider text-amber-400 block font-semibold">
                    Gerai Resmi PPOB
                  </span>
                  <span className="text-xs text-stone-300 font-medium">
                    Cepat · Aman · Murah
                  </span>
                </div>
              </div>

              {/* Decorative golden sparkle/lightning badge */}
              <div className="absolute -bottom-2 -right-2 bg-amber-400 text-stone-950 p-2 rounded-full shadow-md">
                <Zap className="w-4 h-4 fill-stone-950 text-stone-950" />
              </div>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-display text-stone-900 tracking-tight leading-[1.15]">
              Halo! Saya <span className="text-stone-900">{profile.name}</span> -
              <br />
              <span className="text-amber-500 inline-block font-display mt-1">
                {profile.title}
              </span>
            </h1>

            {/* Bio Description */}
            <p className="mt-5 text-base sm:text-lg text-stone-600 leading-relaxed max-w-xl">
              {profile.bio}
            </p>

            {/* Quick Service Status Strip */}
            <div className="mt-6 pt-6 border-t border-stone-200/80 w-full max-w-xl grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-stone-600">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-200">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[11px] text-stone-400 font-medium uppercase">Jam Layanan</span>
                  <span className="text-stone-800 font-semibold">
                    Setiap Hari (06.00 – 23.00 WIB)
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 border border-amber-200">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[11px] text-stone-400 font-medium uppercase">Jaminan Keamanan</span>
                  <span className="text-stone-800 font-semibold">
                    {profile.clientSatisfaction} Sukses · Struk Resmi
                  </span>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="px-6 py-3.5 text-sm font-semibold text-stone-950 bg-amber-400 hover:bg-amber-500 rounded-xl transition-all shadow-sm hover:shadow-md flex items-center gap-2 cursor-pointer active:scale-95 group"
              >
                <Zap className="w-4 h-4 fill-stone-950" />
                <span>Pesan Pulsa / Bayar Listrik</span>
              </a>

              <a
                href={`https://wa.me/6282322942034?text=${encodeURIComponent(
                  `Halo Mbak Aan Maryani, saya mau isi pulsa / bayar listrik PLN. Mohon infonya ya!`
                )}`}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3.5 text-sm font-semibold text-white bg-stone-900 hover:bg-stone-800 rounded-xl transition-all shadow-sm hover:shadow-md flex items-center gap-2 cursor-pointer active:scale-95 group"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>Chat WhatsApp Admin</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

          </div>

          {/* Right Column: Warm Golden Organic Blob & Designer/Owner Portrait */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            
            {/* Background Organic Blob Shape in warm amber yellow */}
            <div
              className="absolute -inset-4 sm:-inset-6 bg-gradient-to-br from-amber-400 via-amber-400 to-amber-500 rounded-[55%_45%_65%_35%/40%_60%_40%_60%] -z-10 shadow-xl opacity-95 transition-all duration-700 hover:rotate-1"
              aria-hidden="true"
            />

            {/* Secondary subtle background blob for depth */}
            <div
              className="absolute -top-10 -right-6 w-36 h-36 bg-amber-200/50 rounded-full blur-2xl -z-20"
              aria-hidden="true"
            />

            {/* Portrait Frame matching the mockup */}
            <div className="relative w-full max-w-[340px] sm:max-w-[390px] aspect-square rounded-[48%_52%_62%_38%/45%_45%_55%_55%] overflow-hidden border-4 border-white/80 shadow-2xl bg-amber-100 group">
              <img
                src="/assets/aistudio/aan2_c47ca242.jpeg"
                alt={`${profile.name} - ${profile.title}`}
                className="w-full h-full object-cover object-[center_28%] transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />

              {/* Gradient scrim at bottom */}
              <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-stone-900/30 to-transparent pointer-events-none" />
            </div>

            {/* Floating Trust Badge */}
            <div className="absolute -bottom-4 -left-4 sm:left-2 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-xl border border-stone-200/80 shadow-lg flex items-center gap-2.5">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 ring-4 ring-emerald-100 animate-pulse" />
              <div>
                <p className="text-xs font-semibold text-stone-900">Server Online Aktif</p>
                <p className="text-[10px] text-stone-500">Transaksi Otomatis 24 Jam</p>
              </div>
            </div>

            {/* Satisfaction Metric Badge */}
            <div className="absolute top-4 -right-2 bg-stone-900 text-white px-3.5 py-2 rounded-xl shadow-lg border border-stone-800 flex items-center gap-2">
              <span className="text-amber-400 font-bold text-sm">★ 4.9</span>
              <span className="text-[11px] text-stone-300">18.500+ Transaksi</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
