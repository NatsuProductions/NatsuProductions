import { Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/_layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import ThankYou from "./pages/ThankYou";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
    </Layout>
  );
}

export default App;
