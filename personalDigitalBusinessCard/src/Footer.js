import React from "react";

export default function Footer(){
  return(
    <div className="footer--all">
    <button type="button" className="btn btn-light"><img src={process.env.PUBLIC_URL + '/twitter.png'} className="footer--img" /></button>
    <button type="button" className="btn btn-light"><img src={process.env.PUBLIC_URL + '/github-sign.png'} className="footer--img" /></button>
    <button type="button" className="btn btn-light"><img src={process.env.PUBLIC_URL + '/instagram.png'} className="footer--img" /></button>
    </div>
  )
}
