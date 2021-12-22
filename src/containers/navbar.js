import React from 'react'
import "./navbar.css"
import logo from "./logo.svg";

const navbar = () => {
    return (
        <div>
            <ul>
                <img className='logo' src={logo} alt=""/>
                <li><a className="active" href="#home">Home</a></li>
                <li><a href="#news">News</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#about">About</a></li>
            </ul>
        </div>
    )
}
export default navbar;
