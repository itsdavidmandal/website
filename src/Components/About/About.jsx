// import React from "react";
import "./About.css";
import themepattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/about_profile.svg";
import React, { useState, useEffect } from "react";

const About = () => {
  const [count, setCount] = useState(0);
  const [projectsCount, setProjectsCount] = useState(0);


  useEffect(() => {
    let interval = setInterval(() => {
      setCount(count => {
        if (count < 6) {
          return count + 1;
        } else {
          clearInterval(interval); // Stop incrementing once count reaches 10
          return count; // Keep the count at 10
        }
      });
    }, 100); // Adjust the interval duration as needed

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);



  useEffect(() => {
    let interval = setInterval(() => {
      setProjectsCount(count => {
        if (count < 7) {
          return count + 1;
        } else {
          clearInterval(interval); // Stop incrementing once count reaches 7
          return count; // Keep the count at 7
        }
      });
    }, 100); // Adjust the interval duration as needed

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div id="about" className="about">
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
            <div className="about-skill">
              <p>HTML & CSS </p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: "40%" }} />
            </div>
            <div className="about-skill">
              <p>Javascript </p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>Java</p>
              <hr style={{ width: "40%" }} />
            </div>
            <div className="about-skill">
              <p>Python</p>
              <hr style={{ width: "45%" }} />
            </div>
            <div className="about-skill">
              <p>Canva</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>Arduino</p>
              <hr style={{ width: "15%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>{count === 6 ? "6+" : count}</h1>
          <p>Months of Experience</p>
        </div>

        <hr />

        <div className="about-achievement">
        <h1>{projectsCount === 7? "7+" : projectsCount}</h1>
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
