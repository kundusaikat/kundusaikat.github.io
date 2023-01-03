import React from 'react';
// import Fade from 'react-reveal/Fade';
import "./Project.css"
// import Tilt from 'react-tilt'

const Project = (props) => {
    return <div className="fluid-container">

        <h5 className="prj-title">
            <div bottom cascade>{props.title}</div>
        </h5>

        <div className="row">
            <div className="col-lg-6 project-t ">
                <div bottom cascade>
                    <div>
                        <p className="p">{props.desc}</p>
                        <p className="p"><b>Features : </b>{props.feature}</p>                        
                        <p className="p"><b>{props.tech}</b></p>

                        
                        <button ><span> <a id="a" rel='noreferrer' target="_blank" href={props.github}>Source Code </a></span></button>
                        <button ><span> <a id="b" rel='noreferrer' target="_blank" href={props.link}>Deploy link </a></span></button>
                    </div>
                </div>
            </div>

            <div className="col-lg-6 img order-first order-lg-last flex-bottom">
                <a target="_blank" rel='noreferrer' href={props.link}>
                    <div className="div" options={{ max: 55 }} >
                        <img src={props.img} className="img-fluid" alt={props.title} />
                    </div>
                </a>
            </div>
        </div>
    </div >
}

export default Project