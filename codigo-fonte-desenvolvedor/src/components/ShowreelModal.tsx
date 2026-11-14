import React, { useEffect, useState } from 'react';
import { X, ExternalLink, Play, Film, Clock, Sparkles } from 'lucide-react';
import { Language } from '../data/portfolioData';

interface ShowreelModalProps {
  isOpen: boolean;
  language: Language;
  onClose: () => void;
}

export const ShowreelModal: React.FC<ShowreelModalProps> = ({ isOpen, language, onClose }) => {
  const [currentTimestamp, setCurrentTimestamp] = useState<number>(0);

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

  const chapters = [
    {
      time: '00:00',
      seconds: 0,
      titlePt: 'Abertura & Streaming Dramas (Netflix / HBO / Prime Video)',
      titleEn: 'Opening & Episodic Streaming Dramas (Netflix / HBO / Prime Video)',
    },
    {
      time: '00:45',
      seconds: 45,
      titlePt: 'Doc & Entretenimento Esportivo ("Bora, o Pódio é Nosso" — Emmy 2025)',
      titleEn: 'Sports Doc & Entertainment ("Bora, o Pódio é Nosso" — Emmy 2025 Nominee)',
    },
    {
      time: '01:20',
      seconds: 80,
      titlePt: 'Comerciais Publicitários & Conform Master (Coca-Cola, L\'Oréal, Samsung)',
      titleEn: 'Commercial Masters & Online Conform (Coca-Cola, L\'Oréal, Samsung)',
    },
    {
      time: '02:00',
      seconds: 120,
      titlePt: 'Anúncios de Performance (AIWA / Mondial) & Inovação com IA',
      titleEn: 'Performance Ads (AIWA / Mondial) & Generative AI Innovation',
    },
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-5xl border border-[#35383D] bg-[#191B1F] text-[#F2F2F0] shadow-2xl my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between border-b border-[#35383D] bg-[#202328] px-4 py-3 sm:px-6">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-[#719FC3]">
              <Film className="h-4 w-4" />
              <span>{language === 'pt' ? 'SHOWREEL OFICIAL DÉBORA GUERRA' : 'DÉBORA GUERRA OFFICIAL REEL'}</span>
            </span>
            <span className="text-[#35383D]">·</span>
            <span className="text-xs font-mono text-[#A68B6C]">10+ ANOS DE CARREIRA</span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="https://youtu.be/FfiP6m1x0I0"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 border border-[#35383D] bg-[#191B1F] px-2.5 py-1 text-xs font-mono text-[#A7A9AD] hover:border-[#719FC3] hover:text-[#719FC3] transition-colors"
            >
              <ExternalLink className="h-3 w-3" />
              <span>YouTube</span>
            </a>
            <button
              type="button"
              onClick={onClose}
              className="p-1 text-[#A7A9AD] hover:text-[#F2F2F0] transition-colors"
              aria-label="Fechar Showreel"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* 16:9 Cinematic Video Player */}
        <div className="relative aspect-video w-full bg-black">
          <iframe
            key={currentTimestamp}
            src={`https://www.youtube-nocookie.com/embed/FfiP6m1x0I0?autoplay=1&rel=0&start=${currentTimestamp}`}
            title="Débora Guerra — Video Editor Showreel"
            className="absolute inset-0 h-full w-full border-none"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Chapter Index & Timecode Jump Navigation */}
        <div className="border-t border-[#35383D] bg-[#202328] p-4 sm:p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#719FC3]">
              <Clock className="h-3.5 w-3.5" />
              <span>{language === 'pt' ? 'Índice de Capítulos e Marcadores de Tempo' : 'Showreel Chapters & Timecodes'}</span>
            </h4>
            <a
              href="https://youtu.be/FfiP6m1x0I0"
              target="_blank"
              rel="noopener noreferrer"
              className="sm:hidden flex items-center gap-1 text-xs text-[#719FC3]"
            >
              <ExternalLink className="h-3 w-3" />
              <span>YouTube</span>
            </a>
          </div>

          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {chapters.map((chapter) => {
              const title = language === 'pt' ? chapter.titlePt : chapter.titleEn;
              const isSelected = currentTimestamp === chapter.seconds;

              return (
                <button
                  key={chapter.seconds}
                  type="button"
                  onClick={() => setCurrentTimestamp(chapter.seconds)}
                  className={`flex items-center gap-3 border p-2.5 text-left text-xs transition-colors ${
                    isSelected
                      ? 'border-[#719FC3] bg-[#719FC3]/10 text-[#F2F2F0]'
                      : 'border-[#35383D] bg-[#191B1F] text-[#A7A9AD] hover:border-[#35383D]/80 hover:text-[#F2F2F0]'
                  }`}
                >
                  <span className="font-mono font-bold text-[#719FC3] bg-[#111214] px-1.5 py-0.5 border border-[#35383D]">
                    {chapter.time}
                  </span>
                  <span className="truncate flex-1">{title}</span>
                  <Play className="h-3 w-3 text-[#A7A9AD] shrink-0" />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
