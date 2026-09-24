import React from 'react';
import { TabType } from '../types';

interface BottomNavProps {
  activeTab: TabType;
  onSelectTab: (tab: TabType) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ activeTab, onSelectTab }) => {
  const tabs = [
    {
      id: 'student-hub' as TabType,
      label: 'Student Hub',
      icon: 'school',
    },
    {
      id: 'faculty-console' as TabType,
      label: 'Faculty',
      icon: 'supervised_user_circle',
    },
    {
      id: 'courses-and-materials' as TabType,
      label: 'Courses',
      icon: 'menu_book',
    },
    {
      id: 'attendance-and-grades' as TabType,
      label: 'Attendance',
      icon: 'fact_check',
    },
  ];

  return (
    <nav className="fixed bottom-0 w-full z-40 pb-safe bg-[#f8f9ff]/95 backdrop-blur-xl shadow-[0_-2px_12px_rgba(15,30,54,0.06)] border-t border-[#dce9ff]/60">
      <div className="flex justify-around items-center h-16 max-w-xl mx-auto px-2">
        {tabs.map((tab) => {
          const isActive =
            activeTab === tab.id ||
            (tab.id === 'student-hub' && activeTab === 'identity-id-photo');

          return (
            <button
              key={tab.id}
              onClick={() => onSelectTab(tab.id)}
              className={`flex flex-col items-center justify-center flex-1 h-12 gap-1 transition-all select-none ${
                isActive
                  ? 'text-[#0058be] bg-[#dce9ff] rounded-xl font-semibold'
                  : 'text-[#44474d] hover:text-[#0b1c30]'
              }`}
              type="button"
            >
              <span
                className="material-symbols-outlined text-[20px]"
                style={isActive ? { fontVariationSettings: "'FILL' 1" } : undefined}
              >
                {tab.icon}
              </span>
              <span className="text-[11px] leading-none tracking-tight font-medium">
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
