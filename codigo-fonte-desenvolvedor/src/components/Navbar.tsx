import React, { useState } from 'react';
import { Play, Menu, X, Globe, FolderArchive } from 'lucide-react';
import { Language } from '../data/portfolioData';

interface NavbarProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  onOpenShowreel: () => void;
  onOpenExport: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ language, setLanguage, onOpenShowreel, onOpenExport }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: language === 'pt' ? 'Trabalhos' : 'Selected Works', href: '#trabalhos' },
    { label: language === 'pt' ? 'Experiência' : 'Experience', href: '#experiencia' },
    { label: language === 'pt' ? 'Ferramentas' : 'Workflow & Tools', href: '#ferramentas' },
    { label: language === 'pt' ? 'Sobre Débora' : 'About Débora', href: '#sobre' },
    { label: language === 'pt' ? 'Contato' : 'Contact', href: '#contato' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#35383D] bg-[#111214]/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Brand Wordmark (Single text element) */}
        <a
          href="#"
          className="group flex items-center gap-2 whitespace-nowrap text-base font-bold tracking-wider text-[#F2F2F0] uppercase transition-colors hover:text-[#719FC3] shrink-0"
        >
          <span className="font-mono text-xs tracking-widest text-[#719FC3] opacity-80">DG</span>
          <span className="tracking-widest">DÉBORA GUERRA</span>
        </a>

        {/* Zone 2: Navigation Links (Clean single-line text links) */}
        <nav className="hidden items-center gap-6 text-xs font-semibold uppercase tracking-wider text-[#A7A9AD] md:flex shrink-0">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap transition-colors hover:text-[#F2F2F0]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Controls & Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Language Switcher */}
          <div className="flex items-center border border-[#35383D] bg-[#191B1F] p-0.5 text-xs font-mono">
            <button
              type="button"
              onClick={() => setLanguage('pt')}
              aria-label="Alterar para Português"
              className={`px-2 py-1 text-xs transition-colors ${
                language === 'pt'
                  ? 'bg-[#202328] font-bold text-[#F2F2F0] border-b border-[#719FC3]'
                  : 'text-[#A7A9AD] hover:text-[#F2F2F0]'
              }`}
            >
              PT
            </button>
            <span className="text-[#35383D]">|</span>
            <button
              type="button"
              onClick={() => setLanguage('en')}
              aria-label="Switch to English"
              className={`px-2 py-1 text-xs transition-colors ${
                language === 'en'
                  ? 'bg-[#202328] font-bold text-[#F2F2F0] border-b border-[#719FC3]'
                  : 'text-[#A7A9AD] hover:text-[#F2F2F0]'
              }`}
            >
              EN
            </button>
          </div>

          {/* Download ZIP / GitHub Export Button */}
          <button
            type="button"
            onClick={onOpenExport}
            className="flex items-center gap-1.5 border border-[#35383D] bg-[#191B1F] px-3 py-1.5 text-xs font-semibold tracking-wider text-[#A7A9AD] transition-colors hover:border-[#719FC3] hover:text-[#F2F2F0] whitespace-nowrap"
            title={language === 'pt' ? 'Baixar projeto (.ZIP para WinRAR)' : 'Download project (.ZIP for WinRAR)'}
          >
            <FolderArchive className="h-3.5 w-3.5 text-[#719FC3]" />
            <span className="hidden sm:inline">{language === 'pt' ? 'BAIXAR ZIP' : 'DOWNLOAD ZIP'}</span>
            <span className="sm:hidden">ZIP</span>
          </button>

          {/* Primary Action Button (Zero-pill discipline, crisp rounded-xs) */}
          <button
            type="button"
            onClick={onOpenShowreel}
            className="flex items-center gap-1.5 border border-[#719FC3]/40 bg-[#719FC3]/10 px-3 py-1.5 text-xs font-semibold tracking-wider text-[#F2F2F0] transition-colors hover:border-[#719FC3] hover:bg-[#719FC3]/20 whitespace-nowrap"
          >
            <Play className="h-3.5 w-3.5 fill-[#719FC3] text-[#719FC3]" />
            <span>SHOWREEL</span>
          </button>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-[#A7A9AD] hover:text-[#F2F2F0] md:hidden"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="border-b border-[#35383D] bg-[#191B1F] px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 text-sm font-semibold tracking-wider text-[#A7A9AD] hover:text-[#F2F2F0]"
              >
                {link.label}
              </a>
            ))}

            <button
              type="button"
              onClick={() => {
                onOpenExport();
                setMobileMenuOpen(false);
              }}
              className="flex items-center justify-between border border-[#35383D] bg-[#202328] p-2.5 text-xs font-mono text-[#F2F2F0] hover:border-[#719FC3]"
            >
              <span className="flex items-center gap-2">
                <FolderArchive className="h-4 w-4 text-[#719FC3]" />
                <span>{language === 'pt' ? 'Baixar Projeto (.ZIP para WinRAR)' : 'Download Project (.ZIP for WinRAR)'}</span>
              </span>
              <span className="text-[10px] text-[#719FC3]">~20 MB</span>
            </button>

            <div className="pt-2 border-t border-[#35383D] flex items-center justify-between">
              <span className="text-xs text-[#A7A9AD] flex items-center gap-1">
                <Globe className="h-3.5 w-3.5 text-[#719FC3]" />
                {language === 'pt' ? 'Idioma' : 'Language'}
              </span>
              <div className="flex gap-2 text-xs font-mono">
                <button
                  type="button"
                  onClick={() => {
                    setLanguage('pt');
                    setMobileMenuOpen(false);
                  }}
                  className={`px-2 py-0.5 ${language === 'pt' ? 'text-[#719FC3] font-bold' : 'text-[#A7A9AD]'}`}
                >
                  Português (PT)
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setLanguage('en');
                    setMobileMenuOpen(false);
                  }}
                  className={`px-2 py-0.5 ${language === 'en' ? 'text-[#719FC3] font-bold' : 'text-[#A7A9AD]'}`}
                >
                  English (EN)
                </button>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
