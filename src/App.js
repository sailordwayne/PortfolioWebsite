import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import DevProjects from "./components/DevProjects";
import Skills from "./components/Skills";
import VidProjects from "./components/VidProjects";

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <DevProjects />
      <Skills />
      <VidProjects />
      <Contact />
    </main>
  );
}
