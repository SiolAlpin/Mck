import React from "react";

const Battle: React.FC = () => {
  return (
    <div className="app">
      {/* Hero Section */}
      <section
        style={{
          position: "relative",
          height: "62vh",
          width: "100vw",
          textAlign: "center",
          overflow: "hidden", // Prevents any unwanted overflow
  
        }}
      >
        {/* Fixed Background Image */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: "url(/images/battle.jpg)",
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
            }}
          >
            Battles and Legacy
          </h1>
          <p
            style={{
              fontSize: "1.5rem", // Larger font size for the paragraph
              lineHeight: "1.6", // Better line spacing for readability
            }}
          >
            
          </p>
        </div>
      </section>








    </div>
  );
};

export default Battle;
