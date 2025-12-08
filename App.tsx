import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import ServicesPage from './pages/Services';
import QuotePage from './pages/Quote';
import ChecklistPage from './pages/Checklist';
import ContactPage from './pages/Contact';
import BottomNav from './components/BottomNav';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="max-w-md mx-auto min-h-screen bg-gray-50 flex flex-col relative shadow-xl overflow-hidden">
      <main className="flex-1 overflow-y-auto no-scrollbar pb-20">
        {children}
      </main>
      <BottomNav />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/quote" element={<QuotePage />} />
          <Route path="/checklist" element={<ChecklistPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;