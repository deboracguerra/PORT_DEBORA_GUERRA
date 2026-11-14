import React, { useState, useEffect } from 'react';
import { X, Download, FolderArchive, Terminal, Check, Copy, Sparkles, Loader2, AlertCircle, FileCode, CheckCircle2 } from 'lucide-react';
import { Language } from '../data/portfolioData';

interface ExportModalProps {
  isOpen: boolean;
  language: Language;
  onClose: () => void;
}

export const ExportModal: React.FC<ExportModalProps> = ({ isOpen, language, onClose }) => {
  const [copiedGit, setCopiedGit] = useState(false);
  const [downloadingFull, setDownloadingFull] = useState(false);
  const [downloadingSource, setDownloadingSource] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);
  const [downloadError, setDownloadError] = useState<string | null>(null);

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

  /**
   * Programmatic Blob Download:
   * Guarantees exact binary bytes, avoids iframe sandbox cancellation,
   * sets the strict 'application/zip' MIME type, and names the file correctly for WinRAR.
   */
  const handleDownloadZip = async (fileName: string, isSourceOnly = false) => {
    const setLoading = isSourceOnly ? setDownloadingSource : setDownloadingFull;
    setLoading(true);
    setDownloadError(null);
    setDownloadSuccess(null);

    try {
      const response = await fetch(`./${fileName}`, { cache: 'no-store' });
      if (!response.ok) {
        throw new Error(`Erro HTTP ${response.status}: Não foi possível carregar o arquivo.`);
      }

      const buffer = await response.arrayBuffer();
      const header = new Uint8Array(buffer.slice(0, 4));
      if (buffer.byteLength < 100 || header[0] !== 0x50 || header[1] !== 0x4b) {
        throw new Error('O arquivo retornado não é um arquivo PKZip válido.');
      }

      // Create a native blob with canonical application/zip MIME
      const zipBlob = new Blob([buffer], { type: 'application/zip' });
      const objectUrl = window.URL.createObjectURL(zipBlob);

      const link = document.createElement('a');
      link.href = objectUrl;
      link.download = fileName;
      link.style.display = 'none';
      document.body.appendChild(link);
      link.click();

      setTimeout(() => {
        document.body.removeChild(link);
        window.URL.revokeObjectURL(objectUrl);
        setLoading(false);
        setDownloadSuccess(fileName);
        setTimeout(() => setDownloadSuccess(null), 5000);
      }, 400);
    } catch (err) {
      console.error('Download error:', err);
      setLoading(false);
      setDownloadError(
        language === 'pt'
          ? 'Houve uma instabilidade no download direto. Tentando link alternativo...'
          : 'Direct download encountered an issue. Trying fallback link...'
      );
      window.open(`./${fileName}`, '_blank');
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
              {language === 'pt' ? 'ARQUIVO .ZIP & PUBLICAÇÃO GITHUB' : 'SOURCE .ZIP & GITHUB PAGES'}
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
          {/* Status Message */}
          {downloadSuccess && (
            <div className="border border-emerald-500/50 bg-emerald-950/30 p-3 flex items-center gap-2 text-xs font-mono text-emerald-400">
              <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
              <span>
                {language === 'pt'
                  ? `Download de ${downloadSuccess} concluído! Abra o arquivo diretamente no WinRAR.`
                  : `${downloadSuccess} downloaded successfully! Open it directly with WinRAR.`}
              </span>
            </div>
          )}

          {downloadError && (
            <div className="border border-amber-500/50 bg-amber-950/30 p-3 flex items-center gap-2 text-xs font-mono text-amber-300">
              <AlertCircle className="h-4 w-4 shrink-0" />
              <span>{downloadError}</span>
            </div>
          )}

          {/* Main Download Option 1: Full Project Package */}
          <div className="border border-[#719FC3] bg-[#202328] p-5 space-y-4">
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-1">
                <span className="font-mono text-[11px] uppercase tracking-wider text-[#719FC3] block font-bold">
                  {language === 'pt' ? 'OPÇÃO 1: PRONTO PARA GITHUB PAGES (HTML/JS/CSS)' : 'OPTION 1: GITHUB PAGES READY (HTML/JS/CSS)'}
                </span>
                <h3 className="font-['Outfit'] text-xl font-bold text-[#F2F2F0]">
                  debora-guerra-portfolio.zip
                </h3>
                <p className="text-xs text-[#A7A9AD]">
                  {language === 'pt'
                    ? 'Formato PKZip 2.0 padrão Windows 100% compatível com WinRAR. Traz o site já compilado em HTML5 + JavaScript + CSS + Imagens na raiz (sem tela branca no GitHub Pages) e o código-fonte completo em subpasta.'
                    : 'Standard Windows PKZip 2.0 format 100% compatible with WinRAR. Includes pre-compiled HTML5 + JavaScript + CSS + Images at root (no blank screen on GitHub Pages) plus full source code.'}
                </p>
              </div>
              <span className="shrink-0 px-2.5 py-1 text-xs font-mono bg-[#719FC3]/15 text-[#719FC3] border border-[#719FC3]/40">
                ~9.5 MB
              </span>
            </div>

            <button
              type="button"
              disabled={downloadingFull}
              onClick={() => handleDownloadZip('debora-guerra-portfolio.zip', false)}
              className="flex w-full items-center justify-center gap-2.5 border border-[#719FC3] bg-[#719FC3] py-3.5 px-4 text-xs sm:text-sm font-bold tracking-wider text-[#111214] hover:bg-[#8bb4d4] transition-colors disabled:opacity-50"
            >
              {downloadingFull ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span>{language === 'pt' ? 'BAIXANDO ARQUIVO ZIP...' : 'DOWNLOADING ZIP...'}</span>
                </>
              ) : (
                <>
                  <Download className="h-4 w-4" />
                  <span>{language === 'pt' ? 'BAIXAR ZIP COMPLETO PARA WINRAR' : 'DOWNLOAD COMPLETE ZIP FOR WINRAR'}</span>
                </>
              )}
            </button>
          </div>

          {/* Secondary Option 2: Lightweight Source-only */}
          <div className="border border-[#35383D] bg-[#191B1F] p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="space-y-0.5">
              <span className="font-mono text-xs font-bold text-[#F2F2F0] flex items-center gap-1.5">
                <FileCode className="h-3.5 w-3.5 text-[#719FC3]" />
                {language === 'pt' ? 'Opção 2: Somente Código-Fonte (Leve)' : 'Option 2: Source Code Only (Lightweight)'}
              </span>
              <p className="text-[11px] text-[#A7A9AD]">
                debora-guerra-portfolio-source.zip · {language === 'pt' ? 'Código sem imagens pesadas' : 'Source code without media'}
              </p>
            </div>

            <button
              type="button"
              disabled={downloadingSource}
              onClick={() => handleDownloadZip('debora-guerra-portfolio-source.zip', true)}
              className="flex items-center gap-1.5 border border-[#35383D] bg-[#202328] px-3.5 py-2 text-xs font-mono text-[#F2F2F0] hover:border-[#719FC3] hover:text-[#719FC3] transition-colors shrink-0 disabled:opacity-50"
            >
              {downloadingSource ? (
                <Loader2 className="h-3.5 w-3.5 animate-spin" />
              ) : (
                <Download className="h-3.5 w-3.5" />
              )}
              <span>{language === 'pt' ? 'BAIXAR CÓDIGO (57 KB)' : 'DOWNLOAD SOURCE (57 KB)'}</span>
            </button>
          </div>

          {/* WinRAR & GitHub Instructions */}
          <div className="space-y-3 pt-1">
            <h4 className="font-mono text-xs uppercase tracking-wider text-[#A7A9AD] flex items-center gap-2">
              <Sparkles className="h-3.5 w-3.5 text-[#A68B6C]" />
              <span>{language === 'pt' ? 'Instruções para o WinRAR e GitHub Pages' : 'WinRAR & GitHub Pages Instructions'}</span>
            </h4>

            {/* Step 1: WinRAR */}
            <div className="border border-[#35383D] bg-[#111214] p-3.5 space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-xs bg-[#719FC3] font-mono text-xs font-bold text-[#111214]">
                  1
                </span>
                <span className="font-mono text-xs font-bold uppercase text-[#F2F2F0]">
                  {language === 'pt' ? 'Como Abrir no WinRAR' : 'How to Open in WinRAR'}
                </span>
              </div>
              <ul className="text-xs text-[#A7A9AD] pl-7 space-y-1 list-disc">
                <li>
                  {language === 'pt'
                    ? 'Dê um duplo clique no arquivo baixado ou clique com o botão direito e selecione "Extrair para debora-guerra-portfolio\\".'
                    : 'Double-click the downloaded file or right-click and choose "Extract to debora-guerra-portfolio\\".'}
                </li>
                <li>
                  {language === 'pt'
                    ? 'Caso seu Windows abra com outro programa, clique com o botão direito no arquivo > "Abrir com..." > escolha "WinRAR".'
                    : 'If your computer opens another app by default, right-click the file > "Open with..." > select "WinRAR".'}
                </li>
              </ul>
            </div>

            {/* Step 2: GitHub Pages */}
            <div className="border border-[#35383D] bg-[#111214] p-3.5 space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-xs bg-[#719FC3] font-mono text-xs font-bold text-[#111214]">
                  2
                </span>
                <span className="font-mono text-xs font-bold uppercase text-[#F2F2F0]">
                  {language === 'pt' ? 'Como Subir no GitHub (Sem Tela Branca!)' : 'Deploy to GitHub (No Blank Screen!)'}
                </span>
              </div>
              <p className="text-xs text-[#A7A9AD] pl-7">
                {language === 'pt'
                  ? 'Envie os arquivos da pasta para o seu repositório no GitHub (index.html, 404.html, .nojekyll e a pasta assets). Em Settings > Pages > Source, escolha "Deploy from a branch", selecione a branch "main" e pasta "/ (root)". O site entra no ar imediatamente, sem precisar compilar!'
                  : 'Upload the folder files to GitHub (index.html, 404.html, .nojekyll, and assets folder). In Settings > Pages > Source, choose "Deploy from a branch", select "main" branch and "/ (root)". Your site goes live instantly without any compilation needed!'}
              </p>
            </div>

            {/* Step 3: Git CLI */}
            <div className="border border-[#35383D] bg-[#111214] p-3.5 space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Terminal className="h-4 w-4 text-[#719FC3]" />
                  <span className="font-mono text-xs font-bold uppercase text-[#F2F2F0]">
                    {language === 'pt' ? 'Comandos Git Rápidos (Terminal)' : 'Terminal Git Commands'}
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
                      <span>{language === 'pt' ? 'Copiar Comandos' : 'Copy Commands'}</span>
                    </>
                  )}
                </button>
              </div>
              <pre className="overflow-x-auto bg-[#0a0a0c] p-2.5 font-mono text-[11px] text-[#A7A9AD] border border-[#202328]">
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
