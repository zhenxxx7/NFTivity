import React from "react";
import { Flowbite } from "flowbite-react/lib/esm/components";
import { DarkThemeToggle } from "flowbite-react/lib/esm/components";

export default function App() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    <Flowbite>
      <DarkThemeToggle />
    </Flowbite>
    </div>
    
  )
}