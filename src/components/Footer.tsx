import React from 'react';
import { ArrowUp, Zap } from 'lucide-react';
import { ProfileData } from '../data/portfolioData';

interface FooterProps {
  profile: ProfileData;
}

export const Footer: React.FC<FooterProps> = ({ profile }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#18181B] text-stone-300 py-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Tagline */}
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
            <span className="text-lg font-bold font-display text-white flex items-center gap-1.5">
              <Zap className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span>{profile.name}</span>
            </span>
            <span className="hidden sm:inline text-stone-600">|</span>
            <span className="text-xs text-stone-400">
              {profile.title} · Melayani dengan cepat, jujur, dan harga bersahabat
            </span>
          </div>

          {/* Nav links */}
          <div className="flex items-center gap-6 text-xs text-stone-400">
            <a href="#about" className="hover:text-amber-400 transition-colors">Tentang Gerai</a>
            <a href="#skills" className="hover:text-amber-400 transition-colors">Keunggulan</a>
            <a href="#projects" className="hover:text-amber-400 transition-colors">Daftar Layanan</a>
            <a href="#contact" className="hover:text-amber-400 transition-colors">Kontak & Order</a>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white transition-colors cursor-pointer flex items-center gap-1.5 text-xs"
            aria-label="Kembali ke atas"
          >
            <span>Kembali ke atas</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="mt-8 pt-8 border-t border-stone-800/80 text-center text-xs text-stone-500">
          <p>© {new Date().getFullYear()} {profile.name}. Seluruh hak cipta gerai pembayaran digital dilindungi undang-undang.</p>
        </div>
      </div>
    </footer>
  );
};
