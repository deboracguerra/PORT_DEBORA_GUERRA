import React, { useState, useEffect } from 'react';
import { Language, Project } from './data/portfolioData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectsGrid } from './components/ProjectsGrid';
import { Experience } from './components/Experience';
import { ToolsSection } from './components/ToolsSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { ProjectModal } from './components/ProjectModal';
import { ShowreelModal } from './components/ShowreelModal';
import { CvModal } from './components/CvModal';
import { ExportModal } from './components/ExportModal';

export default function App() {
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('debora_guerra_lang');
      if (saved === 'pt' || saved === 'en') return saved;
    } catch {
      // ignore
    }
    return 'pt';
  });

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showreelOpen, setShowreelOpen] = useState(false);
  const [cvOpen, setCvOpen] = useState(false);
  const [exportOpen, setExportOpen] = useState(false);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('debora_guerra_lang', lang);
    } catch {
      // ignore
    }
  };

  return (
    <div className="min-h-screen bg-[#111214] text-[#F2F2F0] selection:bg-[#719FC3] selection:text-[#111214]">
      {/* Top Bar Navigation */}
      <Navbar
        language={language}
        setLanguage={setLanguage}
        onOpenShowreel={() => setShowreelOpen(true)}
        onOpenExport={() => setExportOpen(true)}
      />

      <main>
        {/* Hero Section */}
        <Hero
          language={language}
          onOpenShowreel={() => setShowreelOpen(true)}
          onOpenCv={() => setCvOpen(true)}
        />

        {/* Selected Works Portfolio Grid */}
        <ProjectsGrid
          language={language}
          onSelectProject={(project) => setSelectedProject(project)}
        />

        {/* Career Timeline */}
        <Experience language={language} />

        {/* Software & Technical Tools */}
        <ToolsSection language={language} />

        {/* About Débora Guerra */}
        <AboutSection
          language={language}
          onOpenCv={() => setCvOpen(true)}
          onOpenShowreel={() => setShowreelOpen(true)}
        />

        {/* Contact & Footer */}
        <ContactSection
          language={language}
          onOpenCv={() => setCvOpen(true)}
          onOpenShowreel={() => setShowreelOpen(true)}
          onOpenExport={() => setExportOpen(true)}
        />
      </main>

      {/* Interactive Modals */}
      <ProjectModal
        project={selectedProject}
        language={language}
        onClose={() => setSelectedProject(null)}
      />

      <ShowreelModal
        isOpen={showreelOpen}
        language={language}
        onClose={() => setShowreelOpen(false)}
      />

      <CvModal
        isOpen={cvOpen}
        language={language}
        onClose={() => setCvOpen(false)}
      />

      <ExportModal
        isOpen={exportOpen}
        language={language}
        onClose={() => setExportOpen(false)}
      />
    </div>
  );
}
