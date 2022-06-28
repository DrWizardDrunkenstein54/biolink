import React from "react";
import NavBar from './NavBar';
import Home from './Home';
import ProblemStatement from './ProblemStatement';

function BioLink() {
    return (
        <div className="BioLink">
            <NavBar />
            <Home />
            <ProblemStatement />
        </div>
    );
}

export default BioLink;