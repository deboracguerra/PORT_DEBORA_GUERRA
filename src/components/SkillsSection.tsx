import React, { useState } from 'react';
import { Language, TechSkill } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { TECH_SKILLS } from '../data/portfolioData';
import { 
  Code2, 
  Database, 
  Workflow, 
  Cloud, 
  GitBranch, 
  BarChart3, 
  FileSpreadsheet,
  CheckCircle2,
  Terminal,
  Cpu
} from 'lucide-react';

interface SkillsSectionProps {
  language: Language;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ language }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'data' | 'cloud' | 'tools'>('all');
  const t = TRANSLATIONS[language];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-6 h-6 text-[#5B9BD5]" />;
      case 'Database':
        return <Database className="w-6 h-6 text-[#5B9BD5]" />;
      case 'Workflow':
        return <Workflow className="w-6 h-6 text-[#5B9BD5]" />;
      case 'Cloud':
        return <Cloud className="w-6 h-6 text-[#5B9BD5]" />;
      case 'GitBranch':
        return <GitBranch className="w-6 h-6 text-[#5B9BD5]" />;
      case 'BarChart3':
        return <BarChart3 className="w-6 h-6 text-[#5B9BD5]" />;
      case 'FileSpreadsheet':
        return <FileSpreadsheet className="w-6 h-6 text-[#5B9BD5]" />;
      default:
        return <Cpu className="w-6 h-6 text-[#5B9BD5]" />;
    }
  };

  const filteredSkills = TECH_SKILLS.filter((skill) => {
    if (activeCategory === 'all') return true;
    return skill.category === activeCategory;
  });

  return (
    <section
      id="skills"
      className="relative py-18 md:py-24 bg-white border-b border-[#EFE9E2]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 pb-6 border-b border-[#EFE9E2]">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-mono-code text-[#4A90C2] tracking-widest uppercase">
              <Terminal className="w-3.5 h-3.5" />
              <span>{t.skills.sectionTag}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight text-[#2C1810] uppercase">
              {t.skills.title}
            </h2>
            <p className="text-sm sm:text-base text-[#6A5447] max-w-xl">
              {t.skills.subtitle}
            </p>
          </div>

          {/* Category Filter Buttons */}
          <div
            id="skills-filter-container"
            className="flex flex-wrap items-center gap-2 bg-[#F4F8FA] p-1.5 rounded-lg border border-[#DCE8F0]"
          >
            <button
              type="button"
              onClick={() => setActiveCategory('all')}
              className={`px-3.5 py-1.5 rounded-md text-xs font-bold font-mono-code transition-all duration-200 ${
                activeCategory === 'all'
                  ? 'bg-[#5B9BD5] text-white shadow-sm shadow-[#5B9BD5]/30'
                  : 'text-[#5C788F] hover:text-[#2C1810]'
              }`}
            >
              {t.skills.filterAll}
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory('data')}
              className={`px-3.5 py-1.5 rounded-md text-xs font-bold font-mono-code transition-all duration-200 ${
                activeCategory === 'data'
                  ? 'bg-[#5B9BD5] text-white shadow-sm shadow-[#5B9BD5]/30'
                  : 'text-[#5C788F] hover:text-[#2C1810]'
              }`}
            >
              {t.skills.filterData}
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory('cloud')}
              className={`px-3.5 py-1.5 rounded-md text-xs font-bold font-mono-code transition-all duration-200 ${
                activeCategory === 'cloud'
                  ? 'bg-[#5B9BD5] text-white shadow-sm shadow-[#5B9BD5]/30'
                  : 'text-[#5C788F] hover:text-[#2C1810]'
              }`}
            >
              {t.skills.filterCloud}
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory('tools')}
              className={`px-3.5 py-1.5 rounded-md text-xs font-bold font-mono-code transition-all duration-200 ${
                activeCategory === 'tools'
                  ? 'bg-[#5B9BD5] text-white shadow-sm shadow-[#5B9BD5]/30'
                  : 'text-[#5C788F] hover:text-[#2C1810]'
              }`}
            >
              {t.skills.filterTools}
            </button>
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div
          id="skills-grid"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {filteredSkills.map((skill) => (
            <div
              key={skill.id}
              id={`skill-card-${skill.id}`}
              className="group relative bg-white hover:bg-[#FAFDFE] border border-[#EBE5DF] hover:border-[#98C9ED] rounded-xl p-6 transition-all duration-300 flex flex-col justify-between hover:shadow-md"
            >
              {/* Header inside Card */}
              <div>
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-[#F0F7FD] border border-[#D7EAF7] flex items-center justify-center group-hover:border-[#5B9BD5] group-hover:bg-[#EBF4FA] transition-colors">
                    {getIcon(skill.iconName)}
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-[10px] font-mono-code uppercase tracking-wider text-[#24618B] bg-[#EDF5FB] px-2 py-0.5 rounded border border-[#C7E2F5]">
                      {language === 'pt' ? skill.categoryLabelPt : skill.categoryLabelEn}
                    </span>
                    <span className="text-[10px] font-mono-code text-[#8A7366] mt-1">
                      {skill.level}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-bold font-display text-[#2C1810] tracking-wide mb-2 group-hover:text-[#4A90C2] transition-colors">
                  {skill.name}
                </h3>

                <p className="text-xs sm:text-sm text-[#553F33] leading-relaxed mb-6">
                  {language === 'pt' ? skill.descriptionPt : skill.descriptionEn}
                </p>
              </div>

              {/* Tools Pill List */}
              <div className="pt-4 border-t border-[#EFE9E2]">
                <div className="text-[10px] font-mono-code text-[#8A7366] uppercase mb-2">
                  {language === 'pt' ? 'Módulos & Tecnologias:' : 'Modules & Technologies:'}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {skill.tools.map((tool) => (
                    <span
                      key={tool}
                      className="text-[11px] font-mono-code px-2 py-0.5 rounded bg-[#F8F6F4] border border-[#E7E0D8] text-[#4E372B]"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Editorial Callout */}
        <div className="mt-10 p-4 rounded-xl bg-[#F4F8FA] border border-[#DCE8F0] flex items-center gap-3">
          <div className="p-2 rounded-lg bg-[#EDF5FB] text-[#5B9BD5]">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <p className="text-xs text-[#5D483C] font-mono-code">
            {t.skills.techStackNote}
          </p>
        </div>
      </div>
    </section>
  );
};
