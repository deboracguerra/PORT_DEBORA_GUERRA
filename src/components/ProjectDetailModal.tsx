import React from 'react';
import { ProjectItem, Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { X, Github, ExternalLink, CheckCircle2 } from 'lucide-react';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  language: Language;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  language,
  onClose,
}) => {
  if (!project) return null;
  const t = TRANSLATIONS[language];

  return (
    <div
      id="project-detail-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="project-detail-modal-content"
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white border border-[#EBE5DF] rounded-2xl shadow-xl p-6 sm:p-8 space-y-6 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#F4F8FA] border border-[#DCE8F0] text-[#7A6255] hover:text-[#2C1810] hover:border-[#5B9BD5] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div>
          <span className="text-xs font-mono-code text-[#215E89] uppercase tracking-wider bg-[#EDF5FB] border border-[#C5E1F4] px-2.5 py-1 rounded-md">
            {language === 'pt' ? project.categoryPt : project.categoryEn}
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold font-display text-[#2C1810] mt-3 tracking-tight uppercase">
            {language === 'pt' ? project.titlePt : project.titleEn}
          </h3>
        </div>

        {/* Image Preview */}
        <div className="relative w-full h-56 sm:h-72 rounded-xl overflow-hidden border border-[#EBE5DF] bg-[#F8F6F4]">
          <img
            src={project.imageUrl}
            alt={language === 'pt' ? project.titlePt : project.titleEn}
            loading="lazy"
            referrerPolicy="no-referrer"
            onError={(e) => {
              const target = e.currentTarget;
              target.onerror = null;
              target.src = 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80';
            }}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Metrics Grid if available */}
        {project.metrics && (
          <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-[#F8FBFE] border border-[#E1EDF7]">
            {project.metrics.map((metric, i) => (
              <div key={i} className="text-center">
                <div className="text-lg sm:text-xl font-bold font-display text-[#4A90C2]">
                  {metric.value}
                </div>
                <div className="text-[10px] font-mono-code text-[#7A6255] uppercase mt-0.5">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Deep Dive Description */}
        <div className="space-y-2">
          <h4 className="text-xs font-mono-code text-[#8A7366] uppercase tracking-wider">
            {language === 'pt' ? 'Visão Geral da Arquitetura:' : 'Architecture & Implementation:'}
          </h4>
          <p className="text-sm text-[#553F33] leading-relaxed">
            {language === 'pt' ? project.fullDetailsPt : project.fullDetailsEn}
          </p>
        </div>

        {/* Key Highlights */}
        <div className="space-y-2">
          <h4 className="text-xs font-mono-code text-[#8A7366] uppercase tracking-wider">
            {t.projects.highlightsTitle}
          </h4>
          <div className="space-y-2">
            {project.highlights.map((highlight, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-[#553F33]">
                <CheckCircle2 className="w-4 h-4 text-[#5B9BD5] shrink-0 mt-0.5" />
                <span>{highlight}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 pt-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-mono-code px-2.5 py-1 rounded bg-[#F8F6F4] border border-[#E7E0D8] text-[#553F33]"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex flex-wrap items-center justify-end gap-3 pt-4 border-t border-[#EFE9E2]">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 rounded-lg bg-[#F4F8FA] border border-[#DCE8F0] text-[#2C1810] text-xs font-bold uppercase tracking-wider hover:bg-[#EBF4FA] transition-colors"
          >
            {t.projects.modalClose}
          </button>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#5B9BD5] hover:bg-[#4686BD] text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-xs"
          >
            <Github className="w-4 h-4" />
            <span>{t.projects.modalRepoButton}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
