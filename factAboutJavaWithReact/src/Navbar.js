import React from 'react';
import ReactDOM from 'react-dom';


export default function Navbar(){
  return(
    <>
    <nav className="navbar navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
       <img src={process.env.PUBLIC_URL + '/javalogo.png'} height="80" alt="logo" />
       <h2>Facts about JAVA</h2>
    </a>
  </div>
</nav>

    </>
  )
}
