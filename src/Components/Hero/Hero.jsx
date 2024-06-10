import React, { useState } from "react";
import "./Hero.css";
import profileimg from "../../assets/profile_img.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import resumeFile from "../../assets/resume.pdf"; // Import your resume file

const Hero = () => {
  const [text] = useTypewriter({
    words: ["Web Developer", "Prompt Engineer", "Bibliophile"],
    loop: true,
    typeSpeed: 70, // typing speed
    deleteSpeed: 50, // deleting speed
    delaySpeed: 1000,
  });

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = resumeFile;
    link.download = "resume.pdf"; // Set the desired file name for the download
    link.click();
  };

  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => {
    console.log("load false");
    setLoading(false);
  };

  return (
    <div id="home" className="hero">
      {loading && <p style={{ color: "white" }}>Loading...</p>}
      <img
        src={profileimg}
        alt="Profile"
        onLoad={handleImageLoad}
        className={loading ? "hidden" : ""}
      />

      <h1 style={{ textAlign: "center", marginTop: "350px" }}>
        I am David Mandal , <br />  <p className ="typewriter-anim" > {text}</p>
      </h1>

      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect With Me
          </AnchorLink>
        </div>
        <div className="hero-resume" onClick={handleDownloadResume}>
          Download My Resume
        </div>
      </div>
    </div>
  );
};

export default Hero;
