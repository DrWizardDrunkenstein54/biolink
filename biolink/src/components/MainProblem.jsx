import React from 'react';
import Card from 'react-bootstrap/Card';

function MainProblem() {
    return (
        <div id="main-problem" className="main-problem-section d-flex justify-content-around flex-wrap w-100 p-3 my-5">
            <Card style={{ width: '50rem', maxHeight: '320px', paddingTop: "50px", backgroundColor: "black", color: "white" }} className="border-0">
                <Card.Body className="d-flex flex-column align-items-center">
                    <Card.Title style={{ fontFamily: "Gloria Hallelujah, cursive", fontSize: "4em" }}>The Problem At Hand</Card.Title>
                    <Card.Text style={{ fontFamily: "Open Sans, sans-serif", textAlign: "center", fontSize: "1.2rem", paddingTop: "20px" }}>
                        As a result of the COVID-19 pandemic, global usage of
                        face masks and other medical equipment has reached unprecedented 
                        levels, leaving behind large amounts of plastic waste that pollute
                        our environment The plastic waste generated from the improper
                        disposal of face masks cannot be naturally degraded, and can
                        remain in the environment for hundreds of years, 
                        significantly impacting all forms of life on Earth.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default MainProblem;