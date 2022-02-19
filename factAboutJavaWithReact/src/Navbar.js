import React from 'react';

export default function Navbar() {
    return (
        <nav>
            <img src={process.env.PUBLIC_URL + '/javalogo.png'} className="nav--icon" />
            <h3 className="nav--logo_text">Facts about Java</h3>
            <h4 className="nav--title">Made with 💖 React</h4>
        </nav>
    )
}
