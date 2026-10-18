import { lazy, Suspense, useEffect } from 'react';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import { MotionConfig } from 'motion/react';
import StudioLayout from '@/components/StudioLayout';
import StudioPage from '@/features/studio/StudioPage';
import InquiryForm from '@/features/inquiry/InquiryForm';
import './App.css';

const PrivacyPolicy = lazy(() => import('@/pages/PrivacyPolicy'));
const TermsOfService = lazy(() => import('@/pages/TermsOfService'));

function RouteScroll() {
  const { pathname, hash, key } = useLocation();
  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      if (hash) document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
      else window.scrollTo({ top: 0, behavior: 'instant' });
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash, key]);
  return null;
}

export default function App() {
  return <MotionConfig reducedMotion="user"><StudioLayout><RouteScroll /><Suspense fallback={<div className="shell route-message" role="status">Loading…</div>}><Routes>
    <Route path="/" element={<StudioPage />} />
    <Route path="/quote-form" element={<InquiryForm standalone />} />
    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
    <Route path="/terms-of-service" element={<TermsOfService />} />
    <Route path="/work-with-us" element={<div className="shell route-message"><p className="eyebrow">Creative collaborators</p><h1>Make something with us.</h1><p>Illustrator, animator, editor, or music producer? Introduce yourself and share your portfolio in our inquiry form.</p><Link className="studio-button" to="/quote-form">Introduce yourself ↗</Link></div>} />
    <Route path="*" element={<div className="shell route-message"><p className="eyebrow">404 / Out of frame</p><h1>Let's get you back on track.</h1><Link className="studio-button" to="/">Back to the studio ↗</Link></div>} />
  </Routes></Suspense></StudioLayout></MotionConfig>;
}
