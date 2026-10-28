import React, { useState } from 'react';
import { Language, ProjectItem } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { PROJECTS, SOCIAL_LINKS } from '../data/portfolioData';
import { ProjectDetailModal } from './ProjectDetailModal';
import { 
  FolderGit2, 
  Github, 
  ExternalLink, 
  ArrowUpRight, 
  Eye 
} from 'lucide-react';

interface ProjectsSectionProps {
  language: Language;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ language }) => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const t = TRANSLATIONS[language];

  return (
    <section
      id="projects"
      className="relative py-18 md:py-24 bg-white border-b border-[#EFE9E2]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 pb-6 border-b border-[#EFE9E2]">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-mono-code text-[#4A90C2] tracking-widest uppercase">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>{t.projects.sectionTag}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight text-[#2C1810] uppercase">
              {t.projects.title}
            </h2>
            <p className="text-sm sm:text-base text-[#6A5447] max-w-xl">
              {t.projects.subtitle}
            </p>
          </div>

          {/* Direct Link to GitHub Profile */}
          <a
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            id="all-github-projects-link"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#F4F8FA] border border-[#DCE8F0] hover:border-[#5B9BD5] text-xs font-mono-code text-[#2C1810] hover:text-[#4A90C2] transition-colors self-start md:self-auto shadow-xs"
          >
            <Github className="w-4 h-4 text-[#5B9BD5]" />
            <span>github.com/deboracguerra</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
          </a>
        </div>

        {/* Projects Cards Grid */}
        <div
          id="projects-grid"
          className="grid grid-cols-1 lg:grid-cols-3 gap-7"
        >
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              id={`project-card-${project.id}`}
              className="group relative bg-white hover:bg-[#FAFDFE] border border-[#EBE5DF] hover:border-[#98C9ED] rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-md"
            >
              <div>
                {/* Project Image Preview with Overlay */}
                <div className="relative w-full h-52 overflow-hidden bg-[#F6F4F1] border-b border-[#EFE9E2]">
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
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Category Pill on Image */}
                  <span className="absolute top-3 left-3 text-[10px] font-mono-code uppercase tracking-wider text-[#1E5681] bg-white/95 backdrop-blur-sm border border-[#DCE8F0] px-2.5 py-1 rounded-md shadow-xs">
                    {language === 'pt' ? project.categoryPt : project.categoryEn}
                  </span>

                  {/* Quick Detail Action on Image */}
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="absolute bottom-3 right-3 p-2 rounded-lg bg-white/90 border border-[#DCE8F0] text-[#553F33] hover:text-white hover:bg-[#5B9BD5] hover:border-[#5B9BD5] transition-colors shadow-xs"
                    title={t.projects.viewDetails}
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                </div>

                {/* Content Body */}
                <div className="p-6">
                  <h3 className="text-xl font-bold font-display text-[#2C1810] mb-2.5 group-hover:text-[#4A90C2] transition-colors">
                    {language === 'pt' ? project.titlePt : project.titleEn}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#553F33] leading-relaxed mb-4">
                    {language === 'pt' ? project.descriptionPt : project.descriptionEn}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="space-y-1.5 mb-5">
                    {project.highlights.slice(0, 2).map((item, i) => (
                      <div key={i} className="flex items-start gap-1.5 text-[11px] text-[#7A6255] font-mono-code">
                        <span className="text-[#5B9BD5] font-bold">›</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono-code px-2 py-0.5 rounded bg-[#F8F6F4] border border-[#E7E0D8] text-[#553F33]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-6 pt-0 flex items-center gap-2.5">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id={`btn-github-${project.id}`}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#5B9BD5] hover:bg-[#4686BD] text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-xs hover:shadow-sm group/btn"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>{t.projects.viewOnGithub}</span>
                  <ExternalLink className="w-3 h-3 opacity-70 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </a>

                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="px-3.5 py-2.5 rounded-lg bg-[#F4F8FA] hover:bg-[#EBF4FA] border border-[#DCE8F0] text-[#2C1810] text-xs font-bold font-mono-code transition-colors"
                  title={t.projects.viewDetails}
                >
                  <Eye className="w-4 h-4 text-[#5B9BD5]" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Project Deep Dive Modal */}
      <ProjectDetailModal
        project={selectedProject}
        language={language}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
