import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "motion/react";
import "./App.css";
import Layout from "./components/_layout";
import Home from "./pages/Home";
import SplashScreen from "./components/custom/splashscreen/SplashScreen";
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
          </Routes>
        </Layout>
      )}
    </>
  );
}

export default App;
