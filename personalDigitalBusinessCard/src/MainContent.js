import React from "react";

export default function MainContent(){
  return(
    <div className="main--all">
    <button type="button" className="btn btn-light"><img src={process.env.PUBLIC_URL + '/email.png'} className="main--img" />Email</button>
    <button type="button" className="btn btn-light"><img src={process.env.PUBLIC_URL + '/linkedin.png'} className="main--img" />Linkedin</button>
    <h2>About</h2>
    <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
    <h2>interest</h2>
    <p> Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
    </div>
  )
}
