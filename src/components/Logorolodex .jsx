import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Correct imports of images
import img2  from "../img/img2.png";
import css from "../img/css.png";
import img3  from "../img/img3.png";
import img4  from "../img/img4.png";
import img22  from "../img/img22.png";

const logos = [img2,img3, img4 , img22]; // Array of imported images

const Logorolodex = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % logos.length);
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{  width:"200px",   height: "200px" , border:"10px solid purple"}}>
      <motion.img
        key={index}
        src={logos[index]} // Directly use the imported images
        alt="Tech Logo"
        style={{ width: "160px", height: "160px" }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.5 }}
      />
    </div>
  );
};

export default Logorolodex;
