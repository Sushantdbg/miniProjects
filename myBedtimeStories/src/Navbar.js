import React from "react";

export default function Navbar(){
  return(
    <>
    <nav className="navbar navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      <img src={process.env.PUBLIC_URL + '/navicon.png'} alt="" width="30" height="24" className="d-inline-block align-text-top"/>
      Bootstrap
    </a>
  </div>
</nav>
</>
  )
}
