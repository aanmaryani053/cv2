/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ValueCards } from './components/ValueCards';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CVModal } from './components/CVModal';
import { ProfileCustomizerModal } from './components/ProfileCustomizerModal';
import { MockupReferenceModal } from './components/MockupReferenceModal';
import { defaultProfile, ProfileData } from './data/portfolioData';
import { Image as ImageIcon, SlidersHorizontal, Receipt } from 'lucide-react';

export default function App() {
  const [profile, setProfile] = useState<ProfileData>(defaultProfile);
  const [isCVOpen, setIsCVOpen] = useState(false);
  const [isCustomizerOpen, setIsCustomizerOpen] = useState(false);
  const [isReferenceOpen, setIsReferenceOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#FBFBFA] text-[#1A1A1A] relative selection:bg-amber-400 selection:text-stone-950">
      {/* Navigation */}
      <Navbar
        profile={profile}
        onOpenCV={() => setIsCVOpen(true)}
        onOpenCustomizer={() => setIsCustomizerOpen(true)}
        onOpenReference={() => setIsReferenceOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section matching mockup with organic blobs, watermark, topographic badge & yellow portrait */}
        <Hero profile={profile} onOpenCV={() => setIsCVOpen(true)} />

        {/* 3 Floating Highlight Cards below hero */}
        <ValueCards />

        {/* "Hi There!" About Section with seated pose & social badges */}
        <AboutSection profile={profile} />

        {/* "What My Design Skills Include?" Section with skill bars & 2x2 service cards */}
        <SkillsSection />

        {/* Selected Works & Case Studies with interactive filter tabs & case study modals */}
        <ProjectsSection />

        {/* Career Timeline, Education & Certifications */}
        <ExperienceSection />

        {/* Client Praise & Testimonials */}
        <TestimonialsSection />

        {/* Contact Form, Direct Email, WhatsApp, and Location */}
        <ContactSection profile={profile} />
      </main>

      {/* Clean Anti-Slop Footer */}
      <Footer profile={profile} />

      {/* Floating Bottom Quick Bar for quick reference & customization */}
      <aside aria-label="Aksi Cepat" className="fixed bottom-5 right-5 z-30 flex items-center gap-2 bg-stone-900/90 backdrop-blur-md text-white p-1.5 rounded-2xl shadow-xl border border-stone-700/80">
        <button
          onClick={() => setIsReferenceOpen(true)}
          title="Bandingkan dengan mockup referensi asli"
          className="px-3 py-1.5 text-xs font-medium text-stone-300 hover:text-white hover:bg-stone-800 rounded-xl transition-colors flex items-center gap-1.5 cursor-pointer"
        >
          <ImageIcon className="w-3.5 h-3.5 text-amber-400" />
          <span className="hidden sm:inline">Mockup Referensi</span>
        </button>

        <span className="w-px h-4 bg-stone-700" aria-hidden="true" />

        <button
          onClick={() => setIsCustomizerOpen(true)}
          title="Sesuaikan informasi profil portofolio"
          className="px-3 py-1.5 text-xs font-medium text-stone-300 hover:text-white hover:bg-stone-800 rounded-xl transition-colors flex items-center gap-1.5 cursor-pointer"
        >
          <SlidersHorizontal className="w-3.5 h-3.5 text-amber-400" />
          <span className="hidden sm:inline">Sesuaikan Profil</span>
        </button>

        <span className="w-px h-4 bg-stone-700" aria-hidden="true" />

        <button
          onClick={() => setIsCVOpen(true)}
          title="Lihat format contoh struk pembayaran resmi"
          className="px-3 py-1.5 text-xs font-semibold bg-amber-400 hover:bg-amber-300 text-stone-950 rounded-xl transition-colors flex items-center gap-1.5 cursor-pointer"
        >
          <Receipt className="w-3.5 h-3.5" />
          <span>Struk</span>
        </button>
      </aside>

      {/* Modals */}
      <CVModal
        isOpen={isCVOpen}
        onClose={() => setIsCVOpen(false)}
        profile={profile}
      />

      <ProfileCustomizerModal
        isOpen={isCustomizerOpen}
        onClose={() => setIsCustomizerOpen(false)}
        currentProfile={profile}
        onSaveProfile={(updated) => setProfile(updated)}
      />

      <MockupReferenceModal
        isOpen={isReferenceOpen}
        onClose={() => setIsReferenceOpen(false)}
      />
    </div>
  );
}
