import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { EXPERIENCES, GLOBAL_CLIENTS } from '../data/portfolioData';
import { 
  Briefcase, 
  Trophy, 
  Calendar, 
  Sparkles, 
  ShieldCheck, 
  Clapperboard, 
  CheckCircle 
} from 'lucide-react';

interface ExperienceSectionProps {
  language: Language;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ language }) => {
  const t = TRANSLATIONS[language];

  return (
    <section
      id="experience"
      className="relative py-18 md:py-24 bg-white border-b border-[#EFE9E2]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 pb-6 border-b border-[#EFE9E2] space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-mono-code text-[#4A90C2] tracking-widest uppercase">
            <Briefcase className="w-3.5 h-3.5" />
            <span>{t.experience.sectionTag}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight text-[#2C1810] uppercase">
            {t.experience.title}
          </h2>
          <p className="text-sm sm:text-base text-[#6A5447] max-w-2xl">
            {t.experience.subtitle}
          </p>
        </div>

        {/* SPECIAL FEATURED BANNER: GLOBAL STREAMING PLAYERS */}
        <div
          id="global-players-banner"
          className="mb-14 bg-gradient-to-r from-[#F7FAFD] via-[#F0F7FC] to-[#F7FAFD] border border-[#D0E3F3] rounded-2xl p-6 sm:p-8 shadow-sm relative overflow-hidden"
        >
          {/* Subtle light blue glow */}
          <div className="absolute -top-10 -right-10 w-48 h-48 bg-[#5B9BD5]/10 rounded-full blur-2xl pointer-events-none" />

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6 pb-6 border-b border-[#D8E8F5]">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-mono-code text-[#2B6894] uppercase font-bold tracking-wider">
                <ShieldCheck className="w-4 h-4 text-[#5B9BD5]" />
                <span>{t.experience.clientsTitle}</span>
              </div>
              <p className="text-xs sm:text-sm text-[#665043]">
                {t.experience.clientsSubtitle}
              </p>
            </div>
            <div className="text-[11px] font-mono-code px-3 py-1 rounded bg-white border border-[#CCE2F3] text-[#275E85] self-start md:self-auto shadow-xs">
              GLOBAL BROADCAST & STREAMING STANDARDS
            </div>
          </div>

          {/* Player Badges Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {GLOBAL_CLIENTS.map((client) => (
              <div
                key={client.name}
                className="group relative bg-white border border-[#DCE8F0] hover:border-[#5B9BD5] rounded-xl p-5 flex flex-col items-center justify-center text-center transition-all duration-300 hover:scale-[1.02] shadow-xs hover:shadow-md"
              >
                <div className="text-lg sm:text-xl md:text-2xl font-bold font-display tracking-wider text-[#2C1810] group-hover:text-[#4A90C2] transition-colors">
                  {client.name}
                </div>
                <div className="text-[10px] font-mono-code text-[#826A5D] group-hover:text-[#4A90C2] transition-colors mt-1.5 uppercase">
                  {client.label}
                </div>
                <div className="w-8 h-[2px] bg-[#5B9BD5] mt-3 group-hover:w-16 transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>

        {/* EXPERIENCE TIMELINE LIST */}
        <div id="experience-timeline" className="space-y-7">
          {EXPERIENCES.map((exp) => (
            <div
              key={exp.id}
              id={`experience-item-${exp.id}`}
              className="relative bg-white border border-[#EBE5DF] hover:border-[#98C9ED] rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:shadow-md"
            >
              {/* Header inside Timeline Item */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6 pb-6 border-b border-[#EFE9E2]">
                <div className="space-y-1.5">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-2xl sm:text-3xl font-bold font-display text-[#2C1810] tracking-tight">
                      {exp.company}
                    </h3>
                    
                    {/* Featured Award / Emmy Badge */}
                    {exp.featuredBadgePt && (
                      <span
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold font-mono-code tracking-wide ${
                          exp.badgeType === 'award'
                            ? 'bg-[#EDF5FB] border border-[#BBD8EE] text-[#1E5681] shadow-xs'
                            : exp.badgeType === 'nomination'
                            ? 'bg-[#FDF6E8] border border-[#F3DBAC] text-[#8C5D16]'
                            : 'bg-[#F8F6F4] border border-[#E7E0D8] text-[#553F33]'
                        }`}
                      >
                        {exp.badgeType === 'award' && <Trophy className="w-3.5 h-3.5 text-[#5B9BD5]" />}
                        {exp.badgeType === 'nomination' && <Sparkles className="w-3.5 h-3.5 text-[#D4982E]" />}
                        {exp.badgeType === 'standard' && <Clapperboard className="w-3.5 h-3.5 text-[#5B9BD5]" />}
                        <span>
                          {language === 'pt' ? exp.featuredBadgePt : exp.featuredBadgeEn}
                        </span>
                      </span>
                    )}
                  </div>

                  <div className="text-sm sm:text-base font-semibold text-[#3B7BA8]">
                    {language === 'pt' ? exp.rolePt : exp.roleEn}
                  </div>
                </div>

                <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#F8F6F4] border border-[#E7E0D8] text-xs font-mono-code text-[#7A6255] self-start lg:self-auto">
                  <Calendar className="w-3.5 h-3.5 text-[#5B9BD5]" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Main Summary Description */}
              <p className="text-sm sm:text-base text-[#553F33] leading-relaxed mb-6">
                {language === 'pt' ? exp.descriptionPt : exp.descriptionEn}
              </p>

              {/* Achievements Checklist */}
              <div className="space-y-2.5 mb-6">
                <div className="text-xs font-mono-code text-[#8A7366] uppercase tracking-wider">
                  {t.experience.keyDeliverables}:
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {(language === 'pt' ? exp.achievementsPt : exp.achievementsEn).map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 p-3 rounded-xl bg-[#F8FBFE] border border-[#E1EDF7]"
                    >
                      <CheckCircle className="w-4 h-4 text-[#5B9BD5] shrink-0 mt-0.5" />
                      <span className="text-xs text-[#453126] leading-relaxed">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech / Experience Tags */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-[#EFE9E2]">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-mono-code px-2.5 py-1 rounded bg-[#F8F6F4] border border-[#E7E0D8] text-[#7A6255]"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
