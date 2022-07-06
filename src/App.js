import React from "react";
import { Flowbite } from "flowbite-react/lib/esm/components";
import { DarkThemeToggle } from "flowbite-react/lib/esm/components";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";

export default function App() {
  return (
    <div class="bg-white dark:bg-slate-800">
    <Flowbite>
      <DarkThemeToggle />
    </Flowbite>
    <Navbar />
    <Header />
    <Footer />
    </div>
    
  )
}