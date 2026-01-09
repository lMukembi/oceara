import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./components/home";
import { Contact } from "./components/contact";
import Jobs from "./components/jobs";
import { News } from "./components/news";
import { About } from "./components/about";
import { Apply } from "./components/apply";
import { STCW } from "./components/stcw";
import { Luxury } from "./components/luxury";
import { Sustainability } from "./components/sustainability";
import { Professional } from "./components/professional";
import { Destination } from "./components/destination";

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
          path="/news/luxury-experiences-in-the-atlantic"
          element={<Luxury />}
        />
        <Route
          path="/news/sustainability-and-responsible-cruising-with-oceara-cruises"
          element={<Sustainability />}
        />
        <Route
          path="/news/professional-crew-training-and-career-development-at-oceara-cruises"
          element={<Professional />}
        />
        <Route
          path="/news/global-routes-and-destination-experiences-with-oceara-cruises"
          element={<Destination />}
        />
      </Routes>
    </Router>
  );
};
