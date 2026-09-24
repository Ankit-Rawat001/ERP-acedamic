import React, { useEffect } from 'react';

export interface ToastMessage {
  id: string;
  message: string;
  icon?: string;
}

interface ToastProps {
  toast: ToastMessage | null;
  onDismiss: () => void;
}

export const Toast: React.FC<ToastProps> = ({ toast, onDismiss }) => {
  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => {
      onDismiss();
    }, 3200);
    return () => clearTimeout(timer);
  }, [toast, onDismiss]);

  if (!toast) return null;

  return (
    <div className="fixed top-20 left-4 right-4 max-w-sm mx-auto z-50 animate-in fade-in slide-in-from-top-4 duration-300 pointer-events-auto">
      <div className="bg-[#213145] text-[#eaf1ff] px-4 py-2.5 rounded-xl shadow-xl flex items-center justify-between gap-3 border border-[#394761]">
        <div className="flex items-center gap-2 min-w-0">
          <span className="material-symbols-outlined text-[#4edea3] text-[20px] shrink-0">
            {toast.icon || 'check_circle'}
          </span>
          <span className="text-xs font-semibold truncate leading-tight">
            {toast.message}
          </span>
        </div>
        <button
          onClick={onDismiss}
          className="text-[#75777e] hover:text-white transition-colors"
          type="button"
        >
          <span className="material-symbols-outlined text-[16px]">close</span>
        </button>
      </div>
    </div>
  );
};
