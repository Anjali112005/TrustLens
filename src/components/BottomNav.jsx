import React from 'react';
import { Home, ShieldAlert, History, User } from 'lucide-react';

export default function BottomNav({ activeTab, setActiveTab }) {
  const tabs = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'cases', label: 'Investigate', icon: ShieldAlert },
    { id: 'history', label: 'History', icon: History },
    { id: 'profile', label: 'Profile', icon: User },
  ];

  return (
    <div className="phone-bottom-nav">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            className={`nav-item-phone ${isActive ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            <Icon size={18} color={isActive ? '#1677FF' : '#64748B'} />
            <span>{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
}
