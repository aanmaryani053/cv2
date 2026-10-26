import React, { useState } from 'react';
import { X, Check, User, Zap } from 'lucide-react';
import { ProfileData, defaultProfile } from '../data/portfolioData';

interface ProfileCustomizerModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentProfile: ProfileData;
  onSaveProfile: (profile: ProfileData) => void;
}

export const ProfileCustomizerModal: React.FC<ProfileCustomizerModalProps> = ({
  isOpen,
  onClose,
  currentProfile,
  onSaveProfile,
}) => {
  if (!isOpen) return null;

  const [formData, setFormData] = useState<ProfileData>(currentProfile);

  const applyAanMaryaniPreset = () => {
    setFormData(defaultProfile);
  };

  const applyAlternativePreset = () => {
    setFormData({
      ...formData,
      name: "Aan Maryani",
      nickname: "Aan",
      title: "Pusat Pulsa & Loket Tagihan Listrik 24 Jam",
      email: "aanmaryani053@gmail.com",
      phone: "+62 823-2294-2034",
      bio: "Melayani isi ulang pulsa murah, paket data semua kartu perdana, token listrik PLN otomatis, top-up e-wallet dan pembayaran tagihan bulanan cepat & terpercaya.",
      location: "Salem, Brebes & Layanan Online Se-Indonesia",
      experienceYears: "4+ Tahun",
    });
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    onSaveProfile(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/65 backdrop-blur-xs animate-fadeIn">
      <div
        className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-hidden shadow-2xl border border-stone-200 flex flex-col"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="bg-stone-900 text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-amber-400 fill-amber-400" />
            <h3 className="font-display font-bold text-sm">Sesuaikan Informasi Gerai Pulsa & Listrik</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-stone-400 hover:text-white hover:bg-stone-800 transition-colors cursor-pointer"
            aria-label="Tutup jendela pengaturan"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Presets */}
        <div className="p-4 bg-stone-50 border-b border-stone-200 flex items-center justify-between gap-3">
          <span className="text-xs font-semibold text-stone-600">Pilihan Nama Layanan:</span>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={applyAanMaryaniPreset}
              className="px-2.5 py-1 text-xs font-medium rounded-lg bg-amber-400 text-stone-950 font-semibold hover:bg-amber-500 transition-colors cursor-pointer"
            >
              Agen Pulsa & PPOB
            </button>
            <button
              type="button"
              onClick={applyAlternativePreset}
              className="px-2.5 py-1 text-xs font-medium rounded-lg bg-white border border-stone-300 text-stone-700 hover:border-amber-400 hover:text-amber-700 transition-colors cursor-pointer"
            >
              Loket Tagihan 24 Jam
            </button>
          </div>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSave} className="p-6 overflow-y-auto space-y-4 text-xs sm:text-sm">
          <div className="flex items-center gap-3 p-3 bg-amber-50/70 border border-amber-200/80 rounded-xl">
            <div className="w-12 h-12 rounded-lg overflow-hidden border border-amber-300 shadow-2xs shrink-0">
              <img
                src="/assets/aistudio/aan2_c47ca242.jpeg"
                alt="Foto Profil Aan Maryani"
                className="w-full h-full object-cover object-[center_25%]"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <p className="text-xs font-bold text-stone-900">Foto Profil Aktif: Aan Maryani</p>
              <p className="text-[11px] text-stone-500">Foto resmi di depan konter pulsa & gerai layanan</p>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-stone-700 mb-1">
              Nama Pemilik / Nama Gerai
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-3.5 py-2 bg-stone-50 border border-stone-300 rounded-xl text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-stone-700 mb-1">
              Judul Layanan / Spesialisasi
            </label>
            <input
              type="text"
              required
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full px-3.5 py-2 bg-stone-50 border border-stone-300 rounded-xl text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">
                Alamat Email Kontak
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3.5 py-2 bg-stone-50 border border-stone-300 rounded-xl text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">
                Nomor WhatsApp Pemesanan
              </label>
              <input
                type="text"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-3.5 py-2 bg-stone-50 border border-stone-300 rounded-xl text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-stone-700 mb-1">
              Wilayah / Domisili Layanan
            </label>
            <input
              type="text"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              className="w-full px-3.5 py-2 bg-stone-50 border border-stone-300 rounded-xl text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-stone-700 mb-1">
              Deskripsi Singkat Gerai
            </label>
            <textarea
              rows={2}
              value={formData.bio}
              onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
              className="w-full px-3.5 py-2 bg-stone-50 border border-stone-300 rounded-xl text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 resize-none"
            />
          </div>

          {/* Action buttons */}
          <div className="pt-4 border-t border-stone-200 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-stone-600 hover:text-stone-900 cursor-pointer"
            >
              Batal
            </button>
            <button
              type="submit"
              className="px-5 py-2 text-xs font-semibold text-stone-950 bg-amber-400 hover:bg-amber-500 rounded-xl shadow-xs transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Check className="w-3.5 h-3.5" />
              <span>Terapkan Perubahan</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
