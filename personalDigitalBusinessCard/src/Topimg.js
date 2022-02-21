import React from "react";

export default function Topimg(){
  return(
    <div className="top--div">
    <img src={process.env.PUBLIC_URL + '/pfp.jpg'} className="top--img" />
    </div>
  )
}
