import React from "react";
import { Flowbite } from "flowbite-react/lib/esm/components";
import { DarkThemeToggle } from "flowbite-react/lib/esm/components";
import Header from "./components/Header";

export default function App() {
  return (
    <div>
    <Flowbite>
      <DarkThemeToggle />
    </Flowbite>
    <Header />
    </div>
    
  )
}