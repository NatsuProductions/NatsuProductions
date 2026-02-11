import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "motion/react";
import "./App.css";
import Layout from "./components/_layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import ThankYou from "./pages/ThankYou";
import SplashScreen from "./components/SplashScreen";
import { usePageLoading } from "./hooks/usePageLoading";

function App() {
  const isLoading = usePageLoading(1500); // 1.5 seconds minimum

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <SplashScreen key="splash" />}
      </AnimatePresence>

      {!isLoading && (
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/thank-you" element={<ThankYou />} />
          </Routes>
        </Layout>
      )}
    </>
  );
}

export default App;
