import Nav from "./components/Nav";
import Homepage from "./pages/Homepage";
import Stories from "./pages/Stories";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/stories" element={<Stories />} />
            <Route path="/features" element={<Features />} />
            <Route path="/pricing" element={<Pricing />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
