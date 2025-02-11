import React from "react";
import Image from "next/image";

const Alpin: React.FC = () => {
  return (
    <div className="app">
      {/* Hero Section */}
      <section
        style={{
          position: "relative",
          height: "62vh",
          textAlign: "center",
          overflow: "hidden", // Prevents any unwanted overflow
        }}
      >
        {/* Fixed Background Image */}
        <div
          style={{
            position: "absolute",
            top: "50px",
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: "url(/images/alpin.png)",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundAttachment: "fixed", // Keeps the background fixed
            zIndex: -1, // Places the background behind the text
          }}
        />
        <div
          style={{
            position: "relative", // Keeps the text content above the background
            zIndex: 1, // Ensures the text is on top of the image
            color: "#fff",
            padding: "20px",
            display: "inline-block", // Keeps the border around the text itself
            boxSizing: "border-box", // Ensures padding doesn't push the border out
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black background
            borderRadius: "10px", // Optional: adds rounded corners to the box
          }}
        >
          {/* Enlarged Text */}
          <h1
            style={{
              fontSize: "2.8rem", // Larger font size for the main heading
              marginBottom: "20px", // Space between the title and the paragraph
            }}
          >
            Siol Alpin
          </h1>
          <p
            style={{
              fontSize: "1.5rem", // Larger font size for the paragraph
              lineHeight: "1.6", // Better line spacing for readability
            }}
          >
            Royal Descendants of Judah
          </p>
        </div>
      </section>

      {/* Arrival of Christianity Section */}
      <section className="arrival-of-christianity">
        <h2 className="section-title">The 7 Royal Clans</h2>
        <div className="section-content">
          <div className="image-block">
            <Image src="/images/salpin.jpg" alt="Iona Abbey" width={500} height={300} />
          </div>
          <div className="text-block">
            <p>
              The seven royal clans of Sìol Alpìn—MacKinnon, MacGregor, MacFie, MacQuarrie, MacAulay, MacNab, and MacDuff—trace their lineage to Alpìn mac Eochaid, a unifying figure of Picts and Scots. Together, they symbolize the "Seed of Alpìn," a shared heritage that shaped Scotland’s history and identity.
              <br />
              <br />
              In esoteric interpretations tied to British Israelism, these clans are viewed as connected to the biblical Tribe of Judah, symbolizing a divine lineage intertwined with Scotland’s royal legacy. The number seven, often linked to perfection, underscores their collective significance as guardians of Gaelic traditions and sovereignty.
              <br />
              <br />
              Far beyond their historical roles, the Sìol Alpìn clans represent a deeper spiritual narrative, blending heritage with a transcendent mission that continues to captivate the imagination.
            </p>
          </div>
        </div>
      </section>

      {/* Siol Alpin Info Section */}
      <section className="siol-alpin-info">
        <h2 className="siol-alpin-title">Shop & More at SiolAlpin.ca</h2>
        <div className="siol-alpin-content">
          <div className="siol-alpin-image left">
            <Image src="/images/rlion.png" alt="Left Decorative Image" width={200} height={200} />
          </div>
          <div className="siol-alpin-text">
            <p>
              Discover the rich history and heritage of the Scottish clans at SiolAlpin.ca. Explore our detailed information and shop for unique items that celebrate this legacy.
            </p>
          </div>
          <div className="siol-alpin-image right">
            <Image src="/images/rlion.png" alt="Right Decorative Image" width={200} height={200} />
          </div>
        </div>
      </section>

      <button
        style={{
          display: "inline-block",
          width: "100%", // Full width for larger impact, adjust as needed
          maxWidth: "400px", // Limit max width for better readability
          padding: "20px 40px", // Generous padding for a large button
          fontSize: "1.5rem", // Large, bold text
          fontWeight: "bold",
          backgroundColor: "#007BFF", // Soft blue color
          color: "#fff", // White text
          border: "none", // No border for a clean look
          borderRadius: "10px", // Smooth rounded corners
          boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.2)", // Subtle shadow for depth
          cursor: "pointer", // Pointer cursor for interactivity
          textAlign: "center",
          textTransform: "uppercase", // All caps for emphasis
          transition: "transform 0.2s ease, background-color 0.3s ease", // Smooth hover effect
          margin: "20px auto", // Center with spacing
          marginBottom: "80px"
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
        SIOLALPIN.CA
      </button>
    </div>
  );
};

export default Alpin;
