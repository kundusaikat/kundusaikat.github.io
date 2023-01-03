import React from "react";
import { links } from "../portfolio";
import { SocialIcon } from "react-social-icons";

// import Fade from "react-reveal/Fade";

import "./contact.css";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <h1 className="contact-title">
        <div bottom cascade duration={2500}>
          Reach Out To Me!
        </div>
      </h1>
      <div className="icon">
        {links.map((link) => (
          <div className="icons">
            {" "}
            <SocialIcon url={link} target="_blank" />{" "}
          </div>
        ))}
      </div>

      <center>
        <p id="emailPhone">
          <a href="tel:+919832758021">📞+91 9832758021</a>{" "}
          <a href="mailto:kundusaikat32@gmail.com" target="_blank" id="email">
            {" "}
            📧 kundusaikat32@gmail.com
          </a>
        </p>
        <hr className="style-f" />
      </center>
      {/* <p className="copyright">
        👨‍💻 with ❤️ by <b id="footName">Avinash Kumar</b> using ⚛️ 
       </p> */}
    </div>
  );
};

export default Contact;
