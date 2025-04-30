import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import LandingPage from "./views/LandingPage";
import Blog from "./views/Blog";
// import About from "../views/About";

// This is where we add all our routes for our Personal Website by default, we navigate to the Landing Page
export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/blog" element={<Blog />} />
        {/* <Route path="/about" element={<About />} /> */} 
      </Routes>
    </BrowserRouter>
  );
}