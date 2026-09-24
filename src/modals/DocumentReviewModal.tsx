import React from 'react';
import { ASSETS } from '../mockData';
import { StudentRequest } from '../types';

interface DocumentReviewModalProps {
  request: StudentRequest | null;
  onClose: () => void;
  onApprove: (id: string) => void;
  onDecline: (id: string) => void;
}

export const DocumentReviewModal: React.FC<DocumentReviewModalProps> = ({
  request,
  onClose,
  onApprove,
  onDecline,
}) => {
  if (!request) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#0b1c30]/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-md w-full p-5 shadow-2xl flex flex-col gap-4 animate-in zoom-in-95 duration-200">
        <div className="flex items-center justify-between border-b border-[#eff4ff] pb-3">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#0058be]">description</span>
            <h3 className="text-base font-bold text-[#0b1c30]">Verification Document</h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#eff4ff] flex items-center justify-center text-[#44474d] hover:text-[#0b1c30]"
            type="button"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        {/* Student summary */}
        <div className="flex items-center gap-3 p-3 bg-[#eff4ff] rounded-xl">
          <img
            src={request.avatar}
            alt={request.studentName}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <div className="text-sm font-bold text-[#0b1c30]">{request.studentName}</div>
            <div className="text-xs text-[#44474d]">
              {request.rollNo} • {request.type}
            </div>
            <div className="text-xs text-[#0058be] font-medium mt-0.5">{request.course}</div>
          </div>
        </div>

        {/* Mock Document Render */}
        <div className="border border-[#dce9ff] rounded-xl p-4 bg-white shadow-inner flex flex-col gap-2">
          <div className="flex items-center justify-between border-b border-[#eff4ff] pb-2">
            <div className="flex items-center gap-1.5">
              <img src={ASSETS.universityCrest} alt="Crest" className="h-5 w-auto" />
              <span className="text-[10px] font-bold text-[#0058be] uppercase">Oxford Institutional Verification</span>
            </div>
            <span className="text-[10px] text-[#009969] font-bold bg-[#4edea3]/20 px-2 py-0.5 rounded-full">
              CERTIFIED DIGITALLY
            </span>
          </div>

          <div className="text-xs text-[#0b1c30] space-y-1 py-2">
            <p className="font-semibold text-xs">{request.documentNote}</p>
            <p className="text-[#44474d] text-xs">Dates: {request.dateRange}</p>
            <p className="text-[#44474d] text-xs leading-relaxed">
              Official request filed for exemption from regular lecture participation on account of certified academic, medical, or athletic representation.
            </p>
          </div>

          <div className="flex items-center justify-between text-[10px] text-[#75777e] pt-2 border-t border-[#eff4ff]">
            <span>Doc ID: #OXF-CERT-2025</span>
            <span>Cryptographic Seal: SHA-256 Valid</span>
          </div>
        </div>

        {/* Approve / Decline Footer */}
        <div className="flex items-center justify-end gap-2 pt-1">
          <button
            onClick={() => {
              onDecline(request.id);
              onClose();
            }}
            className="h-10 px-4 rounded-xl bg-[#ffdad6] text-[#ba1a1a] hover:bg-[#ffdad6]/80 text-xs font-semibold"
            type="button"
          >
            Decline
          </button>
          <button
            onClick={() => {
              onApprove(request.id);
              onClose();
            }}
            className="h-10 px-5 rounded-xl bg-[#000412] hover:bg-[#0f1e36] text-white text-xs font-bold flex items-center gap-1.5 shadow-md"
            type="button"
          >
            <span className="material-symbols-outlined text-[16px]">check</span>
            Approve Exemption
          </button>
        </div>
      </div>
    </div>
  );
};
