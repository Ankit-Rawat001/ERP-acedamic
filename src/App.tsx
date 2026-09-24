/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { BottomNav } from './components/BottomNav';
import { Toast, ToastMessage } from './components/Toast';
import { StudentHubView } from './views/StudentHubView';
import { FacultyConsoleView } from './views/FacultyConsoleView';
import { CoursesView } from './views/CoursesView';
import { AttendanceView } from './views/AttendanceView';
import { IdentityPhotoView } from './views/IdentityPhotoView';
import { LoginView } from './views/LoginView';
import { ClassroomVerificationModal } from './modals/ClassroomVerificationModal';
import { FastRollCallModal } from './modals/FastRollCallModal';
import { BroadcastNoticeModal } from './modals/BroadcastNoticeModal';
import { AdmitCardModal } from './modals/AdmitCardModal';
import { TuitionPaymentModal } from './modals/TuitionPaymentModal';
import { DocumentReviewModal } from './modals/DocumentReviewModal';
import { StudentRequest, TabType, UserRole } from './types';

export default function App() {
  const [currentTab, setCurrentTab] = useState<TabType>('student-hub');
  const [userRole, setUserRole] = useState<UserRole>('student');
  const [toast, setToast] = useState<ToastMessage | null>(null);

  // Modals state
  const [isClassroomQrOpen, setIsClassroomQrOpen] = useState(false);
  const [isRollCallOpen, setIsRollCallOpen] = useState(false);
  const [isBroadcastOpen, setIsBroadcastOpen] = useState(false);
  const [isAdmitCardOpen, setIsAdmitCardOpen] = useState(false);
  const [isTuitionModalOpen, setIsTuitionModalOpen] = useState(false);
  const [docReviewRequest, setDocReviewRequest] = useState<StudentRequest | null>(null);

  // Frame view switcher for desktop convenience
  const [deviceFrameMode, setDeviceFrameMode] = useState<'mobile' | 'expanded'>('mobile');

  const showToast = (message: string, icon = 'check_circle') => {
    setToast({
      id: Date.now().toString(),
      message,
      icon,
    });
  };

  const handleSelectTab = (tab: TabType) => {
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRoleChange = (newRole: UserRole) => {
    setUserRole(newRole);
    if (newRole === 'faculty') {
      setCurrentTab('faculty-console');
    } else {
      setCurrentTab('student-hub');
    }
  };

  const handleLoginSuccess = (role: UserRole, targetTab: TabType) => {
    setUserRole(role);
    setCurrentTab(targetTab);
  };

  const renderActiveView = () => {
    switch (currentTab) {
      case 'login':
        return (
          <LoginView
            onLoginSuccess={handleLoginSuccess}
            onShowToast={showToast}
          />
        );
      case 'faculty-console':
        return (
          <FacultyConsoleView
            onOpenRollCall={() => setIsRollCallOpen(true)}
            onOpenClassroomQr={() => setIsClassroomQrOpen(true)}
            onOpenBroadcast={() => setIsBroadcastOpen(true)}
            onOpenDocReview={(req) => setDocReviewRequest(req)}
            onShowToast={showToast}
          />
        );
      case 'courses-and-materials':
        return <CoursesView onShowToast={showToast} />;
      case 'attendance-and-grades':
        return <AttendanceView onShowToast={showToast} />;
      case 'identity-id-photo':
        return (
          <IdentityPhotoView
            onBack={() => setCurrentTab('student-hub')}
            onSelectTab={handleSelectTab}
            onShowToast={showToast}
          />
        );
      case 'student-hub':
      default:
        return (
          <StudentHubView
            onSelectTab={handleSelectTab}
            onOpenClassroomVerification={() => setIsClassroomQrOpen(true)}
            onOpenAdmitCard={() => setIsAdmitCardOpen(true)}
            onOpenTuitionModal={() => setIsTuitionModalOpen(true)}
            onShowToast={showToast}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#f0e5ed]/60 text-[#0b1c30] flex flex-col items-center">
      {/* Optional Top Device Toolbar for Desktop Previews */}
      <div className="w-full bg-[#0b1c30] text-white px-4 py-2 text-xs flex items-center justify-between z-50 border-b border-[#213145]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#4edea3] animate-pulse" />
          <span className="font-semibold tracking-wide">Oxford Collegiate Campus ERP</span>
          <span className="text-[#75777e] hidden sm:inline">| Autumn Term 2025</span>
        </div>

        <div className="flex items-center gap-2">
          {/* Quick role toggle */}
          <div className="flex items-center bg-[#213145] rounded-lg p-0.5 text-[11px]">
            <button
              onClick={() => handleRoleChange('student')}
              className={`px-2.5 py-1 rounded-md transition-colors font-medium ${
                userRole === 'student' && currentTab !== 'login'
                  ? 'bg-[#0058be] text-white'
                  : 'text-[#dce9ff] hover:text-white'
              }`}
            >
              Student View
            </button>
            <button
              onClick={() => handleRoleChange('faculty')}
              className={`px-2.5 py-1 rounded-md transition-colors font-medium ${
                userRole === 'faculty' && currentTab !== 'login'
                  ? 'bg-[#0058be] text-white'
                  : 'text-[#dce9ff] hover:text-white'
              }`}
            >
              Faculty View
            </button>
            <button
              onClick={() => setCurrentTab('login')}
              className={`px-2.5 py-1 rounded-md transition-colors font-medium ${
                currentTab === 'login'
                  ? 'bg-[#0058be] text-white'
                  : 'text-[#dce9ff] hover:text-white'
              }`}
            >
              Login Screen
            </button>
          </div>

          {/* Device viewport width toggle */}
          <div className="hidden md:flex items-center bg-[#213145] rounded-lg p-0.5 text-[11px]">
            <button
              onClick={() => setDeviceFrameMode('mobile')}
              className={`px-2 py-1 rounded-md transition-colors flex items-center gap-1 ${
                deviceFrameMode === 'mobile' ? 'bg-white/20 text-white' : 'text-[#dce9ff]'
              }`}
              title="Standard Mobile Shell"
            >
              <span className="material-symbols-outlined text-[14px]">smartphone</span>
              <span>Mobile Frame</span>
            </button>
            <button
              onClick={() => setDeviceFrameMode('expanded')}
              className={`px-2 py-1 rounded-md transition-colors flex items-center gap-1 ${
                deviceFrameMode === 'expanded' ? 'bg-white/20 text-white' : 'text-[#dce9ff]'
              }`}
              title="Responsive View"
            >
              <span className="material-symbols-outlined text-[14px]">desktop_windows</span>
              <span>Expanded</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main App Container */}
      <div
        className={`w-full min-h-screen bg-[#f8f9ff] flex flex-col relative transition-all duration-300 ${
          deviceFrameMode === 'mobile'
            ? 'max-w-md shadow-2xl sm:my-4 sm:rounded-3xl sm:border sm:border-[#dce9ff] overflow-hidden'
            : 'max-w-xl'
        }`}
      >
        {/* Toast Feedback */}
        <Toast toast={toast} onDismiss={() => setToast(null)} />

        {/* Global Fixed Header (omitted on Login view) */}
        {currentTab !== 'login' && (
          <Header
            currentTab={currentTab}
            userRole={userRole}
            onSelectTab={handleSelectTab}
            onChangeRole={handleRoleChange}
            onOpenClassroomVerification={() => setIsClassroomQrOpen(true)}
          />
        )}

        {/* Dynamic Screen View */}
        <main className={`flex-1 w-full ${currentTab !== 'login' ? 'pt-16' : ''}`}>
          {renderActiveView()}
        </main>

        {/* Global Fixed Bottom Navigation (omitted on Login view) */}
        {currentTab !== 'login' && (
          <BottomNav activeTab={currentTab} onSelectTab={handleSelectTab} />
        )}

        {/* Modals & Dialogs */}
        <ClassroomVerificationModal
          isOpen={isClassroomQrOpen}
          onClose={() => setIsClassroomQrOpen(false)}
          onShowToast={showToast}
        />

        <FastRollCallModal
          isOpen={isRollCallOpen}
          onClose={() => setIsRollCallOpen(false)}
          onShowToast={showToast}
        />

        <BroadcastNoticeModal
          isOpen={isBroadcastOpen}
          onClose={() => setIsBroadcastOpen(false)}
          onShowToast={showToast}
        />

        <AdmitCardModal
          isOpen={isAdmitCardOpen}
          onClose={() => setIsAdmitCardOpen(false)}
          onShowToast={showToast}
        />

        <TuitionPaymentModal
          isOpen={isTuitionModalOpen}
          onClose={() => setIsTuitionModalOpen(false)}
          onShowToast={showToast}
        />

        <DocumentReviewModal
          request={docReviewRequest}
          onClose={() => setDocReviewRequest(null)}
          onApprove={(id) => {
            showToast('Student on-duty athletic exemption approved and recorded.', 'task_alt');
          }}
          onDecline={(id) => {
            showToast('Exemption request declined.', 'cancel');
          }}
        />
      </div>
    </div>
  );
}
