"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeaderCarousel: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7100,
    arrows: false,
    fade: true,
  };

  const images = [
    "/images/castle1.jpg",
    "/images/image2.jpg",
    "/images/staffa4.jpg",
  ];

  return (
    <div
      className="homeimg"
      style={{
        position: "relative",
        width: "100%",
        height: "90%",
      }}
    >
      {/* Carousel */}
      <Slider {...settings}>
        {images.map((image, index) => (
          <div className="homeimg2" key={index}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              style={{
                width: "100%",
                height: "100vh",
                objectFit: "cover",
              }}
            />
          </div>
        ))}
      </Slider>

      {/* Scroll Down Button */}
      {typeof window !== "undefined" && (
        <div
          style={{
            position: "absolute",
            bottom: "20px",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 10,
            cursor: "pointer",
          }}
          onClick={() => {
            window.scrollBy({
              top: window.innerHeight,
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
      )}

      {/* Overlay Text */}
      <div className="hometext">Welcome to Clan Mackinnon</div>

      {/* Shop Now Button */}
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <a
          href="https://storefront-production-7a66.up.railway.app"
          style={{ textDecoration: "none" }}
        >
          <button
            style={{
              backgroundColor: "#007BFF",
              color: "#fff",
              padding: "10px 20px",
              fontSize: "1rem",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              transition: "background-color 0.3s ease, transform 0.2s ease",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor = "#0056b3")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor = "#007BFF")
            }
            onMouseDown={(e) =>
              (e.currentTarget.style.transform = "scale(0.95)")
            }
            onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            Shop Now
          </button>
        </a>
      </div>
    </div>
  );
};

export default HeaderCarousel;
