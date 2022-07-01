import React from 'react';
import '../App.css';
import { default as NavbarReact }  from "react-bootstrap/Navbar";
import Nav from 'react-bootstrap/Nav';

function NavBar() {
	return (
        <div className='navbar-section'>
            <NavbarReact expand="lg" sticky="top" className="py-1 d-flex justify-content-around" style={{ backgroundColor: "black" }}>
                <NavbarReact.Brand class="navbar-title" style={{ color: "white", fontFamily: "Gloria Hallelujah, cursive", fontSize: "3rem", textShadow: "0 0 25px #90745E" }}>
                    BioLink
                    <img src="logo.png" className='navbar-logo'/>
                </NavbarReact.Brand>
                <NavbarReact.Toggle aria-controls="basic-navbar-nav" />

                <div className="">
                    <Nav className="me-auto d-flex justify-content-between align-items-center">
                        <a href="#" class="normal-item p-1 mx-3">Home</a>
                        <a href="#main-problem" class="normal-item p-1 mx-3">Problem Statement</a>
                        <a href="#proposed-solutions" class="normal-item p-1 mx-3">Proposed Solutions</a>
                        <a href="#contribution-section" class="normal-item p-1">Your Contribution</a>
                        <a href="#our-team" class="normal-item p-1 mx-3">Our Team</a>
                    </Nav>
                </div>
	        </NavbarReact>
        </div>

  );
}

export default NavBar;