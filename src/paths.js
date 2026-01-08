import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./components/home";
import { Contact } from "./components/contact";
import Jobs from "./components/jobs";
import { News } from "./components/news";
import { About } from "./components/about";
import { Apply } from "./components/apply";
import { Mashujaa } from "./components/mashujaa";
import { STCW } from "./components/stcw";

export const Paths = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/news" element={<News />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/stcw-training" element={<STCW />} />
        <Route path="/apply" element={<Apply />} />
        <Route
          path="/news/happy-mashujaa-day-from-ocearia-cruises/"
          element={<Mashujaa />}
        />
      </Routes>
    </Router>
  );
};
