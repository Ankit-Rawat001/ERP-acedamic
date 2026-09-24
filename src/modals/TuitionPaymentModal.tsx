import React, { useState } from 'react';

interface TuitionPaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onShowToast: (msg: string, icon?: string) => void;
  onPaymentSuccess?: () => void;
}

export const TuitionPaymentModal: React.FC<TuitionPaymentModalProps> = ({
  isOpen,
  onClose,
  onShowToast,
  onPaymentSuccess,
}) => {
  const [method, setMethod] = useState<'card' | 'bank' | 'wallet'>('card');
  const [paying, setPaying] = useState(false);

  if (!isOpen) return null;

  const handlePay = () => {
    setPaying(true);
    setTimeout(() => {
      setPaying(false);
      onPaymentSuccess?.();
      onClose();
      onShowToast('Tuition payment of $250.00 processed. Receipt #OXF-9941 dispatched.', 'check_circle');
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#0b1c30]/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-md w-full p-5 shadow-2xl flex flex-col gap-4 animate-in zoom-in-95 duration-200">
        <div className="flex items-center justify-between border-b border-[#eff4ff] pb-3">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#0058be]">account_balance_wallet</span>
            <h3 className="text-base font-bold text-[#0b1c30]">Tuition Dues Payment</h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#eff4ff] flex items-center justify-center text-[#44474d] hover:text-[#0b1c30]"
            type="button"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        <div className="bg-[#eff4ff] rounded-2xl p-4 flex flex-col gap-2">
          <span className="text-xs text-[#44474d] uppercase font-semibold">Outstanding Balance</span>
          <div className="text-3xl font-extrabold text-[#ba1a1a]">$250.00</div>
          <span className="text-xs text-[#75777e]">
            Autumn Term Lab Consumables & High-Performance Compute Cluster Allocation
          </span>
        </div>

        <div>
          <label className="text-xs font-semibold text-[#0b1c30] block mb-2">Select Payment Method</label>
          <div className="grid grid-cols-3 gap-2">
            {[
              { id: 'card', label: 'Credit Card', icon: 'credit_card' },
              { id: 'bank', label: 'Bank Direct', icon: 'account_balance' },
              { id: 'wallet', label: 'Apple Pay', icon: 'smartphone' },
            ].map((m) => (
              <button
                key={m.id}
                type="button"
                onClick={() => setMethod(m.id as any)}
                className={`p-3 rounded-xl flex flex-col items-center gap-1 border text-xs font-semibold transition-all ${
                  method === m.id
                    ? 'border-[#0058be] bg-[#e5eeff] text-[#0058be] shadow-xs'
                    : 'border-[#dce9ff] bg-white text-[#44474d] hover:bg-[#eff4ff]'
                }`}
              >
                <span className="material-symbols-outlined text-[20px]">{m.icon}</span>
                <span>{m.label}</span>
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={handlePay}
          disabled={paying}
          className="w-full py-3 rounded-xl bg-[#000412] hover:bg-[#0f1e36] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all active:scale-[0.99]"
          type="button"
        >
          {paying ? (
            <>
              <span className="material-symbols-outlined text-[18px] animate-spin">progress_activity</span>
              <span>Authorizing Transfer...</span>
            </>
          ) : (
            <>
              <span className="material-symbols-outlined text-[18px]">lock</span>
              <span>Confirm Payment of $250.00</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};
