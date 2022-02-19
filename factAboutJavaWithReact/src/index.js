import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from "./Navbar"
import MainContent from "./MainContent"
import Footer from "./Footer"

function WholePage(){
  return(
    <>
    <Navbar />
    <div className="body--except--navbar">
    <MainContent />
    <Footer />
    </div>
    </>
  )
};

ReactDOM.render(<WholePage />, document.getElementById("root"));
