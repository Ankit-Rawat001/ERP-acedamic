import React, { useState, useEffect } from 'react';
import { ASSETS } from '../mockData';

interface ClassroomVerificationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onShowToast: (msg: string, icon?: string) => void;
}

export const ClassroomVerificationModal: React.FC<ClassroomVerificationModalProps> = ({
  isOpen,
  onClose,
  onShowToast,
}) => {
  const [activeTab, setActiveTab] = useState<'qr' | 'ble'>('qr');
  const [timerSeconds, setTimerSeconds] = useState(14);
  const [copied, setCopied] = useState(false);
  const [verifying, setVerifying] = useState(false);
  const [verified, setVerified] = useState(false);

  // Dynamic countdown timer micro-interaction
  useEffect(() => {
    if (!isOpen) return;
    const interval = setInterval(() => {
      setTimerSeconds((prev) => (prev <= 1 ? 15 : prev - 1));
    }, 1000);
    return () => clearInterval(interval);
  }, [isOpen]);

  if (!isOpen) return null;

  const handleCopyPin = () => {
    setCopied(true);
    onShowToast('Session PIN copied to clipboard: 842-913', 'content_copy');
    setTimeout(() => setCopied(false), 2000);
  };

  const handleConfirmFaceId = () => {
    setVerifying(true);
    setTimeout(() => {
      setVerifying(false);
      setVerified(true);
      onShowToast('Attendance Verified via Face ID & Hall 402 Beacon!', 'verified');
      setTimeout(() => {
        onClose();
        setVerified(false);
      }, 1500);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#0b1c30]/60 backdrop-blur-sm flex flex-col justify-end sm:justify-center items-center p-0 sm:p-4 animate-in fade-in duration-200">
      <div className="w-full max-w-md bg-white rounded-t-3xl sm:rounded-2xl shadow-2xl p-5 max-h-[92vh] overflow-y-auto no-scrollbar flex flex-col gap-4 animate-in slide-in-from-bottom duration-300">
        {/* Top Handle & Dismiss */}
        <div className="flex items-center justify-between w-full">
          <div className="w-8" />
          <div className="w-10 h-1 bg-[#dce9ff] rounded-full" />
          <button
            aria-label="Close modal"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#eff4ff] flex items-center justify-center text-[#44474d] hover:text-[#0b1c30] transition-colors"
            type="button"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        {/* Header */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#e5eeff] text-[#009969] text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#4edea3] animate-pulse" />
              Live Session Attendance
            </span>
            <span className="text-[#75777e] text-xs font-medium">Session #14</span>
          </div>
          <h2 className="text-xl font-bold text-[#0b1c30] tracking-tight">Classroom Verification</h2>
          <p className="text-xs text-[#44474d]">
            CS301 • Distributed Systems • Hall 402 • Prof. Julian Vance
          </p>
        </div>

        {/* Segmented Control Tabs */}
        <div className="grid grid-cols-2 p-1 bg-[#e5eeff] rounded-xl text-center text-xs font-semibold">
          <button
            onClick={() => setActiveTab('qr')}
            className={`py-2 rounded-lg transition-all flex items-center justify-center gap-1.5 ${
              activeTab === 'qr'
                ? 'bg-white shadow-sm text-[#0b1c30]'
                : 'text-[#44474d] hover:text-[#0b1c30]'
            }`}
            type="button"
          >
            <span className="material-symbols-outlined text-[16px] text-[#0058be]">qr_code_scanner</span>
            QR Code (Dynamic)
          </button>
          <button
            onClick={() => setActiveTab('ble')}
            className={`py-2 rounded-lg transition-all flex items-center justify-center gap-1.5 ${
              activeTab === 'ble'
                ? 'bg-white shadow-sm text-[#0b1c30]'
                : 'text-[#44474d] hover:text-[#0b1c30]'
            }`}
            type="button"
          >
            <span className="material-symbols-outlined text-[16px]">bluetooth_searching</span>
            Bluetooth (BLE)
          </button>
        </div>

        {activeTab === 'qr' ? (
          /* Dynamic QR View Container */
          <div className="flex flex-col items-center gap-3 w-full">
            {/* High Contrast QR Box with Scanner Brackets */}
            <div className="relative p-5 bg-[#eff4ff] rounded-2xl flex flex-col items-center justify-center w-full max-w-[270px] shadow-sm">
              {/* Framing Brackets */}
              <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[#000412]" />
              <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[#000412]" />
              <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-[#000412]" />
              <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[#000412]" />

              {/* Synthetic Crisp High-Density Academic QR (Inline Scalable SVG) */}
              <div className="bg-white p-3 rounded-xl shadow-sm">
                <svg className="w-44 h-44" fill="none" viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg">
                  {/* Corner Finder 1 */}
                  <rect fill="#0f1e36" height="40" rx="4" width="40" x="10" y="10" />
                  <rect fill="#ffffff" height="24" rx="2" width="24" x="18" y="18" />
                  <rect fill="#0f1e36" height="12" rx="1" width="12" x="24" y="24" />
                  {/* Corner Finder 2 */}
                  <rect fill="#0f1e36" height="40" rx="4" width="40" x="110" y="10" />
                  <rect fill="#ffffff" height="24" rx="2" width="24" x="118" y="18" />
                  <rect fill="#0f1e36" height="12" rx="1" width="12" x="124" y="24" />
                  {/* Corner Finder 3 */}
                  <rect fill="#0f1e36" height="40" rx="4" width="40" x="10" y="110" />
                  <rect fill="#ffffff" height="24" rx="2" width="24" x="18" y="118" />
                  <rect fill="#0f1e36" height="12" rx="1" width="12" x="24" y="124" />
                  {/* Central Rotating Security Watermark */}
                  <circle cx="80" cy="80" fill="#2170e4" r="14" />
                  <path d="M75 80L78.5 83.5L85 77" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
                  {/* QR Encoded Binary Clusters */}
                  <rect fill="#0f1e36" height="6" width="6" x="58" y="14" />
                  <rect fill="#0f1e36" height="6" width="6" x="70" y="14" />
                  <rect fill="#0f1e36" height="6" width="6" x="82" y="14" />
                  <rect fill="#0f1e36" height="6" width="6" x="94" y="14" />
                  <rect fill="#0f1e36" height="12" width="6" x="58" y="26" />
                  <rect fill="#0f1e36" height="6" width="12" x="74" y="26" />
                  <rect fill="#0f1e36" height="12" width="6" x="94" y="26" />
                  <rect fill="#0f1e36" height="12" width="6" x="14" y="58" />
                  <rect fill="#0f1e36" height="6" width="12" x="26" y="58" />
                  <rect fill="#0f1e36" height="6" width="6" x="44" y="58" />
                  <rect fill="#0f1e36" height="8" width="8" x="58" y="58" />
                  <rect fill="#0f1e36" height="8" width="8" x="96" y="58" />
                  <rect fill="#0f1e36" height="12" width="6" x="114" y="58" />
                  <rect fill="#0f1e36" height="6" width="12" x="130" y="58" />
                  <rect fill="#0f1e36" height="6" width="8" x="14" y="80" />
                  <rect fill="#0f1e36" height="12" width="6" x="30" y="78" />
                  <rect fill="#0f1e36" height="6" width="6" x="44" y="82" />
                  <rect fill="#0f1e36" height="6" width="8" x="110" y="82" />
                  <rect fill="#0f1e36" height="12" width="6" x="126" y="76" />
                  <rect fill="#0f1e36" height="6" width="6" x="140" y="82" />
                  <rect fill="#0f1e36" height="8" width="8" x="58" y="96" />
                  <rect fill="#0f1e36" height="6" width="12" x="74" y="104" />
                  <rect fill="#0f1e36" height="8" width="8" x="94" y="96" />
                  <rect fill="#0f1e36" height="14" width="6" x="58" y="118" />
                  <rect fill="#0f1e36" height="6" width="14" x="70" y="122" />
                  <rect fill="#0f1e36" height="14" width="8" x="90" y="118" />
                  <rect fill="#0f1e36" height="12" width="6" x="110" y="110" />
                  <rect fill="#0f1e36" height="6" width="12" x="124" y="114" />
                  <rect fill="#0f1e36" height="8" width="8" x="142" y="110" />
                  <rect fill="#0f1e36" height="6" width="14" x="118" y="132" />
                  <rect fill="#0f1e36" height="14" width="8" x="138" y="128" />
                </svg>
              </div>

              {/* Dynamic Watermark Pulse */}
              <div className="flex items-center gap-1.5 mt-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0058be] animate-ping" />
                <span className="text-[11px] font-semibold text-[#0058be] tracking-wider uppercase">
                  Rolling Key Active
                </span>
              </div>
            </div>

            {/* Refresh Countdown Pill */}
            <div className="flex items-center gap-2 px-3 py-1 bg-[#e5eeff] rounded-full text-[#44474d] text-xs">
              <span className="material-symbols-outlined text-[16px] animate-spin text-[#0058be]">sync</span>
              <span>Dynamic QR refreshes in <strong className="text-[#0b1c30] tnum">{timerSeconds}s</strong></span>
            </div>

            {/* Backup PIN Box */}
            <div className="flex items-center justify-between w-full bg-[#eff4ff] rounded-xl px-4 py-2.5">
              <div className="flex flex-col">
                <span className="text-[11px] text-[#44474d] font-medium">Backup Class Session PIN</span>
                <span className="text-lg font-bold tracking-widest text-[#000412] font-mono">8 4 2 - 9 1 3</span>
              </div>
              <button
                onClick={handleCopyPin}
                className="flex items-center gap-1 px-3 py-1.5 bg-white hover:bg-[#e5eeff] rounded-lg text-xs font-semibold text-[#0058be] shadow-sm transition-all active:scale-95"
                type="button"
              >
                <span className="material-symbols-outlined text-[16px]">
                  {copied ? 'done' : 'content_copy'}
                </span>
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
          </div>
        ) : (
          /* BLE Beacon Radar View */
          <div className="flex flex-col items-center justify-center p-6 bg-[#eff4ff] rounded-2xl gap-3">
            <div className="relative w-32 h-32 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border border-[#0058be]/30 animate-ping" />
              <div className="absolute inset-4 rounded-full border border-[#0058be]/50" />
              <div className="w-16 h-16 rounded-full bg-[#0058be] text-white flex items-center justify-center shadow-lg">
                <span className="material-symbols-outlined text-[28px] animate-pulse">bluetooth</span>
              </div>
            </div>
            <div className="text-center">
              <div className="text-xs font-bold text-[#0b1c30]">Hall 402 Central Beacon Found</div>
              <div className="text-[11px] text-[#44474d] mt-0.5">Proximity: 0.8m · Signal: -52 dBm (Optimal)</div>
            </div>
          </div>
        )}

        {/* Real-Time Signals & Anti-Proxy Guard */}
        <div className="flex flex-col gap-2 bg-[#eff4ff] rounded-xl p-3 text-xs">
          <div className="flex items-center justify-between">
            <span className="font-semibold text-[#0b1c30]">Physical Presence Signals</span>
            <span className="px-2 py-0.5 rounded-full bg-[#e5eeff] text-[#009969] text-[11px] font-semibold flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">verified</span> Validated
            </span>
          </div>

          <div className="flex items-center justify-between text-[#44474d]">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px] text-[#0058be]">cell_tower</span>
              <span>Hall 402 BLE Beacon</span>
            </div>
            <span className="font-mono text-[#0b1c30] font-semibold">-52 dBm (Strong)</span>
          </div>

          <div className="flex items-center justify-between text-[#44474d]">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px] text-[#009969]">location_on</span>
              <span>Geo-Fence Boundary</span>
            </div>
            <span className="text-[#009969] font-medium">Inside Perimeter (±1.5m)</span>
          </div>

          <div className="flex items-center justify-between text-[#44474d]">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px] text-[#75777e]">wifi_protected_setup</span>
              <span>Campus Network</span>
            </div>
            <span className="text-[#0b1c30] font-medium">Campus-Secure-WPA3</span>
          </div>
        </div>

        {/* Live Roster Status */}
        <div className="flex flex-col gap-1 bg-[#eff4ff] rounded-xl p-3">
          <div className="flex items-center justify-between text-xs">
            <span className="font-semibold text-[#0b1c30]">Roster Status</span>
            <span className="font-bold text-[#0f1e36]">48 / 62 Students (77%)</span>
          </div>

          <div className="w-full bg-[#dce9ff] h-2 rounded-full overflow-hidden my-1">
            <div className="bg-[#0058be] h-full rounded-full transition-all duration-500" style={{ width: '77%' }} />
          </div>

          <div className="flex items-center justify-between mt-1">
            <div className="flex items-center -space-x-2 overflow-hidden">
              <img
                className="inline-block h-6 w-6 rounded-full ring-2 ring-white object-cover"
                alt="Sarah Adams"
                src={ASSETS.sarahAvatar}
              />
              <img
                className="inline-block h-6 w-6 rounded-full ring-2 ring-white object-cover"
                alt="Alex Rivera"
                src={ASSETS.alexRivera}
              />
              <img
                className="inline-block h-6 w-6 rounded-full ring-2 ring-white object-cover"
                alt="Maya Chen"
                src={ASSETS.mayaChen}
              />
              <div className="h-6 w-6 rounded-full bg-[#dce9ff] ring-2 ring-white flex items-center justify-center text-[10px] font-bold text-[#44474d]">
                +45
              </div>
            </div>
            <span className="text-[11px] text-[#44474d] flex items-center gap-1 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4edea3]" />
              Sarah verified 12s ago
            </span>
          </div>
        </div>

        {/* Main Action Buttons */}
        <div className="flex flex-col gap-2 mt-1">
          <button
            onClick={handleConfirmFaceId}
            disabled={verifying || verified}
            className={`w-full h-12 rounded-xl text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-md transition-all active:scale-[0.99] ${
              verified
                ? 'bg-[#009969]'
                : verifying
                ? 'bg-[#213145]'
                : 'bg-[#0f1e36] hover:bg-[#213145]'
            }`}
            type="button"
          >
            {verifying ? (
              <>
                <span className="material-symbols-outlined text-[20px] animate-spin">progress_activity</span>
                <span>Verifying Biometrics...</span>
              </>
            ) : verified ? (
              <>
                <span className="material-symbols-outlined text-[20px]">check_circle</span>
                <span>Attendance Confirmed!</span>
              </>
            ) : (
              <>
                <span className="material-symbols-outlined text-[20px]">fingerprint</span>
                <span>Confirm Check-in with Face ID</span>
              </>
            )}
          </button>

          <button
            onClick={() => onShowToast('Manual roll call assistance request notified to Teaching Assistant.', 'support')}
            className="w-full h-10 bg-[#eff4ff] hover:bg-[#e5eeff] active:scale-[0.99] text-[#0b1c30] text-xs font-semibold rounded-xl flex items-center justify-center gap-1.5 transition-all"
            type="button"
          >
            <span className="material-symbols-outlined text-[16px] text-[#44474d]">contact_support</span>
            <span>Request Manual Roll Call</span>
          </button>
        </div>

        {/* Security Footnote */}
        <div className="flex items-center justify-center gap-1 text-[11px] text-[#75777e] text-center pt-1">
          <span className="material-symbols-outlined text-[14px] text-[#0058be]">gshield</span>
          <span>Oxford Academic Integrity Protocol • Anti-Spoofing Enforced</span>
        </div>
      </div>
    </div>
  );
};
