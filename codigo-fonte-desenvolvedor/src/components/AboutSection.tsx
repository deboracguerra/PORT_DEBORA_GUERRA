import React from 'react';
import { Award, Globe, FileText, Play, CheckCircle2, MapPin, ArrowUpRight } from 'lucide-react';
import { CV_DATA, Language } from '../data/portfolioData';
import { WhatsAppLogo } from './Logos';

interface AboutSectionProps {
  language: Language;
  onOpenCv: () => void;
  onOpenShowreel: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ language, onOpenCv, onOpenShowreel }) => {
  return (
    <section id="sobre" className="border-b border-[#35383D] bg-[#191B1F] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-center">
          {/* Left Column: Image of Débora Guerra in Post-Production Studio */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative border border-[#35383D] bg-[#202328] p-2 shadow-2xl">
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-black">
                <img
                  src="./assets/aistudio/Gemini_Generated_Image_83xzza83xzza83xz_6931baa2.jfif"
                  alt="Débora Guerra — Editora de Vídeo & Especialista em Pós-Produção"
                  className="h-full w-full object-cover object-top filter brightness-95 contrast-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111214] via-transparent to-transparent opacity-60" />
              </div>

              {/* Bottom caption on image frame */}
              <div className="flex items-center justify-between px-3 py-2 text-xs font-mono text-[#A7A9AD]">
                <span className="text-[#F2F2F0] font-semibold">DÉBORA GUERRA</span>
                <span className="text-[#719FC3]">SÃO PAULO · BR</span>
              </div>
            </div>

            {/* Quick trust badge */}
            <div className="border border-[#A68B6C]/40 bg-[#A68B6C]/10 p-3.5 flex items-center gap-3 text-xs text-[#A68B6C]">
              <Award className="h-5 w-5 shrink-0" />
              <span>
                {language === 'pt'
                  ? 'Indicada ao Emmy Awards 2025 pela montagem de "Bora, o Pódio é Nosso"'
                  : '2025 Emmy Awards Nominee for editing on "Bora, o Pódio é Nosso"'}
              </span>
            </div>
          </div>

          {/* Right Column: Editorial Bio & Languages */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="font-mono text-xs uppercase tracking-widest text-[#719FC3]">
                {language === 'pt' ? 'SOBRE DÉBORA GUERRA' : 'ABOUT DÉBORA GUERRA'}
              </span>
              <h2 className="font-['Outfit'] text-3xl font-extrabold tracking-tight text-[#F2F2F0] sm:text-4xl text-balance">
                {language === 'pt'
                  ? 'Sensibilidade Narrativa Aliada à Máxima Rigidez Técnica'
                  : 'Narrative Storytelling Powered by Technical Precision'}
              </h2>
            </div>

            <div className="space-y-4 text-sm leading-relaxed text-[#A7A9AD] sm:text-base">
              <p>
                {language === 'pt'
                  ? 'Com mais de uma década dedicada à pós-produção audiovisual, atuo no cruzamento exato entre a montagem dramatúrgica e o rigor da engenharia de conform broadcast. Minha trajetória engloba séries originais para streaming global (Netflix, HBO, Amazon Prime Video, Globoplay), séries documentais de destaque esportivo e dezenas de campanhas publicitárias de primeiro escalão.'
                  : 'With more than a decade devoted to audiovisual post-production, I operate at the exact intersection of dramaturgical editing and the rigor of broadcast conform engineering. My track record spans original series for global streaming services (Netflix, HBO, Amazon Prime Video, Globoplay), sports documentary series, and dozens of top-tier commercial advertising campaigns.'}
              </p>
              <p>
                {language === 'pt'
                  ? 'Na Sentimental Filme, assinei a montagem de "Bora, o Pódio é Nosso" (Rede Globo / Gloob), produção reconhecida internacionalmente com a indicação ao Emmy Awards 2025. Paralelamente, conduzi o fechamento de conform técnico e masters publicitários para marcas como Coca-Cola, Fiat, Samsung, Burger King, Nubank, L\'Oréal Paris, Vivo e Bradesco.'
                  : 'At Sentimental Filme, I edited "Bora, o Pódio é Nosso" (Rede Globo / Gloob), an international standout nominated for the 2025 Emmy Awards. Simultaneously, I spearheaded online technical conform and broadcast master closing for global brands including Coca-Cola, Fiat, Samsung, Burger King, Nubank, L\'Oréal Paris, Vivo, and Bradesco.'}
              </p>
              <p>
                {language === 'pt'
                  ? 'Atualmente, na Mondial / AIWA, lidero a pós-produção de anúncios de alta conversão multiformato (9:16, 1:1, 16:9), além de atuar no laboratório de inovação em pesquisa de fluxos híbridos com modelos generativos de inteligência artificial (Google Flow, Veo, etc.).'
                  : 'Currently, at Mondial / AIWA, I lead post-production for high-conversion multi-format advertising (9:16, 1:1, 16:9), in addition to contributing to research into hybrid workflows incorporating cutting-edge generative AI models (Google Flow, Veo).'}
              </p>
            </div>

            {/* Languages & Location Grid */}
            <div className="border border-[#35383D] bg-[#202328] p-4 sm:p-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-[#719FC3] flex items-center gap-1.5 mb-2">
                  <Globe className="h-3.5 w-3.5" />
                  <span>{language === 'pt' ? 'Idiomas de Atendimento' : 'Language Proficiency'}</span>
                </span>
                <div className="space-y-1 text-xs">
                  {CV_DATA.languages.map((lang) => (
                    <div key={lang.nameEn} className="flex items-center justify-between text-[#A7A9AD]">
                      <span className="text-[#F2F2F0] font-medium">{language === 'pt' ? lang.namePt : lang.nameEn}</span>
                      <span className="font-mono text-[#719FC3]">{language === 'pt' ? lang.levelPt : lang.levelEn}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-[#719FC3] flex items-center gap-1.5 mb-2">
                  <MapPin className="h-3.5 w-3.5" />
                  <span>{language === 'pt' ? 'Disponibilidade & Base' : 'Location & Availability'}</span>
                </span>
                <p className="text-xs text-[#A7A9AD] leading-relaxed">
                  <span className="text-[#F2F2F0] font-medium block">São Paulo, SP — Brasil</span>
                  {language === 'pt'
                    ? 'Disponível para contratação por projeto ou contrato contínuo, em modelo remoto ou presencial.'
                    : 'Available for hire on a project basis or ongoing contract, in remote or on-site model.'}
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={CV_DATA.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-[#25D366] bg-[#25D366] px-5 py-3 text-xs sm:text-sm font-semibold tracking-wider text-[#111214] hover:bg-[#20ba59] transition-all"
              >
                <WhatsAppLogo className="h-4 w-4 fill-[#111214]" />
                <span>WHATSAPP DIRETO</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>

              <button
                type="button"
                onClick={onOpenCv}
                className="flex items-center gap-2 border border-[#719FC3] bg-[#719FC3]/10 px-5 py-3 text-xs sm:text-sm font-semibold tracking-wider text-[#F2F2F0] hover:bg-[#719FC3] hover:text-[#111214] transition-all"
              >
                <FileText className="h-4 w-4" />
                <span>{language === 'pt' ? 'VER CURRÍCULO COMPLETO' : 'VIEW FULL CURRICULUM'}</span>
              </button>

              <button
                type="button"
                onClick={onOpenShowreel}
                className="flex items-center gap-2 border border-[#35383D] bg-[#202328] px-5 py-3 text-xs sm:text-sm font-semibold tracking-wider text-[#F2F2F0] hover:border-[#719FC3] hover:text-[#719FC3] transition-colors"
              >
                <Play className="h-4 w-4 text-[#719FC3]" />
                <span>{language === 'pt' ? 'ASSISTIR SHOWREEL' : 'WATCH SHOWREEL'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
