import React from 'react';
import Card from 'react-bootstrap/Card';

function ProblemStatistics() {
    return (
        <div id="problem-statistics" style={{display: "flex", width: "100%"}} className="colored-section">
            <Card style={{ width: '47%', maxHeight: "650px", left: "50px", backgroundColor: '#d85b53', color: "white" }} className="border-0">
                <Card.Img variant="top" src="chart1.png" style={{ maxHeight: "50em", maxWidth: "35em", position: "relative", top: "1.25em", left: "60px"  }}/>
                <br />
                <Card.Body className="d-flex flex-column align-items-center">
                    <Card.Title style={{ fontFamily: 'Dosis, sans-serif', fontSize: "4.2em" }}>3,380,451,701+</Card.Title>
                    <Card.Text style={{ fontFamily: "Open Sans, sans-serif", textAlign: "center", fontSize: "1.3rem" }}>
                        The number of COVID-19 
                        face masks used per
                        population per day worldwide
                        is increasing at over 3 billion
                        masks per day for all populations
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ width: '45%', maxHeight: "650px", right: "-100px", backgroundColor: '#d85b53', color: "white" }} className="border-0">
                <Card.Img variant="top" src="chart2.png" style={{ maxHeight: "50em", maxWidth: "35em", position: "relative", top: "20px", right: "-47px"  }}/>
                <br />
                <Card.Body className="d-flex flex-column align-items-center">
                    <Card.Title style={{ fontFamily: 'Dosis, sans-serif', fontSize: "4.2em" }}>200+</Card.Title>
                    <Card.Text style={{ fontFamily: "Open Sans, sans-serif", textAlign: "center", fontSize: "1.3rem", position: "relative", top: "-10px"}}>
                        Hundreds of millions of
                        units of PPE are 
                        being demanded monthly by 
                        healhcare workers, exacerbating
                        the plastic pollution issue.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default ProblemStatistics;