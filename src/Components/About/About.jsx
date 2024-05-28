import React from "react";
import "./About.css";
import themepattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/about_profile.svg";
const About = () => {
  return (
    <div id='about' className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={themepattern} alt="" />
      </div>

      <div className="about-sections"> 
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>

        <div className="about-right">
          <div className="about-para">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quia
              cupiditate earum, alias rem aperiam repellendus delectus, laborum
              nulla velit incidunt voluptatem architecto, veritatis natus ex
              obcaecati non quisquam impedit.
            </p>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus
              blanditiis nemo nobis ullam, quaerat fugiat error, voluptatibus
              delectus suscipit voluptatem repellat molestiae. Asperiores,
              repudiandae unde eveniet quae obcaecati aperiam molestias?
            </p>
          </div>

          <div className="about-skills">
            <div className="about-skill"><p>HTML & CSS </p><hr style={{ width: "50%" }} /></div>
            <div className="about-skill"><p>React JS</p><hr style={{ width: "70%" }} /></div>
            <div className="about-skill"><p>Javascript </p><hr style={{ width: "30%" }} /></div>
            <div className="about-skill"><p>Next JS </p><hr style={{ width: "60%" }} /></div>
          </div>

        </div>
        </div>
        <div className="about-achievements">
          <div className="about-achievement">
            <h1>10+</h1>
            <p>Years of Experience</p>
          </div>

          <hr />

          <div className="about-achievement">
            <h1>90+</h1>
            <p>Projects Completed</p>
          </div>

          <hr />

          <div className="about-achievement">
            <h1>15+</h1>
            <p>Happy Cliendts</p>
          </div>
        </div>

      
    </div>
  );
};

export default About;
