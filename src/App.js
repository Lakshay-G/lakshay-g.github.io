import React from "react";
import "./index.css";

import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Experience from "./routes/Experience";
import About from "./routes/About";
import Contact from "./routes/Contact";
// import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Routes>
      {/* <ScrollToTop /> */}
      <Route path="/" element={<Home />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      {/* <Route path="/*" element={<ScrollToTop />} /> */}
      {/* </ScrollToTop> */}
      {/* <ScrollToTop /> */}
    </Routes>
  );
}

export default App;
