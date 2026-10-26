import React, { useState } from 'react';
import { Mail, MessageSquare, Send, Check, Copy, MapPin, Zap, Clock, ShieldCheck } from 'lucide-react';
import { ProfileData } from '../data/portfolioData';

interface ContactSectionProps {
  profile: ProfileData;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ profile }) => {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    service: 'Beli Token Listrik PLN',
    nominal: 'Rp 50.000',
    targetNumber: '',
    notes: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  const getDirectWaLink = () => {
    const text = `Halo Mbak Aan Maryani, saya mau pesan:\n• Nama: ${formState.name || 'Pelanggan'}\n• Layanan: ${formState.service}\n• Nominal: ${formState.nominal}\n• No. Tujuan / ID Pelanggan: ${formState.targetNumber || '-'}\n• Catatan: ${formState.notes || '-'}\nMohon info total dan QRIS / nomor rekening transfernya ya. Terima kasih!`;
    return `https://wa.me/6282322942034?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white border-t border-stone-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Direct Info & Quick Channels */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-xs font-semibold tracking-wider uppercase text-amber-600 font-mono-accent">
                Hubungi & Pesan Sekarang
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold font-display text-stone-900 tracking-tight">
                Transaksi Cepat, Aman & Tanpa Ribet
              </h2>
              <p className="mt-4 text-sm sm:text-base text-stone-600 leading-relaxed">
                Butuh bantuan cek tagihan listrik, isi pulsa mendadak, atau kirim uang segera? Admin kami siap merespons dengan cepat dan ramah melalui WhatsApp resmi.
              </p>

              {/* Direct channels */}
              <div className="mt-8 space-y-4">
                {/* WhatsApp Chat */}
                <div className="p-4 rounded-xl border border-stone-200 bg-stone-50/70 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 truncate">
                    <div className="w-10 h-10 rounded-lg bg-emerald-500 text-white flex items-center justify-center shrink-0">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block text-[11px] font-semibold text-stone-400 uppercase">
                        WhatsApp Fast-Response
                      </span>
                      <span className="text-xs sm:text-sm font-semibold text-stone-900 block font-mono">
                        {profile.phone}
                      </span>
                    </div>
                  </div>

                  <a
                    href={`https://wa.me/6282322942034?text=${encodeURIComponent(
                      `Halo Mbak Aan Maryani, saya mau pesan pulsa / token listrik PLN sekarang ya!`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3.5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-lg transition-colors shrink-0"
                  >
                    Chat WhatsApp
                  </a>
                </div>

                {/* Email item with copy button */}
                <div className="p-4 rounded-xl border border-stone-200 bg-stone-50/70 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 truncate">
                    <div className="w-10 h-10 rounded-lg bg-amber-400 text-stone-950 flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="truncate">
                      <span className="block text-[11px] font-semibold text-stone-400 uppercase">
                        Email Resmi
                      </span>
                      <a
                        href={`mailto:${profile.email}`}
                        className="text-xs sm:text-sm font-semibold text-stone-900 hover:text-amber-600 truncate block"
                      >
                        {profile.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    className="p-2 text-stone-500 hover:text-stone-900 hover:bg-stone-200/60 rounded-lg transition-colors shrink-0 cursor-pointer text-xs flex items-center gap-1"
                    title="Salin email ke clipboard"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-[11px] text-emerald-700 font-medium">Tersalin</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span className="text-[11px] font-medium hidden sm:inline">Salin</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Domisili / Wilayah Layanan */}
                <div className="p-4 rounded-xl border border-stone-200 bg-stone-50/70 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[11px] font-semibold text-stone-400 uppercase">
                      Wilayah / Domisili Layanan
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-stone-900 block">
                      {profile.location}
                    </span>
                  </div>
                </div>

                {/* Jam Layanan */}
                <div className="p-4 rounded-xl border border-stone-200 bg-stone-50/70 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-stone-200 text-stone-700 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[11px] font-semibold text-stone-400 uppercase">
                      Jam Operasional Layanan
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-stone-900 block">
                      Buka Setiap Hari (06.00 – 23.00 WIB)
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Availability pill */}
            <div className="mt-8 p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0 animate-ping" />
              <span>Server otomatis aktif 24 jam untuk pengisian pulsa & nomor token listrik PLN.</span>
            </div>
          </div>

          {/* Right Column: Interactive Order Form */}
          <div className="lg:col-span-7">
            <div className="bg-stone-50 p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-xs">
              <h3 className="text-lg font-bold font-display text-stone-900 mb-1 flex items-center gap-2">
                <Zap className="w-4 h-4 text-amber-500 fill-amber-500" />
                <span>Formulir Pesanan & Cek Tagihan</span>
              </h3>
              <p className="text-xs text-stone-500 mb-6">
                Isi data transaksi Anda di bawah ini untuk langsung diteruskan ke admin WhatsApp kami.
              </p>

              {isSubmitted ? (
                <div className="py-10 text-center space-y-3 bg-white p-6 rounded-xl border border-emerald-200">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-stone-900 font-display">
                    Pesanan Disiapkan!
                  </h4>
                  <p className="text-xs text-stone-600 max-w-sm mx-auto">
                    Rincian pesanan {formState.service} nominal {formState.nominal} untuk {formState.name} siap dikirim ke WhatsApp.
                  </p>
                  
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={getDirectWaLink()}
                      target="_blank"
                      rel="noreferrer"
                      className="px-5 py-2.5 bg-[#25D366] hover:bg-[#1ebd5b] text-white text-xs font-bold rounded-xl transition-all shadow-sm flex items-center gap-2"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Buka WhatsApp Sekarang</span>
                    </a>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-4 py-2.5 text-xs font-semibold text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-xl transition-colors cursor-pointer"
                    >
                      Buat Pesanan Lainnya
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1.5">
                        Nama Pemesan *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Contoh: Budi Santoso"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-white border border-stone-300 rounded-xl text-xs sm:text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1.5">
                        Nomor WhatsApp Pemesan *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="081234567890"
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-white border border-stone-300 rounded-xl text-xs sm:text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1.5">
                        Pilihan Layanan
                      </label>
                      <select
                        value={formState.service}
                        onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-white border border-stone-300 rounded-xl text-xs sm:text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 transition-all cursor-pointer"
                      >
                        <option value="Beli Token Listrik PLN">Token Listrik PLN (Prabayar)</option>
                        <option value="Bayar Tagihan Listrik Bulanan">Bayar Tagihan Listrik PLN (Pascabayar)</option>
                        <option value="Beli Pulsa Reguler">Pulsa Reguler (Semua Operator)</option>
                        <option value="Beli Paket Data Internet">Paket Kuota Data Internet</option>
                        <option value="Top-Up Saldo DANA">Top-Up Saldo DANA</option>
                        <option value="Top-Up Saldo GoPay / OVO">Top-Up Saldo GoPay / OVO</option>
                        <option value="Top-Up Saldo ShopeePay">Top-Up Saldo ShopeePay</option>
                        <option value="Bayar Tagihan PDAM / BPJS">Bayar Tagihan PDAM / BPJS</option>
                        <option value="Transfer Uang Antar Bank">Kirim Uang Tunai ke Bank</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1.5">
                        Pilihan Nominal
                      </label>
                      <select
                        value={formState.nominal}
                        onChange={(e) => setFormState({ ...formState, nominal: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-white border border-stone-300 rounded-xl text-xs sm:text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 transition-all cursor-pointer"
                      >
                        <option value="Rp 10.000">Rp 10.000</option>
                        <option value="Rp 20.000">Rp 20.000</option>
                        <option value="Rp 25.000">Rp 25.000</option>
                        <option value="Rp 50.000">Rp 50.000</option>
                        <option value="Rp 100.000">Rp 100.000</option>
                        <option value="Rp 200.000">Rp 200.000</option>
                        <option value="Rp 500.000">Rp 500.000</option>
                        <option value="Rp 1.000.000">Rp 1.000.000</option>
                        <option value="Cek Tagihan Dulu">Sesuai Tagihan (Cek Dulu)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1.5">
                      Nomor Tujuan / No. Meter PLN / Rekening Bank *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Contoh: No. Meter 142100878543 atau No. HP 081234567890"
                      value={formState.targetNumber}
                      onChange={(e) => setFormState({ ...formState, targetNumber: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-stone-300 rounded-xl text-xs sm:text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1.5">
                      Catatan / Pesan Tambahan
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Contoh: Tolong kirimkan struk PDF ke nomor ini ya Mbak Aan..."
                      value={formState.notes}
                      onChange={(e) => setFormState({ ...formState, notes: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-stone-300 rounded-xl text-xs sm:text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-4 bg-stone-900 hover:bg-stone-800 text-white text-xs sm:text-sm font-semibold rounded-xl transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Memproses pesanan...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-amber-400" />
                        <span>Kirim Rincian Pesanan ke WhatsApp</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
