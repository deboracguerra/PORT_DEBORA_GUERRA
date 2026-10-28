import React from 'react';

export const EditorialDecorations: React.FC = () => {
  return (
    <>
      {/* Left Vertical Editorial Margin Text (Desktop) */}
      <div 
        className="hidden 2xl:flex fixed left-6 top-1/2 -translate-y-1/2 z-40 -rotate-90 origin-center pointer-events-none select-none items-center gap-3 text-[10px] font-mono-code uppercase tracking-[0.25em] text-[#9B867B]"
        aria-hidden="true"
      >
        <span className="w-8 h-[1px] bg-[#D8CECA]" />
        <span>DATA & POST-PRODUCTION SPECIALIST</span>
        <span className="w-2 h-2 rounded-full bg-[#5B9BD5]" />
      </div>

      {/* Right Vertical Editorial Margin Text (Desktop) */}
      <div 
        className="hidden 2xl:flex fixed right-6 top-1/2 -translate-y-1/2 z-40 rotate-90 origin-center pointer-events-none select-none items-center gap-3 text-[10px] font-mono-code uppercase tracking-[0.25em] text-[#9B867B]"
        aria-hidden="true"
      >
        <span className="w-2 h-2 rounded-full bg-[#5B9BD5]" />
        <span>EDITION 2026 // DÉBORA GUERRA</span>
        <span className="w-8 h-[1px] bg-[#D8CECA]" />
      </div>
    </>
  );
};
