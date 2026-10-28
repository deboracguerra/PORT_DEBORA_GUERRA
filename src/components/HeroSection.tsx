import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { SOCIAL_LINKS, HERO_VIDEO_SRC } from '../data/portfolioData';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Sparkles, 
  ArrowRight, 
  Database, 
  Award, 
  MapPin 
} from 'lucide-react';

interface HeroSectionProps {
  language: Language;
  profileImage?: string;
  onOpenImageModal?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  language,
}) => {
  const t = TRANSLATIONS[language];

  return (
    <section
      id="about"
      className="relative pt-24 pb-14 md:pt-32 md:pb-20 border-b border-[#EFE9E2] overflow-hidden bg-white"
    >
      {/* Editorial Decorative Grid Background */}
      <div className="absolute inset-0 delicate-grid opacity-70 pointer-events-none" />

      {/* Subtle Light Blue Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#5B9BD5]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Tag & Location */}
        <div className="mb-6 flex flex-wrap items-center gap-3">
          <div
            id="hero-status-pill"
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4F8FA] border border-[#DCE8F0] text-[11px] font-mono-code uppercase tracking-wider text-[#355E7F]"
          >
            <span className="w-2 h-2 rounded-full bg-[#5B9BD5] animate-pulse shadow-[0_0_8px_#5B9BD5]" />
            <span>{t.hero.statusBadge}</span>
          </div>

          <span className="hidden sm:inline-block text-[#D1C6BC] text-xs">/</span>

          <div className="inline-flex items-center gap-1.5 text-xs text-[#7A6255] font-mono-code">
            <MapPin className="w-3.5 h-3.5 text-[#5B9BD5]" />
            <span>São Paulo, Brasil • UTC-3</span>
          </div>
        </div>

        {/* 2-Column Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* LEFT COLUMN: Profile Image with Delicate Light Blue Halo Background */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            <div className="relative group">
              {/* VIBRANT & DELICATE LIGHT BLUE HALO CIRCLE */}
              <div
                id="hero-purple-circle"
                className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#5B9BD5] via-[#7EBBE6] to-[#BEE3F8] w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 -translate-x-2 -translate-y-2 sm:-translate-x-3 sm:-translate-y-3 blur-[1px] opacity-90 group-hover:scale-105 transition-transform duration-500 shadow-[0_0_50px_rgba(91,155,213,0.35)]"
                aria-hidden="true"
              />

              {/* Secondary Outer Delicate Ring */}
              <div 
                className="absolute inset-0 rounded-full border border-[#BBD8EE] w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 scale-105 pointer-events-none" 
                aria-hidden="true"
              />

              {/* Circular Frame with Looping Video */}
              <div className="relative z-10 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white bg-[#0A1628] shadow-2xl">
                <video
                  src={HERO_VIDEO_SRC}
                  autoPlay
                  loop
                  muted
                  playsInline
                  id="hero-circle-video"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  aria-label="Vídeo em looping de dados e computação em nuvem"
                >
                  <source src={HERO_VIDEO_SRC} type="video/mp4" />
                </video>

                {/* Subtle Delicate Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating Badge 1: Data + AI */}
              <div className="absolute -bottom-3 -left-2 sm:-bottom-2 sm:-left-4 z-20 flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/95 backdrop-blur-sm border border-[#EAE3DC] shadow-lg">
                <Database className="w-4 h-4 text-[#5B9BD5]" />
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono-code text-[#8A7366] uppercase">Focus</span>
                  <span className="text-xs font-bold text-[#2C1810] tracking-wide">Data & Python</span>
                </div>
              </div>

              {/* Floating Badge 2: Emmy & Global Experience */}
              <div className="absolute -top-2 -right-2 sm:top-2 sm:-right-4 z-20 flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/95 backdrop-blur-sm border border-[#EAE3DC] shadow-lg">
                <Award className="w-4 h-4 text-[#D4982E]" />
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono-code text-[#8A7366] uppercase">Experience</span>
                  <span className="text-xs font-bold text-[#2C1810] tracking-wide">Netflix / Emmy</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Typography, Titles, Bio & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            {/* Title Block */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono-code text-[#4A90C2] tracking-widest uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{t.hero.greeting}</span>
              </div>

              <h1
                id="hero-name-title"
                className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold font-display tracking-tight text-[#2C1810] leading-tight uppercase"
              >
                DÉBORA GUERRA
              </h1>

              <div
                id="hero-subtitle"
                className="inline-block pt-1 text-sm sm:text-base font-semibold font-mono-code tracking-wide text-[#2B6691] bg-[#EDF5FB] border border-[#C2DFEE] px-3.5 py-1 rounded-md"
              >
                {t.hero.subtitle}
              </div>
            </div>

            {/* Bio Description */}
            <p
              id="hero-bio-text"
              className="text-[#4E372B] text-sm sm:text-base leading-relaxed max-w-2xl font-normal"
            >
              {t.hero.bio}
            </p>

            {/* CTAs Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2 w-full sm:w-auto">
              {/* Primary CTA: Acessar Meu GitHub */}
              <a
                href="https://github.com/deboracguerra"
                target="_blank"
                rel="noopener noreferrer"
                id="cta-hero-github"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2.5 px-5 py-3 rounded-lg bg-[#5B9BD5] hover:bg-[#4686BD] text-white text-xs sm:text-sm font-extrabold uppercase tracking-wider transition-all duration-300 shadow-md shadow-[#5B9BD5]/30 group"
              >
                <Github className="w-4 h-4" />
                <span>{language === 'pt' ? 'Acessar Meu GitHub' : 'Access My GitHub'}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Secondary CTA: LinkedIn */}
              <a
                href="https://www.linkedin.com/in/d%C3%A9bora-guerra-534b80a6/"
                target="_blank"
                rel="noopener noreferrer"
                id="cta-hero-linkedin"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-white hover:bg-[#F4F8FA] border border-[#BBD8EE] text-[#1E5782] hover:border-[#5B9BD5] text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 shadow-sm"
              >
                <Linkedin className="w-4 h-4 text-[#5B9BD5]" />
                <span>LinkedIn</span>
              </a>

              {/* Tertiary CTA: Contato */}
              <a
                href="mailto:deboracguerra@gmail.com"
                id="cta-hero-contact"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-white hover:bg-[#FAF8F5] border border-[#EAE3DC] text-[#362016] hover:border-[#5B9BD5] text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 shadow-sm"
              >
                <Mail className="w-4 h-4 text-[#5B9BD5]" />
                <span>{language === 'pt' ? 'Contato' : 'Contact'}</span>
              </a>
            </div>

            {/* Quick Numbers Ticker / Highlights */}
            <div
              id="hero-stats-grid"
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 w-full border-t border-[#EFE9E2]"
            >
              <div className="bg-white border border-[#EBE5DF] p-3 rounded-xl hover:border-[#98C9ED] transition-colors shadow-xs">
                <div className="text-xl sm:text-2xl font-bold font-display text-[#2C1810]">
                  {t.hero.statsYears}
                </div>
                <div className="text-[11px] text-[#826A5D] font-mono-code uppercase mt-0.5">
                  {t.hero.statsYearsLabel}
                </div>
              </div>

              <div className="bg-white border border-[#EBE5DF] p-3 rounded-xl hover:border-[#98C9ED] transition-colors shadow-xs">
                <div className="text-xl sm:text-2xl font-bold font-display text-[#4A90C2]">
                  {t.hero.statsHours}
                </div>
                <div className="text-[11px] text-[#826A5D] font-mono-code uppercase mt-0.5">
                  {t.hero.statsHoursLabel}
                </div>
              </div>

              <div className="bg-white border border-[#EBE5DF] p-3 rounded-xl hover:border-[#98C9ED] transition-colors shadow-xs">
                <div className="text-xl sm:text-2xl font-bold font-display text-[#2C1810]">
                  {t.hero.statsCert}
                </div>
                <div className="text-[11px] text-[#826A5D] font-mono-code uppercase mt-0.5">
                  {t.hero.statsCertLabel}
                </div>
              </div>

              <div className="bg-white border border-[#EBE5DF] p-3 rounded-xl hover:border-[#98C9ED] transition-colors shadow-xs">
                <div className="text-xl sm:text-2xl font-bold font-display text-[#4A90C2]">
                  {t.hero.statsProjects}
                </div>
                <div className="text-[11px] text-[#826A5D] font-mono-code uppercase mt-0.5">
                  {t.hero.statsProjectsLabel}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
