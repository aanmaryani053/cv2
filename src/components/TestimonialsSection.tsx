import React from 'react';
import { Star, Quote, HeartHandshake } from 'lucide-react';
import { testimonialsList } from '../data/portfolioData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-stone-50/50 border-t border-stone-200/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold tracking-wider uppercase text-amber-600 font-mono-accent">
            Ulasan & Pengalaman Pelanggan
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold font-display text-stone-900 tracking-tight">
            Apa Kata Para Pelanggan Setia?
          </h2>
          <p className="mt-3 text-sm text-stone-600">
            Kisah nyata dari para tetangga, ibu rumah tangga, mahasiswa, dan pemilik usaha yang rutin mempercayakan pembayaran tagihan kepada Aan Maryani.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonialsList.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-7 rounded-2xl border border-stone-200 shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between relative group"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-stone-100 group-hover:text-amber-100 transition-colors pointer-events-none" />

              <div>
                {/* 5-star rating */}
                <div className="flex items-center gap-1 mb-4 text-amber-400">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed italic relative z-10">
                  "{item.quote}"
                </p>
              </div>

              {/* Attribution */}
              <div className="mt-6 pt-5 border-t border-stone-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-stone-900 text-amber-400 font-display font-bold text-xs flex items-center justify-center shrink-0 shadow-2xs">
                  {item.avatar}
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-stone-900">
                    {item.author}
                  </h4>
                  <p className="text-[11px] text-stone-500">
                    {item.role} · <span className="font-medium text-stone-700">{item.company}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
