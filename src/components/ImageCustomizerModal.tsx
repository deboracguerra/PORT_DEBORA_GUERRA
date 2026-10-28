import React, { useState, useRef } from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { DEFAULT_PROFILE_IMAGE } from '../data/portfolioData';
import { 
  X, 
  Upload, 
  Link as LinkIcon, 
  RotateCcw, 
  Check, 
  Image as ImageIcon,
  FileImage 
} from 'lucide-react';

interface ImageCustomizerModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentImage: string;
  onUpdateImage: (newImage: string) => void;
  language: Language;
}

export const ImageCustomizerModal: React.FC<ImageCustomizerModalProps> = ({
  isOpen,
  onClose,
  currentImage,
  onUpdateImage,
  language,
}) => {
  const [inputUrl, setInputUrl] = useState('');
  const [dragOver, setDragOver] = useState(false);
  const [selectedFileName, setSelectedFileName] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;
  const t = TRANSLATIONS[language];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      processFile(file);
    }
  };

  const processFile = (file: File) => {
    setSelectedFileName(file.name);
    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result as string;
      if (result) {
        onUpdateImage(result);
        onClose();
      }
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      processFile(file);
    }
  };

  const handleSubmitUrl = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputUrl.trim()) {
      onUpdateImage(inputUrl.trim());
      onClose();
    }
  };

  const handleReset = () => {
    onUpdateImage(DEFAULT_PROFILE_IMAGE);
    onClose();
  };

  return (
    <div
      id="image-customizer-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="image-customizer-modal-box"
        className="relative w-full max-w-lg bg-white border border-[#EBE5DF] rounded-2xl shadow-xl p-6 space-y-6 animate-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#F4F8FA] border border-[#DCE8F0] text-[#7A6255] hover:text-[#2C1810] hover:border-[#5B9BD5] transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-xs font-mono-code text-[#4A90C2] uppercase font-bold">
            <ImageIcon className="w-4 h-4" />
            <span>{t.imageModal.title}</span>
          </div>
          <h3 className="text-xl font-bold font-display text-[#2C1810]">
            {language === 'pt' ? 'Atualizar Foto de Perfil' : 'Update Profile Photo'}
          </h3>
          <p className="text-xs text-[#6A5447]">
            {t.imageModal.description}
          </p>
        </div>

        {/* Current Image Preview */}
        <div className="flex items-center gap-4 p-3 rounded-xl bg-[#F8FBFE] border border-[#E1EDF7]">
          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#5B9BD5] shrink-0 bg-white shadow-sm">
            <img
              src={currentImage}
              alt="Preview"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col text-xs font-mono-code">
            <span className="text-[#8A7366]">
              {language === 'pt' ? 'Foto Atual em Uso:' : 'Current Active Photo:'}
            </span>
            <span className="text-[#2C1810] truncate max-w-[240px] font-bold">
              {currentImage === DEFAULT_PROFILE_IMAGE
                ? (language === 'pt' ? 'Foto Oficial Débora Guerra' : 'Official Débora Guerra Portrait')
                : (currentImage.startsWith('data:') ? 'Arquivo Local Selecionado' : currentImage)}
            </span>
          </div>
        </div>

        {/* Option 1: File Upload (Drag & Drop + File Input) */}
        <div className="space-y-2">
          <label className="text-xs font-mono-code text-[#4E372B] flex items-center gap-1.5 font-semibold">
            <Upload className="w-3.5 h-3.5 text-[#5B9BD5]" />
            <span>{t.imageModal.fileUploadLabel}</span>
          </label>
          <div
            onDragOver={(e) => {
              e.preventDefault();
              setDragOver(true);
            }}
            onDragLeave={() => setDragOver(false)}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
            className={`border-2 border-dashed rounded-xl p-5 text-center cursor-pointer transition-all duration-200 ${
              dragOver
                ? 'border-[#5B9BD5] bg-[#EDF5FB]'
                : 'border-[#DCE8F0] hover:border-[#5B9BD5] bg-[#F8FBFE] hover:bg-[#F0F7FD]'
            }`}
          >
            <input
              ref={fileInputRef}
              type="file"
              accept="image/png, image/jpeg, image/webp"
              onChange={handleFileChange}
              className="hidden"
            />
            <div className="flex flex-col items-center justify-center gap-2">
              <div className="w-10 h-10 rounded-full bg-white border border-[#DCE8F0] flex items-center justify-center text-[#5B9BD5]">
                <FileImage className="w-5 h-5" />
              </div>
              <div className="text-xs font-semibold text-[#2C1810]">
                {selectedFileName || (language === 'pt' ? 'Clique para escolher ou arraste sua foto aqui' : 'Click to select or drag your photo here')}
              </div>
              <p className="text-[11px] text-[#7A6255] font-mono-code">
                {t.imageModal.fileUploadHelp}
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-3 text-xs text-[#8A7366] font-mono-code">
          <div className="flex-1 h-px bg-[#EFE9E2]" />
          <span>{language === 'pt' ? 'OU' : 'OR'}</span>
          <div className="flex-1 h-px bg-[#EFE9E2]" />
        </div>

        {/* Option 2: Custom URL Input Form */}
        <form onSubmit={handleSubmitUrl} className="space-y-4">
          <div className="space-y-1.5">
            <label className="text-xs font-mono-code text-[#4E372B] flex items-center gap-1.5 font-semibold">
              <LinkIcon className="w-3.5 h-3.5 text-[#5B9BD5]" />
              <span>{t.imageModal.urlInputLabel}</span>
            </label>
            <div className="flex gap-2">
              <input
                type="url"
                value={inputUrl}
                onChange={(e) => setInputUrl(e.target.value)}
                placeholder={t.imageModal.urlPlaceholder}
                className="flex-1 px-4 py-2.5 rounded-lg bg-white border border-[#DCE8F0] focus:border-[#5B9BD5] text-[#2C1810] text-xs font-mono-code focus:outline-none"
              />
              <button
                type="submit"
                disabled={!inputUrl.trim()}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-[#5B9BD5] hover:bg-[#4686BD] disabled:opacity-40 text-white text-xs font-bold font-mono-code uppercase tracking-wider transition-colors shrink-0 shadow-xs"
              >
                <Check className="w-4 h-4" />
                <span>{t.imageModal.useUrlButton}</span>
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between gap-3 pt-3 border-t border-[#EFE9E2]">
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#F4F8FA] hover:bg-[#EBF4FA] border border-[#DCE8F0] text-xs font-mono-code text-[#4E372B] transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5 text-[#5B9BD5]" />
              <span>{t.imageModal.resetButton}</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              className="px-3.5 py-2 rounded-lg bg-transparent text-xs text-[#7A6255] hover:text-[#2C1810] transition-colors"
            >
              {t.imageModal.closeButton}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
