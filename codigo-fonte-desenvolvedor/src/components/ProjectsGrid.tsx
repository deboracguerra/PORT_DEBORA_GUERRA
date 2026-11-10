import React, { useState } from 'react';
import { Play, Award, ArrowUpRight } from 'lucide-react';
import { PROJECTS_DATA, Project, Language } from '../data/portfolioData';
import { ClientLogoRenderer } from './Logos';

interface ProjectsGridProps {
  language: Language;
  onSelectProject: (project: Project) => void;
}

type FilterCategory = 'all' | 'entertainment' | 'finishing' | 'ads' | 'ai';

export const ProjectsGrid: React.FC<ProjectsGridProps> = ({ language, onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('all');

  const filterTabs = [
    { key: 'all' as FilterCategory, labelPt: 'TODOS', labelEn: 'ALL' },
    { key: 'entertainment' as FilterCategory, labelPt: 'ENTRETENIMENTO', labelEn: 'ENTERTAINMENT' },
    { key: 'finishing' as FilterCategory, labelPt: 'FINALIZAÇÃO / CONFORM', labelEn: 'FINISHING / CONFORM' },
    { key: 'ads' as FilterCategory, labelPt: 'TRÁFEGO PAGO / ANÚNCIOS', labelEn: 'PAID ADS & PERFORMANCE' },
    { key: 'ai' as FilterCategory, labelPt: 'PRODUÇÃO COM IA', labelEn: 'AI PRODUCTION' },
  ];

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    if (activeFilter === 'all') return true;
    return project.category === activeFilter;
  });

  return (
    <section id="trabalhos" className="border-b border-[#35383D] bg-[#111214] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#35383D]">
          <div className="space-y-2">
            <span className="font-mono text-xs uppercase tracking-widest text-[#719FC3]">
              {language === 'pt' ? 'PORTFÓLIO EDITORIAL' : 'EDITORIAL PORTFOLIO'}
            </span>
            <h2 className="font-['Outfit'] text-3xl font-extrabold tracking-tight text-[#F2F2F0] sm:text-4xl">
              {language === 'pt' ? 'Trabalhos Selecionados' : 'Selected Works'}
            </h2>
            <p className="max-w-xl text-sm text-[#A7A9AD]">
              {language === 'pt'
                ? 'Projetos em entretenimento seriado, conform de campanhas publicitárias, criativos de alta conversão e inovação audiovisual.'
                : 'Selected projects in episodic drama, commercial finishing & conform, high-conversion paid ads, and generative AI pipelines.'}
            </p>
          </div>

          {/* Interactive Filter Controls (Functional button segmented control adhering to zero-pill) */}
          <div className="flex flex-wrap items-center gap-1.5 border border-[#35383D] bg-[#191B1F] p-1 text-xs font-mono">
            {filterTabs.map((tab) => {
              const label = language === 'pt' ? tab.labelPt : tab.labelEn;
              const isActive = activeFilter === tab.key;
              return (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setActiveFilter(tab.key)}
                  className={`px-3 py-1.5 transition-colors whitespace-nowrap ${
                    isActive
                      ? 'bg-[#202328] font-bold text-[#F2F2F0] border-b-2 border-[#719FC3]'
                      : 'text-[#A7A9AD] hover:text-[#F2F2F0]'
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid: 16:9 cards */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => {
            const role = language === 'pt' ? project.rolePt : project.roleEn;
            const recognition = language === 'pt' ? project.recognitionPt : project.recognitionEn;

            return (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className="group relative flex flex-col border border-[#35383D] bg-[#202328] cursor-pointer transition-all duration-200 hover:border-[#719FC3] hover:shadow-xl"
              >
                {/* 16:9 Thumbnail Container */}
                <div className="relative aspect-video w-full overflow-hidden bg-black">
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  {/* Scrim Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111214] via-transparent to-black/30" />

                  {/* Play Hover Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                    <div className="flex items-center gap-2 border border-[#719FC3] bg-[#111214]/90 px-3 py-1.5 text-xs font-semibold tracking-wider text-[#F2F2F0]">
                      <Play className="h-3.5 w-3.5 fill-[#719FC3] text-[#719FC3]" />
                      <span>{language === 'pt' ? 'REPRODUZIR' : 'PLAY'}</span>
                    </div>
                  </div>

                  {/* Client Logo in corner */}
                  <div className="absolute top-3 left-3 bg-[#111214]/80 backdrop-blur-sm border border-[#35383D] px-2.5 py-1">
                    <ClientLogoRenderer logoKey={project.clientLogoKey} className="h-3.5 w-auto" />
                  </div>

                  {/* Year Tag */}
                  <div className="absolute top-3 right-3 font-mono text-[11px] text-[#F2F2F0] bg-[#111214]/80 px-2 py-0.5 border border-[#35383D]">
                    {project.year}
                  </div>
                </div>

                {/* Card Body */}
                <div className="flex flex-1 flex-col justify-between p-5 space-y-4">
                  <div className="space-y-2">
                    {/* Unboxed Metadata (Zero-pill discipline) */}
                    <div className="flex items-center gap-2 text-xs font-mono text-[#A7A9AD]">
                      <span>{project.client}</span>
                      <span aria-hidden="true" className="text-[#35383D]">·</span>
                      <span>{project.productionCompany}</span>
                    </div>

                    <h3 className="font-['Outfit'] text-lg font-bold text-[#F2F2F0] transition-colors group-hover:text-[#719FC3] text-balance">
                      {project.title}
                    </h3>

                    {/* Role Highlight */}
                    <div className="text-xs text-[#A7A9AD]">
                      <span className="text-[#719FC3] font-semibold">{role}</span>
                    </div>

                    {/* Emmy or Festival Recognition */}
                    {recognition && (
                      <div className="flex items-center gap-1.5 text-xs text-[#A68B6C] font-semibold pt-1">
                        <Award className="h-3.5 w-3.5 shrink-0" />
                        <span className="truncate">{recognition}</span>
                      </div>
                    )}
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="flex items-center justify-between border-t border-[#35383D] pt-3 text-xs font-mono text-[#A7A9AD]">
                    <span className="group-hover:text-[#F2F2F0] transition-colors">
                      {language === 'pt' ? 'Ver Ficha Técnica' : 'View Specs & Video'}
                    </span>
                    <ArrowUpRight className="h-3.5 w-3.5 text-[#719FC3] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
