import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import LandingPage from "./views/LandingPage";
import Blog from "./views/Blog";
import Socials from "./views/Socials";
import EntryPage from "./views/EntryPage"; // A new detailed entry page component


// This is where we add all our routes for our Personal Website by default, we navigate to the Landing Page
export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/home" element={<LandingPage />} />
        <Route path="/blog" element={<Blog />} />
          <Route path="/entry" element={<EntryPage />} />
        <Route path="/socials" element={<Socials />} /> 
      </Routes>
    </BrowserRouter>
  );
}