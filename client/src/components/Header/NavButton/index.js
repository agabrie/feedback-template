import React from "react";

import "./NavButton.css";
import { Link } from 'react-router-dom';
function NavButton({text,to}){
    return (
    // <div className="nav-button">
        <Link className="nav-button" to={to}>{text}</Link>
    // </div>
    );
}

export default NavButton;