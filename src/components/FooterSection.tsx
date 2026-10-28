import React, { useState } from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { SOCIAL_LINKS } from '../data/portfolioData';
import { 
  Mail, 
  MessageCircle, 
  Linkedin, 
  Github, 
  Copy, 
  Check, 
  ArrowUpRight, 
  Sparkles,
  Heart,
  Download
} from 'lucide-react';

interface FooterSectionProps {
  language: Language;
  onShowToast: (message: string) => void;
}

export const FooterSection: React.FC<FooterSectionProps> = ({ language, onShowToast }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const t = TRANSLATIONS[language];

  const handleCopy = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      onShowToast(t.toast.copiedEmail);
      setTimeout(() => setCopiedEmail(false), 2500);
    } else {
      setCopiedPhone(true);
      onShowToast(t.toast.copiedPhone);
      setTimeout(() => setCopiedPhone(false), 2500);
    }
  };

  return (
    <footer
      id="contact"
      className="relative bg-[#F8FBFE] text-[#2C1810] border-t border-[#DDEAF5] overflow-hidden"
    >
      {/* Decorative delicate background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#5B9BD5]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#5B9BD5]/5 rounded-full blur-2xl pointer-events-none" />

      {/* Main Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-18 pb-12">
        {/* Top Call to Action Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center pb-14 border-b border-[#E2EDF6]">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EDF5FB] border border-[#C5E1F4] text-xs font-mono-code uppercase tracking-wider text-[#215E89]">
              <Sparkles className="w-3.5 h-3.5 text-[#5B9BD5]" />
              <span>{language === 'pt' ? 'CONTATO & OPORTUNIDADES' : 'CONTACT & OPPORTUNITIES'}</span>
            </div>

            <h2
              id="footer-title"
              className="text-4xl sm:text-5xl md:text-6xl font-bold font-display uppercase tracking-tight text-[#2C1810] leading-tight"
            >
              {t.footer.title}
            </h2>

            <p className="text-base sm:text-lg text-[#553F33] max-w-xl font-normal leading-relaxed">
              {t.footer.subtitle}
            </p>
          </div>

          {/* Quick Action Contact Cards */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {/* Email Contact Card */}
            <div
              id="footer-email-card"
              className="bg-white hover:bg-[#FAFDFE] border border-[#DCE8F0] hover:border-[#5B9BD5] rounded-xl p-4 flex items-center justify-between transition-all shadow-xs"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#F0F7FD] border border-[#D7EAF7] flex items-center justify-center">
                  <Mail className="w-5 h-5 text-[#5B9BD5]" />
                </div>
                <div>
                  <div className="text-[11px] font-mono-code uppercase text-[#8A7366]">
                    {t.footer.emailLabel}
                  </div>
                  <a
                    href={`mailto:${SOCIAL_LINKS.email}`}
                    className="text-sm sm:text-base font-bold text-[#2C1810] hover:text-[#4A90C2] transition-colors"
                  >
                    {SOCIAL_LINKS.email}
                  </a>
                </div>
              </div>

              <button
                type="button"
                onClick={() => handleCopy(SOCIAL_LINKS.email, 'email')}
                className="p-2 rounded-lg bg-[#F4F8FA] hover:bg-[#EBF4FA] border border-[#DCE8F0] text-[#2C1810] transition-colors"
                title={t.footer.copyEmail}
                aria-label="Copy Email"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-[#5B9BD5]" />}
              </button>
            </div>

            {/* WhatsApp Contact Card */}
            <div
              id="footer-whatsapp-card"
              className="bg-white hover:bg-[#FAFDFE] border border-[#DCE8F0] hover:border-[#5B9BD5] rounded-xl p-4 flex items-center justify-between transition-all shadow-xs"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#F0F7FD] border border-[#D7EAF7] flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-[#5B9BD5]" />
                </div>
                <div>
                  <div className="text-[11px] font-mono-code uppercase text-[#8A7366]">
                    {t.footer.whatsappLabel}
                  </div>
                  <a
                    href={SOCIAL_LINKS.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm sm:text-base font-bold text-[#2C1810] hover:text-[#4A90C2] transition-colors flex items-center gap-1.5"
                  >
                    <span>+55 11 96484-4975</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#5B9BD5]" />
                  </a>
                </div>
              </div>

              <a
                href={SOCIAL_LINKS.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-lg bg-[#5B9BD5] hover:bg-[#4686BD] text-white text-xs font-extrabold uppercase transition-colors shadow-xs"
              >
                Chat
              </a>
            </div>
          </div>
        </div>

        {/* Social Links Row */}
        <div className="py-8 flex flex-wrap items-center justify-between gap-6 border-b border-[#E2EDF6]">
          <div className="flex items-center gap-2">
            <span className="font-display text-2xl font-bold tracking-tight text-[#2C1810]">
              DÉBORA GUERRA
            </span>
            <span className="text-[#8A7366] font-mono-code text-xs">
              // DATA SCIENCE & POST-PRODUCTION
            </span>
          </div>

          {/* Social Icons Bar */}
          <div className="flex items-center gap-3">
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              id="footer-linkedin-btn"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-[#DCE8F0] hover:border-[#5B9BD5] text-[#2C1810] hover:text-[#4A90C2] text-xs font-bold font-mono-code transition-all duration-200 shadow-xs"
            >
              <Linkedin className="w-4 h-4 text-[#5B9BD5]" />
              <span>LinkedIn</span>
            </a>

            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              id="footer-github-btn"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-[#DCE8F0] hover:border-[#5B9BD5] text-[#2C1810] hover:text-[#4A90C2] text-xs font-bold font-mono-code transition-all duration-200 shadow-xs"
            >
              <Github className="w-4 h-4 text-[#5B9BD5]" />
              <span>GitHub</span>
            </a>

            <a
              href={`mailto:${SOCIAL_LINKS.email}`}
              id="footer-email-btn"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-[#DCE8F0] hover:border-[#5B9BD5] text-[#2C1810] hover:text-[#4A90C2] text-xs font-bold font-mono-code transition-all duration-200 shadow-xs"
            >
              <Mail className="w-4 h-4 text-[#5B9BD5]" />
              <span>Email</span>
            </a>

            <a
              href="/portfolio-debora-guerra.zip"
              download="portfolio-debora-guerra.zip"
              id="footer-download-zip-btn"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#5B9BD5] hover:bg-[#4686BD] text-white text-xs font-bold font-mono-code transition-all duration-200 shadow-xs"
              title={language === 'pt' ? 'Baixar arquivo ZIP completo para o GitHub' : 'Download complete ZIP file for GitHub'}
            >
              <Download className="w-4 h-4 text-white" />
              <span>{language === 'pt' ? 'Baixar ZIP (.zip)' : 'Download ZIP (.zip)'}</span>
            </a>
          </div>
        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-code text-[#8A7366]">
          <div>
            Copyright © 2026 Débora Guerra. {t.footer.rights}
          </div>
          <div className="flex items-center gap-2">
            <span>{t.footer.builtWith}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
