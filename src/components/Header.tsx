import React, { useState } from 'react';
import { ASSETS, NOTIFICATIONS } from '../mockData';
import { TabType, UserRole } from '../types';

interface HeaderProps {
  currentTab: TabType;
  userRole: UserRole;
  onSelectTab: (tab: TabType) => void;
  onChangeRole: (role: UserRole) => void;
  onOpenClassroomVerification: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  userRole,
  onSelectTab,
  onChangeRole,
}) => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [notifications, setNotifications] = useState(NOTIFICATIONS);

  // Derive screen title based on currentTab
  const getHeaderTitle = () => {
    switch (currentTab) {
      case 'faculty-console':
        return 'Faculty Console';
      case 'courses-and-materials':
        return 'Courses & Materials';
      case 'attendance-and-grades':
        return 'Attendance & Grades';
      case 'identity-id-photo':
        return 'Student Hub';
      case 'student-hub':
      default:
        return 'Student Hub';
    }
  };

  const unreadCount = notifications.filter((n) => !n.read).length;

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  return (
    <header className="fixed top-0 w-full z-40 pt-safe bg-[#f8f9ff]/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(15,30,54,0.06)] border-b border-[#dce9ff]/40">
      <div className="h-16 px-4 max-w-xl mx-auto flex items-center justify-between">
        {/* Left: Crest & Title */}
        <div
          onClick={() => onSelectTab(userRole === 'faculty' ? 'faculty-console' : 'student-hub')}
          className="flex items-center gap-2 cursor-pointer select-none group"
        >
          <img
            alt="University Crest Logo"
            className="h-8 w-auto object-contain transition-transform group-hover:scale-105"
            src={ASSETS.universityCrest}
          />
          <div className="flex flex-col">
            <span className="text-[11px] font-semibold text-[#0058be] uppercase tracking-wider leading-none">
              Oxford Collegiate
            </span>
            <span className="text-[15px] font-bold text-[#0b1c30] leading-tight mt-0.5">
              {getHeaderTitle()}
            </span>
          </div>
        </div>

        {/* Right: Notification Bell & Profile Avatar */}
        <div className="flex items-center gap-1.5 relative">
          {/* Notification Button */}
          <button
            aria-label="Campus Notifications"
            onClick={() => {
              setShowNotifications(!showNotifications);
              setShowProfileMenu(false);
            }}
            className="relative w-10 h-10 flex items-center justify-center rounded-full text-[#44474d] hover:bg-[#e5eeff] transition-colors active:scale-95"
            type="button"
          >
            <span className="material-symbols-outlined text-[22px]">notifications</span>
            {unreadCount > 0 && (
              <span className="absolute top-2 right-2 w-2.5 h-2.5 rounded-full bg-[#ba1a1a] ring-2 ring-[#f8f9ff] animate-pulse" />
            )}
          </button>

          {/* Profile Avatar Button */}
          <button
            onClick={() => {
              setShowProfileMenu(!showProfileMenu);
              setShowNotifications(false);
            }}
            className="w-10 h-10 flex items-center justify-center pl-1 group"
            type="button"
            aria-label="User profile and switcher"
          >
            <img
              alt="Profile"
              className="w-8 h-8 rounded-full object-cover ring-2 ring-[#0058be]/25 group-hover:ring-[#0058be] transition-all"
              src={userRole === 'faculty' ? ASSETS.julianVance : ASSETS.sarahAvatar}
            />
          </button>

          {/* Notifications Dropdown Tray */}
          {showNotifications && (
            <div className="absolute top-12 right-0 w-80 bg-white rounded-2xl shadow-2xl border border-[#dce9ff] p-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
              <div className="flex items-center justify-between pb-2 border-b border-[#eff4ff]">
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[18px] text-[#0058be]">notifications</span>
                  <span className="text-xs font-bold text-[#0b1c30]">Campus Alerts</span>
                  {unreadCount > 0 && (
                    <span className="px-1.5 py-0.2 text-[10px] rounded-full bg-[#ffdad6] text-[#ba1a1a] font-semibold">
                      {unreadCount} new
                    </span>
                  )}
                </div>
                {unreadCount > 0 && (
                  <button
                    onClick={markAllAsRead}
                    className="text-[11px] text-[#0058be] hover:underline font-semibold"
                  >
                    Mark read
                  </button>
                )}
              </div>
              <div className="max-h-72 overflow-y-auto divide-y divide-[#eff4ff] py-1">
                {notifications.map((n) => (
                  <div
                    key={n.id}
                    className={`p-2.5 rounded-xl transition-colors ${
                      n.read ? 'hover:bg-[#f8f9ff]' : 'bg-[#e5eeff]/40 hover:bg-[#e5eeff]/70'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-0.5">
                      <span className="text-xs font-semibold text-[#0b1c30]">{n.title}</span>
                      <span className="text-[10px] text-[#75777e]">{n.time}</span>
                    </div>
                    <p className="text-[11px] text-[#44474d] leading-snug">{n.message}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Profile Role Menu */}
          {showProfileMenu && (
            <div className="absolute top-12 right-0 w-64 bg-white rounded-2xl shadow-2xl border border-[#dce9ff] p-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
              <div className="flex items-center gap-3 p-2 bg-[#f8f9ff] rounded-xl mb-2">
                <img
                  alt="Avatar"
                  className="w-10 h-10 rounded-full object-cover"
                  src={userRole === 'faculty' ? ASSETS.julianVance : ASSETS.sarahAvatar}
                />
                <div className="flex flex-col min-w-0">
                  <span className="text-xs font-bold text-[#0b1c30] truncate">
                    {userRole === 'faculty' ? 'Dr. Julian Vance' : 'Sarah J. Adams'}
                  </span>
                  <span className="text-[10px] text-[#44474d] truncate">
                    {userRole === 'faculty' ? 'Dept. of Computer Science' : 'B.Tech CS & AI · CS21B042'}
                  </span>
                </div>
              </div>

              <div className="text-[11px] font-semibold text-[#75777e] px-2 py-1 uppercase tracking-wider">
                Switch Perspective
              </div>

              <div className="flex flex-col gap-1">
                <button
                  onClick={() => {
                    onChangeRole('student');
                    onSelectTab('student-hub');
                    setShowProfileMenu(false);
                  }}
                  className={`flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                    userRole === 'student'
                      ? 'bg-[#0058be] text-white'
                      : 'text-[#0b1c30] hover:bg-[#eff4ff]'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[16px]">school</span>
                    Student (Sarah Adams)
                  </span>
                  {userRole === 'student' && <span className="material-symbols-outlined text-[14px]">check</span>}
                </button>

                <button
                  onClick={() => {
                    onChangeRole('faculty');
                    onSelectTab('faculty-console');
                    setShowProfileMenu(false);
                  }}
                  className={`flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                    userRole === 'faculty'
                      ? 'bg-[#0058be] text-white'
                      : 'text-[#0b1c30] hover:bg-[#eff4ff]'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[16px]">supervised_user_circle</span>
                    Faculty (Dr. Vance)
                  </span>
                  {userRole === 'faculty' && <span className="material-symbols-outlined text-[14px]">check</span>}
                </button>

                <button
                  onClick={() => {
                    onSelectTab('identity-id-photo');
                    setShowProfileMenu(false);
                  }}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs text-[#0b1c30] hover:bg-[#eff4ff] transition-colors"
                >
                  <span className="material-symbols-outlined text-[16px]">badge</span>
                  Digital ID & Biometrics
                </button>

                <div className="h-px bg-[#eff4ff] my-1" />

                <button
                  onClick={() => {
                    onSelectTab('login');
                    setShowProfileMenu(false);
                  }}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs text-[#ba1a1a] hover:bg-[#ffdad6]/40 transition-colors"
                >
                  <span className="material-symbols-outlined text-[16px]">logout</span>
                  Sign Out to Login Screen
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
