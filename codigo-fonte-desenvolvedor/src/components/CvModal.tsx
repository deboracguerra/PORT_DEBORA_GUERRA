import React, { useEffect } from 'react';
import { X, Printer, Download, Award, Mail, Linkedin, Globe, MapPin, CheckCircle2 } from 'lucide-react';
import { CV_DATA, CAREER_EXPERIENCES, TECHNICAL_TOOLS, Language } from '../data/portfolioData';
import { WhatsAppLogo } from './Logos';

interface CvModalProps {
  isOpen: boolean;
  language: Language;
  onClose: () => void;
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, language, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadTxt = () => {
    const isPt = language === 'pt';
    const content = `=================================================================
${CV_DATA.name.toUpperCase()}
${isPt ? CV_DATA.titlePt.toUpperCase() : CV_DATA.titleEn.toUpperCase()}
=================================================================
Localização / Location: ${CV_DATA.location}
WhatsApp / Contato Direto: ${CV_DATA.phone} (${CV_DATA.whatsappUrl})
E-mail: ${CV_DATA.email}
LinkedIn: ${CV_DATA.linkedin}
Disponibilidade / Availability: ${isPt ? CV_DATA.availabilityPt : CV_DATA.availabilityEn}
Showreel Oficial / Official Showreel: ${CV_DATA.showreel}

-----------------------------------------------------------------
RESUMO PROFISSIONAL / PROFESSIONAL SUMMARY
-----------------------------------------------------------------
${isPt ? CV_DATA.summaryPt : CV_DATA.summaryEn}

-----------------------------------------------------------------
RECONHECIMENTO & PRÊMIOS / HONORS & AWARDS
-----------------------------------------------------------------
* Indicação ao Emmy Awards 2025: Montagem da série "Bora, o Pódio é Nosso"
  (Sentimental Filme / Rede Globo / Gloob).

-----------------------------------------------------------------
EXPERIÊNCIA PROFISSIONAL / WORK EXPERIENCE
-----------------------------------------------------------------
${CAREER_EXPERIENCES.map(
  (exp) => `
* ${exp.company} (${exp.period})
  Função: ${isPt ? exp.rolePt : exp.roleEn}
  Departamento: ${isPt ? exp.departmentPt : exp.departmentEn}
  ${exp.highlightPt ? `Destaque: ${isPt ? exp.highlightPt : exp.highlightEn}` : ''}
  Responsabilidades:
  ${(isPt ? exp.responsibilitiesPt : exp.responsibilitiesEn).map((r) => `  - ${r}`).join('\n')}
`
).join('\n')}

-----------------------------------------------------------------
FERRAMENTAS & PIPELINE / SOFTWARE & WORKFLOWS
-----------------------------------------------------------------
${TECHNICAL_TOOLS.map((t) => `* ${t.name} - ${isPt ? t.rolePt : t.roleEn}: ${isPt ? t.descriptionPt : t.descriptionEn}`).join('\n')}

-----------------------------------------------------------------
IDIOMAS / LANGUAGES
-----------------------------------------------------------------
${CV_DATA.languages.map((l) => `* ${isPt ? l.namePt : l.nameEn}: ${isPt ? l.levelPt : l.levelEn}`).join('\n')}

-----------------------------------------------------------------
FORMAÇÃO / EDUCATION
-----------------------------------------------------------------
* ${isPt ? CV_DATA.educationPt : CV_DATA.educationEn}
=================================================================
`;

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Debora_Guerra_CV_${isPt ? 'PT' : 'EN'}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const title = language === 'pt' ? CV_DATA.titlePt : CV_DATA.titleEn;
  const summary = language === 'pt' ? CV_DATA.summaryPt : CV_DATA.summaryEn;
  const education = language === 'pt' ? CV_DATA.educationPt : CV_DATA.educationEn;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-4xl border border-[#35383D] bg-[#191B1F] text-[#F2F2F0] shadow-2xl my-auto cv-modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar controls */}
        <div className="no-print flex items-center justify-between border-b border-[#35383D] bg-[#202328] px-4 py-3 sm:px-6">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs uppercase tracking-widest text-[#719FC3]">
              {language === 'pt' ? 'CURRÍCULO PROFISSIONAL' : 'PROFESSIONAL CURRICULUM VITAE'}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrint}
              className="flex items-center gap-1.5 border border-[#35383D] bg-[#191B1F] px-3 py-1.5 text-xs font-mono text-[#F2F2F0] hover:border-[#719FC3] hover:text-[#719FC3] transition-colors"
            >
              <Printer className="h-3.5 w-3.5" />
              <span>{language === 'pt' ? 'Imprimir' : 'Print'}</span>
            </button>

            <button
              type="button"
              onClick={handleDownloadTxt}
              className="flex items-center gap-1.5 border border-[#35383D] bg-[#191B1F] px-3 py-1.5 text-xs font-mono text-[#F2F2F0] hover:border-[#719FC3] hover:text-[#719FC3] transition-colors"
            >
              <Download className="h-3.5 w-3.5" />
              <span>.TXT</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              className="p-1 text-[#A7A9AD] hover:text-[#F2F2F0] transition-colors"
              aria-label="Fechar CV"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* CV Document Content */}
        <div className="p-6 sm:p-10 space-y-8 max-h-[82vh] overflow-y-auto">
          {/* Header Lockup */}
          <div className="border-b border-[#35383D] pb-6">
            <h1 className="font-['Outfit'] text-3xl sm:text-4xl font-extrabold tracking-tight text-[#F2F2F0]">
              {CV_DATA.name}
            </h1>
            <p className="font-mono text-xs sm:text-sm font-semibold tracking-wider text-[#719FC3] uppercase mt-1">
              {title}
            </p>

            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-xs font-mono text-[#A7A9AD]">
              <span className="flex items-center gap-1">
                <MapPin className="h-3.5 w-3.5 text-[#719FC3]" />
                {CV_DATA.location}
              </span>
              <a
                href={CV_DATA.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-[#25D366] hover:underline"
              >
                <WhatsAppLogo className="h-3.5 w-3.5 fill-[#25D366]" />
                <span>WhatsApp: {CV_DATA.phone}</span>
              </a>
              <span className="flex items-center gap-1">
                <Mail className="h-3.5 w-3.5 text-[#719FC3]" />
                {CV_DATA.email}
              </span>
              <a
                href={CV_DATA.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-[#719FC3] transition-colors"
              >
                <Linkedin className="h-3.5 w-3.5 text-[#719FC3]" />
                <span>linkedin.com/in/débora-guerra</span>
              </a>
            </div>

            <div className="mt-3 text-xs font-mono border-t border-[#35383D]/60 pt-2.5 flex items-center gap-2">
              <span className="text-[#A7A9AD] uppercase text-[11px]">{language === 'pt' ? 'Disponibilidade:' : 'Availability:'}</span>
              <span className="text-[#F2F2F0] font-medium">
                {language === 'pt' ? CV_DATA.availabilityPt : CV_DATA.availabilityEn}
              </span>
            </div>
          </div>

          {/* Emmy Nomination Banner */}
          <div className="border border-[#A68B6C]/40 bg-[#A68B6C]/10 p-4 flex items-start gap-3">
            <Award className="h-5 w-5 text-[#A68B6C] shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-[#F2F2F0]">
              <span className="font-bold text-[#A68B6C] block uppercase font-mono text-xs">
                {language === 'pt' ? 'DISTINÇÃO INTERNACIONAL' : 'INTERNATIONAL DISTINCTION'}
              </span>
              {language === 'pt'
                ? 'Indicada ao Emmy Awards 2025 pela montagem e finalização da produção "Bora, o Pódio é Nosso" (Sentimental Filme / Rede Globo / Gloob).'
                : 'Nominated for the 2025 Emmy Awards as video editor for "Bora, o Pódio é Nosso" (Sentimental Filme / Rede Globo / Gloob).'}
            </div>
          </div>

          {/* Summary */}
          <div className="space-y-2">
            <h2 className="font-mono text-xs uppercase tracking-widest text-[#719FC3]">
              {language === 'pt' ? 'RESUMO PROFISSIONAL' : 'PROFESSIONAL SUMMARY'}
            </h2>
            <p className="text-xs sm:text-sm text-[#A7A9AD] leading-relaxed">
              {summary}
            </p>
          </div>

          {/* Experience */}
          <div className="space-y-6">
            <h2 className="font-mono text-xs uppercase tracking-widest text-[#719FC3]">
              {language === 'pt' ? 'HISTÓRICO PROFISSIONAL' : 'WORK EXPERIENCE'}
            </h2>

            <div className="space-y-6">
              {CAREER_EXPERIENCES.map((exp) => {
                const expRole = language === 'pt' ? exp.rolePt : exp.roleEn;
                const expDept = language === 'pt' ? exp.departmentPt : exp.departmentEn;
                const expResponsibilities = language === 'pt' ? exp.responsibilitiesPt : exp.responsibilitiesEn;

                return (
                  <div key={exp.company} className="border-l-2 border-[#35383D] pl-4 space-y-2">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="font-['Outfit'] text-base sm:text-lg font-bold text-[#F2F2F0]">
                        {exp.company}
                      </h3>
                      <span className="font-mono text-xs text-[#719FC3]">{exp.period}</span>
                    </div>

                    <div className="text-xs font-semibold text-[#A68B6C]">
                      {expRole} <span className="text-[#A7A9AD]">· {expDept}</span>
                    </div>

                    <ul className="space-y-1.5 pt-1 text-xs text-[#A7A9AD]">
                      {expResponsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-[#719FC3]">•</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Tools & Languages Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-[#35383D]">
            {/* Tools */}
            <div className="space-y-3">
              <h2 className="font-mono text-xs uppercase tracking-widest text-[#719FC3]">
                {language === 'pt' ? 'FERRAMENTAS & SOFTWARE' : 'SOFTWARE & TOOLING'}
              </h2>
              <div className="space-y-1.5 text-xs text-[#A7A9AD]">
                <div><span className="font-semibold text-[#F2F2F0]">Avid Media Composer:</span> 10+ anos, montagem de séries e longas</div>
                <div><span className="font-semibold text-[#F2F2F0]">Adobe Premiere Pro:</span> Montagem publicitária e entretenimento</div>
                <div><span className="font-semibold text-[#F2F2F0]">DaVinci Resolve Studio:</span> Conform RAW, cor e masterização</div>
                <div><span className="font-semibold text-[#F2F2F0]">CapCut Pro:</span> Anúncios de performance multiformato 9:16</div>
                <div><span className="font-semibold text-[#F2F2F0]">Adobe Photoshop:</span> Tratamento de stills e composição gráfica</div>
                <div><span className="font-semibold text-[#F2F2F0]">Google Flow & Veo:</span> Fluxos híbridos e inovação audiovisual com IA</div>
              </div>
            </div>

            {/* Languages & Education */}
            <div className="space-y-4">
              <div className="space-y-2">
                <h2 className="font-mono text-xs uppercase tracking-widest text-[#719FC3]">
                  {language === 'pt' ? 'IDIOMAS' : 'LANGUAGES'}
                </h2>
                <div className="space-y-1 text-xs text-[#A7A9AD]">
                  {CV_DATA.languages.map((l) => (
                    <div key={l.nameEn} className="flex justify-between border-b border-[#35383D]/40 pb-1">
                      <span className="text-[#F2F2F0]">{language === 'pt' ? l.namePt : l.nameEn}</span>
                      <span className="font-mono text-[#719FC3]">{language === 'pt' ? l.levelPt : l.levelEn}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-1">
                <h2 className="font-mono text-xs uppercase tracking-widest text-[#719FC3]">
                  {language === 'pt' ? 'FORMAÇÃO' : 'EDUCATION'}
                </h2>
                <p className="text-xs text-[#A7A9AD]">{education}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
