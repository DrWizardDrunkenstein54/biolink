import React from "react";
import Card from 'react-bootstrap/Card';

function OurTeamP1() {
    return (
        <div style={{paddingTop: "150px"}}>
            <Card style={{ maxWidth: "550px", maxHeight: "650px", left: "140px", backgroundColor: '#d85b53', color: "white" }} className="border-0 w-100 p-3 my-5">
                <Card.Img variant="top" src="chart1.png" style={{ maxHeight: "30em", maxWidth: "35em", position: "relative", top: "1.25em"  }}/>
                <br />
                <Card.Body className="d-flex flex-column align-items-center">
                    <Card.Title style={{ fontFamily: 'Dosis, sans-serif', fontSize: "4.2em" }}>Eyiram Nutor</Card.Title>
                    <Card.Text style={{ fontFamily: "Open Sans, sans-serif", textAlign: "center", fontSize: "1.3rem" }}>
                        The number of COVID-19 
                        face masks used per
                        population per day worldwide
                        is increasing at over 3 billion
                        masks per day for all populations
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ maxWidth: "550px", maxHeight: "650px", left: "140px", backgroundColor: '#d85b53', color: "white" }} className="border-0 w-100 p-3 my-5">
                <Card.Img variant="top" src="chart1.png" style={{ maxHeight: "30em", maxWidth: "35em", position: "relative", top: "1.25em"  }}/>
                <br />
                <Card.Body className="d-flex flex-column align-items-center">
                    <Card.Title style={{ fontFamily: 'Dosis, sans-serif', fontSize: "4.2em" }}>On Chi He</Card.Title>
                    <Card.Text style={{ fontFamily: "Open Sans, sans-serif", textAlign: "center", fontSize: "1.3rem" }}>
                        The number of COVID-19 
                        face masks used per
                        population per day worldwide
                        is increasing at over 3 billion
                        masks per day for all populations
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default OurTeamP1;