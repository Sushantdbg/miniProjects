import React from "react";

export default function MainContent(){
  return(
    <div className="main--all">
    <div className="personal--text">
    <p className="name--text">Sushant Kumar</p>
    <p className="name--sp">Full-Stack Developer</p>
    <p className="name-website">sushantdbg.in</p>
    </div>
    <button type="button" className="btn btn-light button button--email "><img src={process.env.PUBLIC_URL + '/email.png'} className="main--img" /><span className="email-text">Email</span></button>
    <button type="button" className="btn btn-light button button--linkedin "><img src={process.env.PUBLIC_URL + '/linkedin.png'} className="main--img" /><span className="link-text">Linkedin</span></button>
    <h2>About</h2>
    <p>I am a Full-stack Developer, with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
    <h2>Interest</h2>
    <p>Tech, Memes, Food and Sad life</p>
    </div>
  )
}
