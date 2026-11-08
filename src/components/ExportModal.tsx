import React, { useState, useEffect } from 'react';
import { X, Download, FolderArchive, Github, Terminal, Check, Copy, ExternalLink, Sparkles } from 'lucide-react';
import { Language } from '../data/portfolioData';

interface ExportModalProps {
  isOpen: boolean;
  language: Language;
  onClose: () => void;
}

export const ExportModal: React.FC<ExportModalProps> = ({ isOpen, language, onClose }) => {
  const [copiedGit, setCopiedGit] = useState(false);

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

  const gitCommands = `# 1. Inicializar repositório Git local
git init
git add .
git commit -m "Portfólio Profissional Débora Guerra"
git branch -M main

# 2. Conectar ao seu repositório no GitHub (substitua SEU-USUARIO)
git remote add origin https://github.com/SEU-USUARIO/debora-guerra-portfolio.git
git push -u origin main`;

  const copyGitCommands = async () => {
    try {
      await navigator.clipboard.writeText(gitCommands);
      setCopiedGit(true);
      setTimeout(() => setCopiedGit(false), 2500);
    } catch {
      setCopiedGit(true);
      setTimeout(() => setCopiedGit(false), 2500);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-2xl border border-[#35383D] bg-[#191B1F] text-[#F2F2F0] shadow-2xl my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#35383D] bg-[#202328] px-4 py-3 sm:px-6">
          <div className="flex items-center gap-2">
            <FolderArchive className="h-4 w-4 text-[#719FC3]" />
            <span className="font-mono text-xs uppercase tracking-widest text-[#719FC3]">
              {language === 'pt' ? 'DOWNLOAD DO CÓDIGO & GITHUB PAGES' : 'DOWNLOAD SOURCE & GITHUB PAGES'}
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1 text-[#A7A9AD] hover:text-[#F2F2F0] transition-colors"
            aria-label="Fechar modal"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[82vh] overflow-y-auto">
          {/* Main Download Card */}
          <div className="border border-[#719FC3]/40 bg-[#202328] p-5 space-y-4">
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-1">
                <span className="font-mono text-[11px] uppercase tracking-wider text-[#719FC3] block">
                  {language === 'pt' ? 'ARQUIVO PRONTO PARA WINRAR' : 'READY FOR WINRAR EXTRACTION'}
                </span>
                <h3 className="font-['Outfit'] text-xl font-bold text-[#F2F2F0]">
                  debora-guerra-portfolio.zip
                </h3>
                <p className="text-xs text-[#A7A9AD]">
                  {language === 'pt'
                    ? 'Pacote completo contendo código-fonte (React + Vite + Tailwind), assets visuais em alta resolução, workflow do GitHub Actions e pasta dist pronta.'
                    : 'Complete archive with React + Vite + Tailwind source code, high-res media assets, GitHub Actions deployment workflow, and pre-built dist folder.'}
                </p>
              </div>
              <span className="shrink-0 px-2.5 py-1 text-xs font-mono bg-[#719FC3]/10 text-[#719FC3] border border-[#719FC3]/30">
                ~20 MB
              </span>
            </div>

            <a
              href="./debora-guerra-portfolio.zip"
              download="debora-guerra-portfolio.zip"
              className="flex w-full items-center justify-center gap-2.5 border border-[#719FC3] bg-[#719FC3] py-3.5 px-4 text-xs sm:text-sm font-bold tracking-wider text-[#111214] hover:bg-[#8bb4d4] transition-colors"
            >
              <Download className="h-4 w-4" />
              <span>{language === 'pt' ? 'BAIXAR ARQUIVO .ZIP AGORA' : 'DOWNLOAD .ZIP ARCHIVE NOW'}</span>
            </a>
          </div>

          {/* Instructions Tabs / Steps */}
          <div className="space-y-4">
            <h4 className="font-mono text-xs uppercase tracking-wider text-[#A7A9AD] flex items-center gap-2">
              <Sparkles className="h-3.5 w-3.5 text-[#A68B6C]" />
              <span>{language === 'pt' ? 'Passo a Passo de Instalação e Publicação' : 'Quick Deployment Guide'}</span>
            </h4>

            {/* Step 1: WinRAR */}
            <div className="border border-[#35383D] bg-[#111214] p-4 space-y-2">
              <div className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-xs bg-[#719FC3] font-mono text-xs font-bold text-[#111214]">
                  1
                </span>
                <span className="font-mono text-xs font-bold uppercase text-[#F2F2F0]">
                  {language === 'pt' ? 'Como Abrir no WinRAR' : 'Extract with WinRAR'}
                </span>
              </div>
              <p className="text-xs text-[#A7A9AD] pl-7">
                {language === 'pt'
                  ? 'Clique com o botão direito no arquivo baixado e selecione "Extrair para debora-guerra-portfolio\\". Todos os arquivos serão descompactados organizadamente.'
                  : 'Right-click the downloaded zip file and select "Extract to debora-guerra-portfolio\\". All project files will be cleanly extracted.'}
              </p>
            </div>

            {/* Step 2: GitHub Pages */}
            <div className="border border-[#35383D] bg-[#111214] p-4 space-y-2">
              <div className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-xs bg-[#719FC3] font-mono text-xs font-bold text-[#111214]">
                  2
                </span>
                <span className="font-mono text-xs font-bold uppercase text-[#F2F2F0]">
                  {language === 'pt' ? 'Subir no GitHub e Ativar GitHub Pages' : 'Upload to GitHub & Enable Pages'}
                </span>
              </div>
              <p className="text-xs text-[#A7A9AD] pl-7">
                {language === 'pt'
                  ? 'Crie um repositório no GitHub e envie os arquivos da pasta extraída. Em seguida, acerte em Settings > Pages > Source e selecione "GitHub Actions". O arquivo .github/workflows/deploy.yml já incluído publicará o site automaticamente e de graça!'
                  : 'Create a GitHub repository and push the extracted files. In Settings > Pages > Source, choose "GitHub Actions". The included .github/workflows/deploy.yml publishes the site automatically.'}
              </p>
            </div>

            {/* Step 3: Git CLI */}
            <div className="border border-[#35383D] bg-[#111214] p-4 space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Terminal className="h-4 w-4 text-[#719FC3]" />
                  <span className="font-mono text-xs font-bold uppercase text-[#F2F2F0]">
                    {language === 'pt' ? 'Comandos Git Rápidos' : 'Quick Git Commands'}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={copyGitCommands}
                  className="flex items-center gap-1 text-[11px] font-mono text-[#719FC3] hover:underline"
                >
                  {copiedGit ? (
                    <>
                      <Check className="h-3 w-3 text-emerald-400" />
                      <span>{language === 'pt' ? 'Copiado!' : 'Copied!'}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3 w-3" />
                      <span>{language === 'pt' ? 'Copiar' : 'Copy'}</span>
                    </>
                  )}
                </button>
              </div>
              <pre className="overflow-x-auto bg-[#0a0a0c] p-3 font-mono text-[11px] text-[#A7A9AD] border border-[#202328]">
                {gitCommands}
              </pre>
            </div>
          </div>

          <div className="border-t border-[#35383D] pt-4 text-center">
            <button
              type="button"
              onClick={onClose}
              className="border border-[#35383D] bg-[#202328] px-6 py-2.5 text-xs font-mono text-[#A7A9AD] hover:text-[#F2F2F0] hover:border-[#719FC3] transition-colors"
            >
              {language === 'pt' ? 'FECHAR' : 'CLOSE'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
