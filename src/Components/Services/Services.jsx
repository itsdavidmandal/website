import React from "react";
import "./Services.css";
import themepattern from "../../assets/theme_pattern.svg";
import servicesdata from "../../assets/services_data";
import arrowicon from "../../assets/arrow_icon.svg";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div id="services" className="services">
      <div className="services-title">
        <h1>My Services</h1>
        <img src={themepattern} alt="" />
      </div>
      <div className="services-container">
        {servicesdata.map((service, index) => {
          return (
            <div key={index} className="services-format">
              <h3>{service.s_no}</h3>
              <h2>{service.s_name}</h2>
              <p>{service.s_desc}</p>
              <div className="services-readmore">
                <Link
                  to={`/Services/service_details/${service.s_name
                    .toLowerCase()
                    .replace(/\s/g, "")}`}
                  className="services-readmore"
                >
                  <p>Read More</p>
                  <img src={arrowicon} alt="" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
