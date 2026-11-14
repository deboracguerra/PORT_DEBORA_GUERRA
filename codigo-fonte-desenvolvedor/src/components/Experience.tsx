import React from 'react';
import { Award, Briefcase, Calendar, CheckCircle2 } from 'lucide-react';
import { CAREER_EXPERIENCES, Language } from '../data/portfolioData';
import { NetflixLogo, HboLogo, PrimeVideoLogo, GloboplayLogo } from './Logos';

interface ExperienceProps {
  language: Language;
}

export const Experience: React.FC<ExperienceProps> = ({ language }) => {
  return (
    <section id="experiencia" className="border-b border-[#35383D] bg-[#191B1F] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-2 pb-10 border-b border-[#35383D]">
          <span className="font-mono text-xs uppercase tracking-widest text-[#719FC3]">
            {language === 'pt' ? 'TRAJETÓRIA PROFISSIONAL' : 'CAREER CHRONOLOGY'}
          </span>
          <h2 className="font-['Outfit'] text-3xl font-extrabold tracking-tight text-[#F2F2F0] sm:text-4xl">
            {language === 'pt' ? 'Experiência Profissional' : 'Professional Experience'}
          </h2>
          <p className="text-sm text-[#A7A9AD]">
            {language === 'pt'
              ? 'Uma década de atuação em produtoras de referência, canais de televisão e plataformas globais de entretenimento.'
              : 'A decade of continuous delivery across premier production companies, broadcast networks, and international streaming platforms.'}
          </p>
        </div>

        {/* Chronological Editorial Timeline */}
        <div className="mt-12 space-y-10">
          {CAREER_EXPERIENCES.map((exp, idx) => {
            const role = language === 'pt' ? exp.rolePt : exp.roleEn;
            const department = language === 'pt' ? exp.departmentPt : exp.departmentEn;
            const highlight = language === 'pt' ? exp.highlightPt : exp.highlightEn;
            const responsibilities = language === 'pt' ? exp.responsibilitiesPt : exp.responsibilitiesEn;

            return (
              <div
                key={exp.company}
                className="relative border border-[#35383D] bg-[#202328] p-6 sm:p-8 transition-colors hover:border-[#719FC3]/60"
              >
                {/* Top Bar of Card */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#35383D]/80 pb-5">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs text-[#719FC3] font-bold">
                        0{idx + 1}.
                      </span>
                      <h3 className="font-['Outfit'] text-xl sm:text-2xl font-bold tracking-tight text-[#F2F2F0]">
                        {exp.company}
                      </h3>
                    </div>
                    <div className="text-sm font-semibold text-[#719FC3]">{role}</div>
                    <div className="text-xs font-mono text-[#A7A9AD]">{department}</div>
                  </div>

                  {/* Period Badge */}
                  <div className="flex items-center gap-1.5 self-start sm:self-auto border border-[#35383D] bg-[#191B1F] px-3 py-1 font-mono text-xs text-[#F2F2F0]">
                    <Calendar className="h-3.5 w-3.5 text-[#719FC3]" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Highlight Callout (e.g. Emmy Nominee for Sentimental Filme) */}
                {highlight && (
                  <div className="mt-5 flex items-start gap-3 border border-[#A68B6C]/40 bg-[#A68B6C]/10 p-3.5 text-xs sm:text-sm font-medium text-[#F2F2F0]">
                    <Award className="h-5 w-5 text-[#A68B6C] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-[#A68B6C] block uppercase font-mono text-xs mb-0.5">
                        {language === 'pt' ? 'Reconhecimento Especial' : 'Special Recognition'}
                      </span>
                      {highlight}
                    </div>
                  </div>
                )}

                {/* Streaming Platforms Serviced with Authentic SVG Logos (Polar Filmes) */}
                {exp.platforms && (
                  <div className="mt-5 border border-[#35383D]/80 bg-[#191B1F] p-4">
                    <span className="text-[11px] font-mono text-[#A7A9AD] uppercase tracking-wider block mb-3">
                      {language === 'pt'
                        ? 'Plataformas Atendidas com Entregas Técnicas Oficiais:'
                        : 'Streaming Platforms Serviced with Compliant Master Delivery Packages:'}
                    </span>
                    <div className="flex flex-wrap items-center gap-6 text-[#F2F2F0]">
                      <div className="flex items-center" title="Netflix">
                        <NetflixLogo className="h-5 w-auto" />
                      </div>
                      <div className="flex items-center text-[#F2F2F0]" title="HBO">
                        <HboLogo className="h-5 w-auto" />
                      </div>
                      <div className="flex items-center text-[#F2F2F0]" title="Amazon Prime Video">
                        <PrimeVideoLogo className="h-5 w-auto" />
                      </div>
                      <div className="flex items-center" title="Globoplay">
                        <GloboplayLogo className="h-5 w-auto" />
                      </div>
                    </div>
                  </div>
                )}

                {/* Detailed Responsibilities List */}
                <div className="mt-6 space-y-3">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#A7A9AD] block">
                    {language === 'pt' ? 'Principais Atribuições & Entregas:' : 'Key Responsibilities & Deliverables:'}
                  </span>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-[#A7A9AD] leading-relaxed">
                    {responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="h-4 w-4 text-[#719FC3] shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
