import React, { useState } from 'react';
import { ExternalLink, ArrowRight, X, CheckCircle, Sparkles, Eye, Zap, MessageSquare, Send } from 'lucide-react';
import { projectsList, Project } from '../data/portfolioData';

export const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);
  const [customerNumber, setCustomerNumber] = useState<string>('');
  const [selectedNominal, setSelectedNominal] = useState<string>('');

  const categories = ['Semua', 'Pulsa & Kuota', 'Listrik PLN', 'E-Wallet & Transfer'];

  const filteredProjects = selectedCategory === 'Semua'
    ? projectsList
    : projectsList.filter((p) => p.category === selectedCategory);

  const handleOpenModal = (project: Project) => {
    setActiveModalProject(project);
    setSelectedNominal(project.nominalPilihan[1] || project.nominalPilihan[0] || 'Rp 50.000');
    setCustomerNumber('');
  };

  const getWhatsAppOrderUrl = () => {
    if (!activeModalProject) return '';
    const text = `Halo Mbak Aan Maryani, saya ingin order:\n• Layanan: ${activeModalProject.title}\n• Pilihan Nominal: ${selectedNominal || 'Standar'}\n• No. HP / ID Pelanggan: ${customerNumber || '-'}\nMohon rincian total dan nomor rekening / QRIS pembayarannya ya. Terima kasih!`;
    return `https://wa.me/6282322942034?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="projects" className="py-20 md:py-28 bg-stone-50/70 border-t border-stone-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-semibold tracking-wider uppercase text-amber-600 font-mono-accent">
              Katalog Layanan Digital
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold font-display text-stone-900 tracking-tight">
              Pilihan Layanan & Bukti Transaksi
            </h2>
            <p className="mt-2 text-sm text-stone-600 max-w-xl">
              Pilih produk yang Anda butuhkan di bawah ini untuk melihat rincian proses, daftar pilihan nominal, dan panduan order cepat via WhatsApp.
            </p>
          </div>

          {/* Interactive Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-stone-200/70 rounded-xl self-start md:self-auto overflow-x-auto max-w-full">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-white text-stone-900 shadow-xs'
                    : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col group cursor-pointer"
              onClick={() => handleOpenModal(project)}
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] bg-stone-100 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />

                {/* Scrim overlay with view button */}
                <div className="absolute inset-0 bg-stone-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                  <span className="px-4 py-2 bg-white text-stone-900 text-xs font-semibold rounded-lg shadow-md flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <Zap className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                    <span>Lihat Nominal & Order Cepat</span>
                  </span>
                </div>

                {/* Category Tag */}
                <div className="absolute top-3 left-3 bg-stone-900/85 backdrop-blur-xs text-white text-[11px] font-medium px-2.5 py-1 rounded-md">
                  {project.category}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Clean unboxed metadata with dot separators */}
                  <div className="flex items-center gap-2 text-xs text-stone-500 mb-2 font-mono-accent">
                    <span>{project.client}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-emerald-600 font-semibold">{project.year}</span>
                  </div>

                  <h3 className="text-lg font-bold font-display text-stone-900 group-hover:text-amber-600 transition-colors">
                    {project.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-stone-600 line-clamp-2 leading-relaxed">
                    {project.tagline}
                  </p>
                </div>

                {/* Quantified Impact proof */}
                <div className="mt-4 pt-4 border-t border-stone-100 flex items-center justify-between text-xs">
                  <span className="font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-sm">
                    {project.metrics}
                  </span>
                  <span className="text-stone-400 group-hover:text-stone-900 transition-colors flex items-center gap-1 font-medium">
                    <span>Pesan</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project / Service Detail & Fast Order Modal */}
        {activeModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-stone-950/60 backdrop-blur-xs animate-fadeIn">
            <div
              className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-stone-200 flex flex-col"
              role="dialog"
              aria-modal="true"
            >
              {/* Modal Header */}
              <div className="sticky top-0 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-stone-200 flex items-center justify-between z-10">
                <div className="flex items-center gap-2 text-xs text-stone-500 font-mono-accent">
                  <span className="font-semibold text-stone-800">{activeModalProject.category}</span>
                  <span>·</span>
                  <span>{activeModalProject.client}</span>
                  <span>·</span>
                  <span className="text-emerald-600 font-semibold">{activeModalProject.year}</span>
                </div>
                <button
                  onClick={() => setActiveModalProject(null)}
                  className="p-1.5 rounded-lg text-stone-500 hover:text-stone-900 hover:bg-stone-100 transition-colors cursor-pointer"
                  aria-label="Tutup jendela modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6 space-y-6">
                {/* Hero Showcase Image */}
                <div className="rounded-xl overflow-hidden aspect-[16/9] bg-stone-900">
                  <img
                    src={activeModalProject.image}
                    alt={activeModalProject.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div>
                  <h3 className="text-2xl font-bold font-display text-stone-900">
                    {activeModalProject.title}
                  </h3>
                  <p className="mt-1 text-base text-amber-600 font-medium">
                    {activeModalProject.tagline}
                  </p>
                  <p className="mt-3 text-sm text-stone-600 leading-relaxed">
                    {activeModalProject.description}
                  </p>
                </div>

                {/* Interactive Fast Order & Calculation Box */}
                <div className="bg-amber-50/80 p-5 rounded-2xl border border-amber-200 space-y-4">
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 fill-amber-500 text-amber-500" />
                    <h4 className="text-sm font-bold text-stone-900 font-display">
                      Form Pemesanan Cepat via WhatsApp
                    </h4>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1.5">
                      Pilih Nominal / Paket:
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {activeModalProject.nominalPilihan.map((nom, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setSelectedNominal(nom)}
                          className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                            selectedNominal === nom
                              ? 'bg-amber-500 text-stone-950 shadow-xs ring-2 ring-amber-300'
                              : 'bg-white text-stone-700 border border-stone-300 hover:border-amber-400'
                          }`}
                        >
                          {nom}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1.5">
                      Nomor HP Tujuan / No. Meter PLN / Rekening:
                    </label>
                    <input
                      type="text"
                      placeholder="Contoh: 081234567890 atau No. Meter 142100878543"
                      value={customerNumber}
                      onChange={(e) => setCustomerNumber(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-white border border-stone-300 rounded-xl text-xs sm:text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500"
                    />
                  </div>

                  <a
                    href={getWhatsAppOrderUrl()}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-3 bg-[#25D366] hover:bg-[#1ebd5b] text-white text-xs sm:text-sm font-bold rounded-xl shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Lanjutkan Pesanan ke WhatsApp Mbak Aan</span>
                  </a>
                </div>

                {/* Challenge & Solution Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-stone-50 p-5 rounded-xl border border-stone-200/80 text-xs sm:text-sm">
                  <div>
                    <h4 className="font-bold text-stone-900 uppercase tracking-wider text-[11px] mb-1.5 text-amber-700">
                      Keunggulan Layanan
                    </h4>
                    <p className="text-stone-600 leading-relaxed">
                      {activeModalProject.challenge}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-900 uppercase tracking-wider text-[11px] mb-1.5 text-emerald-700">
                      Sistem Pembayaran
                    </h4>
                    <p className="text-stone-600 leading-relaxed">
                      {activeModalProject.solution}
                    </p>
                  </div>
                </div>

                {/* Deliverables & Tools */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">
                      Fasilitas yang Didapat
                    </h4>
                    <ul className="space-y-1.5 text-xs text-stone-700">
                      {activeModalProject.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">
                      Metode Pembayaran Tersedia
                    </h4>
                    <div className="flex flex-wrap gap-2 text-xs">
                      {activeModalProject.tools.map((tool, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 bg-stone-100 rounded-md font-medium text-stone-800"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Modal Footer Actions */}
                <div className="pt-4 border-t border-stone-200 flex flex-wrap items-center justify-between gap-3">
                  <span className="text-xs text-amber-700 font-semibold bg-amber-50 px-3 py-1 rounded-md">
                    Kecepatan: {activeModalProject.metrics}
                  </span>
                  
                  <button
                    onClick={() => setActiveModalProject(null)}
                    className="px-4 py-2 text-xs font-semibold text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors"
                  >
                    Tutup
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
