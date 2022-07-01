import React from "react";
import Card from 'react-bootstrap/Card';

function OurTeamP2() {
    return (
        <div style={{paddingTop: "150px"}}>
            <Card style={{ maxWidth: "550px", maxHeight: "800px", left: "270px", backgroundColor: 'black', color: "white" }} className="border-0 w-100 p-3 my-5">
                <Card.Img className="portrait-picture" variant="top" src="Brian.png" style={{ maxHeight: "30em", maxWidth: "35em", position: "relative", top: "1.25em"  }}/>
                <br />
                <Card.Body className="d-flex flex-column align-items-center">
                    <Card.Title style={{ fontFamily: 'Dosis, sans-serif', fontSize: "4.2em" }}>Brian Da Cruz</Card.Title>
                    <Card.Text style={{ fontFamily: "Open Sans, sans-serif", textAlign: "center", fontSize: "1.3rem" }}>
                        Hi! My name is Brian Da Cruz and 
                        I am a rising senior at Mission 
                        San Jose High School in California. 
                        I am attending YYGS SGC Session 1 
                        PM Schedule and my favorite thing 
                        about YYGS is attending and 
                        discussing the informative lectures 
                        given by YYGS Staff.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ maxWidth: "550px", maxHeight: "800px", left: "270px", backgroundColor: 'black', color: "white" }} className="border-0 w-100 p-3 my-5">
                <Card.Img className="portrait-picture" variant="top" src="connor.png" style={{ maxHeight: "30em", maxWidth: "35em", position: "relative", top: "1.25em"  }}/>
                <br />
                <Card.Body className="d-flex flex-column align-items-center">
                    <Card.Title style={{ fontFamily: 'Dosis, sans-serif', fontSize: "4.2em" }}>Conner Feng</Card.Title>
                    <Card.Text style={{ fontFamily: "Open Sans, sans-serif", textAlign: "center", fontSize: "1.3rem" }}>
                        Hi! My name is Conner, and I am 
                        a rising junior from San Diego, 
                        California participating in the 
                        Politics, Law, and Economics 
                        track for Yale Young Global 
                        Scholars this summer. My 
                        favorite part of YYGS so far 
                        has been Professor Paul 
                        Freedman’s lecture Food and 
                        the Past and Future of 
                        Globalization.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default OurTeamP2;