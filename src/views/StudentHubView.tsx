import React, { useState } from 'react';
import { ASSETS } from '../mockData';
import { TabType } from '../types';

interface StudentHubViewProps {
  onSelectTab: (tab: TabType) => void;
  onOpenClassroomVerification: () => void;
  onOpenAdmitCard: () => void;
  onOpenTuitionModal: () => void;
  onShowToast: (msg: string, icon?: string) => void;
}

export const StudentHubView: React.FC<StudentHubViewProps> = ({
  onSelectTab,
  onOpenClassroomVerification,
  onOpenAdmitCard,
  onOpenTuitionModal,
  onShowToast,
}) => {
  const [libraryRenewed, setLibraryRenewed] = useState(false);
  const [submittedRaft, setSubmittedRaft] = useState(false);

  const handleRenewBooks = () => {
    setLibraryRenewed(true);
    onShowToast('Bodleian Library loans renewed for 14 days.', 'autorenew');
  };

  const handleSubmitCode = () => {
    setSubmittedRaft(true);
    onShowToast('Lab 4 Code submitted to GitHub Classroom AutoGrader.', 'task_alt');
  };

  return (
    <div className="flex flex-col w-full px-4 space-y-4 pb-28 pt-2">
      {/* Welcome & Profile Capsule */}
      <div className="flex items-center justify-between pt-1">
        <div className="flex items-center space-x-3 min-w-0">
          <div className="relative flex-shrink-0">
            <img
              className="w-12 h-12 rounded-full object-cover shadow-sm ring-2 ring-[#0058be]/20"
              alt="Sarah Adams"
              src={ASSETS.sarahHubAvatar}
            />
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-[#4edea3] rounded-full shadow-[0_0_0_2px_#ffffff]" />
          </div>
          <div className="flex flex-col min-w-0">
            <div className="flex items-center space-x-1.5">
              <span className="text-base font-bold text-[#0b1c30] truncate">Sarah Adams</span>
              <span className="px-2 py-0.5 rounded-full bg-[#dce9ff] text-[#0058be] text-[10px] font-bold">
                Y3 · S6
              </span>
            </div>
            <p className="text-xs text-[#44474d] truncate">
              B.Tech Computer Science & AI · <span className="font-mono">CS21B042</span>
            </p>
          </div>
        </div>

        <button
          aria-label="Quick Settings"
          onClick={() => onSelectTab('identity-id-photo')}
          className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#eff4ff] text-[#44474d] hover:bg-[#dce9ff] hover:text-[#0058be] transition-colors"
          type="button"
        >
          <span className="material-symbols-outlined text-[20px]">badge</span>
        </button>
      </div>

      {/* Realtime Alert: Next Class Countdown Banner */}
      <div
        onClick={onOpenClassroomVerification}
        className="relative overflow-hidden rounded-2xl bg-[#0f1e36] text-white p-4 shadow-md cursor-pointer group active:scale-[0.99] transition-transform"
      >
        <div className="absolute -right-6 -bottom-6 w-24 h-24 rounded-full bg-[#2170e4]/20 blur-xl pointer-events-none" />
        <div className="flex items-start justify-between relative z-10">
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-[#4edea3] flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-[18px]">bolt</span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center space-x-1.5">
                <span className="text-[11px] font-bold text-[#4edea3] uppercase tracking-wider">Next Session</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#4edea3] animate-ping" />
              </div>
              <span className="text-sm font-bold text-white mt-0.5">Distributed Systems</span>
              <p className="text-xs text-[#dce9ff]/80 mt-0.5">Room 402 · CS Academic Block</p>
            </div>
          </div>
          <div className="flex flex-col items-end flex-shrink-0">
            <span className="px-2 py-1 rounded-md bg-[#2170e4] text-white text-[11px] font-bold shadow-xs">
              in 35 mins
            </span>
            <span className="text-[11px] text-[#dce9ff]/80 mt-1 font-medium">Hall 402</span>
          </div>
        </div>
      </div>

      {/* Primary Academic Indicators Bento */}
      <div className="grid grid-cols-2 gap-3">
        {/* Attendance Metric Card with Radial Gauge */}
        <div
          onClick={() => onSelectTab('attendance-and-grades')}
          className="flex flex-col justify-between p-3.5 rounded-2xl bg-white shadow-sm border border-[#dce9ff]/60 hover:shadow-md transition-shadow cursor-pointer"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-[#44474d]">Attendance</span>
            <span className="px-2 py-0.5 rounded-full bg-[#eff4ff] text-[#009969] text-[11px] font-bold flex items-center space-x-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4edea3]" />
              <span>Safe</span>
            </span>
          </div>

          <div className="flex items-center space-x-2 my-2">
            <div className="relative w-12 h-12 flex-shrink-0">
              <svg className="w-12 h-12 -rotate-90" viewBox="0 0 36 36">
                <path
                  className="text-[#eff4ff]"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3.5"
                />
                <path
                  className="text-[#009969]"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="currentColor"
                  strokeDasharray="88.4, 100"
                  strokeLinecap="round"
                  strokeWidth="3.5"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="material-symbols-outlined text-[16px] text-[#009969]">done_all</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-extrabold text-[#0b1c30] leading-none tnum">88.4%</span>
              <span className="text-[11px] text-[#75777e] mt-1">Min threshold 75%</span>
            </div>
          </div>

          <div className="w-full bg-[#eff4ff] rounded-full h-1.5 overflow-hidden">
            <div className="bg-[#4edea3] h-full rounded-full" style={{ width: '88.4%' }} />
          </div>
        </div>

        {/* Cumulative CGPA Card */}
        <div
          onClick={() => onSelectTab('attendance-and-grades')}
          className="flex flex-col justify-between p-3.5 rounded-2xl bg-white shadow-sm border border-[#dce9ff]/60 hover:shadow-md transition-shadow cursor-pointer"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-[#44474d]">Cumulative GPA</span>
            <span className="px-2 py-0.5 rounded-full bg-[#d8e2ff] text-[#001a42] text-[10px] font-bold">
              Top 5%
            </span>
          </div>

          <div className="flex items-baseline space-x-1 my-2">
            <span className="text-2xl font-extrabold text-[#0b1c30] tnum">3.84</span>
            <span className="text-xs text-[#75777e]">/ 4.00</span>
          </div>

          <div className="flex items-center space-x-1 text-[#0058be] text-xs font-semibold">
            <span className="material-symbols-outlined text-[16px]">trending_up</span>
            <span>+0.06 this term</span>
          </div>

          <div className="flex items-center justify-between pt-1 text-[#75777e] text-[11px]">
            <span>Credits: 114 / 130</span>
            <span className="font-bold text-[#0b1c30]">Dean's List</span>
          </div>
        </div>
      </div>

      {/* Today's Schedule */}
      <div className="flex flex-col space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-base font-bold text-[#0b1c30]">Today's Schedule</span>
            <span className="px-2 py-0.5 rounded-full bg-[#eff4ff] text-[#44474d] text-[11px] font-semibold">
              3 Lectures
            </span>
          </div>
          <button
            onClick={() => onShowToast('Full weekly timetable: Mon–Fri 09:00–17:00 active', 'calendar_month')}
            className="text-[#0058be] text-xs font-semibold flex items-center hover:underline"
            type="button"
          >
            Full Timetable
            <span className="material-symbols-outlined text-[16px] ml-0.5">chevron_right</span>
          </button>
        </div>

        <div className="flex flex-col space-y-2">
          {/* Session 1: Active / In Progress */}
          <div
            onClick={onOpenClassroomVerification}
            className="flex items-stretch rounded-2xl bg-white shadow-sm border border-[#dce9ff]/60 overflow-hidden cursor-pointer hover:shadow-md transition-all active:scale-[0.99]"
          >
            <div className="w-1.5 bg-[#2170e4] flex-shrink-0" />
            <div className="flex-1 p-3.5 flex flex-col space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-[#0058be] uppercase tracking-wider">
                  09:30 AM – 11:00 AM
                </span>
                <span className="px-2 py-0.5 rounded-full bg-[#e5eeff] text-[#0058be] text-[11px] font-bold flex items-center space-x-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0058be] animate-pulse" />
                  <span>In Progress</span>
                </span>
              </div>
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="text-sm font-bold text-[#0b1c30]">CS301 · Distributed Systems</h4>
                  <p className="text-xs text-[#44474d] mt-0.5">Prof. Arthur Vance · Hall 402</p>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenClassroomVerification();
                  }}
                  className="w-8 h-8 rounded-lg bg-[#eff4ff] flex items-center justify-center text-[#0058be] hover:bg-[#dce9ff]"
                  type="button"
                  title="Open Hall 402 check-in"
                >
                  <span className="material-symbols-outlined text-[18px]">location_on</span>
                </button>
              </div>
            </div>
          </div>

          {/* Session 2: Upcoming Lab */}
          <div className="flex items-stretch rounded-2xl bg-white shadow-sm border border-[#dce9ff]/60 overflow-hidden">
            <div className="w-1.5 bg-[#4edea3] flex-shrink-0" />
            <div className="flex-1 p-3.5 flex flex-col space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-semibold text-[#75777e] uppercase tracking-wider">
                  11:30 AM – 01:00 PM
                </span>
                <span className="px-2 py-0.5 rounded-full bg-[#eff4ff] text-[#009969] text-[11px] font-bold">
                  Lab Session
                </span>
              </div>
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="text-sm font-bold text-[#0b1c30]">AI304 · Deep Learning Foundations</h4>
                  <p className="text-xs text-[#44474d] mt-0.5">Dr. Marcus Thorne · Hardware Lab 2</p>
                </div>
                <button
                  onClick={() => onShowToast('Hardware Lab 2 seats reserved. Workstation GPU cluster available.', 'terminal')}
                  className="w-8 h-8 rounded-lg bg-[#eff4ff] flex items-center justify-center text-[#44474d] hover:text-[#0058be]"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[18px]">terminal</span>
                </button>
              </div>
            </div>
          </div>

          {/* Session 3: Afternoon Math */}
          <div className="flex items-stretch rounded-2xl bg-white shadow-sm border border-[#dce9ff]/60 overflow-hidden opacity-95">
            <div className="w-1.5 bg-[#75777e] flex-shrink-0" />
            <div className="flex-1 p-3.5 flex flex-col space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-semibold text-[#75777e] uppercase tracking-wider">
                  02:00 PM – 03:30 PM
                </span>
                <span className="px-2 py-0.5 rounded-full bg-[#eff4ff] text-[#44474d] text-[11px] font-semibold">
                  Lecture
                </span>
              </div>
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="text-sm font-bold text-[#0b1c30]">MAT204 · Probability & Stochastic Processes</h4>
                  <p className="text-xs text-[#44474d] mt-0.5">Prof. Evelyn Chen · Room 208</p>
                </div>
                <button
                  onClick={() => onShowToast('Handout for Stochastic Processes uploaded to Course portal.', 'menu_book')}
                  className="w-8 h-8 rounded-lg bg-[#eff4ff] flex items-center justify-center text-[#44474d] hover:text-[#0058be]"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[18px]">menu_book</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Assignments & Academic Deadlines */}
      <div className="flex flex-col space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-base font-bold text-[#0b1c30]">Urgent Deadlines</span>
          <span className="text-xs text-[#75777e] font-semibold">2 Pending</span>
        </div>

        {/* Raft Consensus Assignment */}
        <div className="p-3.5 rounded-2xl bg-white shadow-sm border border-[#dce9ff]/60 flex flex-col space-y-2">
          <div className="flex items-start justify-between">
            <div className="flex items-center space-x-1.5">
              <span className="w-2 h-2 rounded-full bg-[#2170e4]" />
              <span className="text-xs font-bold text-[#0058be]">CS301 Distributed Systems</span>
            </div>
            <span className="px-2 py-0.5 rounded-full bg-[#ffdad6] text-[#ba1a1a] text-[11px] font-bold flex items-center space-x-1">
              <span className="material-symbols-outlined text-[13px]">timer</span>
              <span>Due Tomorrow · 11:59 PM</span>
            </span>
          </div>
          <div>
            <h4 className="text-sm font-bold text-[#0b1c30]">
              Lab Assignment 4: Raft Consensus Implementation
            </h4>
            <p className="text-xs text-[#44474d] mt-0.5">
              Leader election & log replication test pass with Go RPC suite.
            </p>
          </div>
          <div className="flex items-center justify-between pt-1">
            <div className="flex items-center space-x-1 text-[#75777e] text-xs">
              <span className="material-symbols-outlined text-[16px]">folder_zip</span>
              <span>50 Pts · GitHub AutoGrade</span>
            </div>
            <button
              onClick={handleSubmitCode}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all shadow-sm active:scale-95 ${
                submittedRaft
                  ? 'bg-[#009969] text-white'
                  : 'bg-[#0f1e36] text-white hover:bg-[#213145]'
              }`}
              type="button"
            >
              {submittedRaft ? 'Code Submitted' : 'Submit Code'}
            </button>
          </div>
        </div>

        {/* Convex Optimization Quiz */}
        <div className="p-3.5 rounded-2xl bg-white shadow-sm border border-[#dce9ff]/60 flex flex-col space-y-2">
          <div className="flex items-start justify-between">
            <div className="flex items-center space-x-1.5">
              <span className="w-2 h-2 rounded-full bg-[#0058be]" />
              <span className="text-xs font-semibold text-[#44474d]">AI304 Deep Learning</span>
            </div>
            <span className="px-2 py-0.5 rounded-full bg-[#eff4ff] text-[#44474d] text-[11px] font-semibold">
              Due in 3 Days
            </span>
          </div>
          <div>
            <h4 className="text-sm font-bold text-[#0b1c30]">Mid-term Quiz: Convex Optimization</h4>
            <p className="text-xs text-[#44474d] mt-0.5">
              Duality, KKT conditions, and gradient descent formulations.
            </p>
          </div>
          <div className="flex items-center justify-between pt-1">
            <div className="flex items-center space-x-1 text-[#75777e] text-xs">
              <span className="material-symbols-outlined text-[16px]">quiz</span>
              <span>30 Mins · Canvas Portal</span>
            </div>
            <button
              onClick={() => onShowToast('Practice questions for Convex Optimization loaded.', 'quiz')}
              className="px-3 py-1.5 rounded-xl bg-[#eff4ff] hover:bg-[#dce9ff] text-[#0b1c30] text-xs font-semibold transition-colors"
              type="button"
            >
              View Prep
            </button>
          </div>
        </div>
      </div>

      {/* Campus Services Grid */}
      <div className="flex flex-col space-y-2">
        <span className="text-base font-bold text-[#0b1c30]">Campus Services</span>
        <div className="grid grid-cols-2 gap-3">
          {/* Admit Card Action */}
          <div className="p-3.5 rounded-2xl bg-white shadow-sm border border-[#dce9ff]/60 flex flex-col justify-between space-y-2">
            <div className="w-9 h-9 rounded-xl bg-[#eff4ff] text-[#0058be] flex items-center justify-center">
              <span className="material-symbols-outlined text-[20px]">badge</span>
            </div>
            <div>
              <span className="text-xs font-bold text-[#0b1c30] block">Exam Admit Card</span>
              <span className="text-[11px] text-[#75777e]">Mid-Sem 2025</span>
            </div>
            <button
              onClick={onOpenAdmitCard}
              className="w-full flex items-center justify-center space-x-1 py-1.5 rounded-lg bg-[#eff4ff] text-[#0058be] text-xs font-bold hover:bg-[#dce9ff] transition-colors"
              type="button"
            >
              <span className="material-symbols-outlined text-[16px]">download</span>
              <span>PDF Card</span>
            </button>
          </div>

          {/* Fee Payment Action */}
          <div className="p-3.5 rounded-2xl bg-white shadow-sm border border-[#dce9ff]/60 flex flex-col justify-between space-y-2">
            <div className="flex items-center justify-between">
              <div className="w-9 h-9 rounded-xl bg-[#ffdad6] text-[#ba1a1a] flex items-center justify-center">
                <span className="material-symbols-outlined text-[20px]">account_balance_wallet</span>
              </div>
              <span className="px-1.5 py-0.2 rounded bg-[#ffdad6] text-[#ba1a1a] text-[10px] font-bold">
                Due
              </span>
            </div>
            <div>
              <span className="text-xs font-bold text-[#0b1c30] block">Tuition Dues</span>
              <span className="text-[11px] text-[#ba1a1a] font-bold">$250.00 Outstanding</span>
            </div>
            <button
              onClick={onOpenTuitionModal}
              className="w-full flex items-center justify-center space-x-1 py-1.5 rounded-lg bg-[#000412] text-white text-xs font-bold hover:bg-[#0f1e36] active:scale-95 transition-all"
              type="button"
            >
              <span>Pay Now</span>
            </button>
          </div>

          {/* Digital Campus ID Card */}
          <div className="p-3.5 rounded-2xl bg-white shadow-sm border border-[#dce9ff]/60 flex flex-col justify-between space-y-2">
            <div className="w-9 h-9 rounded-xl bg-[#eff4ff] text-[#0058be] flex items-center justify-center">
              <span className="material-symbols-outlined text-[20px]">contactless</span>
            </div>
            <div>
              <span className="text-xs font-bold text-[#0b1c30] block">Digital Pass</span>
              <span className="text-[11px] text-[#75777e]">Gate & Dorm NFC</span>
            </div>
            <button
              onClick={() => onSelectTab('identity-id-photo')}
              className="w-full flex items-center justify-center space-x-1 py-1.5 rounded-lg bg-[#eff4ff] text-[#0b1c30] text-xs font-bold hover:bg-[#dce9ff] transition-colors"
              type="button"
            >
              <span className="material-symbols-outlined text-[16px]">qr_code_2</span>
              <span>Show ID</span>
            </button>
          </div>

          {/* Library Management */}
          <div className="p-3.5 rounded-2xl bg-white shadow-sm border border-[#dce9ff]/60 flex flex-col justify-between space-y-2">
            <div className="w-9 h-9 rounded-xl bg-[#eff4ff] text-[#44474d] flex items-center justify-center">
              <span className="material-symbols-outlined text-[20px]">local_library</span>
            </div>
            <div>
              <span className="text-xs font-bold text-[#0b1c30] block">Bodleian Library</span>
              <span className="text-[11px] text-[#75777e]">
                {libraryRenewed ? 'Renewed: Due Nov 12' : '2 Borrowed Books'}
              </span>
            </div>
            <button
              onClick={handleRenewBooks}
              className="w-full flex items-center justify-center space-x-1 py-1.5 rounded-lg bg-[#eff4ff] text-[#0058be] text-xs font-bold hover:bg-[#dce9ff] transition-colors"
              type="button"
            >
              <span className="material-symbols-outlined text-[16px]">autorenew</span>
              <span>{libraryRenewed ? 'Renewed' : 'Renew'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Campus Notice Bulletin */}
      <div className="rounded-2xl bg-[#e5eeff] p-4 shadow-sm border border-[#dce9ff] flex items-start space-x-3">
        <div className="w-8 h-8 rounded-full bg-[#2170e4] text-white flex items-center justify-center flex-shrink-0 mt-0.5">
          <span className="material-symbols-outlined text-[18px]">campaign</span>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold text-[#0058be] uppercase tracking-wider">
              Official Registrar Notice
            </span>
            <span className="text-[11px] text-[#75777e]">10m ago</span>
          </div>
          <p className="text-xs text-[#0b1c30] font-medium mt-1 leading-snug">
            End-term practical examination schedule published by Office of Registrar. Check roster slots.
          </p>
          <button
            onClick={() => onShowToast('Downloading Official Circular PDF from Oxford Registrar...', 'download')}
            className="mt-2 text-xs font-bold text-[#0058be] hover:underline flex items-center"
            type="button"
          >
            <span>Download Official Circular</span>
            <span className="material-symbols-outlined text-[16px] ml-0.5">arrow_forward</span>
          </button>
        </div>
      </div>
    </div>
  );
};
