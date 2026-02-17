import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
// Scroll to hash on route change
function ScrollToHash() {
  const { hash } = useLocation();
  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const el = document.getElementById(hash.replace("#", ""));
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 0);
    }
  }, [hash]);
  return null;
}
import { AnimatePresence } from "motion/react";
import "./App.css";
import Layout from "./components/_layout";
import Home from "./pages/Home";
import SplashScreen from "./components/custom/splashscreen/SplashScreen";
import { usePageLoading } from "./hooks/usePageLoading";
import PrivacyPolicy from "./components/custom/privacypolicy/PrivacyPolicy";
import TermsOfService from "./components/custom/termsofservice/TermsOfService";
import QuoteForm from "./pages/QuoteForm";

function App() {
  const isLoading = usePageLoading(1500); // 1.5 seconds minimum

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <SplashScreen key="splash" />}
      </AnimatePresence>

      {!isLoading && (
        <Layout>
          <ScrollToHash />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quote-form" element={<QuoteForm />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route
              path="/work-with-us"
              element={<div>Work With Us Page</div>}
            />
          </Routes>
        </Layout>
      )}
    </>
  );
}

export default App;
