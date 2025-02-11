"use client";
import Image from "next/image";
import HeaderCarousel from "./components/HeaderCarousel";
import HistorySection from "./components/HistorySection";
import Header from "./components/Header"; // Import the Header component
import MullSkyePage from "./components/Isles"; // Import the new page component
import Battle from "./components/Battle"; // Import the new page component
import History from "./components/History"; // Import the new page component
import Symbols from "./components/Symbols"; // Import the new page component
import Alpin from "./components/Alpin"; // Import the new page component
import CopyrightAttributions from "./components/Footer";
import React from "react";





export default function Home() {


  
  return (
    <>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Clan MacKinnon</title>
    <link
      href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap"
      rel="stylesheet"
    />
   

    <Header/> {/* Use the Header component */}
    
    
    <section id="home" className="hero">
      <HeaderCarousel />
   
    </section>
    <section id="the-isles">
      <MullSkyePage />
    </section>
    <section id="history">
    <History />
    </section>
    <section id="battles">
    <Battle />
    <HistorySection />
    </section>
    <section id="symbols">
    <Symbols />
    </section>
    <section id="siol-alpin">
    <Alpin />
    </section>
    
    <footer>
      <p>© 2025 Clan MacKinnon. All Rights Reserved. </p>

  <CopyrightAttributions />
    </footer>
  </>
  
  );
}
