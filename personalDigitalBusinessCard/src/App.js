import React from "react";
import Topimg from "./Topimg";
import MainContent from "./MainContent";
import Footer from "./Footer";

export default function App(){
  return(
    <div className="the--website">
    <div className="the--content">
    <Topimg />
    <MainContent />
    <Footer />
    </div>
    </div>
  )
}
