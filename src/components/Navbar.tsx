import React, { useState, useEffect } from 'react';
import { Menu, X, Receipt, SlidersHorizontal, Image as ImageIcon, Zap, PhoneCall } from 'lucide-react';
import { ProfileData } from '../data/portfolioData';

interface NavbarProps {
  profile: ProfileData;
  onOpenCV: () => void;
  onOpenCustomizer: () => void;
  onOpenReference: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  profile,
  onOpenCV,
  onOpenCustomizer,
  onOpenReference,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Tentang Gerai', href: '#about' },
    { label: 'Keunggulan', href: '#skills' },
    { label: 'Daftar Layanan', href: '#projects' },
    { label: 'Pengalaman', href: '#experience' },
    { label: 'Kontak & Order', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-xs border-b border-stone-200/60 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Brand wordmark */}
          <div className="flex items-center gap-2 shrink-0">
            <a
              href="#"
              className="text-xl font-bold tracking-tight text-stone-900 font-display flex items-center gap-2 whitespace-nowrap"
            >
              <span className="w-8 h-8 rounded-lg bg-amber-400 text-stone-950 flex items-center justify-center font-bold text-sm shadow-xs">
                ⚡
              </span>
              <span>{profile.name}</span>
              <span className="text-xs font-normal text-stone-500 hidden sm:inline">| Agen Pulsa & PPOB</span>
            </a>
          </div>

          {/* Zone 2: Nav links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-stone-600">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-amber-600 transition-colors whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary action & controls */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenReference}
              title="Bandingkan dengan gambar referensi desain awal"
              className="px-3 py-2 text-xs font-medium text-stone-600 hover:text-stone-900 bg-stone-100/80 hover:bg-stone-200/70 rounded-lg transition-colors flex items-center gap-1.5 whitespace-nowrap cursor-pointer"
            >
              <ImageIcon className="w-3.5 h-3.5 text-stone-500" />
              <span>Mockup Asli</span>
            </button>

            <button
              onClick={onOpenCustomizer}
              title="Sesuaikan informasi nama dan layanan"
              className="px-3 py-2 text-xs font-medium text-stone-600 hover:text-stone-900 bg-stone-100/80 hover:bg-stone-200/70 rounded-lg transition-colors flex items-center gap-1.5 whitespace-nowrap cursor-pointer"
            >
              <SlidersHorizontal className="w-3.5 h-3.5 text-stone-500" />
              <span>Sesuaikan Profil</span>
            </button>

            <button
              onClick={onOpenCV}
              className="px-4 py-2 text-xs font-semibold text-stone-950 bg-amber-400 hover:bg-amber-500 rounded-lg transition-all shadow-xs hover:shadow-md flex items-center gap-1.5 whitespace-nowrap cursor-pointer active:scale-95"
            >
              <Receipt className="w-3.5 h-3.5 text-stone-950" />
              <span>Lihat Contoh Struk</span>
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenCV}
              className="px-3 py-1.5 text-xs font-semibold text-stone-950 bg-amber-400 rounded-md flex items-center gap-1"
            >
              <Receipt className="w-3 h-3" />
              <span>Struk</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-stone-700 hover:text-stone-900 focus:outline-none"
              aria-label="Buka menu navigasi"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-white border-b border-stone-200 px-6 py-4 shadow-lg animate-fadeIn">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-stone-700 hover:text-amber-600 py-1.5"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-stone-100 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenReference();
                }}
                className="w-full text-left py-2 text-xs font-medium text-stone-600 flex items-center gap-2"
              >
                <ImageIcon className="w-4 h-4 text-stone-500" />
                <span>Lihat Mockup Referensi</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCustomizer();
                }}
                className="w-full text-left py-2 text-xs font-medium text-stone-600 flex items-center gap-2"
              >
                <SlidersHorizontal className="w-4 h-4 text-stone-500" />
                <span>Sesuaikan Informasi Gerai</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
