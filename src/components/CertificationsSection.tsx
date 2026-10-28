import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { CERTIFICATIONS } from '../data/portfolioData';
import { 
  GraduationCap, 
  Award, 
  Cloud, 
  Code, 
  CheckCircle2, 
  BookOpen, 
  Sparkles 
} from 'lucide-react';

interface CertificationsSectionProps {
  language: Language;
}

export const CertificationsSection: React.FC<CertificationsSectionProps> = ({ language }) => {
  const t = TRANSLATIONS[language];

  const getIcon = (type: string) => {
    switch (type) {
      case 'oracle':
        return <Cloud className="w-6 h-6 text-[#5B9BD5]" />;
      case 'hackathon':
        return <Code className="w-6 h-6 text-[#5B9BD5]" />;
      case 'alura':
        return <Award className="w-6 h-6 text-[#5B9BD5]" />;
      case 'university':
        return <GraduationCap className="w-6 h-6 text-[#5B9BD5]" />;
      default:
        return <BookOpen className="w-6 h-6 text-[#5B9BD5]" />;
    }
  };

  return (
    <section
      id="certifications"
      className="relative py-18 md:py-24 bg-white border-b border-[#EFE9E2]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 pb-6 border-b border-[#EFE9E2] space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-mono-code text-[#4A90C2] tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.certifications.sectionTag}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight text-[#2C1810] uppercase">
            {t.certifications.title}
          </h2>
          <p className="text-sm sm:text-base text-[#6A5447] max-w-2xl">
            {t.certifications.subtitle}
          </p>
        </div>

        {/* Certifications Grid */}
        <div
          id="certifications-grid"
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {CERTIFICATIONS.map((item) => (
            <div
              key={item.id}
              id={`cert-card-${item.id}`}
              className="group relative bg-white hover:bg-[#FAFDFE] border border-[#EBE5DF] hover:border-[#98C9ED] rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-md"
            >
              <div>
                {/* Header inside Card */}
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-[#F0F7FD] border border-[#D7EAF7] group-hover:border-[#5B9BD5] group-hover:bg-[#EBF4FA] flex items-center justify-center transition-colors">
                      {getIcon(item.iconType)}
                    </div>
                    <div>
                      <div className="text-xs font-mono-code text-[#3B7BA8] font-semibold">
                        {item.institution}
                      </div>
                      <div className="text-[11px] font-mono-code text-[#826A5D]">
                        {item.period} {item.hours ? `• ${item.hours}` : ''}
                      </div>
                    </div>
                  </div>

                  <span className="text-[10px] font-mono-code uppercase tracking-wider text-[#215E89] bg-[#EDF5FB] border border-[#C5E1F4] px-2.5 py-1 rounded-full whitespace-nowrap shadow-xs">
                    {item.badgeText}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl sm:text-2xl font-bold font-display text-[#2C1810] mb-3 group-hover:text-[#4A90C2] transition-colors">
                  {language === 'pt' ? item.titlePt : item.titleEn}
                </h3>

                <p className="text-xs sm:text-sm text-[#553F33] leading-relaxed mb-6">
                  {language === 'pt' ? item.descriptionPt : item.descriptionEn}
                </p>
              </div>

              {/* Skills / Key Topics */}
              <div className="pt-4 border-t border-[#EFE9E2]">
                <div className="text-[10px] font-mono-code text-[#8A7366] uppercase mb-2">
                  {language === 'pt' ? 'Competências & Tópicos:' : 'Skills & Topics Covered:'}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1 text-[11px] font-mono-code px-2.5 py-0.5 rounded bg-[#F8F6F4] border border-[#E7E0D8] text-[#4E372B]"
                    >
                      <CheckCircle2 className="w-3 h-3 text-[#5B9BD5]" />
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
