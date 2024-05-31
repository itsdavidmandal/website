import React from "react";
import "./Contact.css";
import themepattern from "../../assets/theme_pattern.svg";
import mailicon from "../../assets/mail_icon.svg";
import callicon from "../../assets/call_icon.svg";
import locationicon from "../../assets/location_icon.svg";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "87f791ca-262f-4904-83f2-d2ebbd5fe15a");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      alert(data.message);
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={themepattern} alt="" />
      </div>

      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's Talk</h1>
          <p>
            <p>
              From simple portfolio sites to comprehensive e-commerce platforms,
              I'm dedicated to turning your ideas into digital realities. If
              you're seeking to elevate your online presence or simply curious
              about how we can collaborate, feel free to reach out to me via
              email or give me a call. Let's embark on this exciting journey
              together!
            </p>
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mailicon} alt="" />
              <a
                href="mailto:davidramovichmandal@gmail.com"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                davidramovichmandal@gmail.com
              </a>
            </div>

            <div className="contact-detail">
              <img src={locationicon} alt="" /> <p>Kathmandu</p>
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter your name" name="name" />

          <label htmlFor="">Your Email</label>
          <input type="email" placeholder="Enter your email" name="name" />
          <label htmlFor="">Your Message</label>
          <textarea
            name="message"
            id=""
            rows="8"
            placeholder="Enter ur message "
          ></textarea>
          <button type="submit" className="contact-submit">
            Submit Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
