import React, { useState } from 'react';
import { INITIAL_ROSTER } from '../mockData';
import { RosterStudent } from '../types';

interface FastRollCallModalProps {
  isOpen: boolean;
  onClose: () => void;
  onShowToast: (msg: string, icon?: string) => void;
}

export const FastRollCallModal: React.FC<FastRollCallModalProps> = ({
  isOpen,
  onClose,
  onShowToast,
}) => {
  const [roster, setRoster] = useState<RosterStudent[]>(INITIAL_ROSTER);

  if (!isOpen) return null;

  const updateStudentStatus = (id: string, status: 'P' | 'L' | 'A') => {
    setRoster((prev) =>
      prev.map((s) => (s.id === id ? { ...s, status } : s))
    );
  };

  const markAllPresent = () => {
    setRoster((prev) => prev.map((s) => ({ ...s, status: 'P' })));
    onShowToast('All 62 candidates marked as present in Hall 402', 'done_all');
  };

  const submitAttendanceRecords = () => {
    onClose();
    onShowToast('Attendance for CS301 synced to Oxford Central ERP', 'verified');
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#0b1c30]/50 backdrop-blur-sm flex flex-col justify-end animate-in fade-in duration-200">
      <div className="bg-white rounded-t-3xl max-h-[85vh] flex flex-col shadow-2xl animate-in slide-in-from-bottom duration-200 max-w-xl mx-auto w-full">
        {/* Sheet Handle & Header */}
        <div className="p-4 border-b border-[#eff4ff] flex items-center justify-between">
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-[#000412] text-white">
                CS301
              </span>
              <h3 className="text-lg font-bold text-[#0b1c30]">Fast Roll Call</h3>
            </div>
            <span className="text-xs text-[#75777e] mt-0.5">Hall 402 • 62 Students Enrolled</span>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#eff4ff] flex items-center justify-center text-[#44474d] hover:text-[#0b1c30] transition-colors"
            type="button"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        {/* Quick Roster Items */}
        <div className="overflow-y-auto px-4 py-2 flex flex-col gap-2.5 max-h-[55vh]">
          {roster.map((student) => (
            <div
              key={student.id}
              className="bg-[#eff4ff] rounded-xl p-3 flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#dce9ff] text-[#0b1c30] text-xs font-bold flex items-center justify-center">
                  {student.number}
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#0b1c30]">{student.name}</div>
                  <div className="text-xs text-[#44474d]">
                    {student.rollNo} • <span className="font-medium text-[#0058be]">{student.attendancePercent}% Attend.</span>
                  </div>
                </div>
              </div>

              {/* Segmented P/L/A toggle */}
              <div className="flex items-center gap-1 bg-[#dce9ff]/60 rounded-lg p-0.5">
                <button
                  type="button"
                  onClick={() => updateStudentStatus(student.id, 'P')}
                  className={`px-2.5 py-1 text-xs font-bold rounded-md transition-all ${
                    student.status === 'P'
                      ? 'bg-[#009969] text-white shadow-xs'
                      : 'text-[#44474d] hover:text-[#0b1c30]'
                  }`}
                >
                  P
                </button>
                <button
                  type="button"
                  onClick={() => updateStudentStatus(student.id, 'L')}
                  className={`px-2.5 py-1 text-xs font-bold rounded-md transition-all ${
                    student.status === 'L'
                      ? 'bg-[#f59e0b] text-white shadow-xs'
                      : 'text-[#44474d] hover:text-[#0b1c30]'
                  }`}
                >
                  L
                </button>
                <button
                  type="button"
                  onClick={() => updateStudentStatus(student.id, 'A')}
                  className={`px-2.5 py-1 text-xs font-bold rounded-md transition-all ${
                    student.status === 'A'
                      ? 'bg-[#ba1a1a] text-white shadow-xs'
                      : 'text-[#44474d] hover:text-[#0b1c30]'
                  }`}
                >
                  A
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Action Footer */}
        <div className="p-4 bg-white border-t border-[#eff4ff] flex items-center gap-3">
          <button
            onClick={markAllPresent}
            className="h-11 flex-1 rounded-xl bg-[#e5eeff] hover:bg-[#dce9ff] text-[#0b1c30] text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors active:scale-[0.98]"
            type="button"
          >
            <span className="material-symbols-outlined text-[18px]">done_all</span>
            Mark Rest Present
          </button>
          <button
            onClick={submitAttendanceRecords}
            className="h-11 flex-1 rounded-xl bg-[#000412] hover:bg-[#0f1e36] text-white text-xs font-semibold flex items-center justify-center gap-1.5 shadow-md transition-colors active:scale-[0.98]"
            type="button"
          >
            <span className="material-symbols-outlined text-[18px]">cloud_upload</span>
            Submit & Lock
          </button>
        </div>
      </div>
    </div>
  );
};
