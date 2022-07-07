import React from "react";
import Header from "../../components/header/Header";
import './home.css';
// import Spline from '@splinetool/react-spline';

export default function Home() {
    return (
        <div className="bg-primary dark:bg-secondary">
        <Header />
        <img src='../assets/BG1.png' className="absolute right-0 top-0  " alt="illustration" />
        <div className="z-0 absolute top-0 left-0 w-full lg:w-1/2 h-screen pt-28 bg-light dark:bg-dark dark:bg-opacity-20 bg-opacity-20 "></div>
      <div className="container px-3 md:px-0 mt-40 z-50 backdrop-blur-none">
        <h1 className="text-center lg:text-start lg:w-2/5 mb-10 text-6xl font-bold dark:text-light txhr1">
            Discover, collect, and sell extraordinary 
        </h1>
        <h1 className="text-center lg:text-start lg:w-2/5 mb-10 font-bold text-6xl txhr2">
            NFTs
        </h1>
        <p className="lg:w-1/3 mb-10 text-center lg-text-start lg:mx-0 mx-auto dark:text-light">
            NFT is the world's first and largest NFT marketplace
        </p>
        <img src='../assets/hero.png' className=" hr" alt="/" />
        {/* <Spline scene="https://prod.spline.design/TRfTj83xgjIdHPmT/scene.spline"/> */}
        <button
          type="button"
          className="flex items-center lg:mx-0 mx-auto text-slate-700  bg-gradient-to-r from-[#FDAE8F] to-[#FD1C68] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-16 py-2.5 text-center">
          Explore
        </button>
        </div>
        </div>
    );
}
