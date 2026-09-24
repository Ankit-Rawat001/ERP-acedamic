import React from 'react';
import { ASSETS } from '../mockData';

interface AdmitCardModalProps {
  isOpen: boolean;
  onClose: () => void;
  onShowToast: (msg: string, icon?: string) => void;
}

export const AdmitCardModal: React.FC<AdmitCardModalProps> = ({
  isOpen,
  onClose,
  onShowToast,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#0b1c30]/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-md w-full p-5 shadow-2xl flex flex-col gap-4 max-h-[90vh] overflow-y-auto no-scrollbar animate-in zoom-in-95 duration-200">
        <div className="flex items-center justify-between border-b border-[#eff4ff] pb-3">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#0058be]">badge</span>
            <h3 className="text-base font-bold text-[#0b1c30]">Exam Admit Card · Mid-Sem 2025</h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#eff4ff] flex items-center justify-center text-[#44474d] hover:text-[#0b1c30]"
            type="button"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        {/* Certificate Card Container */}
        <div className="border-2 border-[#dce9ff] rounded-2xl p-4 bg-[#f8f9ff] flex flex-col gap-3">
          <div className="flex items-center justify-between border-b border-[#dce9ff] pb-3">
            <div className="flex items-center gap-2">
              <img
                src={ASSETS.universityCrest}
                alt="Crest"
                className="h-7 w-auto object-contain"
              />
              <div>
                <div className="text-[10px] font-bold text-[#0058be] uppercase tracking-wider">Oxford Collegiate</div>
                <div className="text-xs font-bold text-[#0b1c30]">Examination Hall Ticket</div>
              </div>
            </div>
            <span className="px-2 py-0.5 rounded bg-[#4edea3]/20 text-[#009969] text-[10px] font-bold">
              VERIFIED
            </span>
          </div>

          <div className="flex gap-3 items-center">
            <img
              src={ASSETS.sarahBadgePhoto}
              alt="Sarah Adams"
              className="w-16 h-20 rounded-lg object-cover border border-[#dce9ff]"
            />
            <div className="flex flex-col text-xs gap-0.5">
              <span className="text-sm font-bold text-[#0b1c30]">Sarah J. Adams</span>
              <span className="text-[#44474d]">Roll: <strong className="font-mono text-[#0b1c30]">CS21B042</strong></span>
              <span className="text-[#44474d]">Degree: B.Tech Computer Science & AI</span>
              <span className="text-[#44474d]">Exam Center: <strong className="text-[#0058be]">Turing Hall Block B</strong></span>
            </div>
          </div>

          {/* Exam Schedule Table */}
          <div className="text-[11px] mt-1">
            <div className="font-bold text-[#0b1c30] mb-1">Registered Paper Schedule:</div>
            <div className="bg-white rounded-lg border border-[#eff4ff] divide-y divide-[#eff4ff] overflow-hidden">
              <div className="p-2 flex justify-between">
                <span><strong>CS301</strong> Distributed Systems</span>
                <span className="text-[#75777e]">Nov 02 · 10:00 AM</span>
              </div>
              <div className="p-2 flex justify-between">
                <span><strong>AI304</strong> Deep Learning</span>
                <span className="text-[#75777e]">Nov 05 · 02:00 PM</span>
              </div>
              <div className="p-2 flex justify-between">
                <span><strong>MAT204</strong> Applied Probability</span>
                <span className="text-[#75777e]">Nov 08 · 10:00 AM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 pt-1">
          <button
            onClick={() => {
              onClose();
              onShowToast('Official Examination Admit Card PDF downloaded successfully!', 'download_done');
            }}
            className="flex-1 py-2.5 bg-[#0058be] hover:bg-[#004395] text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm active:scale-95"
            type="button"
          >
            <span className="material-symbols-outlined text-[16px]">download</span>
            Download PDF
          </button>
          <button
            onClick={() => {
              onClose();
              onShowToast('Admit Card sent to student email (sarah.adams@oxford.edu)', 'forward_to_inbox');
            }}
            className="px-4 py-2.5 bg-[#eff4ff] hover:bg-[#dce9ff] text-[#0b1c30] rounded-xl text-xs font-semibold"
            type="button"
          >
            Email Copy
          </button>
        </div>
      </div>
    </div>
  );
};
