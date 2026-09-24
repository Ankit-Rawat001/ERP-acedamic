import React, { useState } from 'react';

interface BroadcastNoticeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onShowToast: (msg: string, icon?: string) => void;
}

export const BroadcastNoticeModal: React.FC<BroadcastNoticeModalProps> = ({
  isOpen,
  onClose,
  onShowToast,
}) => {
  const [selectedAudience, setSelectedAudience] = useState('CS301 (Both Sec)');
  const [message, setMessage] = useState(
    "Note: Hall 402 projector is undergoing routine maintenance. Today's 9:30 AM lecture starts with interactive system design whiteboarding."
  );
  const [sendSms, setSendSms] = useState(true);
  const [publishing, setPublishing] = useState(false);

  if (!isOpen) return null;

  const handlePublish = () => {
    setPublishing(true);
    setTimeout(() => {
      setPublishing(false);
      onClose();
      onShowToast(`Broadcast alert dispatched to ${selectedAudience} students via app & SMS.`, 'campaign');
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#0b1c30]/50 backdrop-blur-sm flex flex-col justify-end animate-in fade-in duration-200">
      <div className="bg-white rounded-t-3xl p-5 flex flex-col gap-4 shadow-2xl animate-in slide-in-from-bottom duration-200 max-w-xl mx-auto w-full">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#0058be] text-[24px]">campaign</span>
            <h3 className="text-lg font-bold text-[#0b1c30]">Publish Class Notice</h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#eff4ff] flex items-center justify-center text-[#44474d] hover:text-[#0b1c30] transition-colors"
            type="button"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        <div>
          <label className="text-xs font-semibold text-[#44474d] block mb-1.5">
            Target Audience
          </label>
          <div className="flex flex-wrap gap-2">
            {['CS301 (Both Sec)', 'CS502 Postgrad', 'All Advisees'].map((aud) => (
              <button
                key={aud}
                type="button"
                onClick={() => setSelectedAudience(aud)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  selectedAudience === aud
                    ? 'bg-[#000412] text-white shadow-xs'
                    : 'bg-[#eff4ff] text-[#0b1c30] hover:bg-[#dce9ff]'
                }`}
              >
                {aud}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="text-xs font-semibold text-[#44474d] block mb-1.5">
            Announcement Body
          </label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full rounded-xl bg-[#eff4ff] p-3 text-xs text-[#0b1c30] focus:outline-none focus:ring-2 focus:ring-[#0058be] border border-[#dce9ff]"
            rows={4}
            placeholder="e.g., Note: Hall 402 projector is undergoing maintenance. Today's 9:30 AM lecture starts with whiteboarding."
          />
        </div>

        <div className="flex items-center justify-between pt-1">
          <label className="flex items-center gap-2 text-xs text-[#44474d] cursor-pointer select-none">
            <input
              type="checkbox"
              checked={sendSms}
              onChange={(e) => setSendSms(e.target.checked)}
              className="w-4 h-4 rounded text-[#0058be] accent-[#0058be]"
            />
            <span>Send SMS Priority Alert</span>
          </label>

          <button
            onClick={handlePublish}
            disabled={publishing || !message.trim()}
            className="h-10 px-5 rounded-xl bg-[#0058be] hover:bg-[#004395] text-white text-xs font-semibold shadow-sm flex items-center gap-1.5 active:scale-95 transition-all"
            type="button"
          >
            <span>{publishing ? 'Broadcasting...' : 'Broadcast Now'}</span>
            <span className="material-symbols-outlined text-[16px]">send</span>
          </button>
        </div>
      </div>
    </div>
  );
};
