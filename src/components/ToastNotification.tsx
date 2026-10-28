import React from 'react';
import { CheckCircle2 } from 'lucide-react';

interface ToastNotificationProps {
  message: string | null;
}

export const ToastNotification: React.FC<ToastNotificationProps> = ({ message }) => {
  if (!message) return null;

  return (
    <div
      id="toast-notification-banner"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-3 rounded-xl bg-white border border-[#BBD8EE] text-[#2C1810] text-xs font-mono-code shadow-lg shadow-[#5B9BD5]/10 animate-in slide-in-from-bottom-5 duration-300"
    >
      <CheckCircle2 className="w-4 h-4 text-[#5B9BD5]" />
      <span className="font-semibold">{message}</span>
    </div>
  );
};
