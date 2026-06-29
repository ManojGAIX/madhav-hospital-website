import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/layout/Layout";
import ScrollToTop from "./components/common/ScrollToTop";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Treatments from "./pages/Treatments/Treatments";
import DoctorsPage from "./pages/Doctors/DoctorsPage";
import Gallery from "./pages/Gallery/Gallery";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/treatments" element={<Treatments />} />
          <Route path="/doctors" element={<DoctorsPage />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
