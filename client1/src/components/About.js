import React from "react";
import "./About.css"

const About = () => {
  return (
    <div className="aboutContainer">
      <h1>About</h1>
      <div className="aboutContent">
        <p>Name - Utsav Kumar</p>
        <p>Roll - 1806359</p>
        <p>Github - <a href="https://github.com/utsavkumar-280" target="_blank" rel="noreferrer" >https://github.com/utsavkumar-280</a></p>
        <p>Skills - C, C++, HTML, CSS/SCSS JavaScript, React, Express.js, MongoDB, Mongoose, Git/Github</p>
        <br/>
        <p>Projects :</p>
        <br/>
        <p>Web Portfolio - <a href="https://utsav-kumar.netlify.app/" target="_blank" rel="noreferrer">https://utsav-kumar.netlify.app/</a></p>
        <br />
        <br/>
        <p>Project1 -</p>
        <br/>
        <p>Fx Ui - <a href="https://fx-ui.netlify.app/index.html" target="_blank" rel="noreferrer">Live Demo</a> <a href="https://github.com/utsavkumar-280/Fx-UI" target="_blank" rel="noreferrer">Github</a></p>
        <p>Fx UI is a lightweight and utility-first CSS framework that can be composed to develop fast and powerful web interfaces, directly in your markup.</p>
        <br/>

        <p>Project2 -</p>
        <br/>
        <p>SunLo-fi - <a href="https://sunlofi.herokuapp.com/" target="_blank" rel="noreferrer">Live Demo</a> <a href="https://github.com/utsavkumar-280/music-player" target="_blank" rel="noreferrer">Github</a></p>
        <p>SunLo-Fi is a Music player React app. I've made this app after learning the basic concepts of React like props, states, state uplifting, hooks(useState, useEffect, useRef), etc. This app comes with basic functionalities like play/pause, skip forward/backward, and a music library.</p>
      </div>
    </div>
  )
}

export default About;