import React from "react";

export default function Footer(){
  return(
    <div className="footer--all">
    <img src={process.env.PUBLIC_URL + '/twitter.png'} className="footer--img" />
    <img src={process.env.PUBLIC_URL + '/github-sign.png'} className="footer--img footer--pivot" />
    <img src={process.env.PUBLIC_URL + '/instagram.png'} className="footer--img" />
    </div>
  )
}
