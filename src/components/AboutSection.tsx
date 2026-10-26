import React from 'react';
import { ArrowUpRight, CheckCircle2, MessageCircle, Phone, ShieldCheck } from 'lucide-react';
import { ProfileData } from '../data/portfolioData';

interface AboutSectionProps {
  profile: ProfileData;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ profile }) => {
  return (
    <section id="about" className="relative py-20 md:py-28 overflow-hidden bg-white/60">
      
      {/* Decorative dark blob on the far right edge matching mockup */}
      <div
        className="hidden lg:block absolute -right-12 top-1/3 w-32 h-64 bg-[#18181B] rounded-[60%_40%_30%_70%/50%_60%_40%_50%] opacity-90 shadow-xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Organic Yellow Blob with "Halo Semua!" and Seated Portrait */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Background Organic Blob Shape */}
            <div
              className="absolute -inset-4 sm:-inset-6 bg-gradient-to-tr from-amber-400 via-amber-300 to-amber-400 rounded-[50%_50%_60%_40%/60%_40%_60%_40%] -z-10 shadow-lg transform -rotate-2"
              aria-hidden="true"
            />

            {/* Hand-lettered calligraphy matching mockup style */}
            <div className="absolute -top-6 -left-2 sm:top-2 sm:left-4 z-20">
              <span className="font-handwriting font-bold text-4xl sm:text-5xl text-stone-900 tracking-wide select-none drop-shadow-xs rotate-[-8deg] inline-block">
                Halo<br />Semua!
              </span>
            </div>

            {/* Portrait Image Container */}
            <div className="relative w-full max-w-[320px] sm:max-w-[360px] aspect-[3/4] rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-amber-50">
              <img
                src="/assets/aistudio/aan2_c47ca242.jpeg"
                alt={`${profile.name} melayani pelanggan digital`}
                className="w-full h-full object-cover object-[center_25%]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-2xl pointer-events-none" />
            </div>

            {/* Micro Badge */}
            <div className="absolute -bottom-3 right-2 bg-stone-900 text-white px-3 py-1.5 rounded-lg text-xs font-medium shadow-md flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              <span>Mitra Resmi Terpercaya</span>
            </div>

          </div>

          {/* Right Column: Editorial Narrative & Social Connect */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            <span className="text-xs font-semibold tracking-wider uppercase text-amber-600 font-mono-accent">
              Tentang Gerai · Komitmen Layanan
            </span>

            <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold font-display text-stone-900 tracking-tight leading-snug">
              Butuh Pulsa & Token Listrik Cepat?
              <br />
              <span className="text-amber-500">Aan Maryani Siap Melayani!</span>
            </h2>

            <p className="mt-5 text-base text-stone-600 leading-relaxed">
              {profile.aboutText}
            </p>

            <p className="mt-3 text-sm text-stone-500 leading-relaxed">
              Tidak perlu lagi panik saat kuota internet habis di waktu genting atau alarm meteran listrik PLN berbunyi di tengah malam. Cukup hubungi kami melalui WhatsApp, pilih nominal yang diinginkan, dan pesanan Anda langsung diproses otomatis tanpa perlu antre di minimarket atau ATM.
            </p>

            {/* Quantified Adjacency Proof Metrics */}
            <div className="mt-6 grid grid-cols-3 gap-4 w-full py-4 border-y border-stone-200">
              <div>
                <p className="text-xl sm:text-2xl font-bold font-display text-stone-900 tabular-nums">
                  {profile.completedProjects}
                </p>
                <p className="text-xs text-stone-500">Transaksi Sukses</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-bold font-display text-stone-900 tabular-nums">
                  {profile.clientSatisfaction}
                </p>
                <p className="text-xs text-stone-500">Tingkat Keberhasilan</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-bold font-display text-stone-900 tabular-nums">
                  {profile.experienceYears}
                </p>
                <p className="text-xs text-stone-500">Tahun Melayani</p>
              </div>
            </div>

            {/* Channel Hubungi Langsung */}
            <div className="mt-6 w-full">
              <p className="text-xs font-semibold text-stone-700 uppercase tracking-wider mb-3">
                Saluran Pemesanan & Informasi Resmi:
              </p>
              
              <div className="flex flex-wrap items-center gap-2.5">
                {/* WhatsApp */}
                <a
                  href={`https://wa.me/6282322942034?text=${encodeURIComponent(
                    "Halo Mbak Aan, saya mau pesan pulsa / token listrik PLN sekarang ya!"
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3.5 py-2 rounded-lg bg-[#25D366]/15 text-[#128C7E] hover:bg-[#25D366] hover:text-white text-xs font-semibold transition-all flex items-center gap-1.5 shadow-xs"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp Resmi</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>

                {/* Telepon Langsung */}
                <a
                  href={`tel:${profile.phone.replace(/[^0-9+]/g, '')}`}
                  className="px-3.5 py-2 rounded-lg bg-stone-100 text-stone-800 hover:bg-stone-200 text-xs font-semibold transition-all flex items-center gap-1.5 shadow-xs"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>{profile.phone}</span>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${profile.email}`}
                  className="px-3.5 py-2 rounded-lg bg-amber-50 text-amber-800 hover:bg-amber-100 text-xs font-semibold transition-all flex items-center gap-1.5 shadow-xs"
                >
                  <span>{profile.email}</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
