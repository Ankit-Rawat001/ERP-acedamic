import React, { useState } from 'react';

interface AttendanceViewProps {
  onShowToast: (msg: string, icon?: string) => void;
}

export const AttendanceView: React.FC<AttendanceViewProps> = ({ onShowToast }) => {
  const [showCorrectionModal, setShowCorrectionModal] = useState(false);
  const [reason, setReason] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('CS308');

  const handleCorrectionSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowCorrectionModal(false);
    onShowToast(`Attendance review request for ${selectedCourse} submitted to Dean of Academics.`, 'task_alt');
  };

  const handleDownloadTranscript = () => {
    onShowToast('Official Signed Academic Transcript PDF queued for download.', 'description');
  };

  return (
    <div className="flex flex-col w-full px-4 space-y-4 pb-28 pt-2">
      {/* Status Delight Pill Banner */}
      <div className="flex items-center justify-between bg-[#eff4ff] rounded-2xl p-3.5 shadow-sm border border-[#dce9ff]">
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="w-8 h-8 rounded-full bg-[#dce9ff] flex items-center justify-center text-[#0058be] shrink-0">
            <span className="material-symbols-outlined text-[18px]">verified</span>
          </div>
          <div className="flex flex-col min-w-0">
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-bold text-[#0b1c30]">Fall Semester 2024</span>
              <span className="inline-flex items-center px-2 py-0.2 rounded-full bg-[#dce9ff] text-[#0058be] text-[10px] font-bold">
                Week 11
              </span>
            </div>
            <span className="text-[11px] text-[#44474d] truncate">Debarment status: Safe & Verified</span>
          </div>
        </div>
        <div className="flex items-center bg-[#d8ed71] text-[#181e00] px-3 py-1 rounded-full text-[11px] font-bold shrink-0 shadow-xs">
          <span className="w-1.5 h-1.5 rounded-full bg-[#009969] mr-1.5 animate-pulse" />
          Good Standing
        </div>
      </div>

      {/* Key Academic Metrics Bento */}
      <div className="grid grid-cols-2 gap-3">
        {/* Attendance Overview Card */}
        <div className="col-span-2 bg-white rounded-2xl p-4 shadow-sm border border-[#dce9ff]/60 flex flex-col justify-between relative overflow-hidden">
          <div className="flex items-start justify-between">
            <div>
              <span className="text-[11px] text-[#75777e] uppercase tracking-wider font-semibold">
                Overall Attendance
              </span>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-3xl font-extrabold text-[#0b1c30] tracking-tight tnum">88.4%</span>
                <span className="text-xs text-[#009969] font-bold">Above 75% Rule</span>
              </div>
            </div>

            {/* Circular Progress Ring SVG */}
            <div className="relative w-14 h-14 shrink-0 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                <path
                  className="text-[#eff4ff]"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3.5"
                />
                <path
                  className="text-[#0058be]"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="currentColor"
                  strokeDasharray="88.4, 100"
                  strokeLinecap="round"
                  strokeWidth="3.5"
                />
              </svg>
              <span className="material-symbols-outlined text-[20px] text-[#0058be] absolute">school</span>
            </div>
          </div>

          {/* Quick Class Breakdown Grid */}
          <div className="grid grid-cols-4 gap-1 pt-3 mt-3 bg-[#eff4ff] rounded-xl p-2.5">
            <div className="flex flex-col items-center text-center">
              <span className="text-[10px] text-[#75777e] font-medium">Conducted</span>
              <span className="text-sm font-bold text-[#0b1c30] mt-0.5 tnum">182</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-[10px] text-[#75777e] font-medium">Attended</span>
              <span className="text-sm font-bold text-[#0058be] mt-0.5 tnum">161</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-[10px] text-[#75777e] font-medium">Excused</span>
              <span className="text-sm font-bold text-[#44474d] mt-0.5 tnum">8</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-[10px] text-[#75777e] font-medium">Absent</span>
              <span className="text-sm font-bold text-[#ba1a1a] mt-0.5 tnum">13</span>
            </div>
          </div>
        </div>

        {/* Projected SGPA Card */}
        <div className="bg-white rounded-2xl p-3.5 shadow-sm border border-[#dce9ff]/60 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-[11px] text-[#75777e] uppercase tracking-wide font-semibold">Sem SGPA</span>
            <span className="material-symbols-outlined text-[18px] text-[#0058be]">trending_up</span>
          </div>
          <div className="my-1.5">
            <span className="text-2xl font-extrabold text-[#0b1c30] tnum">3.82</span>
            <span className="text-[11px] text-[#75777e] block">Target: 3.75+</span>
          </div>
          <div className="w-full bg-[#eff4ff] h-1.5 rounded-full overflow-hidden">
            <div className="bg-[#0058be] h-full rounded-full" style={{ width: '95.5%' }} />
          </div>
        </div>

        {/* CGPA & Honors Card */}
        <div className="bg-white rounded-2xl p-3.5 shadow-sm border border-[#dce9ff]/60 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-[11px] text-[#75777e] uppercase tracking-wide font-semibold">Cumulative</span>
            <span className="material-symbols-outlined text-[18px] text-[#009969]">workspace_premium</span>
          </div>
          <div className="my-1.5">
            <span className="text-2xl font-extrabold text-[#0b1c30] tnum">3.84</span>
            <span className="text-[11px] text-[#009969] font-bold truncate block">Dean's Honors List</span>
          </div>
          <div className="w-full bg-[#eff4ff] h-1.5 rounded-full overflow-hidden">
            <div className="bg-[#2170e4] h-full rounded-full" style={{ width: '96%' }} />
          </div>
        </div>
      </div>

      {/* Interactive Course Breakdown Section */}
      <div className="flex flex-col space-y-2">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-bold text-[#0b1c30]">Subject Ledger</h2>
          <span className="text-xs font-bold text-[#0058be]">4 Courses</span>
        </div>

        {/* Course Card 1: CS301 */}
        <div className="bg-white rounded-2xl p-3.5 shadow-sm border border-[#dce9ff]/60 flex flex-col space-y-2 hover:shadow-md transition-all">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-9 h-9 rounded-xl bg-[#dce9ff] flex items-center justify-center text-[#0058be] font-bold text-xs shrink-0">
                CS
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-xs font-bold text-[#0b1c30] truncate">Distributed Systems</span>
                <span className="text-[11px] text-[#75777e]">CS301 • 4 Credits</span>
              </div>
            </div>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-[#d8ed71] text-[#181e00] text-xs font-bold shrink-0">
              92%
            </span>
          </div>
          <div className="space-y-1">
            <div className="w-full bg-[#eff4ff] h-2 rounded-full overflow-hidden flex">
              <div className="bg-[#0058be] h-full rounded-full" style={{ width: '92.5%' }} />
            </div>
            <div className="flex items-center justify-between text-[11px] text-[#75777e]">
              <span>37 of 40 Sessions</span>
              <span className="text-[#009969] font-bold">Safe: Can miss 6 more</span>
            </div>
          </div>
        </div>

        {/* Course Card 2: MAT204 */}
        <div className="bg-white rounded-2xl p-3.5 shadow-sm border border-[#dce9ff]/60 flex flex-col space-y-2 hover:shadow-md transition-all">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-9 h-9 rounded-xl bg-[#dce9ff] flex items-center justify-center text-[#0058be] font-bold text-xs shrink-0">
                MA
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-xs font-bold text-[#0b1c30] truncate">Applied Probability</span>
                <span className="text-[11px] text-[#75777e]">MAT204 • 3 Credits</span>
              </div>
            </div>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-[#d8ed71] text-[#181e00] text-xs font-bold shrink-0">
              95%
            </span>
          </div>
          <div className="space-y-1">
            <div className="w-full bg-[#eff4ff] h-2 rounded-full overflow-hidden flex">
              <div className="bg-[#0058be] h-full rounded-full" style={{ width: '95%' }} />
            </div>
            <div className="flex items-center justify-between text-[11px] text-[#75777e]">
              <span>38 of 40 Sessions</span>
              <span className="text-[#0058be] font-bold">Cohort Benchmark Top 5%</span>
            </div>
          </div>
        </div>

        {/* Course Card 3: AI304 */}
        <div className="bg-white rounded-2xl p-3.5 shadow-sm border border-[#dce9ff]/60 flex flex-col space-y-2 hover:shadow-md transition-all">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-9 h-9 rounded-xl bg-[#dce9ff] flex items-center justify-center text-[#0058be] font-bold text-xs shrink-0">
                AI
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-xs font-bold text-[#0b1c30] truncate">Deep Learning</span>
                <span className="text-[11px] text-[#75777e]">AI304 • 4 Credits</span>
              </div>
            </div>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-[#eff4ff] text-[#0b1c30] text-xs font-bold shrink-0">
              85%
            </span>
          </div>
          <div className="space-y-1">
            <div className="w-full bg-[#eff4ff] h-2 rounded-full overflow-hidden flex">
              <div className="bg-[#2170e4] h-full rounded-full" style={{ width: '85%' }} />
            </div>
            <div className="flex items-center justify-between text-[11px] text-[#75777e]">
              <span>34 of 40 Sessions</span>
              <span>Status: Steady</span>
            </div>
          </div>
        </div>

        {/* Course Card 4: CS308 (Warning State) */}
        <div className="bg-white rounded-2xl p-3.5 shadow-sm border border-[#ffdad6] flex flex-col space-y-2 hover:shadow-md transition-all">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-9 h-9 rounded-xl bg-[#ffdad6] flex items-center justify-center text-[#ba1a1a] font-bold text-xs shrink-0">
                DB
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-xs font-bold text-[#0b1c30] truncate">Database Engineering</span>
                <span className="text-[11px] text-[#75777e]">CS308 • 3 Credits</span>
              </div>
            </div>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-[#ffdad6] text-[#ba1a1a] text-xs font-bold shrink-0">
              76.3%
            </span>
          </div>
          <div className="space-y-1">
            <div className="w-full bg-[#eff4ff] h-2 rounded-full overflow-hidden flex">
              <div className="bg-[#ba1a1a] h-full rounded-full" style={{ width: '76.3%' }} />
            </div>
            <div className="flex items-center justify-between text-[11px]">
              <span className="text-[#75777e]">29 of 38 Sessions</span>
              <span className="text-[#ba1a1a] font-bold">Near 75% limit</span>
            </div>
          </div>

          {/* Actionable Warning Box */}
          <div className="bg-[#eff4ff] rounded-xl p-2.5 flex items-start gap-2 mt-1">
            <span className="material-symbols-outlined text-[#ba1a1a] text-[18px] shrink-0 mt-0.5">warning</span>
            <p className="text-xs text-[#0b1c30] leading-tight">
              Attention required: You must attend the next <strong>4 consecutive lectures</strong> to safely raise standing back to 80%.
            </p>
          </div>
        </div>
      </div>

      {/* Academic Performance & Transcript Snapshot */}
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-[#dce9ff]/60 flex flex-col space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <h3 className="text-sm font-bold text-[#0b1c30]">Curriculum Progress</h3>
            <span className="text-[11px] text-[#75777e]">Degree Requirements • B.S. Computer Science</span>
          </div>
          <span className="material-symbols-outlined text-[#0058be]">bar_chart</span>
        </div>

        {/* Credit Hours Meter */}
        <div className="space-y-1">
          <div className="flex justify-between text-xs font-semibold">
            <span className="text-[#0b1c30]">Credits Completed: 112 / 160</span>
            <span className="text-[#0058be] font-bold">70.0%</span>
          </div>
          <div className="w-full bg-[#eff4ff] h-2 rounded-full overflow-hidden flex">
            <div className="bg-[#0058be] h-full rounded-full" style={{ width: '70%' }} />
          </div>
        </div>

        {/* Grade Spectrum Chart Mockup */}
        <div className="pt-2">
          <span className="text-[11px] text-[#75777e] uppercase tracking-wider font-semibold block mb-2">
            Grading Distribution
          </span>
          <div className="flex items-end gap-2 h-20 w-full pt-1">
            {/* Grade A */}
            <div className="flex-1 flex flex-col items-center gap-1 h-full justify-end">
              <span className="text-[10px] font-bold text-[#0b1c30]">4</span>
              <div className="w-full bg-[#0058be] rounded-t-md h-full max-h-[85%]" />
              <span className="text-[10px] text-[#75777e] font-semibold">A / A-</span>
            </div>
            {/* Grade B */}
            <div className="flex-1 flex flex-col items-center gap-1 h-full justify-end">
              <span className="text-[10px] font-bold text-[#0b1c30]">1</span>
              <div className="w-full bg-[#2170e4] rounded-t-md h-full max-h-[25%]" />
              <span className="text-[10px] text-[#75777e] font-semibold">B+</span>
            </div>
            {/* Grade C */}
            <div className="flex-1 flex flex-col items-center gap-1 h-full justify-end">
              <span className="text-[10px] font-bold text-[#0b1c30]">0</span>
              <div className="w-full bg-[#dce9ff] rounded-t-md h-1" />
              <span className="text-[10px] text-[#75777e]">C</span>
            </div>
            {/* Grade Other */}
            <div className="flex-1 flex flex-col items-center gap-1 h-full justify-end">
              <span className="text-[10px] font-bold text-[#0b1c30]">0</span>
              <div className="w-full bg-[#dce9ff] rounded-t-md h-1" />
              <span className="text-[10px] text-[#75777e]">P/F</span>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Attendance Event Stream */}
      <div className="flex flex-col space-y-2">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-bold text-[#0b1c30]">Live Check-in History</h2>
          <button
            onClick={() => onShowToast('Showing full semester attendance logs (182 sessions).', 'history')}
            className="text-xs font-bold text-[#0058be] hover:underline"
            type="button"
          >
            View All
          </button>
        </div>

        <div className="bg-white rounded-2xl divide-y divide-[#eff4ff] shadow-sm border border-[#dce9ff]/60 overflow-hidden">
          {/* Item 1: CS301 Today */}
          <div className="p-3.5 flex items-center justify-between">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-9 h-9 rounded-full bg-[#d8ed71] flex items-center justify-center text-[#181e00] shrink-0">
                <span className="material-symbols-outlined text-[18px]">bluetooth_connected</span>
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-xs font-bold text-[#0b1c30] truncate">CS301 • Distributed Systems</span>
                <span className="text-[11px] text-[#75777e]">Today, 09:30 AM • Smart Gateway 402</span>
              </div>
            </div>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-[#d8ed71] text-[#181e00] text-[11px] font-bold shrink-0">
              Present
            </span>
          </div>

          {/* Item 2: MAT204 Yesterday */}
          <div className="p-3.5 flex items-center justify-between">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-9 h-9 rounded-full bg-[#dce9ff] flex items-center justify-center text-[#0058be] shrink-0">
                <span className="material-symbols-outlined text-[18px]">nfc</span>
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-xs font-bold text-[#0b1c30] truncate">MAT204 • Applied Probability</span>
                <span className="text-[11px] text-[#75777e]">Yesterday, 02:00 PM • Hall B Terminal</span>
              </div>
            </div>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-[#eff4ff] text-[#0b1c30] text-[11px] font-bold shrink-0">
              Present
            </span>
          </div>

          {/* Item 3: CS308 Medical Approval */}
          <div className="p-3.5 flex items-center justify-between">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-9 h-9 rounded-full bg-[#e5eeff] flex items-center justify-center text-[#44474d] shrink-0">
                <span className="material-symbols-outlined text-[18px]">medical_services</span>
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-xs font-bold text-[#0b1c30] truncate">CS308 • Database Engineering</span>
                <span className="text-[11px] text-[#75777e]">Oct 14 • Clinic Slip #891A Approved</span>
              </div>
            </div>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-[#e5eeff] text-[#44474d] text-[11px] font-bold shrink-0">
              Excused
            </span>
          </div>
        </div>
      </div>

      {/* Action CTAs */}
      <div className="flex flex-col space-y-2 pt-1">
        <button
          onClick={() => setShowCorrectionModal(true)}
          className="w-full h-11 bg-[#000412] hover:bg-[#0f1e36] text-white text-xs font-bold rounded-xl flex items-center justify-center gap-2 shadow-sm active:scale-[0.99] transition-transform"
          type="button"
        >
          <span className="material-symbols-outlined text-[18px]">edit_calendar</span>
          <span>Request Attendance Correction / Leave</span>
        </button>

        <button
          onClick={handleDownloadTranscript}
          className="w-full h-11 bg-[#eff4ff] hover:bg-[#dce9ff] text-[#0058be] text-xs font-bold rounded-xl flex items-center justify-center gap-2 active:scale-[0.99] transition-transform"
          type="button"
        >
          <span className="material-symbols-outlined text-[18px]">download_for_offline</span>
          <span>Download Official Transcript (PDF)</span>
        </button>
      </div>

      {/* Correction Form Modal */}
      {showCorrectionModal && (
        <div className="fixed inset-0 z-50 bg-[#0b1c30]/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-5 shadow-2xl flex flex-col gap-4 animate-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between border-b border-[#eff4ff] pb-3">
              <h3 className="text-sm font-bold text-[#0b1c30]">Request Attendance Correction</h3>
              <button
                onClick={() => setShowCorrectionModal(false)}
                className="w-7 h-7 rounded-full bg-[#eff4ff] flex items-center justify-center text-[#44474d]"
              >
                <span className="material-symbols-outlined text-[16px]">close</span>
              </button>
            </div>

            <form onSubmit={handleCorrectionSubmit} className="flex flex-col gap-3">
              <div>
                <label className="text-xs font-semibold text-[#44474d] block mb-1">Target Subject</label>
                <select
                  value={selectedCourse}
                  onChange={(e) => setSelectedCourse(e.target.value)}
                  className="w-full h-10 px-3 rounded-xl bg-[#eff4ff] border border-[#dce9ff] text-xs font-semibold text-[#0b1c30]"
                >
                  <option value="CS308">CS308 - Database Engineering</option>
                  <option value="CS301">CS301 - Distributed Systems</option>
                  <option value="MAT204">MAT204 - Applied Probability</option>
                  <option value="AI304">AI304 - Deep Learning</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold text-[#44474d] block mb-1">Correction Reason & Proof</label>
                <textarea
                  required
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  placeholder="State reason: e.g. BLE scanner timeout in Hall 402, or attach University Clinic note."
                  rows={3}
                  className="w-full p-3 rounded-xl bg-[#eff4ff] border border-[#dce9ff] text-xs text-[#0b1c30] focus:outline-none focus:ring-2 focus:ring-[#0058be]"
                />
              </div>

              <div className="p-3 border border-dashed border-[#dce9ff] rounded-xl flex items-center justify-center gap-2 text-xs text-[#0058be] font-semibold cursor-pointer hover:bg-[#eff4ff]">
                <span className="material-symbols-outlined text-[18px]">attach_file</span>
                <span>Attach Medical/Duty Document (PDF/JPG)</span>
              </div>

              <div className="flex gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowCorrectionModal(false)}
                  className="flex-1 py-2.5 rounded-xl bg-[#eff4ff] text-xs font-semibold text-[#44474d]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2.5 rounded-xl bg-[#0058be] text-white text-xs font-bold shadow-sm"
                >
                  Submit Review
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
