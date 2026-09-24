import React, { useState } from 'react';
import { ASSETS } from '../mockData';
import { TabType } from '../types';

interface IdentityPhotoViewProps {
  onBack: () => void;
  onSelectTab: (tab: TabType) => void;
  onShowToast: (msg: string, icon?: string) => void;
}

export const IdentityPhotoView: React.FC<IdentityPhotoViewProps> = ({
  onBack,
  onShowToast,
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState(ASSETS.sarahBadgePhoto);
  const [showGuidelinesHelp, setShowGuidelinesHelp] = useState(false);
  const [showCardFlip, setShowCardFlip] = useState(false);

  const handleTakePhoto = () => {
    onShowToast('Biometric sensor calibrating... Portrait captured!', 'photo_camera');
  };

  const handleUploadFile = () => {
    // Simulated file pick
    onShowToast('Passport-standard JPEG portrait verified (1024x1024, 1.2 MB)', 'file_upload');
  };

  const handleSubmitApproval = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      onShowToast('Biometrics and photo submitted to Oxford Registrar.', 'verified');
    }, 1200);
  };

  return (
    <div className="flex flex-col w-full px-4 pb-28 pt-2 space-y-4">
      {/* Top Navigation Context */}
      <div className="flex items-center justify-between pt-1">
        <div className="flex items-center gap-2.5">
          <button
            aria-label="Go Back"
            onClick={onBack}
            className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#eff4ff] hover:bg-[#dce9ff] transition-colors text-[#0b1c30]"
            type="button"
          >
            <span className="material-symbols-outlined text-[20px]">arrow_back</span>
          </button>
          <div className="flex flex-col">
            <span className="text-base font-bold text-[#0b1c30] leading-tight">Identity & ID Photo</span>
            <span className="text-xs text-[#75777e]">Biometrics & Campus Access Badge</span>
          </div>
        </div>

        <button
          aria-label="Photo Guidelines Help"
          onClick={() => setShowGuidelinesHelp(true)}
          className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#eff4ff] hover:bg-[#dce9ff] transition-colors text-[#0b1c30]"
          type="button"
        >
          <span className="material-symbols-outlined text-[20px]">help_outline</span>
        </button>
      </div>

      {/* Status Alert Banner */}
      <div className="p-3.5 rounded-2xl bg-[#eff4ff] border border-[#dce9ff] shadow-sm flex items-start gap-3">
        <div className="w-8 h-8 rounded-xl bg-[#0058be] flex items-center justify-center text-white shrink-0 mt-0.5">
          <span className="material-symbols-outlined text-[18px]">verified_user</span>
        </div>
        <div className="flex flex-col flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2 mb-0.5">
            <span className="text-xs font-bold text-[#0b1c30] truncate">Official ID Card & Biometrics</span>
            <span className="px-2 py-0.5 rounded-full bg-[#ffdad6] text-[#ba1a1a] text-[10px] font-bold whitespace-nowrap">
              Due Nov 15
            </span>
          </div>
          <p className="text-xs text-[#44474d] leading-snug">
            Annual credential re-verification pending. Upload a compliant portrait for automated campus turnstile synchronization.
          </p>
        </div>
      </div>

      {/* Live Photo Preview Box & AI Alignment */}
      <div className="flex flex-col items-center bg-white rounded-2xl p-4 shadow-sm border border-[#dce9ff]/60">
        <div className="relative w-48 h-48 rounded-2xl overflow-hidden shadow-md bg-[#eff4ff] mb-3">
          {/* Student Photo */}
          <img
            alt="Sarah J. Adams"
            className="w-full h-full object-cover"
            src={currentPhoto}
          />

          {/* Biometric Face Framing Overlay */}
          <div className="absolute inset-0 pointer-events-none flex flex-col items-center justify-center p-2 bg-[#000412]/5">
            <svg className="w-full h-full text-[#0058be]" fill="none" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              {/* Ellipse target dashed */}
              <ellipse cx="50" cy="46" opacity="0.85" rx="26" ry="34" stroke="currentColor" strokeDasharray="3 3" strokeWidth="1.5" />
              {/* Corner framing tick marks */}
              <path d="M 20 28 L 20 20 L 28 20" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
              <path d="M 80 28 L 80 20 L 72 20" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
              <path d="M 20 72 L 20 80 L 28 80" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
              <path d="M 80 72 L 80 80 L 72 80" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
              {/* Center eye-level guide */}
              <line opacity="0.7" stroke="currentColor" strokeDasharray="2 2" strokeWidth="1" x1="38" x2="62" y1="42" y2="42" />
            </svg>
          </div>

          {/* Floating Badge for Verification */}
          <div className="absolute bottom-2 left-2 right-2 px-2 py-1 rounded-xl bg-white/90 backdrop-blur-md flex items-center justify-center gap-1.5 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#4edea3] shrink-0" />
            <span className="text-[11px] font-bold text-[#0b1c30] truncate">Face Centered & Clear</span>
          </div>
        </div>

        {/* Student Metadata */}
        <div className="flex flex-col items-center mb-3 text-center">
          <span className="text-base font-bold text-[#0b1c30]">Sarah J. Adams</span>
          <span className="text-[11px] font-semibold text-[#75777e] uppercase tracking-wider">
            Roll No: CS21B042 • Undergraduate
          </span>
        </div>

        {/* Live AI Quality Status Pill */}
        <div className="w-full mb-3 p-2.5 rounded-xl bg-[#eff4ff] flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[#0058be] text-[18px]">auto_awesome</span>
            <span className="text-xs font-bold text-[#0b1c30]">AI Photo Check</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="px-2 py-0.5 rounded-full bg-[#dce9ff] text-[#0058be] text-[10px] font-bold">
              98% Clarity
            </span>
            <span className="px-2 py-0.5 rounded-full bg-white text-[#44474d] text-[10px] font-bold">
              Neutral BG
            </span>
          </div>
        </div>

        {/* Quick Action Buttons */}
        <div className="grid grid-cols-2 gap-2.5 w-full">
          <button
            onClick={handleTakePhoto}
            className="flex items-center justify-center gap-1.5 h-10 px-3 rounded-xl bg-[#000412] text-white text-xs font-bold hover:bg-[#0f1e36] transition-colors shadow-sm active:scale-95"
            type="button"
          >
            <span className="material-symbols-outlined text-[18px]">photo_camera</span>
            <span>Take Photo</span>
          </button>
          <button
            onClick={handleUploadFile}
            className="flex items-center justify-center gap-1.5 h-10 px-3 rounded-xl bg-[#eff4ff] hover:bg-[#dce9ff] text-[#0b1c30] text-xs font-bold transition-colors shadow-sm active:scale-95"
            type="button"
          >
            <span className="material-symbols-outlined text-[18px]">upload_file</span>
            <span>Upload File</span>
          </button>
        </div>
      </div>

      {/* Institutional Photo Guidelines Checklist */}
      <div className="flex flex-col bg-white rounded-2xl p-4 shadow-sm border border-[#dce9ff]/60">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[#0058be] text-[20px]">rule</span>
            <span className="text-sm font-bold text-[#0b1c30]">Photo Specifications</span>
          </div>
          <span className="text-xs text-[#75777e] font-semibold">4/4 Met</span>
        </div>

        <div className="flex flex-col gap-2">
          {[
            { title: 'Neutral Plain Background', desc: 'Off-white, white, or uniform light tone' },
            { title: 'Unobstructed Facial Features', desc: 'Both eyes open, no tinted glasses or headgear' },
            { title: 'Centered Natural Pose', desc: 'Direct forward gaze, relaxed natural smile' },
            { title: 'High Resolution Digital Standards', desc: 'Min 600×600 px, under 5MB (JPEG or PNG)' },
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-3 p-2.5 rounded-xl bg-[#eff4ff]">
              <div className="w-5 h-5 rounded-full bg-[#0058be] text-white flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[13px]">check</span>
              </div>
              <div className="flex flex-col flex-1 min-w-0">
                <span className="text-xs font-bold text-[#0b1c30]">{item.title}</span>
                <span className="text-[11px] text-[#75777e] truncate">{item.desc}</span>
              </div>
              <span className="text-[11px] text-[#0058be] font-bold">Valid</span>
            </div>
          ))}
        </div>
      </div>

      {/* Digital Campus Smart Card Live Preview */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between px-1">
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[#0058be] text-[20px]">badge</span>
            <span className="text-sm font-bold text-[#0b1c30]">Digital Badge Rendering</span>
          </div>
          <span className="text-xs font-bold text-[#0058be] flex items-center gap-1">
            <span className="material-symbols-outlined text-[14px]">contactless</span>
            NFC Active
          </span>
        </div>

        {/* Campus Smart Card Surface */}
        <div
          onClick={() => setShowCardFlip(!showCardFlip)}
          className="relative w-full rounded-2xl bg-gradient-to-br from-[#000412] via-[#0f1e36] to-[#0058be] p-4 text-white shadow-xl overflow-hidden cursor-pointer active:scale-[0.99] transition-all"
        >
          {/* Subtle Crest Watermark Background */}
          <div className="absolute -right-8 -bottom-10 w-48 h-48 rounded-full bg-white/5 pointer-events-none blur-xl" />
          <div className="absolute -left-6 -top-8 w-32 h-32 rounded-full bg-[#2170e4]/20 pointer-events-none blur-lg" />

          {/* Card Header with Crest & College Title */}
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <div className="flex items-center gap-2">
              <img
                alt="Oxford Collegiate Logo"
                className="h-7 w-7 object-contain rounded-md bg-white p-0.5 shadow-sm"
                src={ASSETS.badgeCrest}
              />
              <div className="flex flex-col">
                <span className="text-[11px] text-white font-bold uppercase tracking-wider leading-none">
                  Oxford Collegiate
                </span>
                <span className="text-[10px] text-[#d7e3ff] leading-tight">
                  Student Identity Credential
                </span>
              </div>
            </div>
            <div className="flex items-center gap-1 opacity-80">
              <span className="material-symbols-outlined text-[20px]">contactless</span>
            </div>
          </div>

          {/* Card Body with Avatar and Student Identity */}
          <div className="flex gap-3 pt-3 items-center">
            <div className="w-18 h-22 rounded-xl overflow-hidden bg-white shrink-0 shadow-md">
              <img
                alt="Sarah J. Adams ID Photo"
                className="w-full h-full object-cover"
                src={currentPhoto}
              />
            </div>
            <div className="flex flex-col flex-1 min-w-0">
              <span className="text-base font-bold text-white truncate leading-snug">
                Sarah J. Adams
              </span>
              <span className="text-xs text-[#d8e2ff] truncate mb-1">
                B.Tech Computer Science & AI
              </span>
              <div className="grid grid-cols-2 gap-2 pt-1.5 border-t border-white/10">
                <div className="flex flex-col">
                  <span className="text-[9px] text-[#d7e3ff] uppercase leading-none">Roll Number</span>
                  <span className="text-xs font-bold text-white font-mono leading-tight mt-0.5">CS21B042</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] text-[#d7e3ff] uppercase leading-none">Valid Thru</span>
                  <span className="text-xs font-bold text-white font-mono leading-tight mt-0.5">07 / 2026</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card Footer with Barcode Strip */}
          <div className="flex items-center justify-between mt-3 pt-2 border-t border-white/10">
            <div className="flex items-center gap-1 h-5">
              {/* Scalable Barcode SVG */}
              <svg className="h-4 w-28 text-white opacity-80" fill="currentColor" viewBox="0 0 120 20">
                <rect height="20" width="3" x="0" y="0" />
                <rect height="20" width="1" x="5" y="0" />
                <rect height="20" width="4" x="8" y="0" />
                <rect height="20" width="2" x="15" y="0" />
                <rect height="20" width="1" x="20" y="0" />
                <rect height="20" width="3" x="23" y="0" />
                <rect height="20" width="5" x="28" y="0" />
                <rect height="20" width="1" x="35" y="0" />
                <rect height="20" width="2" x="39" y="0" />
                <rect height="20" width="4" x="44" y="0" />
                <rect height="20" width="1" x="51" y="0" />
                <rect height="20" width="3" x="54" y="0" />
                <rect height="20" width="2" x="60" y="0" />
                <rect height="20" width="4" x="65" y="0" />
                <rect height="20" width="1" x="71" y="0" />
                <rect height="20" width="3" x="74" y="0" />
                <rect height="20" width="2" x="80" y="0" />
                <rect height="20" width="4" x="85" y="0" />
                <rect height="20" width="1" x="91" y="0" />
                <rect height="20" width="5" x="94" y="0" />
                <rect height="20" width="2" x="101" y="0" />
                <rect height="20" width="3" x="105" y="0" />
                <rect height="20" width="2" x="110" y="0" />
                <rect height="20" width="4" x="114" y="0" />
              </svg>
            </div>
            <span className="text-[11px] text-[#d7e3ff] tracking-wider font-mono">RFID : 8841-A9</span>
          </div>
        </div>

        <p className="text-xs text-[#75777e] px-1 text-center">
          Live render of your physical RFID smart badge and digital Apple / Google Wallet pass.
        </p>
      </div>

      {/* Supporting Document Accordion */}
      <div className="flex flex-col bg-white rounded-2xl p-4 shadow-sm border border-[#dce9ff]/60">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-[#e5eeff] flex items-center justify-center text-[#0058be]">
              <span className="material-symbols-outlined text-[18px]">badge</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-bold text-[#0b1c30]">Supporting Identity Document</span>
              <span className="text-[11px] text-[#75777e]">National ID or Passport verification</span>
            </div>
          </div>
          <span className="material-symbols-outlined text-[#75777e] text-[20px]">expand_more</span>
        </div>

        <div className="flex items-center justify-between mt-3 pt-2 bg-[#eff4ff] p-2.5 rounded-xl">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#0058be] text-[20px]">task_alt</span>
            <div className="flex flex-col">
              <span className="text-xs font-bold text-[#0b1c30]">Passport Document (PDF)</span>
              <span className="text-[11px] text-[#75777e]">Verified on file • Ref: #GOV-9821</span>
            </div>
          </div>
          <span className="text-xs font-bold text-[#009969]">Verified</span>
        </div>
      </div>

      {/* Submission Disclaimer */}
      <div className="flex items-start gap-2 px-1">
        <span className="material-symbols-outlined text-[#75777e] text-[16px] shrink-0 mt-0.5">info</span>
        <p className="text-xs text-[#75777e]">
          Upon Registrar approval, this portrait is automatically synchronized with Oxford campus turnstiles, attendance kiosks, examinations, and library access controllers.
        </p>
      </div>

      {/* Primary Sticky Actions */}
      <div className="flex flex-col gap-2 pt-1">
        <button
          onClick={handleSubmitApproval}
          disabled={isSubmitting || isSubmitted}
          className={`w-full h-12 flex items-center justify-center gap-2 rounded-xl text-white font-bold text-xs shadow-md transition-all active:scale-[0.99] ${
            isSubmitted
              ? 'bg-[#009969]'
              : isSubmitting
              ? 'bg-[#0f1e36]'
              : 'bg-[#000412] hover:bg-[#0f1e36]'
          }`}
          type="button"
        >
          {isSubmitting ? (
            <>
              <span className="material-symbols-outlined text-[18px] animate-spin">progress_activity</span>
              <span>Transmitting Biometrics...</span>
            </>
          ) : isSubmitted ? (
            <>
              <span className="material-symbols-outlined text-[18px]">check_circle</span>
              <span>Submitted for Registrar Review</span>
            </>
          ) : (
            <>
              <span className="material-symbols-outlined text-[18px]">send_and_archive</span>
              <span>Save & Submit for Registrar Approval</span>
            </>
          )}
        </button>

        <button
          onClick={onBack}
          className="w-full h-9 flex items-center justify-center text-xs font-semibold text-[#75777e] hover:text-[#0b1c30] transition-colors"
          type="button"
        >
          Discard Changes
        </button>
      </div>

      {/* Photo Guidelines Help Dialog */}
      {showGuidelinesHelp && (
        <div className="fixed inset-0 z-50 bg-[#0b1c30]/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-sm w-full p-5 shadow-2xl flex flex-col gap-3 animate-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between border-b border-[#eff4ff] pb-2">
              <h3 className="text-sm font-bold text-[#0b1c30]">Portrait Guidelines</h3>
              <button
                onClick={() => setShowGuidelinesHelp(false)}
                className="w-7 h-7 rounded-full bg-[#eff4ff] flex items-center justify-center text-[#44474d]"
              >
                <span className="material-symbols-outlined text-[16px]">close</span>
              </button>
            </div>
            <p className="text-xs text-[#44474d] leading-relaxed">
              To pass automated campus turnstile gates and library RFID authentication:
            </p>
            <ul className="text-xs text-[#44474d] space-y-1.5 list-disc pl-4">
              <li>Ensure even natural lighting without shadows across face</li>
              <li>Neutral off-white or plain background</li>
              <li>Eye level aligned with dashed center crosshair</li>
              <li>No hats, scarves covering face, or dark sunglasses</li>
            </ul>
            <button
              onClick={() => setShowGuidelinesHelp(false)}
              className="w-full py-2.5 rounded-xl bg-[#0058be] text-white text-xs font-bold mt-2"
            >
              Got It
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
