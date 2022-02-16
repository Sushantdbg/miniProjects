import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from "./Navbar"
import MainContent from "./MainContent"
import Footer from "./Footer"

function WholePage(){
  return(
    <>
    <Navbar />
    <hr />
    <br />
    <hr />
    <h1> Test text for indexjs</h1>
    <hr />
    <MainContent />
    <hr />
    <Footer />
    <hr />
    <hr />
    </>
  )
};

ReactDOM.render(<WholePage />, document.getElementById("root"));
