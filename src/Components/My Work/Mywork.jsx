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
              <h2>{work.w_title}</h2>
              <p>{work.w_desc}</p>
              <div className="mywork-showmore-mini">
                <p>Show More</p>
                <img src={arrowicon} alt="" />
              </div>
            </div>
          );
        })}
      </div>
      <div className="mywork-showmore">
        <p>Show More</p>
        <img src={arrowicon} alt="" />
      </div>
    </div>
  );
};

export default Mywork;
