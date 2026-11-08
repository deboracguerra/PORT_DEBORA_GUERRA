import React, { useEffect } from 'react';
import { X, ExternalLink, Award, Film, Play, Sliders, Volume2, Monitor } from 'lucide-react';
import { Project, Language } from '../data/portfolioData';
import { ClientLogoRenderer } from './Logos';

interface ProjectModalProps {
  project: Project | null;
  language: Language;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, language, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const role = language === 'pt' ? project.rolePt : project.roleEn;
  const recognition = language === 'pt' ? project.recognitionPt : project.recognitionEn;
  const description = language === 'pt' ? project.descriptionPt : project.descriptionEn;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-4xl border border-[#35383D] bg-[#191B1F] text-[#F2F2F0] shadow-2xl my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between border-b border-[#35383D] bg-[#202328] px-4 py-3 sm:px-6">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[#719FC3]">
              {language === 'pt' ? 'FICHA TÉCNICA DO PROJETO' : 'PROJECT TECHNICAL SPECS'}
            </span>
            <span className="text-[#35383D]">·</span>
            <span className="text-xs font-mono text-[#A7A9AD]">{project.year}</span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1 text-[#A7A9AD] hover:text-[#F2F2F0] transition-colors"
            aria-label="Fechar modal"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Video Player Section */}
        <div className="relative aspect-video w-full bg-black">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${project.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
            title={project.title}
            className="absolute inset-0 h-full w-full border-none"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Content Body */}
        <div className="space-y-6 p-4 sm:p-6 lg:p-8">
          {/* Header & Recognition */}
          <div className="space-y-2">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-xs font-mono text-[#719FC3]">
                <ClientLogoRenderer logoKey={project.clientLogoKey} className="h-4 w-auto" />
                <span className="text-[#F2F2F0] font-semibold">{project.client}</span>
                <span className="text-[#35383D]">/</span>
                <span className="text-[#A7A9AD]">{project.productionCompany}</span>
              </div>

              {/* Direct YouTube link */}
              <a
                href={project.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 border border-[#35383D] bg-[#202328] px-3 py-1.5 text-xs font-semibold tracking-wider text-[#F2F2F0] hover:border-[#719FC3] hover:text-[#719FC3] transition-colors"
              >
                <Play className="h-3.5 w-3.5 text-[#E50914] fill-current" />
                <span>{language === 'pt' ? 'Assistir no YouTube' : 'Watch on YouTube'}</span>
                <ExternalLink className="h-3 w-3 text-[#A7A9AD]" />
              </a>
            </div>

            <h3 className="font-['Outfit'] text-2xl font-bold tracking-tight text-[#F2F2F0] sm:text-3xl">
              {project.title}
            </h3>

            {recognition && (
              <div className="flex items-center gap-2 border border-[#A68B6C]/40 bg-[#A68B6C]/10 px-3 py-1.5 text-xs font-semibold text-[#A68B6C]">
                <Award className="h-4 w-4 shrink-0" />
                <span>{recognition}</span>
              </div>
            )}
          </div>

          {/* Role & Synopsis */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#A7A9AD]">
              <span>{language === 'pt' ? 'Função Exata' : 'Exact Role'}:</span>
              <span className="text-[#F2F2F0] font-bold">{role}</span>
            </div>
            <p className="text-sm leading-relaxed text-[#A7A9AD] sm:text-base">{description}</p>
          </div>

          {/* Technical Specifications Matrix */}
          <div className="border border-[#35383D] bg-[#202328] p-4 sm:p-5">
            <h4 className="mb-3 flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#719FC3]">
              <Sliders className="h-3.5 w-3.5" />
              <span>{language === 'pt' ? 'Especificações Técnicas de Entrega' : 'Delivery Technical Specifications'}</span>
            </h4>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 text-xs">
              <div className="border-b border-[#35383D]/60 pb-2 sm:border-b-0 sm:border-r sm:pr-4">
                <span className="text-[#A7A9AD] block font-mono text-[11px] uppercase">
                  {language === 'pt' ? 'Resolução & Proporção' : 'Resolution & Aspect Ratio'}
                </span>
                <span className="text-[#F2F2F0] font-medium block mt-0.5">
                  {project.specs.resolution} · {project.specs.aspectRatio}
                </span>
              </div>

              <div className="border-b border-[#35383D]/60 pb-2 sm:border-b-0 sm:pl-2">
                <span className="text-[#A7A9AD] block font-mono text-[11px] uppercase">
                  {language === 'pt' ? 'Codec Master de Arquivo' : 'Master Codec & Container'}
                </span>
                <span className="text-[#F2F2F0] font-medium block mt-0.5 font-mono">
                  {project.specs.codec}
                </span>
              </div>

              <div className="border-b border-[#35383D]/60 pb-2 sm:border-b-0 sm:border-r sm:pr-4 sm:pt-2 sm:border-t">
                <span className="text-[#A7A9AD] block font-mono text-[11px] uppercase">
                  {language === 'pt' ? 'Espaço de Cor & Pipeline' : 'Color Space & Grading'}
                </span>
                <span className="text-[#F2F2F0] font-medium block mt-0.5">
                  {project.specs.colorSpace}
                </span>
              </div>

              <div className="sm:pl-2 sm:pt-2 sm:border-t sm:border-[#35383D]/60">
                <span className="text-[#A7A9AD] block font-mono text-[11px] uppercase">
                  {language === 'pt' ? 'Norma de Áudio & Loudness' : 'Audio Loudness Standard'}
                </span>
                <span className="text-[#F2F2F0] font-medium block mt-0.5 font-mono">
                  {project.specs.audioStandard}
                </span>
              </div>

              <div className="col-span-1 sm:col-span-2 pt-2 border-t border-[#35383D]/60">
                <span className="text-[#A7A9AD] block font-mono text-[11px] uppercase">
                  {language === 'pt' ? 'Fluxo Operacional de Pós-Produção' : 'Post-Production Pipeline Workflow'}
                </span>
                <span className="text-[#F2F2F0] font-medium block mt-0.5">
                  {project.specs.workflow}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
