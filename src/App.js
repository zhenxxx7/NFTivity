import React from "react";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Slidecarousel from "./components/slidecarousel/Slidecarousel";

export default function App() {
  return (
    <div class="bg-white dark:bg-slate-800">
    <Home />
    <Hero />
    <Slidecarousel />
    <Footer />
    </div>
    
  )
}