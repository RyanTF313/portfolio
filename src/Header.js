import React from 'react';
import './App.css';
import face from './selfie.jpg'


 export function Header() {
  return (
    <header>

      <section>
        <h1>Ryan Tillman-French</h1>
        <img src={face} alt="Ryan T. French"/>
      </section>
      <section>
        <p>Web Applications Developer at Houghton Mifflin Harcourt</p>
        <p>Hello, looking for a great a software engineer with a passion for learning and determination to deliver great products? I am that engineer.</p>
        <p onMouseOver={download} onMouseOut={resume} ><a href="Resume.docx" download><button className="download">Resume</button></a></p>
      </section>
      <section>
        <ul>
          <li><a href="https://github.com/RyanTF313" target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i></a></li>
          <li><a href="https://www.instagram.com/r.t.french/" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram"></i></a></li>
          <li><a href="https://www.linkedin.com/in/ryantf/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin"></i></a></li>
        </ul>
      </section>

    </header>
  );
}
function download(){
  document.querySelector('.download').addEventListener('mouseover', ()=>{
    document.querySelector('.download').innerHTML = "Click to Download"
  })
}
function resume(){
  document.querySelector('.download').addEventListener('mouseout', ()=>{
    document.querySelector('.download').innerHTML = "Resume"
  })
}
