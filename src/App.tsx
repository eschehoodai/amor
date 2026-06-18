import { FC, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Gallery } from './pages/Gallery';
import { Booking } from './pages/Booking';
import { PermanentMakeup } from './pages/PermanentMakeup';
import { Piercing } from './pages/Piercing';
import { Courses } from './pages/Courses';

// Scroll to Top on Page navigation
const ScrollToTop: FC = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
};

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-ink-black text-soft-white font-sans antialiased overflow-x-hidden" id="app-container">
        
        {/* Navigation Header */}
        <Header />

        {/* Main Content Areas */}
        <main className="flex-grow" id="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/galerie" element={<Gallery />} />
            <Route path="/permanent-makeup" element={<PermanentMakeup />} />
            <Route path="/piercing" element={<Piercing />} />
            <Route path="/kurse" element={<Courses />} />
            <Route path="/buchung" element={<Booking />} />
          </Routes>
        </main>

        {/* Footer info layout */}
        <Footer />
        
      </div>
    </Router>
  );
}
