import React, { useState, useEffect } from 'react';
import "../globals.css";


const Header: React.FC = () => {
  const [isShrunk, setIsShrunk] = useState(false);

  // Track scroll position to shrink the header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsShrunk(true);
      } else {
        setIsShrunk(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={isShrunk ? "shrunk" : ""}>
      <div className="header-content">
        <img
          src="images/favicon.jpg"
          alt="Left Image"
          className="header-image left"
        />
        <h1>Clan MacKinnon</h1>
        <img
          src="images/favicon.jpg"
          alt="Right Image"
          className="header-image right"
        />
      </div>
      <nav>
        <a href="#home">Home</a>
        <a href="#the-isles">The Isles</a>
        <a href="#history">History</a>
        <a href="#battles">Battles</a>
        <a href="#symbols">Symbols</a>
        <a href="#siol-alpin">Siol Alpin</a>
      </nav>
    </header>
  );
};

export default Header;
