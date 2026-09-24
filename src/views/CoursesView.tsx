import React, { useState } from 'react';
import { COURSE_MATERIALS } from '../mockData';

interface CoursesViewProps {
  onShowToast: (msg: string, icon?: string) => void;
}

export const CoursesView: React.FC<CoursesViewProps> = ({ onShowToast }) => {
  const [activeTab, setActiveTab] = useState<'courses' | 'materials' | 'archives'>('courses');
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearch, setShowSearch] = useState(false);

  const handleDownload = (fileName: string) => {
    onShowToast(`Downloading "${fileName}" to device...`, 'download');
  };

  return (
    <div className="flex flex-col w-full px-4 pb-28 pt-2 space-y-4">
      {/* Active Term Header & Search Pill */}
      <div className="flex items-center justify-between pt-1">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e5eeff] text-[#0058be] text-xs font-bold">
            <span className="w-2 h-2 rounded-full bg-[#0058be] animate-pulse" />
            Fall Semester 2024
          </span>
          <span className="text-[#75777e] text-[11px] uppercase tracking-wider font-bold">
            Active Term
          </span>
        </div>

        <button
          aria-label="Search syllabus"
          onClick={() => setShowSearch(!showSearch)}
          className="w-9 h-9 rounded-xl bg-[#eff4ff] text-[#44474d] hover:bg-[#dce9ff] flex items-center justify-center transition-colors"
          type="button"
        >
          <span className="material-symbols-outlined text-[20px]">search</span>
        </button>
      </div>

      {showSearch && (
        <div className="relative animate-in fade-in duration-150">
          <input
            type="text"
            placeholder="Search syllabus, notes, slides, instructors..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full h-11 pl-10 pr-4 rounded-xl bg-[#eff4ff] border border-[#dce9ff] text-xs text-[#0b1c30] placeholder:text-[#75777e] focus:outline-none focus:ring-2 focus:ring-[#0058be]"
          />
          <span className="material-symbols-outlined absolute left-3 top-3 text-[18px] text-[#75777e]">
            search
          </span>
        </div>
      )}

      {/* Segmented View Filter Tabs */}
      <div className="flex items-center p-1 bg-[#eff4ff] rounded-2xl gap-1 overflow-x-auto shadow-xs">
        <button
          onClick={() => setActiveTab('courses')}
          className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold text-center whitespace-nowrap transition-all ${
            activeTab === 'courses'
              ? 'bg-white text-[#0b1c30] shadow-sm'
              : 'text-[#44474d] hover:text-[#0b1c30]'
          }`}
          type="button"
        >
          Enrolled (5)
        </button>
        <button
          onClick={() => setActiveTab('materials')}
          className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold text-center whitespace-nowrap transition-all ${
            activeTab === 'materials'
              ? 'bg-white text-[#0b1c30] shadow-sm'
              : 'text-[#44474d] hover:text-[#0b1c30]'
          }`}
          type="button"
        >
          Materials & PDFs
        </button>
        <button
          onClick={() => setActiveTab('archives')}
          className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold text-center whitespace-nowrap transition-all ${
            activeTab === 'archives'
              ? 'bg-white text-[#0b1c30] shadow-sm'
              : 'text-[#44474d] hover:text-[#0b1c30]'
          }`}
          type="button"
        >
          Archives
        </button>
      </div>

      {/* Interactive Live TA & Forum Alert Card */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#0f1e36] to-[#2170e4] p-4 text-white shadow-md flex items-start gap-3">
        <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center flex-shrink-0 text-[#4edea3] backdrop-blur-sm">
          <span className="material-symbols-outlined text-[22px]">forum</span>
        </div>
        <div className="flex flex-col flex-1 min-w-0">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-[#4edea3] tracking-wide flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4edea3]" />
              Live Academic Assist
            </span>
            <span className="text-[10px] text-white bg-white/20 px-2 py-0.5 rounded-full font-bold">
              3 New
            </span>
          </div>
          <p className="text-xs text-white/90 mt-1 leading-snug">
            Live Q&A Forum has <strong className="font-bold text-white">3 instructor replies</strong>. TA Office Hours today at 4 PM in Lab 3.
          </p>
          <div className="flex items-center gap-4 mt-2.5 pt-1">
            <button
              onClick={() => onShowToast('Connecting to CS301 TA Live Discord/Matrix Room...', 'forum')}
              className="inline-flex items-center gap-1 text-xs text-white font-bold hover:underline"
              type="button"
            >
              <span>Join Room</span>
              <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
            </button>
            <button
              onClick={() => onShowToast('Office Hour appointment slot reserved with TA Ethan (Lab 3).', 'event_available')}
              className="inline-flex items-center gap-1 text-xs text-[#d8e2ff] hover:text-white transition-colors"
              type="button"
            >
              <span className="material-symbols-outlined text-[14px]">calendar_clock</span>
              <span>Book Slot</span>
            </button>
          </div>
        </div>
      </div>

      {/* Primary Active Courses Section */}
      {activeTab !== 'materials' && (
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-bold text-[#0b1c30]">Registered Classes</h2>
            <span className="text-[11px] font-bold text-[#0058be] uppercase tracking-wider">
              14 Credits
            </span>
          </div>

          {/* Course Card 1: CS301 */}
          <div className="relative bg-white rounded-2xl p-4 shadow-sm border border-[#dce9ff]/60 flex flex-col gap-3 overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0058be]" />
            <div className="flex items-start justify-between pl-1 gap-2">
              <div className="flex items-start gap-3 min-w-0">
                <div className="w-11 h-11 rounded-xl bg-[#e5eeff] flex items-center justify-center text-[#0058be] font-bold text-sm flex-shrink-0">
                  CS
                </div>
                <div className="flex flex-col min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] font-bold text-[#0058be] bg-[#e5eeff] px-2 py-0.5 rounded">
                      CS301
                    </span>
                    <span className="text-[11px] text-[#75777e] font-medium">4 Credits</span>
                  </div>
                  <h3 className="text-sm font-bold text-[#0b1c30] truncate mt-1">Distributed Systems</h3>
                  <p className="text-xs text-[#44474d] flex items-center gap-1 mt-0.5">
                    <span className="material-symbols-outlined text-[14px] text-[#75777e]">account_circle</span>
                    Prof. Julian Vance
                  </p>
                </div>
              </div>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#eff4ff] text-[#0b1c30] text-xs font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4edea3]" />
                72%
              </span>
            </div>

            {/* Syllabus Progress & Next Topic */}
            <div className="bg-[#eff4ff] rounded-xl p-2.5 ml-1 flex flex-col gap-1.5">
              <div className="flex items-center justify-between text-xs text-[#44474d]">
                <span className="font-semibold text-[#0b1c30]">Next: Module 4: Paxos & Raft Consensus</span>
                <span className="text-[11px] text-[#75777e]">Syllabus (18/25)</span>
              </div>
              <div className="w-full h-1.5 bg-[#dce9ff] rounded-full overflow-hidden">
                <div className="h-full bg-[#0058be] rounded-full" style={{ width: '72%' }} />
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex items-center gap-2 ml-1 pt-1">
              <button
                onClick={() => onShowToast('Opening CS301 Full Interactive Syllabus', 'menu_book')}
                className="flex-1 py-2 px-3 rounded-xl bg-[#e5eeff] hover:bg-[#dce9ff] text-[#0058be] text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
                type="button"
              >
                <span className="material-symbols-outlined text-[16px]">menu_book</span>
                Open Syllabus
              </button>
              <button
                onClick={() => onShowToast('14 Lecture Slide Decks available in cloud storage.', 'slideshow')}
                className="flex-1 py-2 px-3 rounded-xl bg-[#eff4ff] hover:bg-[#e5eeff] text-[#0b1c30] text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
                type="button"
              >
                <span className="material-symbols-outlined text-[16px]">slideshow</span>
                Slides (14)
              </button>
            </div>
          </div>

          {/* Course Card 2: AI304 */}
          <div className="relative bg-white rounded-2xl p-4 shadow-sm border border-[#dce9ff]/60 flex flex-col gap-3 overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#002416]" />
            <div className="flex items-start justify-between pl-1 gap-2">
              <div className="flex items-start gap-3 min-w-0">
                <div className="w-11 h-11 rounded-xl bg-[#e5eeff] flex items-center justify-center text-[#0f1e36] font-bold text-sm flex-shrink-0">
                  AI
                </div>
                <div className="flex flex-col min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] font-bold text-[#0058be] bg-[#e5eeff] px-2 py-0.5 rounded">
                      AI304
                    </span>
                    <span className="text-[11px] text-[#75777e] font-medium">4 Credits</span>
                  </div>
                  <h3 className="text-sm font-bold text-[#0b1c30] truncate mt-1">Deep Learning Foundations</h3>
                  <p className="text-xs text-[#44474d] flex items-center gap-1 mt-0.5">
                    <span className="material-symbols-outlined text-[14px] text-[#75777e]">account_circle</span>
                    Dr. Elena Thorne
                  </p>
                </div>
              </div>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#eff4ff] text-[#0b1c30] text-xs font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0058be]" />
                65%
              </span>
            </div>

            <div className="bg-[#eff4ff] rounded-xl p-2.5 ml-1 flex flex-col gap-1.5">
              <div className="flex items-center justify-between text-xs text-[#44474d]">
                <span className="font-semibold text-[#0b1c30]">Next: Attention & Transformers</span>
                <span className="text-[11px] text-[#75777e]">Syllabus (13/20)</span>
              </div>
              <div className="w-full h-1.5 bg-[#dce9ff] rounded-full overflow-hidden">
                <div className="h-full bg-[#0058be] rounded-full" style={{ width: '65%' }} />
              </div>
            </div>

            <div className="flex items-center gap-2 ml-1 pt-1">
              <button
                onClick={() => onShowToast('Deep Learning problem sets & PyTorch labs opened.', 'assignment')}
                className="flex-1 py-2 px-3 rounded-xl bg-[#e5eeff] hover:bg-[#dce9ff] text-[#0058be] text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
                type="button"
              >
                <span className="material-symbols-outlined text-[16px]">assignment</span>
                Coursework
              </button>
              <button
                onClick={() => onShowToast('HuggingFace & ImageNet dataset bucket mirrors linked.', 'database')}
                className="flex-1 py-2 px-3 rounded-xl bg-[#eff4ff] hover:bg-[#e5eeff] text-[#0b1c30] text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
                type="button"
              >
                <span className="material-symbols-outlined text-[16px]">database</span>
                Dataset Links
              </button>
            </div>
          </div>

          {/* Compact Course Cards Duo */}
          <div className="grid grid-cols-1 gap-3">
            {/* CS308 */}
            <div className="relative bg-white rounded-2xl p-4 shadow-sm border border-[#dce9ff]/60 flex flex-col gap-2 overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#2170e4]" />
              <div className="flex items-start justify-between pl-1">
                <div className="flex flex-col min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] font-bold text-[#0058be] bg-[#e5eeff] px-2 py-0.5 rounded">
                      CS308
                    </span>
                    <span className="text-[11px] text-[#75777e]">3 Credits</span>
                  </div>
                  <h4 className="text-sm font-bold text-[#0b1c30] truncate mt-1">Database Engineering & Indexing</h4>
                  <p className="text-xs text-[#44474d]">Prof. R. Patel</p>
                </div>
                <span className="text-xs font-bold text-[#0b1c30] bg-[#eff4ff] px-2.5 py-1 rounded-full">
                  80%
                </span>
              </div>
              <div className="w-full h-1.5 bg-[#dce9ff] rounded-full overflow-hidden ml-1">
                <div className="h-full bg-[#0058be] rounded-full" style={{ width: '80%' }} />
              </div>
            </div>

            {/* MAT204 */}
            <div className="relative bg-white rounded-2xl p-4 shadow-sm border border-[#dce9ff]/60 flex flex-col gap-2 overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#75777e]" />
              <div className="flex items-start justify-between pl-1">
                <div className="flex flex-col min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] font-bold text-[#0058be] bg-[#e5eeff] px-2 py-0.5 rounded">
                      MAT204
                    </span>
                    <span className="text-[11px] text-[#75777e]">3 Credits</span>
                  </div>
                  <h4 className="text-sm font-bold text-[#0b1c30] truncate mt-1">Applied Probability</h4>
                  <p className="text-xs text-[#44474d]">Dr. S. Chen</p>
                </div>
                <span className="text-xs font-bold text-[#0b1c30] bg-[#eff4ff] px-2.5 py-1 rounded-full">
                  54%
                </span>
              </div>
              <div className="w-full h-1.5 bg-[#dce9ff] rounded-full overflow-hidden ml-1">
                <div className="h-full bg-[#0058be] rounded-full" style={{ width: '54%' }} />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Course Materials & File Hub */}
      <div className="flex flex-col gap-3 pt-1">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[20px] text-[#0058be]">folder_zip</span>
            <h2 className="text-base font-bold text-[#0b1c30]">Recent Academic Files</h2>
          </div>
          <button
            onClick={() => onShowToast('Showing all 42 syllabus documents and slides repository.', 'folder')}
            className="text-[11px] font-bold text-[#0058be] hover:underline"
            type="button"
          >
            View All (42)
          </button>
        </div>

        {/* Downloadable Files List */}
        <div className="flex flex-col gap-1.5 bg-white rounded-2xl p-2 shadow-sm border border-[#dce9ff]/60">
          {COURSE_MATERIALS.map((file) => (
            <div
              key={file.id}
              className="flex items-center justify-between p-2.5 hover:bg-[#eff4ff] rounded-xl transition-colors group cursor-pointer"
              onClick={() => handleDownload(file.title)}
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                  file.fileType === 'pdf'
                    ? 'bg-[#ffdad6] text-[#ba1a1a]'
                    : 'bg-[#dce9ff] text-[#0058be]'
                }`}>
                  <span className="material-symbols-outlined text-[20px]">
                    {file.fileType === 'pdf' ? 'picture_as_pdf' : 'inventory_2'}
                  </span>
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-xs font-bold text-[#0b1c30] truncate group-hover:text-[#0058be] transition-colors">
                    {file.title}
                  </span>
                  <div className="flex items-center gap-1.5 text-[11px] text-[#75777e]">
                    <span className="font-semibold text-[#44474d]">{file.courseCode}</span>
                    <span>•</span>
                    <span>{file.fileSize}</span>
                    <span>•</span>
                    <span>{file.date}</span>
                  </div>
                </div>
              </div>

              <button
                aria-label={`Download ${file.title}`}
                onClick={(e) => {
                  e.stopPropagation();
                  handleDownload(file.title);
                }}
                className="w-9 h-9 flex items-center justify-center rounded-lg text-[#75777e] hover:text-[#0058be] hover:bg-[#e5eeff] transition-all flex-shrink-0"
                type="button"
              >
                <span className="material-symbols-outlined text-[20px]">download</span>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Administrative Actions Shelf */}
      <div className="grid grid-cols-2 gap-3 pt-1">
        <div
          onClick={() => onShowToast('3 Books on reserve in Bodleian: Pick up before 6 PM.', 'bookmark')}
          className="bg-white rounded-2xl p-3.5 shadow-sm border border-[#dce9ff]/60 flex items-center gap-3 cursor-pointer hover:shadow-md transition-shadow"
        >
          <div className="w-9 h-9 rounded-xl bg-[#e5eeff] flex items-center justify-center text-[#0058be] flex-shrink-0">
            <span className="material-symbols-outlined text-[20px]">bookmark_add</span>
          </div>
          <div className="flex flex-col min-w-0">
            <span className="text-[11px] text-[#75777e]">Library Reserve</span>
            <span className="text-xs font-bold text-[#0b1c30] truncate">3 Holds Ready</span>
          </div>
        </div>

        <div
          onClick={() => onShowToast('Academic standing verified: Dean’s List honor roll clearance.', 'verified_user')}
          className="bg-white rounded-2xl p-3.5 shadow-sm border border-[#dce9ff]/60 flex items-center gap-3 cursor-pointer hover:shadow-md transition-shadow"
        >
          <div className="w-9 h-9 rounded-xl bg-[#e5eeff] flex items-center justify-center text-[#0058be] flex-shrink-0">
            <span className="material-symbols-outlined text-[20px]">verified_user</span>
          </div>
          <div className="flex flex-col min-w-0">
            <span className="text-[11px] text-[#75777e]">Audit Status</span>
            <span className="text-xs font-bold text-[#0b1c30] truncate">Clear & In Good</span>
          </div>
        </div>
      </div>
    </div>
  );
};
