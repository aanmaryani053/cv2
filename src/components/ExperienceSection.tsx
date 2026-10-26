import React from 'react';
import { Briefcase, ShieldCheck, Award, MapPin, CheckCircle, Zap } from 'lucide-react';
import { experienceTimeline } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  const credentials = [
    { title: "Kemitraan Resmi Multi-Server Payment Nasional", issuer: "Distributor Resmi PPOB & Pulsa", year: "2024" },
    { title: "Sertifikasi Merchant QRIS Bank Indonesia", issuer: "Standar Pembayaran Nasional", year: "2023" },
    { title: "Verifikasi Loket Pembayaran Tagihan Terdaftar", issuer: "Jaringan Kemitraan Digital", year: "2021" }
  ];

  return (
    <section id="experience" className="py-20 md:py-28 bg-white border-t border-stone-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Work Experience Timeline */}
          <div className="lg:col-span-7">
            <span className="text-xs font-semibold tracking-wider uppercase text-amber-600 font-mono-accent">
              Perjalanan Usaha & Dedikasi
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold font-display text-stone-900 tracking-tight">
              Rekam Jejak Melayani Pelanggan
            </h2>
            <p className="mt-2 text-sm text-stone-600">
              Dari melayani kebutuhan pulsa tetangga sekitar hingga berkembang menjadi gerai pembayaran digital terpercaya dengan puluhan ribu transaksi berhasil.
            </p>

            <div className="mt-8 space-y-8 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-stone-200">
              {experienceTimeline.map((item, idx) => (
                <div key={idx} className="relative flex items-start gap-6 group">
                  {/* Timeline bullet */}
                  <div className="w-7 h-7 rounded-full bg-stone-900 text-amber-400 border-4 border-white shadow-xs flex items-center justify-center shrink-0 z-10 group-hover:bg-amber-500 group-hover:text-stone-950 transition-colors">
                    <Zap className="w-3 h-3 fill-amber-400" />
                  </div>

                  {/* Content card */}
                  <div className="bg-stone-50/80 p-5 rounded-2xl border border-stone-200/70 hover:border-amber-300 transition-all w-full shadow-2xs group-hover:shadow-xs">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                      <span className="text-xs font-mono-accent font-semibold text-amber-600">
                        {item.period}
                      </span>
                      <span className="text-xs text-stone-400 flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        <span>{item.location}</span>
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold font-display text-stone-900">
                      {item.role}
                    </h3>
                    <p className="text-xs font-medium text-stone-700 mt-0.5">
                      {item.company}
                    </p>

                    <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed">
                      {item.summary}
                    </p>

                    <div className="mt-3 pt-3 border-t border-stone-200/60 flex flex-wrap gap-1.5">
                      {item.technologies.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[11px] font-medium text-stone-600 bg-white px-2 py-0.5 rounded-sm border border-stone-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Credentials & Guarantees */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-xs font-semibold tracking-wider uppercase text-amber-600 font-mono-accent">
                Legalitas & Kepercayaan
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-bold font-display text-stone-900 tracking-tight">
                Jaminan Keamanan Bertransaksi
              </h2>
              <p className="mt-2 text-sm text-stone-600">
                Semua transaksi diproses melalui jalur kemitraan resmi dengan jaminan keamanan saldo dan transparansi biaya admin.
              </p>

              <div className="mt-8 space-y-4">
                {credentials.map((cert, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl border border-stone-200 bg-stone-50/50 hover:bg-stone-50 transition-colors flex items-start gap-3.5"
                  >
                    <div className="w-9 h-9 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 mt-0.5">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-stone-900">
                        {cert.title}
                      </h4>
                      <p className="text-xs text-stone-600 mt-0.5">
                        {cert.issuer}
                      </p>
                      <span className="text-[11px] font-mono-accent text-stone-400 mt-1 block">
                        Terverifikasi Aktif ({cert.year})
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Service Commitment Box */}
            <div className="mt-8 p-6 rounded-2xl bg-[#18181B] text-white relative overflow-hidden shadow-lg">
              <div className="absolute top-0 right-0 -mr-6 -mt-6 w-24 h-24 bg-amber-400/20 rounded-full blur-xl" />
              <p className="text-xs font-mono-accent text-amber-400 uppercase tracking-wider mb-2">
                Prinsip Pelayanan Aan Maryani
              </p>
              <blockquote className="text-sm italic text-stone-200 leading-relaxed font-display">
                "Kepercayaan dan kepuasan pelanggan adalah amanah utama. Setiap rupiah yang Anda bayarkan terproses dengan transparan, tepat waktu, dan disertai bukti transaksi sah."
              </blockquote>
              <div className="mt-4 flex items-center gap-2 text-xs text-stone-400">
                <div className="w-2 h-2 rounded-full bg-amber-400" />
                <span>Siap Melayani Kebutuhan Anda Setiap Hari</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
