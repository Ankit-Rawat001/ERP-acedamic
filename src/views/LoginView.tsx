import React, { useState } from 'react';
import { ASSETS } from '../mockData';
import { TabType, UserRole } from '../types';

interface LoginViewProps {
  onLoginSuccess: (role: UserRole, targetTab: TabType) => void;
  onShowToast: (msg: string, icon?: string) => void;
}

export const LoginView: React.FC<LoginViewProps> = ({ onLoginSuccess, onShowToast }) => {
  const [role, setRole] = useState<UserRole>('student');
  const [erpId, setErpId] = useState('CS21B042');
  const [password, setPassword] = useState('oxfordSuperKey2024!');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberDevice, setRememberDevice] = useState(true);
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [authSuccess, setAuthSuccess] = useState(false);

  const handleRoleChange = (newRole: UserRole) => {
    setRole(newRole);
    if (newRole === 'student') {
      setErpId('CS21B042');
    } else if (newRole === 'faculty') {
      setErpId('FAC-ENG-8819');
    } else {
      setErpId('ADM-REG-004');
    }
  };

  const handleSignIn = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setIsAuthenticating(true);

    setTimeout(() => {
      setIsAuthenticating(false);
      setAuthSuccess(true);
      onShowToast(`Session authenticated for ${erpId}. Redirecting...`, 'verified');

      setTimeout(() => {
        if (role === 'faculty') {
          onLoginSuccess('faculty', 'faculty-console');
        } else {
          onLoginSuccess('student', 'student-hub');
        }
      }, 700);
    }, 1100);
  };

  const handleBiometricLogin = () => {
    setIsAuthenticating(true);
    setTimeout(() => {
      setIsAuthenticating(false);
      setAuthSuccess(true);
      onShowToast('Biometric passkey confirmed. Welcome back, Sarah!', 'fingerprint');
      setTimeout(() => {
        onLoginSuccess('student', 'student-hub');
      }, 700);
    }, 900);
  };

  return (
    <div className="flex flex-col w-full min-h-screen bg-[#f8f9ff] px-4 py-8 items-center justify-center max-w-md mx-auto">
      {/* Top Branding Crest & University Title */}
      <div className="flex flex-col items-center text-center w-full">
        <div className="relative mb-3">
          <div className="w-20 h-20 rounded-full shadow-md bg-white p-1.5 flex items-center justify-center ring-1 ring-[#dce9ff]">
            <img
              alt="Oxford Collegiate Seal"
              className="w-full h-full object-contain rounded-full"
              src={ASSETS.crestSeal}
            />
          </div>
          <div className="absolute -bottom-1 -right-1 bg-[#009969] text-white rounded-full w-5 h-5 flex items-center justify-center shadow-sm">
            <span className="material-symbols-outlined text-[13px]">verified</span>
          </div>
        </div>

        <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#eff4ff] text-[#44474d] mb-2 shadow-xs">
          <span className="material-symbols-outlined text-[13px] text-[#009969]">lock</span>
          <span className="text-[11px] font-semibold">Enterprise SSL 256-bit Encrypted</span>
        </div>

        <h1 className="text-2xl font-extrabold text-[#0b1c30] tracking-tight">Oxford Collegiate</h1>
        <p className="text-xs text-[#75777e] mt-0.5">Integrated Campus ERP & Academic Portal</p>
      </div>

      {/* Role Switcher (Segmented Tabs) */}
      <div className="w-full mt-5">
        <div className="bg-[#eff4ff] p-1 rounded-2xl flex items-center shadow-xs border border-[#dce9ff]/60">
          <button
            onClick={() => handleRoleChange('student')}
            className={`flex-1 py-2 px-2 rounded-xl text-xs font-bold transition-all text-center flex items-center justify-center gap-1 ${
              role === 'student'
                ? 'bg-white text-[#0058be] shadow-sm'
                : 'text-[#44474d] hover:text-[#0b1c30]'
            }`}
            type="button"
          >
            <span className="material-symbols-outlined text-[16px]">school</span>
            <span>Student</span>
          </button>
          <button
            onClick={() => handleRoleChange('faculty')}
            className={`flex-1 py-2 px-2 rounded-xl text-xs font-bold transition-all text-center flex items-center justify-center gap-1 ${
              role === 'faculty'
                ? 'bg-white text-[#0058be] shadow-sm'
                : 'text-[#44474d] hover:text-[#0b1c30]'
            }`}
            type="button"
          >
            <span className="material-symbols-outlined text-[16px]">badge</span>
            <span>Faculty</span>
          </button>
          <button
            onClick={() => handleRoleChange('admin')}
            className={`flex-1 py-2 px-2 rounded-xl text-xs font-bold transition-all text-center flex items-center justify-center gap-1 ${
              role === 'admin'
                ? 'bg-white text-[#0058be] shadow-sm'
                : 'text-[#44474d] hover:text-[#0b1c30]'
            }`}
            type="button"
          >
            <span className="material-symbols-outlined text-[16px]">admin_panel_settings</span>
            <span>Admin</span>
          </button>
        </div>
        <p className="text-[11px] text-center text-[#75777e] mt-2 font-medium">
          {role === 'student' && 'Students: Use University Roll Number or Enrolment ID'}
          {role === 'faculty' && 'Faculty: Enter 6-digit Department Staff Code or CID'}
          {role === 'admin' && 'Campus Admins: Institutional SmartKey or Security YubiKey'}
        </p>
      </div>

      {/* Credential Input Form Card */}
      <form
        onSubmit={handleSignIn}
        className="w-full mt-3 bg-white rounded-2xl p-4 shadow-sm border border-[#dce9ff]/60 flex flex-col gap-3.5"
      >
        {/* ERP ID Field */}
        <div className="flex flex-col gap-1">
          <label className="text-xs font-semibold text-[#0b1c30] flex items-center justify-between">
            <span>Institutional ERP ID / Roll Number</span>
            <span className="text-[#009969] text-[11px] font-bold">Active Session</span>
          </label>
          <div className="relative flex items-center bg-[#eff4ff] rounded-xl transition-all focus-within:bg-white focus-within:ring-2 focus-within:ring-[#0058be] border border-[#dce9ff]">
            <div className="pl-3 pr-2 text-[#75777e] flex items-center">
              <span className="material-symbols-outlined text-[18px]">person_outline</span>
            </div>
            <input
              type="text"
              required
              value={erpId}
              onChange={(e) => setErpId(e.target.value)}
              className="w-full py-2.5 pr-8 bg-transparent text-xs text-[#0b1c30] font-mono focus:outline-none"
              placeholder="e.g. CS21B042"
            />
            {erpId && (
              <button
                type="button"
                onClick={() => setErpId('')}
                className="absolute right-2 text-[#75777e] hover:text-[#0b1c30]"
              >
                <span className="material-symbols-outlined text-[16px]">cancel</span>
              </button>
            )}
          </div>
        </div>

        {/* Password Field */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center justify-between">
            <label className="text-xs font-semibold text-[#0b1c30]">Portal Security Password</label>
            <span className="text-[11px] text-[#75777e]">Auth Level 2</span>
          </div>
          <div className="relative flex items-center bg-[#eff4ff] rounded-xl transition-all focus-within:bg-white focus-within:ring-2 focus-within:ring-[#0058be] border border-[#dce9ff]">
            <div className="pl-3 pr-2 text-[#75777e] flex items-center">
              <span className="material-symbols-outlined text-[18px]">lock_outline</span>
            </div>
            <input
              type={showPassword ? 'text' : 'password'}
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full py-2.5 pr-8 bg-transparent text-xs text-[#0b1c30] focus:outline-none"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-2 text-[#75777e] hover:text-[#0b1c30]"
            >
              <span className="material-symbols-outlined text-[18px]">
                {showPassword ? 'visibility_off' : 'visibility'}
              </span>
            </button>
          </div>
        </div>

        {/* Remember & Reset Password */}
        <div className="flex items-center justify-between pt-0.5">
          <label className="flex items-center gap-2 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={rememberDevice}
              onChange={(e) => setRememberDevice(e.target.checked)}
              className="w-4 h-4 rounded text-[#0058be] accent-[#0058be]"
            />
            <span className="text-xs text-[#75777e]">Remember device (30d)</span>
          </label>
          <button
            type="button"
            onClick={() => onShowToast('Password reset link dispatched to authorized student email.', 'mail')}
            className="text-xs text-[#0058be] hover:underline font-bold"
          >
            Reset PIN / Key?
          </button>
        </div>

        {/* Primary Sign In Button */}
        <button
          type="submit"
          disabled={isAuthenticating}
          className={`w-full py-3 px-4 rounded-xl text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md active:scale-[0.99] transition-all ${
            authSuccess
              ? 'bg-[#009969]'
              : isAuthenticating
              ? 'bg-[#0f1e36]'
              : 'bg-[#000412] hover:bg-[#0f1e36]'
          }`}
        >
          {isAuthenticating ? (
            <>
              <span className="material-symbols-outlined text-[18px] animate-spin">sync</span>
              <span>Authenticating Session...</span>
            </>
          ) : authSuccess ? (
            <>
              <span className="material-symbols-outlined text-[18px]">check_circle</span>
              <span>Access Granted</span>
            </>
          ) : (
            <>
              <span>Sign In to Campus ERP</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </>
          )}
        </button>

        {/* Biometric Quick Auth Card */}
        {role === 'student' && (
          <div className="bg-[#eff4ff] rounded-xl p-3 flex items-center justify-between gap-3 border border-[#dce9ff]">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-10 h-10 rounded-full bg-[#dce9ff] text-[#0058be] flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[20px]">fingerprint</span>
              </div>
              <div className="flex flex-col min-w-0">
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-bold text-[#0b1c30] truncate">Sarah J. Adams</span>
                  <span className="text-[10px] font-bold px-2 py-0.2 bg-[#d8ed71] text-[#181e00] rounded-full shrink-0">
                    Verified
                  </span>
                </div>
                <p className="text-[11px] text-[#75777e] truncate">CS21B042 • Biometric Passkey</p>
              </div>
            </div>
            <button
              type="button"
              onClick={handleBiometricLogin}
              className="shrink-0 bg-[#0058be] hover:bg-[#004395] text-white px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1 shadow-xs active:scale-95 transition-all"
            >
              <span className="material-symbols-outlined text-[15px]">face</span>
              <span>Face ID</span>
            </button>
          </div>
        )}

        {/* SSO Alternative Option */}
        <div className="flex flex-col items-center gap-2 pt-1">
          <div className="w-full flex items-center gap-3">
            <div className="flex-1 h-px bg-[#eff4ff]" />
            <span className="text-[10px] text-[#75777e] uppercase tracking-wider font-bold">
              Campus SSO
            </span>
            <div className="flex-1 h-px bg-[#eff4ff]" />
          </div>
          <button
            type="button"
            onClick={() => handleSignIn()}
            className="w-full py-2.5 px-3 bg-[#eff4ff] hover:bg-[#dce9ff] text-[#0b1c30] rounded-xl text-xs font-bold flex items-center justify-center gap-2 shadow-xs transition-colors"
          >
            <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
              <path d="M1 1h10v10H1z" fill="#F25022" />
              <path d="M13 1h10v10H13z" fill="#7FBA00" />
              <path d="M1 13h10v10H1z" fill="#00A4EF" />
              <path d="M13 13h10v10H13z" fill="#FFB900" />
            </svg>
            <span className="truncate">Microsoft 365 / Oxford Workspace</span>
          </button>
        </div>
      </form>

      {/* Campus Security Advisory Card */}
      <div className="w-full mt-3 bg-[#eff4ff] rounded-2xl p-3.5 shadow-sm border border-[#dce9ff] flex items-start gap-3">
        <div className="text-[#0058be] mt-0.5 shrink-0">
          <span className="material-symbols-outlined text-[20px]">shield</span>
        </div>
        <div className="flex flex-col text-left">
          <span className="text-xs font-bold text-[#0b1c30]">Campus Network Gateway</span>
          <p className="text-[11px] text-[#75777e] mt-0.5 leading-snug">
            Access is restricted to registered matriculated scholars, faculty associates, and authorized administrative staff.
          </p>
        </div>
      </div>

      {/* Institutional Footer */}
      <footer className="w-full mt-5 flex flex-col items-center text-center gap-1">
        <div className="flex items-center justify-center gap-3 text-[#75777e] text-[11px]">
          <span className="flex items-center gap-1">
            <span className="material-symbols-outlined text-[13px]">support_agent</span>
            IT Helpdesk: ext 4402
          </span>
          <span>•</span>
          <span>ERP Policy</span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#009969] inline-block" />
            Status
          </span>
        </div>
        <p className="text-[10px] text-[#75777e] mt-1 max-w-xs">
          System Maintenance: Sundays 02:00–04:00 GMT
          <br />
          Oxford Collegiate Portal v4.8.2
        </p>
      </footer>
    </div>
  );
};
