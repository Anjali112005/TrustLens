import React from 'react';
import { Shield, ChevronLeft, Settings, Wifi, Signal, Battery } from 'lucide-react';
import BottomNav from './BottomNav';

export default function PhoneFrame({
  currentScreen,
  setCurrentScreen,
  children,
  screenTitle = 'TrustLens',
  showBack = false,
  onBack,
  activeTab,
  setActiveTab
}) {
  const isTabScreen = ['home', 'cases', 'history', 'profile'].includes(currentScreen);

  return (
    <div className="smartphone-frame">
      <div className="phone-screen">
        {/* Dynamic Island & Status Bar */}
        <div className="phone-status-bar">
          <span>9:41</span>
          
          <div className="dynamic-island">
            <div className="camera-lens"></div>
            <div className="speaker-grille"></div>
          </div>

          <div className="status-bar-icons">
            <Signal size={12} />
            <Wifi size={12} />
            <Battery size={13} />
          </div>
        </div>

        {/* Mobile App Header Bar (hidden in camera full-screen mode) */}
        {currentScreen !== 'camera' && (
          <div className="phone-app-header">
            <div className="phone-header-left">
              {showBack ? (
                <button className="back-btn-phone" onClick={onBack || (() => setCurrentScreen('home'))}>
                  <ChevronLeft size={20} />
                </button>
              ) : (
                <div className="app-brand-mini">
                  <div className="shield-mini">
                    <Shield size={14} />
                  </div>
                  <h2>TrustLens</h2>
                </div>
              )}
            </div>

            <div style={{ fontSize: '13px', fontWeight: '700', color: '#0F172A' }}>
              {showBack ? screenTitle : null}
            </div>

            <button className="back-btn-phone" onClick={() => setCurrentScreen('profile')} title="Settings">
              <Settings size={18} />
            </button>
          </div>
        )}

        {/* Inner Screen Scroll Content */}
        <div className="phone-body-content">
          {children}
        </div>

        {/* Bottom Nav Bar (visible on primary tab screens) */}
        {isTabScreen && (
          <BottomNav activeTab={activeTab} setActiveTab={(tab) => {
            setActiveTab(tab);
            setCurrentScreen(tab);
          }} />
        )}
      </div>
    </div>
  );
}
