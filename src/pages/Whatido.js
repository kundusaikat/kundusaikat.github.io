import React from "react";
import { whatido } from "../portfolio";
// import Fade from "react-reveal/Fade";
import "./Whatido.css";
import Logo from "./Logo";

const Whatido = () => {
  return (
    <div bottom cascade>
      <section id="whatido">
        <h1 className="Whatido-title" id="whatido-title">
          <div bottom cascade>
            {" "}
            SKILLS{" "}
          </div>
        </h1>

        <div class="fluid-container">
          <div className="row">
            <div className="col-lg-5 vertical-center">
              <div className="box">
                {whatido.details.map((detail) => (
                  <p>⚡{detail}</p>
                ))}
              </div>
            </div>
            <div className="col-lg-7 center order-first order-lg-last">
              <h2 className="fullstack">{whatido.title}</h2>
              <div className="fluid-container logo">
                <div class="row">
                  {whatido.logos.map((logo) => (
                    <Logo
                      key={logo.id}
                      name={logo.name}
                      className={logo.iconifyClassName}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Whatido;
