import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { SOCIAL_LINKS } from '../data/portfolioData';
import { Globe, Linkedin, Github, Menu, X, ArrowUpRight, Download } from 'lucide-react';

interface HeaderProps {
  language: Language;
  onToggleLanguage: (lang: Language) => void;
}

export const Header: React.FC<HeaderProps> = ({ language, onToggleLanguage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = TRANSLATIONS[language];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: t.nav.about },
    { href: '#skills', label: t.nav.skills },
    { href: '#education', label: t.nav.education },
    { href: '#experience', label: t.nav.experience },
    { href: '#certifications', label: t.nav.certifications },
    { href: '#projects', label: t.nav.projects },
    { href: '#contact', label: t.nav.contact },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-[#EAE3DC] py-3 shadow-sm'
          : 'bg-white/80 backdrop-blur-sm border-b border-[#EFE9E2] py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#about"
          id="brand-logo"
          className="group flex items-center gap-1.5 focus:outline-none"
        >
          <span className="font-display text-xl sm:text-2xl font-bold tracking-tight text-[#2C1810] group-hover:text-[#4A90C2] transition-colors">
            DÉBORA GUERRA
          </span>
          <span className="w-2.5 h-2.5 rounded-full bg-[#5B9BD5] inline-block group-hover:scale-125 transition-transform duration-300 shadow-[0_0_8px_rgba(91,155,213,0.6)]" />
        </a>

        {/* Desktop Navigation Menu */}
        <nav className="hidden lg:flex items-center gap-7" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-semibold uppercase tracking-wider text-[#6F594D] hover:text-[#2C1810] transition-colors duration-200 py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#5B9BD5] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Actions: Language Switcher & Social / CTA */}
        <div className="flex items-center gap-3">
          {/* I18n Toggle Button */}
          <div
            id="language-switcher-container"
            className="flex items-center bg-[#F4F8FA] border border-[#DCE8F0] rounded-full p-0.5"
          >
            <button
              id="lang-pt-btn"
              type="button"
              onClick={() => onToggleLanguage('pt')}
              className={`flex items-center gap-1 px-2.5 py-1 text-xs font-bold rounded-full transition-all duration-200 ${
                language === 'pt'
                  ? 'bg-[#5B9BD5] text-white shadow-[0_0_10px_rgba(91,155,213,0.4)]'
                  : 'text-[#647C90] hover:text-[#1F4362]'
              }`}
              title="Português"
            >
              <span>PT</span>
            </button>
            <button
              id="lang-en-btn"
              type="button"
              onClick={() => onToggleLanguage('en')}
              className={`flex items-center gap-1 px-2.5 py-1 text-xs font-bold rounded-full transition-all duration-200 ${
                language === 'en'
                  ? 'bg-[#5B9BD5] text-white shadow-[0_0_10px_rgba(91,155,213,0.4)]'
                  : 'text-[#647C90] hover:text-[#1F4362]'
              }`}
              title="English"
            >
              <span>EN</span>
            </button>
          </div>

          {/* Quick GitHub Icon Link */}
          <a
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            id="nav-github-link"
            className="hidden sm:inline-flex items-center justify-center w-9 h-9 rounded-full bg-[#F4F8FA] border border-[#DCE8F0] text-[#4A7292] hover:text-[#1F4362] hover:border-[#5B9BD5] hover:bg-[#EBF4FA] transition-all duration-200"
            aria-label="GitHub Profile"
            title="GitHub de Débora Guerra"
          >
            <Github className="w-4 h-4" />
          </a>

          {/* Download ZIP button */}
          <a
            href="/portfolio-debora-guerra.zip"
            download="portfolio-debora-guerra.zip"
            id="nav-download-zip-btn"
            className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F4F8FA] border border-[#DCE8F0] text-[#2C1810] hover:text-[#1E5782] hover:border-[#5B9BD5] hover:bg-[#EDF5FB] text-xs font-semibold tracking-wide transition-all duration-200"
            title={language === 'pt' ? 'Baixar código (.zip) para o GitHub' : 'Download source (.zip) for GitHub'}
          >
            <Download className="w-3.5 h-3.5 text-[#5B9BD5]" />
            <span>.ZIP</span>
          </a>

          {/* LinkedIn CTA Button */}
          <a
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            id="nav-linkedin-cta"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#EDF5FB] border border-[#BBD8EE] text-[#1E5782] hover:bg-[#5B9BD5] hover:text-white hover:border-[#5B9BD5] text-xs font-bold tracking-wide transition-all duration-300 shadow-sm"
          >
            <Linkedin className="w-3.5 h-3.5 text-[#4A90C2] group-hover:text-white" />
            <span>{t.nav.talkCTA}</span>
            <ArrowUpRight className="w-3 h-3 ml-0.5 opacity-70" />
          </a>

          {/* Mobile Hamburger Toggle */}
          <button
            id="mobile-menu-toggle"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-[#F4F8FA] border border-[#DCE8F0] text-[#2C1810] focus:outline-none focus:border-[#5B9BD5]"
            aria-label="Toggle Mobile Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5 text-[#5B9BD5]" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="lg:hidden bg-white border-b border-[#EAE3DC] px-6 py-5 space-y-4 animate-in fade-in slide-in-from-top-4 duration-200 shadow-md"
        >
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold uppercase tracking-wider text-[#553E31] hover:text-[#5B9BD5] transition-colors py-1.5 border-b border-[#F0EBE5]"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col sm:hidden gap-2.5">
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#5B9BD5] text-white text-xs font-bold tracking-wide"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#F4F8FA] border border-[#DCE8F0] text-[#2C1810] text-xs font-bold"
            >
              <Github className="w-4 h-4" />
              <span>GitHub (deboracguerra)</span>
            </a>
            <a
              href="/portfolio-debora-guerra.zip"
              download="portfolio-debora-guerra.zip"
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#EBF4FA] border border-[#BBD8EE] text-[#1E5782] text-xs font-bold"
            >
              <Download className="w-4 h-4 text-[#5B9BD5]" />
              <span>{language === 'pt' ? 'Baixar Código (.ZIP)' : 'Download Source (.ZIP)'}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
