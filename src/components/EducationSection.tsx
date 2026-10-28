import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { EDUCATION_ITEMS } from '../data/portfolioData';
import { 
  GraduationCap, 
  Binary, 
  Film, 
  Sparkles, 
  CheckCircle2, 
  Layers, 
  Calendar,
  Building2,
  Brain,
  Database,
  Terminal,
  Compass
} from 'lucide-react';

interface EducationSectionProps {
  language: Language;
}

export const EducationSection: React.FC<EducationSectionProps> = ({ language }) => {
  const t = TRANSLATIONS[language];

  const getEducationIcon = (type: string) => {
    switch (type) {
      case 'cs':
        return <Binary className="w-6 h-6 text-[#5B9BD5]" />;
      case 'datascience':
        return <Brain className="w-6 h-6 text-[#5B9BD5]" />;
      case 'cinema':
        return <Film className="w-6 h-6 text-[#5B9BD5]" />;
      default:
        return <GraduationCap className="w-6 h-6 text-[#5B9BD5]" />;
    }
  };

  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Brain className="w-3.5 h-3.5 text-[#5B9BD5]" />;
      case 1:
        return <Database className="w-3.5 h-3.5 text-[#5B9BD5]" />;
      case 2:
        return <Terminal className="w-3.5 h-3.5 text-[#5B9BD5]" />;
      case 3:
        return <Compass className="w-3.5 h-3.5 text-[#5B9BD5]" />;
      default:
        return <Layers className="w-3.5 h-3.5 text-[#5B9BD5]" />;
    }
  };

  return (
    <section
      id="education"
      className="relative py-18 md:py-24 bg-white border-b border-[#EFE9E2]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 pb-6 border-b border-[#EFE9E2] space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-mono-code text-[#4A90C2] tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.education.sectionTag}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight text-[#2C1810] uppercase">
            {t.education.title}
          </h2>
          <p className="text-sm sm:text-base text-[#6A5447] max-w-3xl">
            {t.education.subtitle}
          </p>
        </div>

        {/* Education List / Grid */}
        <div className="space-y-7">
          {EDUCATION_ITEMS.map((item) => (
            <div
              key={item.id}
              id={`education-card-${item.id}`}
              className="group relative bg-white hover:bg-[#FAFDFE] border border-[#EBE5DF] hover:border-[#98C9ED] rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:shadow-md"
            >
              {/* Top Row: Icon + Degree + Institution + Badge */}
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-6 border-b border-[#EFE9E2]">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#F0F7FD] border border-[#D7EAF7] group-hover:border-[#5B9BD5] group-hover:bg-[#EBF4FA] flex items-center justify-center shrink-0 transition-colors">
                    {getEducationIcon(item.iconType)}
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold font-display text-[#2C1810] group-hover:text-[#4A90C2] transition-colors">
                      {language === 'pt' ? item.degreePt : item.degreeEn}
                    </h3>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1 text-xs font-mono-code text-[#7A6255]">
                      <span className="flex items-center gap-1 text-[#3B7BA8] font-semibold">
                        <Building2 className="w-3.5 h-3.5" />
                        {item.institution}
                      </span>
                      <span className="flex items-center gap-1 text-[#8A7366]">
                        <Calendar className="w-3.5 h-3.5" />
                        {item.period} {item.hours ? `• ${item.hours}` : ''}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="self-start md:self-auto">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-mono-code uppercase tracking-wider text-[#215E89] bg-[#EDF5FB] border border-[#C5E1F4] px-3 py-1.5 rounded-full whitespace-nowrap shadow-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#5B9BD5] animate-pulse" />
                    <span>{language === 'pt' ? item.badgePt : item.badgeEn}</span>
                  </span>
                </div>
              </div>

              {/* Description Body */}
              <div className="py-5">
                <p className="text-xs sm:text-sm text-[#553F33] leading-relaxed">
                  {language === 'pt' ? item.descriptionPt : item.descriptionEn}
                </p>
              </div>

              {/* Structured Topics / Grid */}
              {item.categories && item.categories.length > 0 && (
                <div className="pt-4 border-t border-[#EFE9E2] space-y-4">
                  <div className="text-[11px] font-mono-code text-[#4A90C2] uppercase tracking-wider font-semibold">
                    {t.education.curriculumTitle}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {item.categories.map((cat, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-xl bg-[#F8FBFE] border border-[#E1EDF7] space-y-2.5"
                      >
                        <div className="flex items-center gap-2 text-xs font-bold font-mono-code text-[#2C1810]">
                          {getCategoryIcon(idx)}
                          <span>{language === 'pt' ? cat.titlePt : cat.titleEn}</span>
                        </div>
                        <ul className="space-y-1.5">
                          {cat.items.map((it, itemIdx) => (
                            <li
                              key={itemIdx}
                              className="flex items-start gap-2 text-xs text-[#553F33] font-sans"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-[#5B9BD5] mt-1.5 shrink-0" />
                              <span>{it}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Standard Skills Tags */}
              {item.skills && item.skills.length > 0 && (
                <div className="pt-4 border-t border-[#EFE9E2] flex flex-wrap items-center gap-2">
                  <span className="text-[10px] font-mono-code text-[#8A7366] uppercase mr-1">
                    {language === 'pt' ? 'Domínios Centrais:' : 'Core Domains:'}
                  </span>
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1 text-[11px] font-mono-code px-2.5 py-1 rounded bg-[#F8F6F4] border border-[#E7E0D8] text-[#4E372B]"
                    >
                      <CheckCircle2 className="w-3 h-3 text-[#5B9BD5]" />
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
