import React from "react";
import Card from 'react-bootstrap/Card';
import OurTeamP1 from "./OurTeamP1";
import OurTeamP2 from "./OurTeamP2";

function OurTeam() {
    return (
        <div id="" style={{display: "flex", width: "100%"}} className="our-team-section colored-section">
            <h1 className="our-team-title">Our Team</h1>
            <OurTeamP1 />
            <OurTeamP2 />
        </div>
    );
}

export default OurTeam;