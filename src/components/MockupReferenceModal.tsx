import React from 'react';
import { X, CheckCircle } from 'lucide-react';

interface MockupReferenceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MockupReferenceModal: React.FC<MockupReferenceModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const features = [
    { title: "Adaptasi Layout & Warna Warm Amber", desc: "Mempertahankan komposisi visual mockup asli: judul tebal, watermark tulisan tangan di latar, dan palet warna kuning keemasan yang ramah dan menarik." },
    { title: "Aksen Organik Topografi & Bintik Emas", desc: "Elemen grafis kontur kurva topografi dengan aksen titik merah dan rasi bintang di sisi kiri hero tetap hadir sebagai identitas visual unik." },
    { title: "Foto Potret Pemilik Gerai", desc: "Foto ramah dengan sweater rajut kuning dibingkai blob organik keemasan yang memancarkan keramahan pelayanan kepada pelanggan." },
    { title: "3 Kartu Layanan Cepat", desc: "Kartu Pulsa & Kuota, Token Listrik PLN, dan Top-Up E-Wallet yang mengambang tepat di bawah hero untuk akses kilat." },
    { title: "Katalog & Form Pemesanan WhatsApp", desc: "Pelanggan dapat memilih nominal pulsa atau token listrik dan langsung terhubung ke WhatsApp Aan Maryani dengan pesan otomatis terisi rapi." },
    { title: "Contoh Struk Transaksi Resmi", desc: "Dilengkapi format bukti pembayaran struk resmi PLN dan pulsa yang siap dicetak maupun disimpan dalam bentuk PDF." }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/75 backdrop-blur-xs animate-fadeIn">
      <div
        className="bg-white rounded-2xl max-w-4xl w-full max-h-[92vh] overflow-hidden shadow-2xl border border-stone-200 flex flex-col"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="bg-stone-900 text-white px-6 py-4 flex items-center justify-between shrink-0">
          <div>
            <h3 className="font-display font-bold text-sm">Referensi Desain Asli vs Layanan Aan Maryani</h3>
            <p className="text-xs text-stone-400">Transformasi konsep mockup visual menjadi portofolio gerai pulsa & tagihan listrik resmi</p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-stone-400 hover:text-white hover:bg-stone-800 transition-colors cursor-pointer"
            aria-label="Tutup jendela referensi"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Uploaded Reference Image */}
          <div className="md:col-span-5 bg-stone-100 rounded-xl p-3 border border-stone-200 flex flex-col items-center">
            <span className="text-[11px] font-mono-accent uppercase tracking-wider text-stone-500 mb-2 font-semibold">
              Mockup Referensi Awal
            </span>
            <div className="rounded-lg overflow-hidden shadow-sm max-h-[500px] border border-stone-300">
              <img
                src="/assets/aistudio/image__1__599af934.png"
                alt="Mockup referensi desain portofolio asli"
                className="w-full h-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Breakdown Notes */}
          <div className="md:col-span-7 space-y-4">
            <h4 className="text-base font-bold font-display text-stone-900">
              Harmonisasi Estetika Modern untuk Layanan Pulsa & PPOB
            </h4>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Desain mockup awal bertema hangat dan ceria diadaptasi secara sempurna untuk menonjolkan profesionalitas gerai Aan Maryani dalam melayani kebutuhan pulsa, paket kuota, token listrik PLN, dan pembayaran tagihan harian masyarakat.
            </p>

            <div className="space-y-3 pt-2">
              {features.map((feat, idx) => (
                <div key={idx} className="p-3 bg-stone-50 rounded-xl border border-stone-200/80 flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs font-bold text-stone-900">{feat.title}</h5>
                    <p className="text-[11px] text-stone-500 leading-normal mt-0.5">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={onClose}
                className="w-full py-2.5 bg-stone-900 text-white rounded-xl text-xs font-semibold hover:bg-stone-800 transition-colors cursor-pointer"
              >
                Kembali ke Halaman Layanan
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
