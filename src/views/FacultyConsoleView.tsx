import React, { useState } from 'react';
import { ASSETS, INITIAL_LEAVE_REQUESTS } from '../mockData';
import { StudentRequest } from '../types';

interface FacultyConsoleViewProps {
  onOpenRollCall: () => void;
  onOpenClassroomQr: () => void;
  onOpenBroadcast: () => void;
  onOpenDocReview: (req: StudentRequest) => void;
  onShowToast: (msg: string, icon?: string) => void;
}

export const FacultyConsoleView: React.FC<FacultyConsoleViewProps> = ({
  onOpenRollCall,
  onOpenClassroomQr,
  onOpenBroadcast,
  onOpenDocReview,
  onShowToast,
}) => {
  const [requests, setRequests] = useState<StudentRequest[]>(INITIAL_LEAVE_REQUESTS);
  const [gradedCount, setGradedCount] = useState(38);

  const handleDismissRequest = (id: string, outcome: 'Approved' | 'Declined') => {
    setRequests((prev) => prev.filter((r) => r.id !== id));
    onShowToast(`Leave request has been ${outcome.toLowerCase()} and logged in student file.`, 'task_alt');
  };

  const handleContinueGrading = () => {
    if (gradedCount < 62) {
      setGradedCount((prev) => prev + 1);
      onShowToast(`Graded submission ${gradedCount + 1}/62 for Assignment 3 (Score: 92/100)`, 'rate_review');
    } else {
      onShowToast('All 62 student submissions for Assignment 3 have been graded!', 'done_all');
    }
  };

  return (
    <div className="flex flex-col w-full px-4 pb-28 pt-2 space-y-4">
      {/* Faculty Profile Hero & Context Banner */}
      <section className="pt-1">
        <div className="bg-[#0f1e36] text-white rounded-2xl p-4 shadow-md relative overflow-hidden">
          {/* Decorative academic watermarks */}
          <div className="absolute -right-6 -bottom-6 w-32 h-32 rounded-full bg-[#2170e4]/20 blur-2xl pointer-events-none" />
          <div className="absolute right-3 top-3 text-[#7886a3]/25 select-none pointer-events-none">
            <span className="material-symbols-outlined text-[80px] opacity-15">terminal</span>
          </div>

          <div className="relative z-10 flex items-start gap-3">
            <img
              className="w-14 h-14 rounded-xl object-cover shadow-sm bg-[#dce9ff] shrink-0 ring-1 ring-white/20"
              alt="Dr. Julian Vance"
              src={ASSETS.julianVance}
            />
            <div className="flex flex-col min-w-0 flex-1">
              <div className="flex items-center gap-1.5 flex-wrap">
                <span className="bg-[#0058be] text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                  Active Faculty
                </span>
                <span className="text-[#dce9ff]/70 text-[11px] font-mono">ID: FAC-8821</span>
              </div>
              <h2 className="text-lg font-bold text-white mt-1 truncate">Dr. Julian Vance</h2>
              <p className="text-xs text-[#dce9ff]/80 leading-tight">Associate Professor • Dept. of Computer Science</p>
            </div>
          </div>

          {/* Quick Semester Metadata Ribbon */}
          <div className="relative z-10 mt-3 pt-3 flex items-center justify-between bg-[#000412]/40 -mx-4 -mb-4 px-4 py-2.5 rounded-b-2xl border-t border-white/5">
            <div className="flex items-center gap-1.5 text-[#dce9ff] text-[11px] font-medium">
              <span className="material-symbols-outlined text-[16px] text-[#4edea3]">verified</span>
              <span>Semester Autumn 2025</span>
            </div>
            <div className="flex items-center gap-1.5 text-[11px] text-[#d8e2ff] font-medium">
              <span className="w-2 h-2 rounded-full bg-[#4edea3] animate-pulse" />
              <span>Campus Office: Turing 314</span>
            </div>
          </div>
        </div>
      </section>

      {/* Department Operations Dashboard (4-Metric Grid) */}
      <section className="mt-1">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-sm font-bold text-[#0b1c30] flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[18px] text-[#0058be]">grid_view</span>
            Operational Overview
          </h3>
          <span className="text-[11px] font-medium text-[#75777e]">Live Updates</span>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {/* Metric 1 */}
          <div className="bg-white rounded-2xl p-3.5 shadow-sm border border-[#dce9ff]/60 flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="w-8 h-8 rounded-lg bg-[#e5eeff] flex items-center justify-center text-[#0058be]">
                <span className="material-symbols-outlined text-[18px]">co_present</span>
              </span>
              <span className="text-[11px] text-[#0058be] font-bold">Today</span>
            </div>
            <div className="mt-3">
              <div className="text-3xl font-extrabold text-[#0b1c30] leading-none tnum">3</div>
              <div className="text-[11px] text-[#75777e] mt-1">Lectures Scheduled</div>
            </div>
          </div>

          {/* Metric 2 */}
          <div className="bg-white rounded-2xl p-3.5 shadow-sm border border-[#dce9ff]/60 flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="w-8 h-8 rounded-lg bg-[#dce9ff] flex items-center justify-center text-[#0f1e36]">
                <span className="material-symbols-outlined text-[18px]">rate_review</span>
              </span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#e5eeff] text-[#0058be]">
                Queue
              </span>
            </div>
            <div className="mt-3">
              <div className="text-3xl font-extrabold text-[#0b1c30] leading-none tnum">42</div>
              <div className="text-[11px] text-[#75777e] mt-1">Pending Submissions</div>
            </div>
          </div>

          {/* Metric 3 */}
          <div className="bg-white rounded-2xl p-3.5 shadow-sm border border-[#dce9ff]/60 flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="w-8 h-8 rounded-lg bg-[#ffdad6] flex items-center justify-center text-[#ba1a1a]">
                <span className="material-symbols-outlined text-[18px]">event_busy</span>
              </span>
              <span className="w-2 h-2 rounded-full bg-[#ba1a1a] animate-ping" />
            </div>
            <div className="mt-3">
              <div className="text-3xl font-extrabold text-[#ba1a1a] leading-none tnum">{requests.length}</div>
              <div className="text-[11px] text-[#75777e] mt-1">Leave Requests</div>
            </div>
          </div>

          {/* Metric 4 */}
          <div className="bg-white rounded-2xl p-3.5 shadow-sm border border-[#dce9ff]/60 flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="w-8 h-8 rounded-lg bg-[#e5eeff] flex items-center justify-center text-[#009969]">
                <span className="material-symbols-outlined text-[18px]">stacked_bar_chart</span>
              </span>
              <span className="text-[11px] text-[#009969] font-bold">+1.8%</span>
            </div>
            <div className="mt-3">
              <div className="text-3xl font-extrabold text-[#0b1c30] leading-none tnum">
                86.2<span className="text-base font-bold">%</span>
              </div>
              <div className="text-[11px] text-[#75777e] mt-1">Avg Class Attendance</div>
            </div>
          </div>
        </div>
      </section>

      {/* Today's Teaching Schedule */}
      <section>
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[20px] text-[#0058be]">calendar_today</span>
            <h3 className="text-sm font-bold text-[#0b1c30]">Today's Lectures</h3>
          </div>
          <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-[#d8e2ff] text-[#001a42]">
            Week 8
          </span>
        </div>

        <div className="flex flex-col gap-3">
          {/* Active Lecture 1: Imminent / Actionable */}
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-[#dce9ff]/60 relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0058be]" />
            <div className="flex items-start justify-between pl-1">
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="bg-[#000412] text-white text-[10px] font-bold px-2 py-0.5 rounded">
                    CS301
                  </span>
                  <span className="text-[11px] text-[#0058be] font-bold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0058be] animate-ping" />
                    Starts in 15m
                  </span>
                </div>
                <h4 className="text-base font-bold text-[#0b1c30] mt-1">Distributed Systems</h4>
                <p className="text-xs text-[#44474d] mt-0.5">Year 3 • Section A • 62 Enrolled Students</p>
              </div>
              <div className="text-right">
                <span className="text-sm font-bold text-[#0b1c30] block">09:30 AM</span>
                <span className="text-xs text-[#75777e]">Hall 402</span>
              </div>
            </div>

            {/* Attendance Trigger Hub */}
            <div className="mt-3 pt-3 bg-[#eff4ff] -mx-4 -mb-4 p-3 rounded-b-2xl flex flex-col gap-2.5">
              <div className="flex items-center justify-between text-[#44474d] text-[11px]">
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px] text-[#0058be]">pin_drop</span>
                  Geo-fence beacon active in Hall 402
                </span>
                <span className="text-[#009969] font-bold">Ready for Sync</span>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={onOpenRollCall}
                  className="h-10 rounded-xl bg-[#000412] hover:bg-[#0f1e36] text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm active:scale-[0.98] transition-transform"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[18px]">how_to_reg</span>
                  <span>Mark Roll Call</span>
                </button>
                <button
                  onClick={onOpenClassroomQr}
                  className="h-10 rounded-xl bg-[#dce9ff] hover:bg-[#c5d8ff] text-[#004395] text-xs font-bold flex items-center justify-center gap-1.5 active:scale-[0.98] transition-transform"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[18px]">qr_code_scanner</span>
                  <span>Classroom QR</span>
                </button>
              </div>
            </div>
          </div>

          {/* Lecture 2: Afternoon session */}
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-[#dce9ff]/60 relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#c5c6ce]" />
            <div className="flex items-start justify-between pl-1">
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="bg-[#dce9ff] text-[#44474d] text-[10px] font-bold px-2 py-0.5 rounded">
                    CS502
                  </span>
                  <span className="text-[11px] text-[#75777e]">Postgrad M.Tech</span>
                </div>
                <h4 className="text-sm font-bold text-[#0b1c30] mt-1">Advanced Cloud Architecture</h4>
                <p className="text-xs text-[#44474d] mt-0.5">28 Registered • Distributed Computing Lab</p>
              </div>
              <div className="text-right">
                <span className="text-sm font-bold text-[#0b1c30] block">02:00 PM</span>
                <span className="text-xs text-[#75777e]">Room 108</span>
              </div>
            </div>

            <div className="mt-3 pt-2 border-t border-[#eff4ff] flex items-center justify-between text-[#75777e] text-xs">
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px] text-[#75777e]">description</span>
                Kubernetes Handout v2.1 uploaded
              </span>
              <button
                onClick={() => onShowToast('Opening Advanced Cloud Architecture Syllabus (PDF)', 'file_open')}
                className="text-[#0058be] font-bold text-[11px] flex items-center hover:underline"
                type="button"
              >
                View Syllabus
                <span className="material-symbols-outlined text-[16px]">chevron_right</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Grading Evaluation Queue */}
      <section>
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[20px] text-[#0058be]">assignment_turned_in</span>
            <h3 className="text-sm font-bold text-[#0b1c30]">Grading Queue</h3>
          </div>
          <button
            onClick={() => onShowToast('42 total submissions queued across CS301 & CS502', 'info')}
            className="text-[11px] text-[#0058be] font-bold hover:underline"
            type="button"
          >
            View All (42)
          </button>
        </div>

        <div className="flex flex-col gap-3">
          {/* Item 1: In progress with progress bar */}
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-[#dce9ff]/60">
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#e5eeff] text-[#0058be]">
                    CS301
                  </span>
                  <span className="text-[11px] text-[#ba1a1a] font-bold">Due in 2 days</span>
                </div>
                <h4 className="text-sm font-bold text-[#0b1c30] mt-1">Assignment 3: RPC & Message Queues</h4>
              </div>
              <span className="text-sm font-bold text-[#0b1c30] tnum">
                {gradedCount}
                <span className="text-xs text-[#75777e] font-normal">/62</span>
              </span>
            </div>

            {/* Progress meter bar */}
            <div className="w-full bg-[#eff4ff] h-2 rounded-full mt-3 overflow-hidden flex">
              <div
                className="bg-[#0058be] h-full rounded-full transition-all duration-500"
                style={{ width: `${(gradedCount / 62) * 100}%` }}
              />
            </div>

            <div className="mt-3 flex items-center justify-between pt-1">
              <span className="text-xs text-[#75777e]">
                {62 - gradedCount} remaining • Median score: 88.5
              </span>
              <button
                onClick={handleContinueGrading}
                className="h-9 px-3 rounded-xl bg-[#0058be] hover:bg-[#004395] text-white text-xs font-bold flex items-center gap-1 shadow-sm active:scale-95 transition-transform"
                type="button"
              >
                <span>Continue Grading</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </button>
            </div>
          </div>

          {/* Item 2: Milestone item */}
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-[#dce9ff]/60 flex items-center justify-between">
            <div className="min-w-0 pr-3">
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#dce9ff] text-[#44474d]">
                  CS502
                </span>
                <span className="text-[11px] text-[#75777e]">Capstone Project</span>
              </div>
              <h4 className="text-sm font-bold text-[#0b1c30] mt-1 truncate">Research Project Milestone 1</h4>
              <p className="text-xs text-[#75777e] mt-0.5">14 submissions pending code review</p>
            </div>
            <button
              onClick={() => onShowToast('Opening Capstone Project Milestone evaluation rubrics', 'visibility')}
              className="h-9 px-3.5 rounded-xl bg-[#eff4ff] hover:bg-[#dce9ff] text-[#0b1c30] text-xs font-bold shrink-0 flex items-center gap-1 transition-colors"
              type="button"
            >
              <span>Evaluate</span>
              <span className="material-symbols-outlined text-[16px]">visibility</span>
            </button>
          </div>
        </div>
      </section>

      {/* Student Leave & Exception Approvals Section */}
      <section>
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[20px] text-[#ba1a1a]">pending_actions</span>
            <h3 className="text-sm font-bold text-[#0b1c30]">Leave & Duty Requests</h3>
          </div>
          <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-[#ffdad6] text-[#ba1a1a]">
            {requests.length} Actions Required
          </span>
        </div>

        {requests.length === 0 ? (
          <div className="bg-white rounded-2xl p-6 text-center border border-[#dce9ff]/60 text-xs text-[#75777e]">
            <span className="material-symbols-outlined text-[32px] text-[#009969] mb-1">check_circle</span>
            <div className="font-bold text-[#0b1c30]">All requests reviewed</div>
            <p className="mt-0.5">No pending leave or duty exemption items in your queue.</p>
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            {requests.map((req) => (
              <div
                key={req.id}
                className="bg-white rounded-2xl p-4 shadow-sm border border-[#dce9ff]/60 transition-all"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3">
                    <img
                      className="w-10 h-10 rounded-full object-cover shrink-0 bg-[#e5eeff] ring-1 ring-[#dce9ff]"
                      alt={req.studentName}
                      src={req.avatar}
                    />
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h4 className="text-xs font-bold text-[#0b1c30]">{req.studentName}</h4>
                        <span className="text-[11px] text-[#75777e]">({req.rollNo})</span>
                      </div>
                      <p className="text-xs text-[#44474d]">{req.type} • {req.course}</p>
                      <div className="flex items-center gap-1.5 mt-1 text-[#44474d] text-[11px]">
                        <span className="material-symbols-outlined text-[15px] text-[#ba1a1a]">
                          {req.type === 'Sick Leave' ? 'medical_services' : 'sports_soccer'}
                        </span>
                        <span>{req.dateRange} • {req.documentNote}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-end gap-2 mt-3 pt-2 border-t border-[#eff4ff]">
                  <button
                    onClick={() => handleDismissRequest(req.id, 'Declined')}
                    className="h-8 px-3 rounded-lg bg-[#eff4ff] hover:bg-[#ffdad6] text-[#ba1a1a] text-xs font-semibold active:scale-95 transition-all"
                    type="button"
                  >
                    Decline
                  </button>

                  {req.type === 'Athletic On-Duty Exemption' ? (
                    <button
                      onClick={() => onOpenDocReview(req)}
                      className="h-8 px-4 rounded-lg bg-[#0058be] hover:bg-[#004395] text-white text-xs font-bold flex items-center gap-1 shadow-sm active:scale-95 transition-all"
                      type="button"
                    >
                      <span className="material-symbols-outlined text-[15px]">visibility</span>
                      Review Document
                    </button>
                  ) : (
                    <button
                      onClick={() => handleDismissRequest(req.id, 'Approved')}
                      className="h-8 px-4 rounded-lg bg-[#000412] hover:bg-[#0f1e36] text-white text-xs font-bold shadow-sm active:scale-95 flex items-center gap-1 transition-all"
                      type="button"
                    >
                      <span className="material-symbols-outlined text-[16px]">check</span>
                      Approve
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Broadcast Announcement Banner CTA */}
      <section>
        <div className="bg-[#e5eeff] rounded-2xl p-4 flex items-center justify-between gap-3 shadow-sm border border-[#dce9ff]">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-[#000412] text-white flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[24px]">campaign</span>
            </div>
            <div className="min-w-0">
              <h4 className="text-sm font-bold text-[#0b1c30]">Urgent Class Broadcast</h4>
              <p className="text-xs text-[#44474d] leading-snug mt-0.5">
                Post an emergency update, lab room change, or deadline extension
              </p>
            </div>
          </div>
          <button
            onClick={onOpenBroadcast}
            className="h-9 px-4 rounded-xl bg-[#000412] hover:bg-[#0f1e36] text-white text-xs font-bold shrink-0 active:scale-95 shadow-sm flex items-center gap-1 transition-all"
            type="button"
          >
            <span>Post</span>
            <span className="material-symbols-outlined text-[16px]">send</span>
          </button>
        </div>
      </section>
    </div>
  );
};
