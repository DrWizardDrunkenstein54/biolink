import React from "react";
import NavBar from './NavBar';
import Home from './Home';
import Features from './Features';
import ProblemStatement from './ProblemStatement';
import ProposedSolutions from './ProposedSolutions';
import YourContribution from './YourContribution';
import Event from "./Event";
import Schedule from "./Schedule";
import OurTeam from './OurTeam';
import Footer from './Footer';

function BioLink() {
    return (
        <div className="BioLink">
            <NavBar />
            <Home />
            <Features />
            <ProblemStatement />
            <ProposedSolutions />
            <YourContribution />
            <Event />
            <Schedule />
            <OurTeam />
            <Footer />
        </div>
    );
}

export default BioLink;