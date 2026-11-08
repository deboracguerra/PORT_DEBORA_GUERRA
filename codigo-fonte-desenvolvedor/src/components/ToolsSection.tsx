import React from 'react';
import { TECHNICAL_TOOLS, Language } from '../data/portfolioData';
import { ToolLogoRenderer } from './Logos';
import { Sliders, Cpu, Check, Layers, Film } from 'lucide-react';

interface ToolsSectionProps {
  language: Language;
}

export const ToolsSection: React.FC<ToolsSectionProps> = ({ language }) => {
  const standards = [
    { label: 'EBU R128 / ITU-R BS.1770-4', descPt: 'Norma de Loudness e True Peak (-24 LUFS / -1.0 dBTP)', descEn: 'Loudness & True Peak Compliance (-24 LUFS / -1.0 dBTP)' },
    { label: 'Apple ProRes 4444 XQ & Avid DNxHR', descPt: 'Masterização broadcast de alta fidelidade cromática', descEn: 'Master archive delivery with 12-bit / 10-bit depth' },
    { label: 'ACEScct / Rec.709 Gamma 2.4', descPt: 'Color Management rigoroso para TV e Streaming', descEn: 'Aperture-accurate color pipeline for Broadcast & OTT' },
    { label: 'IMF & MXF OP1a Packages', descPt: 'Authoring de pacotes para Netflix, HBO e canais de TV', descEn: 'Master package authoring for Netflix, HBO & TV networks' },
  ];

  return (
    <section id="ferramentas" className="border-b border-[#35383D] bg-[#111214] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-2 pb-10 border-b border-[#35383D]">
          <span className="font-mono text-xs uppercase tracking-widest text-[#719FC3]">
            {language === 'pt' ? 'DOMÍNIO OPERACIONAL' : 'TECHNICAL STACK'}
          </span>
          <h2 className="font-['Outfit'] text-3xl font-extrabold tracking-tight text-[#F2F2F0] sm:text-4xl">
            {language === 'pt' ? 'Ferramentas de Produção & Pipeline' : 'Post-Production Tools & Pipeline'}
          </h2>
          <p className="text-sm text-[#A7A9AD]">
            {language === 'pt'
              ? 'Ecossistema completo de software de edição, conform online, tratamento de imagem e inovação em IA generativa.'
              : 'Full-spectrum suite across offline narrative editing, online RAW conform, image finishing, and generative AI workflows.'}
          </p>
        </div>

        {/* Tools Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TECHNICAL_TOOLS.map((tool) => {
            const role = language === 'pt' ? tool.rolePt : tool.roleEn;
            const description = language === 'pt' ? tool.descriptionPt : tool.descriptionEn;

            return (
              <div
                key={tool.name}
                className="group border border-[#35383D] bg-[#202328] p-6 transition-all hover:border-[#719FC3] hover:shadow-lg flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Top Bar of Tool Card with authentic SVG logo */}
                  <div className="flex items-center justify-between">
                    <ToolLogoRenderer toolKey={tool.iconKey} className="h-10 w-10 shrink-0" />
                    <span className="border border-[#35383D] bg-[#191B1F] px-2 py-0.5 font-mono text-[11px] font-semibold text-[#719FC3]">
                      {tool.badge}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <h3 className="font-['Outfit'] text-lg font-bold text-[#F2F2F0] group-hover:text-[#719FC3] transition-colors">
                      {tool.name}
                    </h3>
                    <div className="text-xs font-mono text-[#A68B6C]">{role}</div>
                  </div>

                  <p className="text-xs sm:text-sm text-[#A7A9AD] leading-relaxed">
                    {description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-[#35383D]/60 flex items-center justify-between text-xs font-mono text-[#A7A9AD]">
                  <span>{language === 'pt' ? 'Proficiência Avançada' : 'Advanced Proficiency'}</span>
                  <Check className="h-4 w-4 text-[#719FC3]" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Standards & Technical Norms Bar */}
        <div className="mt-12 border border-[#35383D] bg-[#191B1F] p-6">
          <div className="flex items-center gap-2 mb-4 text-xs font-mono uppercase tracking-widest text-[#719FC3]">
            <Sliders className="h-4 w-4" />
            <span>{language === 'pt' ? 'Padrões de Qualidade & Normas Internacionais de Entrega' : 'Quality Standards & International Delivery Compliance'}</span>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {standards.map((std) => (
              <div key={std.label} className="border-l border-[#35383D] pl-3 space-y-1">
                <span className="font-mono text-xs font-bold text-[#F2F2F0] block">
                  {std.label}
                </span>
                <span className="text-[11px] text-[#A7A9AD] block leading-snug">
                  {language === 'pt' ? std.descPt : std.descEn}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
