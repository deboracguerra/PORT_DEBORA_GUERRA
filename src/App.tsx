/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Language } from './types';
import { DEFAULT_PROFILE_IMAGE } from './data/portfolioData';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { SkillsSection } from './components/SkillsSection';
import { EducationSection } from './components/EducationSection';
import { ExperienceSection } from './components/ExperienceSection';
import { CertificationsSection } from './components/CertificationsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { FooterSection } from './components/FooterSection';
import { EditorialDecorations } from './components/EditorialDecorations';
import { ImageCustomizerModal } from './components/ImageCustomizerModal';
import { ToastNotification } from './components/ToastNotification';

export default function App() {
  const [language, setLanguage] = useState<Language>('pt');
  const [profileImage, setProfileImage] = useState<string>(DEFAULT_PROFILE_IMAGE);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  return (
    <div className="relative min-h-screen bg-white text-[#362016] selection:bg-[#D4E8F8] selection:text-[#1F4362] font-sans antialiased">
      {/* Decorative Editorial Watermarks */}
      <EditorialDecorations />

      {/* Main Navigation Header */}
      <Header
        language={language}
        onToggleLanguage={(newLang) => setLanguage(newLang)}
      />

      {/* Main Content Sections */}
      <main className="relative z-10">
        {/* BLOCO 1: Hero & Bio */}
        <HeroSection
          language={language}
          profileImage={profileImage}
          onOpenImageModal={() => setIsImageModalOpen(true)}
        />

        {/* BLOCO 2: Habilidades Técnicas (Tech Stack) */}
        <SkillsSection language={language} />

        {/* NOVO BLOCO: Formação Acadêmica & Certificações */}
        <EducationSection language={language} />

        {/* BLOCO 3: Experiência Profissional & Clientes de Destaque */}
        <ExperienceSection language={language} />

        {/* BLOCO 4: Participação em Eventos e Certificações */}
        <CertificationsSection language={language} />

        {/* BLOCO 5: Projetos Linkados ao GitHub */}
        <ProjectsSection language={language} />
      </main>

      {/* BLOCO 6: Footer / Rodapé */}
      <FooterSection
        language={language}
        onShowToast={showToast}
      />

      {/* Image Customizer Modal */}
      <ImageCustomizerModal
        isOpen={isImageModalOpen}
        currentImage={profileImage}
        language={language}
        onClose={() => setIsImageModalOpen(false)}
        onUpdateImage={(newImg) => {
          setProfileImage(newImg);
          showToast(language === 'pt' ? 'Foto de perfil atualizada!' : 'Profile photo updated!');
        }}
      />

      {/* Action Toast Feedback */}
      <ToastNotification message={toastMessage} />
    </div>
  );
}
