import React from "react";
import NavBar from './NavBar';
import Home from './Home';
import Features from './Features';
import ProblemStatement from './ProblemStatement';

function BioLink() {
    return (
        <div className="BioLink">
            <NavBar />
            <Home />
            <Features />
            <ProblemStatement />
        </div>
    );
}

export default BioLink;