import React from "react";
import "./Mywork.css";
import themepattern from "../../assets/theme_pattern.svg";
import mywork_data from "../../assets/mywork_data";
import arrowicon from "../../assets/arrow_icon.svg";

const Mywork = () => {
  return (
    <div id="work" className="mywork">
      <div className="mywork-title">
        <h1>My Latest Work</h1>
        <img src={themepattern} alt="" />
      </div>
      <div className="mywork-container">
        {mywork_data.map((work) => {
          return (
            <div key={work.w_no} className="mywork-item">
              <div className="title-wala-edit">
              <h2>{work.w_title}</h2>
              </div>

              <p>{work.w_desc}</p>

              <div className="show-project">
                
              <a
                href={work.w_link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: "none",
                  color: "white",
                  // marginTop: "5px",
                  // marginBottom: "50px"
                }}
              >
                View Project
              </a>
              </div>

              <div className="mywork-showmore-mini">
                <p>Show More</p>
                <img src={arrowicon} alt="" />
              </div>
            </div>
          );
        })}
      </div>

      {/* shall re vitalise the code below when more projects shall be added  */}
      {/* <div className="mywork-showmore">
        <p>Show More</p>
        <img src={arrowicon} alt="" />
      </div> */} 
      
    </div>
  );
};

export default Mywork;
