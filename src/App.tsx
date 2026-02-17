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
  const isLoading = usePageLoading(1500);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <SplashScreen key="splash" />}
      </AnimatePresence>

      {/* SEO FIX: Always render the Layout so bots can "read" the DOM 
         immediately. We use a style trick to hide it visually from 
         users if necessary, or just let the Splash cover it.
      */}
      <div
        style={{
          visibility: isLoading ? "hidden" : "visible",
          height: isLoading ? 0 : "auto",
          overflow: "hidden",
        }}
      >
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
      </div>
    </>
  );
}

export default App;
