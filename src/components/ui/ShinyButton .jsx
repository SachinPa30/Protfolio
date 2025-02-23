"use client";
import React from "react";
import { motion } from "framer-motion";

const ShinyButton = React.forwardRef(({ children, className, ...props }, ref) => {
  return (
    <motion.button
      ref={ref}
      initial={{ scale: 1 }}
      animate={{ scale: 1 }}
      whileHover={{
        scale: 1.07,
        boxShadow: "0px 0px 15px rgba(173, 216, 230, 0.6)", // Light Silver Glow
        filter: "brightness(1.2)",
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 250, damping: 12 }}
      className={`relative rounded-lg px-3 py-1.5 text-xs font-semibold 
      backdrop-blur-lg bg-gradient-to-r from-[#0f3443] to-[#34e89e] 
      text-white transition-all duration-300 ease-in-out 
      hover:shadow-lg hover:brightness-125 hover:opacity-90
      ${className}`}
      {...props}
    >
      <span className="relative block uppercase tracking-wide drop-shadow-md">
        {children}
      </span>

      {/* Shiny effect */}
      <motion.span
        className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#b8c6db]/40 to-[#34e89e]/40 opacity-50 blur-md"
        animate={{ x: ["100%", "-100%"] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: "linear" }}
      ></motion.span>
    </motion.button>
  );
});

ShinyButton.displayName = "ShinyButton";

export default ShinyButton;
