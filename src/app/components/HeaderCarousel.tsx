"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeaderCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7100,
    customPaging: (i) => <button>{i + 1}</button>, // Customizable dots
    arrows: false,
    fade: true,
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          top: "10px", // Adjust the position above the carousel
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ul style={{ margin: "0", padding: "0", opacity:"0" }}>{dots}</ul>
      </div>
    ),
  };


  const images = [
    "/images/castle1.jpg",
    "/images/image2.jpg",
    "/images/staffa4.jpg",

  ];

  return (
    <div className="homeimg" style={{ position: "relative", width: "100%", height: "90%" }}>
      {/* Carousel */}
      <Slider {...settings}>
        {images.map((image, index) => (
          <div className="homeimg2" key={index}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              style={{ width: "100%", height: "100vh", objectFit: "cover" }}
              
            />
          </div>
        ))}
      </Slider>
      <div
  style={{
    position: "absolute",
    bottom: "20px", // Adjust this for spacing from the bottom
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: 10,
    cursor: "pointer",
  }}
  onClick={() => {
    window.scrollBy({
      top: window.innerHeight, // Scrolls down by one screen height
      behavior: "smooth",
    });
  }}
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="48"
    viewBox="0 96 960 960"
    width="48"
    fill="white"
  >
    <path d="M480 804 240 564l42-42 198 198V276h60v444l198-198 42 42-240 240Z" />
  </svg>
</div>

      {/* Overlay Text */}
      <div className="hometext"

      >
        Welcome to Clan Mackinnon
        <div
  style={{
    textAlign: "center",
    marginTop: "20px", // Adjust spacing as needed
    
  }}
>
<a
  href="https://storefront-production-7a66.up.railway.app" // Replace with the actual link to your shop
  style={{
    textDecoration: "none", // Removes underline from the link
  }}
>
  <button
    style={{
      backgroundColor: "#007BFF", // Soft blue color
      color: "#fff", // White text
      padding: "10px 20px", // Padding for button
      fontSize: "1rem", // Font size
      border: "none", // Remove border
      borderRadius: "5px", // Rounded corners
      cursor: "pointer", // Pointer cursor on hover
      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Subtle shadow
      transition: "background-color 0.3s ease, transform 0.2s ease", // Smooth hover effects
    }}
    onMouseOver={(e) =>
      (e.currentTarget.style.backgroundColor = "#0056b3") // Darker blue on hover
    }
    onMouseOut={(e) =>
      (e.currentTarget.style.backgroundColor = "#007BFF") // Original color
    }
    onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.95)")} // Shrink slightly on click
    onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")} // Return to normal
  >
    Shop Now
  </button>
</a>

</div>

      </div>
      
    </div>
    
    
  );
};

export default HeaderCarousel;
