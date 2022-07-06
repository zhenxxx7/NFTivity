import React from "react";
import { Flowbite } from "flowbite-react/lib/esm/components";
import { DarkThemeToggle } from "flowbite-react/lib/esm/components";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

export default function App() {
  return (
    <div>
    <Flowbite>
      <DarkThemeToggle />
    </Flowbite>
    <Header />
    <Footer />
    </div>
    
  )
}