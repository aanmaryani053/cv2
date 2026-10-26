import React from 'react';
import { X, Printer, Mail, MapPin, Phone, Zap, ShieldCheck, CheckCircle, Receipt } from 'lucide-react';
import { ProfileData, skillsList, serviceCards } from '../data/portfolioData';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: ProfileData;
}

export const CVModal: React.FC<CVModalProps> = ({ isOpen, onClose, profile }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-stone-950/70 backdrop-blur-xs overflow-y-auto animate-fadeIn">
      <div
        className="bg-white rounded-2xl max-w-3xl w-full max-h-[92vh] flex flex-col shadow-2xl border border-stone-200 overflow-hidden"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Controls Bar */}
        <div className="bg-stone-900 text-white px-6 py-4 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <Receipt className="w-4 h-4 text-amber-400" />
            <span className="font-display font-bold text-sm">Brosur Resmi & Format Struk Pembayaran</span>
            <span className="text-stone-500 text-xs">·</span>
            <span className="text-amber-400 text-xs font-mono-accent">{profile.name}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 bg-amber-500 hover:bg-amber-400 text-stone-950 text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Cetak / Simpan PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-stone-400 hover:text-white hover:bg-stone-800 transition-colors cursor-pointer"
              aria-label="Tutup jendela informasi"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Content */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-white text-stone-800 print:p-0">
          
          {/* Header Lockup */}
          <div className="border-b border-stone-200 pb-6 flex flex-col sm:flex-row justify-between items-start gap-4">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-xl overflow-hidden border-2 border-amber-400 shadow-xs shrink-0">
                <img
                  src="/assets/aistudio/aan2_c47ca242.jpeg"
                  alt={profile.name}
                  className="w-full h-full object-cover object-[center_25%]"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2 py-0.5 bg-amber-100 text-amber-800 font-bold text-[11px] rounded-md font-mono-accent">
                    GERAI RESMI PPOB
                  </span>
                  <span className="text-xs text-stone-400">ID Agen: AM-PPOB-8821</span>
                </div>
                <h1 className="text-3xl font-bold font-display text-stone-950">
                  {profile.name}
                </h1>
                <p className="text-base font-semibold text-amber-600 mt-0.5">
                  {profile.title}
                </p>
                <p className="text-xs text-stone-500 mt-2 max-w-md leading-relaxed">
                  Melayani pengisian pulsa reguler, paket data internet semua operator, token listrik PLN, bayar tagihan PDAM, iuran BPJS, top-up e-wallet dan transfer bank real-time 24 jam.
                </p>
              </div>
            </div>

            <div className="text-xs text-stone-600 space-y-1.5 shrink-0 sm:text-right font-mono-accent">
              <div className="flex items-center sm:justify-end gap-1.5">
                <Phone className="w-3 h-3 text-emerald-600" />
                <span className="font-semibold text-stone-900">+62 812-3456-7890</span>
              </div>
              <div className="flex items-center sm:justify-end gap-1.5">
                <Mail className="w-3 h-3 text-amber-600" />
                <span>{profile.email}</span>
              </div>
              <div className="flex items-center sm:justify-end gap-1.5">
                <MapPin className="w-3 h-3 text-amber-600" />
                <span>{profile.location}</span>
              </div>
            </div>
          </div>

          {/* Contoh Struk Transaksi Resmi */}
          <div className="bg-stone-50 p-5 rounded-2xl border border-stone-300/80 font-mono text-xs text-stone-800 space-y-2">
            <div className="text-center border-b border-dashed border-stone-300 pb-3">
              <p className="font-bold text-sm">STRUK BUKTI PEMBAYARAN RESMI PLN</p>
              <p className="text-[11px] text-stone-500">GERAI PEMBAYARAN AAN MARYANI</p>
              <p className="text-[10px] text-stone-400">NO. TRANSAKSI: TRX-PLN-20261024-9843</p>
            </div>

            <div className="grid grid-cols-2 gap-y-1 text-[11px] py-2 border-b border-dashed border-stone-300">
              <span className="text-stone-500">TANGGAL/WAKTU:</span>
              <span className="text-right font-semibold">24/10/2026 20:15 WIB</span>

              <span className="text-stone-500">ID PELANGGAN / NO. METER:</span>
              <span className="text-right font-semibold">142100878543</span>

              <span className="text-stone-500">NAMA PELANGGAN:</span>
              <span className="text-right font-semibold">A. RAMADHAN</span>

              <span className="text-stone-500">TARIF / DAYA:</span>
              <span className="text-right font-semibold">R1 / 900 VA</span>

              <span className="text-stone-500">NOMINAL TOKEN:</span>
              <span className="text-right font-semibold">Rp 100.000</span>

              <span className="text-stone-500">BIAYA ADMIN:</span>
              <span className="text-right font-semibold">Rp 2.500</span>

              <span className="text-stone-500">TOTAL BAYAR:</span>
              <span className="text-right font-bold text-stone-900">Rp 102.500</span>
            </div>

            <div className="bg-amber-100/70 p-3 rounded-lg text-center my-2 border border-amber-300">
              <p className="text-[10px] text-stone-600 font-bold uppercase tracking-wider mb-1">
                20 DIGIT KODE TOKEN LISTRIK PLN:
              </p>
              <p className="text-base sm:text-lg font-bold tracking-widest text-stone-900">
                1234 - 5678 - 9012 - 3456 - 7890
              </p>
            </div>

            <p className="text-center text-[10px] text-stone-500 pt-1">
              *** Terima Kasih Telah Bertransaksi di Gerai Aan Maryani ***
            </p>
          </div>

          {/* Daftar Layanan & Keunggulan */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-amber-600 font-mono-accent mb-3">
              Katalog Produk & Tarif Pembayaran
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {serviceCards.map((service, idx) => (
                <div key={idx} className="p-3.5 bg-stone-50 rounded-xl border border-stone-200">
                  <h3 className="font-bold text-stone-900 text-sm mb-1">{service.title}</h3>
                  <p className="text-stone-500 text-[11px] mb-2">{service.description}</p>
                  <ul className="space-y-1 text-[11px] text-stone-700">
                    {service.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-1.5">
                        <CheckCircle className="w-3 h-3 text-amber-500 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Jaminan Layanan */}
          <div className="border-t border-stone-200 pt-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-amber-600 font-mono-accent mb-3">
              Jaminan Pelayanan Gerai Aan Maryani
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-stone-700">
              <div className="p-3 bg-stone-50 rounded-lg border border-stone-200">
                <p className="font-bold text-stone-900">Kecepatan Transaksi</p>
                <p className="text-stone-500 text-[11px] mt-0.5">Rata-rata 5–15 detik pulsa / token langsung aktif.</p>
              </div>
              <div className="p-3 bg-stone-50 rounded-lg border border-stone-200">
                <p className="font-bold text-stone-900">Garansi Transaksi</p>
                <p className="text-stone-500 text-[11px] mt-0.5">Garansi saldo kembali 100% bila terjadi gangguan massal provider.</p>
              </div>
              <div className="p-3 bg-stone-50 rounded-lg border border-stone-200">
                <p className="font-bold text-stone-900">Buka Setiap Hari</p>
                <p className="text-stone-500 text-[11px] mt-0.5">Pelayanan ramah pukul 06.00 hingga 23.00 WIB setiap hari.</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
