import { Routes, Route } from "react-router-dom";

import About from "./pages/about"; // Ensure correct import
import Contact from "./pages/contact"; // Ensure correct import
import Home from "./pages/home"; // Ensure correct import
import OurTeam from "./pages/ourTeam"; // Ensure correct import
import Project from "./pages/project"; // Ensure correct import
import Services from "./pages/Services"; // Ensure correct import
import Header from "./components/header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/services" element={<Services />} />
        <Route path="/ourteam" element={<OurTeam />} />{" "}
        {/* Ensure lowercase route */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
