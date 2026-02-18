
import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import History from './pages/History';
import Principal from './pages/Principal';
import AICounselor from './components/AICounselor';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('/');

  // Simple hash-based routing emulation or state-based switching
  const renderPage = () => {
    switch (activeTab) {
      case '/':
        return <Home />;
      case '/history':
        return <History />;
      case '/principal':
        return <Principal />;
      default:
        return <Home />;
    }
  };

  useEffect(() => {
    // Scroll to top when tab changes
    window.scrollTo(0, 0);
  }, [activeTab]);

  return (
    <Layout activeTab={activeTab} setActiveTab={setActiveTab}>
      {renderPage()}
      <AICounselor />
    </Layout>
  );
};

export default App;
