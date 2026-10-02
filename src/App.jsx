import React, { useState } from 'react';
import OuterPage from './components/OuterPage';
import PhoneFrame from './components/PhoneFrame';
import HomeScreen from './components/screens/HomeScreen';
import CameraScreen from './components/screens/CameraScreen';
import ProcessingScreen from './components/screens/ProcessingScreen';
import EventDetailsScreen from './components/screens/EventDetailsScreen';
import VerificationSummaryScreen from './components/screens/VerificationSummaryScreen';
import UploadScreen from './components/screens/UploadScreen';
import DocumentAnalysisScreen from './components/screens/DocumentAnalysisScreen';
import RecruiterVerificationScreen from './components/screens/RecruiterVerificationScreen';
import PaymentVerificationScreen from './components/screens/PaymentVerificationScreen';
import CrossCheckScreen from './components/screens/CrossCheckScreen';
import EvidenceGraphScreen from './components/screens/EvidenceGraphScreen';
import RiskScreen from './components/screens/RiskScreen';
import TrustReportScreen from './components/screens/TrustReportScreen';
import VoiceScreen from './components/screens/VoiceScreen';
import CasesScreen from './components/screens/CasesScreen';
import HistoryScreen from './components/screens/HistoryScreen';
import ProfileScreen from './components/screens/ProfileScreen';
import CommunityScreen from './components/screens/CommunityScreen';
import CommunityDetailScreen from './components/screens/CommunityDetailScreen';
import { DEMO_CASES, COMMUNITY_REPORTS } from './data/demoCases';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('home');
  const [activeTab, setActiveTab] = useState('home');
  const [activeCaseId, setActiveCaseId] = useState('suspicious-internship');
  const [selectedCommunityId, setSelectedCommunityId] = useState(COMMUNITY_REPORTS[0].id);
  const [processingTarget, setProcessingTarget] = useState('event_details');
  const [communityReports, setCommunityReports] = useState(COMMUNITY_REPORTS);
  const [communityToast, setCommunityToast] = useState('');

  // Navigate helper
  const handleNavigate = (screen) => {
    setCurrentScreen(screen);
    if (['home', 'cases', 'community', 'history', 'profile'].includes(screen)) {
      setActiveTab(screen);
    }
  };

  // Select case & open step
  const handleSelectCase = (caseId, targetStep = 'document_analysis') => {
    setActiveCaseId(caseId);
    if (caseId === 'verified-hackathon') {
      setCurrentScreen('event_details');
    } else {
      setCurrentScreen(targetStep);
    }
  };

  // Handle shutter capture in camera
  const handleShutter = () => {
    setProcessingTarget('event_details');
    setCurrentScreen('processing');
  };

  // Handle file select in upload
  const handleSelectUploadFile = (caseId) => {
    setActiveCaseId(caseId);
    setProcessingTarget('document_analysis');
    setCurrentScreen('processing');
  };

  // Get current screen title & back handler
  let screenTitle = 'TrustLens';
  let showBack = !['home', 'cases', 'community', 'history', 'profile'].includes(currentScreen);
  let onBackHandler = () => setCurrentScreen('home');

  if (currentScreen === 'camera') {
    screenTitle = 'Camera Scan';
  } else if (currentScreen === 'upload') {
    screenTitle = 'Upload Evidence';
  } else if (currentScreen === 'event_details') {
    screenTitle = 'Event Details';
    onBackHandler = () => setCurrentScreen('camera');
  } else if (currentScreen === 'verification_summary') {
    screenTitle = 'Verification Summary';
    onBackHandler = () => setCurrentScreen('event_details');
  } else if (currentScreen === 'document_analysis') {
    screenTitle = 'Offer Analysis';
    onBackHandler = () => setCurrentScreen('upload');
  } else if (currentScreen === 'recruiter_verification') {
    screenTitle = 'Recruiter Verification';
    onBackHandler = () => setCurrentScreen('document_analysis');
  } else if (currentScreen === 'payment_verification') {
    screenTitle = 'Payment Verification';
    onBackHandler = () => setCurrentScreen('recruiter_verification');
  } else if (currentScreen === 'cross_check') {
    screenTitle = 'Cross-check Analysis';
    onBackHandler = () => setCurrentScreen('payment_verification');
  } else if (currentScreen === 'evidence_graph') {
    screenTitle = 'Evidence Graph';
    onBackHandler = () => setCurrentScreen('cross_check');
  } else if (currentScreen === 'risk_screen') {
    screenTitle = 'Risk Assessment';
    onBackHandler = () => setCurrentScreen('evidence_graph');
  } else if (currentScreen === 'trust_report') {
    screenTitle = 'Trust Report';
    onBackHandler = () => setCurrentScreen('home');
  } else if (currentScreen === 'voice') {
    screenTitle = 'Voice Investigator';
  } else if (currentScreen === 'community') {
    screenTitle = 'Community';
    onBackHandler = () => setCurrentScreen('home');
  } else if (currentScreen === 'community_detail') {
    screenTitle = 'Community Evidence';
    onBackHandler = () => setCurrentScreen('community');
  }

  const handlePublishToCommunity = (caseId) => {
    const selectedCase = DEMO_CASES.find((entry) => entry.id === caseId) || DEMO_CASES[0];
    const newReport = {
      id: `${caseId}-shared-${Date.now()}`,
      title: selectedCase.title,
      entityName: selectedCase.entityName || selectedCase.title,
      opportunity: selectedCase.category || selectedCase.role || 'Investigation',
      riskLevel: selectedCase.riskLevel,
      riskScore: selectedCase.riskScore,
      riskColor: selectedCase.riskColor,
      category: selectedCase.category || 'Investigation',
      recruiter: selectedCase.recruiter || 'Unknown recruiter',
      website: selectedCase.website || 'private-source.example',
      investigationCount: 1,
      similarReports: 1,
      paymentFlagged: selectedCase.paymentRequired ? 1 : 0,
      summary: selectedCase.summary,
      tags: [selectedCase.entityName || selectedCase.title, selectedCase.category || 'Investigation', selectedCase.recruiter || 'Unknown recruiter'],
      keySignals: selectedCase.signals.slice(0, 3).map((signal) => signal.text),
      evidence: selectedCase.signals.map((signal) => ({
        label: signal.text,
        type: signal.type === 'positive' ? 'positive' : signal.type === 'negative' ? 'negative' : 'warning'
      }))
    };

    setCommunityReports((prev) => [newReport, ...prev]);
    setSelectedCommunityId(newReport.id);
    setCommunityToast('Investigation shared with the TrustLens community.');
    setCurrentScreen('community');
  };

  // Render current phone screen content
  const renderPhoneScreen = () => {
    switch (currentScreen) {
      case 'home':
        return (
          <HomeScreen
            onNavigate={handleNavigate}
            onSelectCase={handleSelectCase}
          />
        );

      case 'camera':
        return (
          <CameraScreen
            onShutter={handleShutter}
            onClose={() => setCurrentScreen('home')}
          />
        );

      case 'processing':
        return (
          <ProcessingScreen
            targetScreen={processingTarget}
            onComplete={(target) => setCurrentScreen(target)}
          />
        );

      case 'event_details':
        return (
          <EventDetailsScreen
            onContinue={() => setCurrentScreen('verification_summary')}
          />
        );

      case 'verification_summary':
        return (
          <VerificationSummaryScreen
            onNavigate={handleNavigate}
          />
        );

      case 'upload':
        return (
          <UploadScreen
            onSelectFile={handleSelectUploadFile}
          />
        );

      case 'document_analysis':
        return (
          <DocumentAnalysisScreen
            caseId={activeCaseId}
            onNextStep={(step) => setCurrentScreen(step)}
            onSelectStep={(step) => setCurrentScreen(step)}
          />
        );

      case 'recruiter_verification':
        return (
          <RecruiterVerificationScreen
            caseId={activeCaseId}
            onNextStep={(step) => setCurrentScreen(step)}
            onSelectStep={(step) => setCurrentScreen(step)}
          />
        );

      case 'payment_verification':
        return (
          <PaymentVerificationScreen
            caseId={activeCaseId}
            onNextStep={(step) => setCurrentScreen(step)}
            onSelectStep={(step) => setCurrentScreen(step)}
          />
        );

      case 'cross_check':
        return (
          <CrossCheckScreen
            caseId={activeCaseId}
            onNextStep={(step) => setCurrentScreen(step)}
            onSelectStep={(step) => setCurrentScreen(step)}
          />
        );

      case 'evidence_graph':
        return (
          <EvidenceGraphScreen
            caseId={activeCaseId}
            onNextStep={(step) => setCurrentScreen(step)}
            onSelectStep={(step) => setCurrentScreen(step)}
          />
        );

      case 'risk_screen':
        return (
          <RiskScreen
            caseId={activeCaseId}
            onNextStep={(step) => setCurrentScreen(step)}
            onSelectStep={(step) => setCurrentScreen(step)}
          />
        );

      case 'trust_report':
        return (
          <TrustReportScreen
            caseId={activeCaseId}
            onNavigate={handleNavigate}
            onSelectStep={(step) => setCurrentScreen(step)}
            onOpenCommunityReport={(reportId) => {
              setSelectedCommunityId(reportId);
              setCurrentScreen('community_detail');
            }}
            onPublishToCommunity={handlePublishToCommunity}
          />
        );

      case 'voice':
        return (
          <VoiceScreen
            onNavigate={handleNavigate}
          />
        );

      case 'cases':
        return (
          <CasesScreen
            onSelectCase={handleSelectCase}
            onNavigate={handleNavigate}
          />
        );

      case 'history':
        return (
          <HistoryScreen
            onSelectCase={handleSelectCase}
            onNavigate={handleNavigate}
          />
        );

      case 'community':
        return (
          <CommunityScreen
            communityReports={communityReports}
            communityToast={communityToast}
            onOpenReport={(reportId) => {
              setSelectedCommunityId(reportId);
              setCurrentScreen('community_detail');
            }}
          />
        );

      case 'community_detail':
        return (
          <CommunityDetailScreen
            report={communityReports.find((report) => report.id === selectedCommunityId) || communityReports[0]}
            relatedReports={communityReports.filter((report) => {
              if (report.id === selectedCommunityId) return false;
              const currentReport = communityReports.find((entry) => entry.id === selectedCommunityId) || communityReports[0];
              if (!currentReport) return false;
              return currentReport.tags.some((tag) => report.tags.includes(tag));
            })}
          />
        );

      case 'profile':
        return <ProfileScreen />;

      default:
        return (
          <HomeScreen
            onNavigate={handleNavigate}
            onSelectCase={handleSelectCase}
          />
        );
    }
  };

  const handleResetDemo = () => {
    setActiveCaseId('suspicious-internship');
    setCurrentScreen('home');
    setActiveTab('home');
  };

  return (
    <OuterPage
      activeCaseId={activeCaseId}
      onSelectCaseFromOuter={(caseId) => {
        setActiveCaseId(caseId);
        if (caseId === 'verified-hackathon') {
          setCurrentScreen('event_details');
        } else {
          setCurrentScreen('document_analysis');
        }
      }}
      onNavigatePhone={handleNavigate}
      onResetDemo={handleResetDemo}
    >
      <PhoneFrame
        currentScreen={currentScreen}
        setCurrentScreen={setCurrentScreen}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        screenTitle={screenTitle}
        showBack={showBack}
        onBack={onBackHandler}
      >
        {renderPhoneScreen()}
      </PhoneFrame>
    </OuterPage>
  );
}
