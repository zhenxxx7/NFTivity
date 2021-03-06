import React from "react";
import './hero.css';


export default function Hero() {
    return (
      <div class="bg-primary dark:bg-secondary rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
        <div>
          <span class="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">
          </span>
        </div>
        <h3 class="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">Writes Upside-Down</h3>
        <p class="text-slate-500 dark:text-slate-400 mt-2 text-sm">
        <div className="hero">
            <img src="assets/image/hero.png" alt="" />
        </div>
          The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
        </p>
      </div>
    );
}