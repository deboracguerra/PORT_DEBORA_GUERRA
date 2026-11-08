import React from 'react';
import { Play, Award, Film, Sliders, FileText, ArrowDown } from 'lucide-react';
import { Language } from '../data/portfolioData';
import {
  NetflixLogo,
  HboLogo,
  PrimeVideoLogo,
  GloboplayLogo,
  RedeGloboLogo,
  GloobLogo,
  CocaColaLogo,
  LorealLogo,
  SamsungLogo,
  AiwaLogo,
} from './Logos';

interface HeroProps {
  language: Language;
  onOpenShowreel: () => void;
  onOpenCv: () => void;
}

export const Hero: React.FC<HeroProps> = ({ language, onOpenShowreel, onOpenCv }) => {
  return (
    <section className="relative overflow-hidden border-b border-[#35383D] bg-[#111214]">
      {/* Background Image: Post-production studio with reference monitors */}
      <div className="absolute inset-0 z-0 select-none">
        <img
          src="./assets/aistudio/Est_dio_Cinematogr_fico_de_P_s-Produ__o_e123d73c.png"
          alt="Estúdio de Pós-Produção Cinematográfica Débora Guerra"
          className="h-full w-full object-cover object-center opacity-30 md:opacity-35 scale-105"
          referrerPolicy="no-referrer"
        />
        {/* Gradients to blend seamlessly into #111214 */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#111214] via-[#111214]/80 to-[#111214]/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#111214] via-transparent to-[#111214]" />
        {/* Subtle cinematic vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(17,18,20,0.7)_100%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-16 pb-12 sm:px-6 sm:pt-24 sm:pb-16 lg:px-8">
        {/* Professional Header & Kicker */}
        <div className="max-w-4xl space-y-6">
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono uppercase tracking-widest text-[#719FC3]">
            <span className="font-semibold">São Paulo, Brasil</span>
            <span className="text-[#35383D]">·</span>
            <span>Remoto & Presencial</span>
            <span className="text-[#35383D]">·</span>
            <span className="text-[#A68B6C] font-semibold flex items-center gap-1">
              <Award className="h-3.5 w-3.5" />
              {language === 'pt' ? 'Indicação Emmy Awards 2025' : 'Emmy Awards 2025 Nominee'}
            </span>
          </div>

          <div className="space-y-3">
            <h2 className="text-xs sm:text-sm font-mono tracking-widest text-[#A7A9AD] uppercase">
              {language === 'pt'
                ? 'EDITORA DE VÍDEO & ESPECIALISTA EM PÓS-PRODUÇÃO'
                : 'VIDEO EDITOR & POST-PRODUCTION SPECIALIST'}
            </h2>
            <h1 className="font-['Outfit'] text-3xl font-extrabold tracking-tight text-[#F2F2F0] sm:text-5xl lg:text-6xl text-balance">
              {language === 'pt' ? (
                <>
                  MONTAGEM. FINALIZAÇÃO.{' '}
                  <span className="text-[#719FC3]">NARRATIVA.</span>
                </>
              ) : (
                <>
                  EDITING. FINISHING.{' '}
                  <span className="text-[#719FC3]">STORYTELLING.</span>
                </>
              )}
            </h1>
          </div>

          <p className="max-w-2xl text-base leading-relaxed text-[#A7A9AD] sm:text-lg">
            {language === 'pt'
              ? 'Mais de 10 anos de experiência editorial e conform técnico para as principais plataformas globais de streaming, canais de TV e grandes marcas publicitárias. Do corte offline ao master final em padrão broadcast.'
              : 'Over a decade of editorial storytelling and technical conform for leading global streaming platforms, broadcast networks, and international advertising campaigns. From offline narrative cut to final broadcast delivery.'}
          </p>

          {/* Action Buttons (Zero-pill discipline, crisp rectangular with subtle borders) */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              type="button"
              onClick={onOpenShowreel}
              className="group flex items-center gap-2.5 border border-[#719FC3] bg-[#719FC3] px-5 py-3 text-xs sm:text-sm font-semibold tracking-wider text-[#111214] transition-all hover:bg-[#8bb4d4] hover:border-[#8bb4d4]"
            >
              <Play className="h-4 w-4 fill-current" />
              <span>{language === 'pt' ? 'ASSISTIR SHOWREEL' : 'WATCH SHOWREEL'}</span>
            </button>

            <a
              href="#trabalhos"
              className="flex items-center gap-2 border border-[#35383D] bg-[#191B1F] px-5 py-3 text-xs sm:text-sm font-semibold tracking-wider text-[#F2F2F0] transition-colors hover:border-[#719FC3] hover:text-[#719FC3]"
            >
              <Film className="h-4 w-4 text-[#719FC3]" />
              <span>{language === 'pt' ? 'VER TRABALHOS' : 'EXPLORE WORKS'}</span>
            </a>

            <button
              type="button"
              onClick={onOpenCv}
              className="flex items-center gap-2 border border-[#35383D] bg-[#191B1F] px-4 py-3 text-xs sm:text-sm font-semibold tracking-wider text-[#A7A9AD] transition-colors hover:border-[#F2F2F0] hover:text-[#F2F2F0]"
            >
              <FileText className="h-4 w-4 text-[#A68B6C]" />
              <span>{language === 'pt' ? 'CURRÍCULO (CV)' : 'CURRICULUM VITAE'}</span>
            </button>
          </div>
        </div>

        {/* Client & Platform Brand Strips */}
        <div className="mt-14 pt-8 border-t border-[#35383D]/70">
          <p className="mb-4 text-xs font-mono tracking-widest text-[#A7A9AD] uppercase">
            {language === 'pt'
              ? 'PLATAFORMAS E CLIENTES EM PROJETOS SELECIONADOS'
              : 'PLATFORMS & CLIENTS ACROSS SELECTED PRODUCTIONS'}
          </p>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-5 text-[#A7A9AD] opacity-90 transition-opacity hover:opacity-100">
            <div className="flex items-center transition-transform hover:scale-105" title="Netflix">
              <NetflixLogo className="h-5 w-auto" />
            </div>
            <div className="flex items-center transition-transform hover:scale-105 text-[#F2F2F0]" title="HBO">
              <HboLogo className="h-5 w-auto" />
            </div>
            <div className="flex items-center transition-transform hover:scale-105 text-[#F2F2F0]" title="Amazon Prime Video">
              <PrimeVideoLogo className="h-5 w-auto" />
            </div>
            <div className="flex items-center transition-transform hover:scale-105 text-[#F2F2F0]" title="Globoplay">
              <GloboplayLogo className="h-5 w-auto" />
            </div>
            <div className="flex items-center gap-2 transition-transform hover:scale-105" title="Rede Globo">
              <RedeGloboLogo className="h-6 w-auto" />
              <span className="text-xs font-bold tracking-tight text-[#F2F2F0]">GLOBO</span>
            </div>
            <div className="flex items-center transition-transform hover:scale-105" title="Gloob">
              <GloobLogo className="h-5 w-auto" />
            </div>
            <div className="flex items-center transition-transform hover:scale-105" title="Coca-Cola">
              <CocaColaLogo className="h-6 w-auto" />
            </div>
            <div className="flex items-center transition-transform hover:scale-105 text-[#F2F2F0]" title="L'Oréal Paris">
              <LorealLogo className="h-4 w-auto" />
            </div>
            <div className="flex items-center transition-transform hover:scale-105 text-[#F2F2F0]" title="Samsung">
              <SamsungLogo className="h-4 w-auto" />
            </div>
            <div className="flex items-center transition-transform hover:scale-105" title="AIWA">
              <AiwaLogo className="h-5 w-auto" />
            </div>
          </div>
        </div>

        {/* 4-Column Proof Metrics Strip (Strictly below the split as recommended in Constitution) */}
        <div className="mt-10 grid grid-cols-2 gap-4 border border-[#35383D] bg-[#191B1F]/90 p-5 sm:grid-cols-4 lg:gap-6">
          <div className="space-y-1 border-r border-[#35383D]/60 pr-3 last:border-none">
            <span className="font-['Outfit'] text-2xl sm:text-3xl font-extrabold text-[#F2F2F0] tabular-nums">
              10+
            </span>
            <span className="text-xs font-mono block text-[#719FC3] uppercase">
              {language === 'pt' ? 'Anos de Carreira' : 'Years Experience'}
            </span>
            <p className="text-xs text-[#A7A9AD] leading-tight">
              {language === 'pt' ? 'Publicidade, entretenimento e streaming' : 'Advertising, drama & streaming'}
            </p>
          </div>

          <div className="space-y-1 border-r border-[#35383D]/60 pr-3 last:border-none">
            <div className="flex items-center gap-1.5">
              <span className="font-['Outfit'] text-2xl sm:text-3xl font-extrabold text-[#A68B6C] tabular-nums">
                2025
              </span>
              <Award className="h-5 w-5 text-[#A68B6C]" />
            </div>
            <span className="text-xs font-mono block text-[#A68B6C] uppercase font-semibold">
              {language === 'pt' ? 'Indicação Emmy' : 'Emmy Nominee'}
            </span>
            <p className="text-xs text-[#A7A9AD] leading-tight">
              {language === 'pt' ? '"Bora, o Pódio é Nosso" (Globo/Gloob)' : '"Bora, o Pódio é Nosso" (Globo/Gloob)'}
            </p>
          </div>

          <div className="space-y-1 border-r border-[#35383D]/60 pr-3 last:border-none">
            <span className="font-['Outfit'] text-2xl sm:text-3xl font-extrabold text-[#F2F2F0] tabular-nums">
              4
            </span>
            <span className="text-xs font-mono block text-[#719FC3] uppercase">
              {language === 'pt' ? 'Grandes Streamings' : 'Global Streamings'}
            </span>
            <p className="text-xs text-[#A7A9AD] leading-tight">
              Netflix, HBO, Prime Video & Globoplay
            </p>
          </div>

          <div className="space-y-1">
            <span className="font-['Outfit'] text-2xl sm:text-3xl font-extrabold text-[#F2F2F0] tabular-nums">
              100%
            </span>
            <span className="text-xs font-mono block text-[#719FC3] uppercase">
              {language === 'pt' ? 'Cobertura de Pipeline' : 'Pipeline Coverage'}
            </span>
            <p className="text-xs text-[#A7A9AD] leading-tight">
              {language === 'pt' ? 'Edição, Conform, EBU R128 & QC' : 'Offline, Conform, EBU R128 & QC'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
