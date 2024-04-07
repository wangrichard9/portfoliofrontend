import React from 'react';
import './navbar.css';
import {Link} from 'react-scroll';
import logo from '../assets/logo.png';
import github from "../assets/github.png";

const Navbar = () => {
    return (
        <nav className = "navbar">
            <img src={logo} height={80} width ={80} alt ="" className='logo'/>
            <div className = "desktopMenu">
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration = {500} className="desktopMenuListItem">Home</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration = {500} className="desktopMenuListItem">About</Link>
                <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration = {500} className="desktopMenuListItem">Projects</Link>
                <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration = {500}  className="desktopMenuListItem">Contact</Link>
            
            </div>

            <a href="https://github.com/wangrichard9">
                <img src={github} height = {40} width = {40}  alt="" className="logo"/>
            </a>

        </nav>
    )
}

export default Navbar