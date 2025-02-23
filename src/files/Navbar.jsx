import { Link } from "react-router-dom";
import React, { useState } from "react";

function Navbar() {
  const [activeItem, setActiveItem] = useState(null); // Track hovered item

  return (
    <div style={{ position: "relative", padding: "10px" }}>
      {/* Navbar */}
      <nav
        style={{
          backgroundColor: "black",
          padding: "5px 0", // Reduced padding
          position: "relative",
          borderRadius: "12px", // Smaller rounded border
          maxWidth: "400px", // Reduced width
          margin: "auto",
          textAlign: "center",
          boxShadow: "0px 4px 10px rgba(255, 255, 255, 0.3)", // Slight glowing effect
        }}
      >
        <ul
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "10px", // Reduced gap
            padding: 0,
            listStyle: "none",
          }}
        >
          {["Home", "About", "Project", "Contact"].map((item, index) => (
            <li
              key={index}
              style={{
                padding: "5px 10px", // Smaller padding
                borderRadius: "20px", // Rounder shape
                transition: "all 0.3s ease",
                backgroundColor: activeItem === index ? "white" : "transparent",
                boxShadow:
                  activeItem === index
                    ? "0px 3px 5px rgba(255, 255, 255, 0.4)"
                    : "none",
                transform: activeItem === index ? "scale(1.1)" : "scale(1)",
              }}
              onMouseEnter={() => setActiveItem(index)}
              onMouseLeave={() => setActiveItem(null)}
            >
              <Link
                to={
                  item === "Home"
                    ? "/"
                    : item === "About"
                    ? "/"
                    : item === "My Project"
                    ? "/"
                    : "/"
                }
                style={{
                  color: activeItem === index ? "black" : "white",
                  textDecoration: "none",
                  fontWeight: "bold",
                  fontSize: "12px", // Smaller text size
                  transition: "color 0.3s ease",
                  display: "block",
                  padding: "4px 8px", // Adjusted inner padding for better shape
                  borderRadius: "15px", // More rounded edges
                }}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
