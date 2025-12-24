import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./components/home";
import { Contact } from "./components/contact";
import Jobs from "./components/jobs";
import { News } from "./components/news";
import { About } from "./components/about";
import { Apply } from "./components/apply";

export const Paths = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/news" element={<News />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/apply" element={<Apply />} />
      </Routes>
    </Router>
  );
};
