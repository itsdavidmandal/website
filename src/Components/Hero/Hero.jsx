import React from "react";
import "./Hero.css";
import profileimg from "../../assets/profile_img.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profileimg} alt="" />
      <h1>
        {" "}
        <span> I am David Mandal , </span>web developer based in Nepal
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ipsum
        necessitatibus quaerat magnam deleniti, impedit libero quisquam harum
        nostrum eos, nihil, debitis culpa possimus distinctio explicabo vitae.
        Necessitatibus, suscipit pariatur.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect With Me
          </AnchorLink>
        </div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
};

export default Hero;
