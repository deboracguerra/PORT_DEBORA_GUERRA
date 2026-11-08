import React, { useState } from 'react';
import { Mail, Copy, Check, Linkedin, Play, FileText, Send, MapPin, ArrowUpRight, MessageCircle, FolderArchive } from 'lucide-react';
import { CV_DATA, Language } from '../data/portfolioData';
import { WhatsAppLogo } from './Logos';

interface ContactSectionProps {
  language: Language;
  onOpenCv: () => void;
  onOpenShowreel: () => void;
  onOpenExport: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ language, onOpenCv, onOpenShowreel, onOpenExport }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [projectType, setProjectType] = useState('entertainment');
  const [message, setMessage] = useState('');

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CV_DATA.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    }
  };

  const copyPhone = async () => {
    try {
      await navigator.clipboard.writeText(CV_DATA.phone);
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2500);
    } catch {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2500);
    }
  };

  const whatsappDirectUrl = `https://wa.me/${CV_DATA.phoneRaw}?text=${encodeURIComponent(
    language === 'pt'
      ? 'Olá Débora, vi seu portfólio profissional e gostaria de conversar sobre um projeto audiovisual.'
      : 'Hello Débora, I saw your professional portfolio and would like to discuss an audiovisual project.'
  )}`;

  const handleSendDraft = (e: React.FormEvent) => {
    e.preventDefault();
    const typeLabel = {
      entertainment: language === 'pt' ? 'Série / Longa / Entretenimento' : 'Series / Feature / Entertainment',
      commercial: language === 'pt' ? 'Comercial Publicitário' : 'Commercial Advertising',
      ads: language === 'pt' ? 'Tráfego Pago & Performance' : 'Paid Ads & Performance',
      conform: language === 'pt' ? 'Finalização & Conform Técnico' : 'Finishing & Online Conform',
      ai: language === 'pt' ? 'Inovação / Fluxo com IA' : 'AI Workflow Innovation',
    }[projectType];

    const mailSubject = encodeURIComponent(`[Contato Portfólio - ${typeLabel}] ${subject || name || 'Novo Projeto'}`);
    const mailBody = encodeURIComponent(
      `Olá Débora,\n\nNome: ${name}\nTipo de Projeto: ${typeLabel}\n\nMensagem:\n${message}\n\nEnviado através do portfólio profissional.`
    );
    window.location.href = `mailto:${CV_DATA.email}?subject=${mailSubject}&body=${mailBody}`;
  };

  const handleSendWhatsAppBrief = () => {
    const typeLabel = {
      entertainment: language === 'pt' ? 'Série / Longa / Entretenimento' : 'Series / Feature / Entertainment',
      commercial: language === 'pt' ? 'Comercial Publicitário' : 'Commercial Advertising',
      ads: language === 'pt' ? 'Tráfego Pago & Performance' : 'Paid Ads & Performance',
      conform: language === 'pt' ? 'Finalização & Conform Técnico' : 'Finishing & Online Conform',
      ai: language === 'pt' ? 'Inovação & Fluxo com IA' : 'AI Workflow Innovation',
    }[projectType];

    const parts = [
      language === 'pt' ? '🎬 *CONTATO PORTFÓLIO - DÉBORA GUERRA*' : '🎬 *PORTFOLIO INQUIRY - DÉBORA GUERRA*',
      '',
      `${language === 'pt' ? 'Nome / Produtora' : 'Name / Studio'}: ${name.trim() || (language === 'pt' ? 'Não informado' : 'Not provided')}`,
      `${language === 'pt' ? 'Tipo de Produção' : 'Project Category'}: ${typeLabel}`,
      subject.trim() ? `${language === 'pt' ? 'Assunto' : 'Subject'}: ${subject.trim()}` : '',
      message.trim() ? `${language === 'pt' ? 'Mensagem' : 'Message'}:\n${message.trim()}` : '',
    ].filter(Boolean).join('\n');

    window.open(`https://wa.me/${CV_DATA.phoneRaw}?text=${encodeURIComponent(parts)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <footer id="contato" className="bg-[#111214] text-[#F2F2F0]">
      {/* Contact Main Section */}
      <div className="border-b border-[#35383D] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Left Column: Direct WhatsApp, Direct Email, Social Links */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2">
                <span className="font-mono text-xs uppercase tracking-widest text-[#719FC3]">
                  {language === 'pt' ? 'INICIE UMA CONVERSA' : 'GET IN TOUCH'}
                </span>
                <h2 className="font-['Outfit'] text-3xl font-extrabold tracking-tight text-[#F2F2F0] sm:text-4xl">
                  {language === 'pt' ? 'Vamos Construir a Próxima Obra Juntos' : 'Let\'s Craft Your Next Project'}
                </h2>
                <p className="text-sm text-[#A7A9AD]">
                  {language === 'pt'
                    ? 'Disponível para contratação por projeto ou contrato contínuo, em modelo remoto ou presencial.'
                    : 'Available for hire on a project basis or ongoing contract, in remote or on-site model.'}
                </p>
              </div>

              {/* Direct WhatsApp Contact Card (Requested by user) */}
              <div className="border border-[#25D366]/40 bg-[#202328] p-4 space-y-3 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#25D366]/5 rounded-full blur-2xl pointer-events-none" />
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#25D366] flex items-center gap-1.5 font-bold">
                    <WhatsAppLogo className="h-4 w-4 fill-[#25D366]" />
                    {language === 'pt' ? 'WhatsApp & Contato Direto' : 'WhatsApp & Direct Line'}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/30">
                    {language === 'pt' ? 'RESPOSTA RÁPIDA' : 'FAST RESPONSE'}
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1">
                  <span className="font-mono text-base sm:text-lg font-bold text-[#F2F2F0] tracking-wide">
                    {CV_DATA.phone}
                  </span>
                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      type="button"
                      onClick={copyPhone}
                      className="flex items-center gap-1.5 border border-[#35383D] bg-[#191B1F] px-3 py-1.5 text-xs font-mono text-[#F2F2F0] hover:border-[#25D366] hover:text-[#25D366] transition-colors"
                      title={language === 'pt' ? 'Copiar número de telefone' : 'Copy phone number'}
                    >
                      {copiedPhone ? (
                        <>
                          <Check className="h-3.5 w-3.5 text-emerald-400" />
                          <span>{language === 'pt' ? 'COPIADO!' : 'COPIED!'}</span>
                        </>
                      ) : (
                        <>
                          <Copy className="h-3.5 w-3.5" />
                          <span>{language === 'pt' ? 'COPIAR' : 'COPY'}</span>
                        </>
                      )}
                    </button>

                    <a
                      href={whatsappDirectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 border border-[#25D366] bg-[#25D366] px-3.5 py-1.5 text-xs font-mono font-bold text-[#111214] hover:bg-[#20ba59] transition-colors"
                    >
                      <WhatsAppLogo className="h-3.5 w-3.5 fill-[#111214]" />
                      <span>{language === 'pt' ? 'CHAMAR NO WHATSAPP' : 'CHAT ON WHATSAPP'}</span>
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Email Direct Copy Box */}
              <div className="border border-[#35383D] bg-[#202328] p-4 space-y-2">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#A7A9AD] block">
                  {language === 'pt' ? 'E-mail Profissional Direto' : 'Direct Professional E-mail'}
                </span>
                <div className="flex items-center justify-between gap-3">
                  <span className="font-mono text-sm sm:text-base font-semibold text-[#F2F2F0] truncate">
                    {CV_DATA.email}
                  </span>
                  <button
                    type="button"
                    onClick={copyEmail}
                    className="flex items-center gap-1.5 border border-[#719FC3] bg-[#719FC3]/10 px-3 py-1.5 text-xs font-mono text-[#F2F2F0] hover:bg-[#719FC3] hover:text-[#111214] transition-colors shrink-0"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-emerald-400" />
                        <span>{language === 'pt' ? 'COPIADO!' : 'COPIED!'}</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" />
                        <span>{language === 'pt' ? 'COPIAR' : 'COPY'}</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Direct Links (NO GITHUB AS STRICTLY REQUESTED) */}
              <div className="space-y-2 pt-2">
                <span className="text-xs font-mono uppercase tracking-wider text-[#A7A9AD] block">
                  {language === 'pt' ? 'Canais Profissionais Oficiais' : 'Official Professional Channels'}
                </span>
                <div className="flex flex-col gap-2 text-xs font-mono">
                  <a
                    href={whatsappDirectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between border border-[#35383D] bg-[#191B1F] p-3 text-[#F2F2F0] hover:border-[#25D366] hover:text-[#25D366] transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <WhatsAppLogo className="h-4 w-4 fill-[#25D366]" />
                      <span>WhatsApp: {CV_DATA.phone}</span>
                    </span>
                    <ArrowUpRight className="h-4 w-4" />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/d%C3%A9bora-guerra-534b80a6/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between border border-[#35383D] bg-[#191B1F] p-3 text-[#F2F2F0] hover:border-[#719FC3] hover:text-[#719FC3] transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <Linkedin className="h-4 w-4 text-[#719FC3]" />
                      <span>LinkedIn: Débora Guerra</span>
                    </span>
                    <ArrowUpRight className="h-4 w-4" />
                  </a>

                  <button
                    type="button"
                    onClick={onOpenShowreel}
                    className="flex items-center justify-between border border-[#35383D] bg-[#191B1F] p-3 text-[#F2F2F0] hover:border-[#719FC3] hover:text-[#719FC3] transition-colors text-left"
                  >
                    <span className="flex items-center gap-2">
                      <Play className="h-4 w-4 text-[#719FC3]" />
                      <span>{language === 'pt' ? 'Showreel Oficial (YouTube)' : 'Official Showreel (YouTube)'}</span>
                    </span>
                    <ArrowUpRight className="h-4 w-4" />
                  </button>

                  <button
                    type="button"
                    onClick={onOpenCv}
                    className="flex items-center justify-between border border-[#35383D] bg-[#191B1F] p-3 text-[#F2F2F0] hover:border-[#A68B6C] hover:text-[#A68B6C] transition-colors text-left"
                  >
                    <span className="flex items-center gap-2">
                      <FileText className="h-4 w-4 text-[#A68B6C]" />
                      <span>{language === 'pt' ? 'Currículo Vitae Completo (PDF/TXT)' : 'Full Curriculum Vitae (PDF/TXT)'}</span>
                    </span>
                    <ArrowUpRight className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Location Trust marker */}
              <div className="flex items-center gap-2 text-xs font-mono text-[#A7A9AD]">
                <MapPin className="h-3.5 w-3.5 text-[#719FC3]" />
                <span>São Paulo, SP · Brasil — {language === 'pt' ? 'Atendimento Global' : 'Global Delivery'}</span>
              </div>
            </div>

            {/* Right Column: Fast Email Draft Composer */}
            <div className="lg:col-span-7">
              <form
                onSubmit={handleSendDraft}
                className="border border-[#35383D] bg-[#191B1F] p-6 sm:p-8 space-y-4"
              >
                <div className="border-b border-[#35383D] pb-3">
                  <h3 className="font-['Outfit'] text-lg font-bold text-[#F2F2F0]">
                    {language === 'pt' ? 'Envio Direto de Proposta ou Contato' : 'Send Direct Inquiry or Project Brief'}
                  </h3>
                  <p className="text-xs text-[#A7A9AD] mt-0.5">
                    {language === 'pt'
                      ? 'Preencha o formulário para abrir a mensagem diretamente em seu aplicativo de e-mail.'
                      : 'Fill in the form to open your message formatted in your default email client.'}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-mono text-[#A7A9AD] block">
                      {language === 'pt' ? 'Seu Nome / Produtora' : 'Your Name / Company'}
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={language === 'pt' ? 'Ex: Paula Silva / Produtora X' : 'e.g. John Doe / Studio Films'}
                      className="w-full border border-[#35383D] bg-[#202328] px-3 py-2 text-xs sm:text-sm text-[#F2F2F0] placeholder-[#555] focus:border-[#719FC3] focus:outline-none"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-mono text-[#A7A9AD] block">
                      {language === 'pt' ? 'Tipo de Produção' : 'Project Category'}
                    </label>
                    <select
                      value={projectType}
                      onChange={(e) => setProjectType(e.target.value)}
                      className="w-full border border-[#35383D] bg-[#202328] px-3 py-2 text-xs sm:text-sm text-[#F2F2F0] focus:border-[#719FC3] focus:outline-none"
                    >
                      <option value="entertainment">{language === 'pt' ? 'Série / Longa / Entretenimento' : 'Series / Feature / Entertainment'}</option>
                      <option value="commercial">{language === 'pt' ? 'Comercial Publicitário' : 'Commercial Advertising'}</option>
                      <option value="ads">{language === 'pt' ? 'Tráfego Pago & Performance' : 'Paid Ads & Performance'}</option>
                      <option value="conform">{language === 'pt' ? 'Finalização & Conform Técnico' : 'Finishing & Online Conform'}</option>
                      <option value="ai">{language === 'pt' ? 'Inovação & Fluxo com IA' : 'AI Workflow Innovation'}</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-mono text-[#A7A9AD] block">
                    {language === 'pt' ? 'Assunto' : 'Subject'}
                  </label>
                  <input
                    type="text"
                    required
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder={language === 'pt' ? 'Ex: Montagem de Nova Série / Campanha 2026' : 'e.g. Series Editing / Commercial Campaign 2026'}
                    className="w-full border border-[#35383D] bg-[#202328] px-3 py-2 text-xs sm:text-sm text-[#F2F2F0] placeholder-[#555] focus:border-[#719FC3] focus:outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-mono text-[#A7A9AD] block">
                    {language === 'pt' ? 'Detalhes do Projeto & Prazos' : 'Project Details & Timeline'}
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={
                      language === 'pt'
                        ? 'Descreva o escopo, cronograma estimado, software de preferência ou referências técnicas...'
                        : 'Describe the project scope, expected delivery schedule, technical references...'
                    }
                    className="w-full border border-[#35383D] bg-[#202328] p-3 text-xs sm:text-sm text-[#F2F2F0] placeholder-[#555] focus:border-[#719FC3] focus:outline-none resize-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <button
                    type="submit"
                    className="flex items-center justify-center gap-2 border border-[#719FC3] bg-[#719FC3] py-3 px-4 text-xs sm:text-sm font-semibold tracking-wider text-[#111214] hover:bg-[#8bb4d4] transition-colors"
                  >
                    <Send className="h-4 w-4 shrink-0" />
                    <span>{language === 'pt' ? 'ENVIAR POR E-MAIL' : 'SEND VIA E-MAIL'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleSendWhatsAppBrief}
                    className="flex items-center justify-center gap-2 border border-[#25D366] bg-[#25D366]/15 py-3 px-4 text-xs sm:text-sm font-semibold tracking-wider text-[#25D366] hover:bg-[#25D366] hover:text-[#111214] transition-colors"
                  >
                    <WhatsAppLogo className="h-4 w-4 shrink-0 fill-current" />
                    <span>{language === 'pt' ? 'ENVIAR PELO WHATSAPP' : 'SEND VIA WHATSAPP'}</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 border-t border-[#35383D]/50">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#A7A9AD]">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-bold text-[#F2F2F0]">DÉBORA GUERRA</span>
            <span className="text-[#35383D]">·</span>
            <span>VIDEO EDITOR & POST-PRODUCTION SPECIALIST</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={onOpenExport}
              className="flex items-center gap-1.5 text-[#719FC3] hover:underline"
            >
              <FolderArchive className="h-3.5 w-3.5" />
              <span>{language === 'pt' ? 'Baixar Projeto (.ZIP / WinRAR)' : 'Download Project (.ZIP / WinRAR)'}</span>
            </button>
            <span className="text-[#35383D]">·</span>
            <span>© {new Date().getFullYear()} Débora Guerra.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
