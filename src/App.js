import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/home/home";

export default function App() {
  return (
    <div class="bg-white dark:bg-slate-800">
    <Header />
    <Home />
    <Footer />
    </div>
    
  )
}